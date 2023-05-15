from flask import Blueprint, request, jsonify
from google.cloud import bigquery

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/register', methods=['POST'])
def register():
    # Extract request data
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    # Validate input and create user account
    # Implement your own logic here

    # Example: Save user data to BigQuery database
    client = bigquery.Client()
    table = client.dataset('your_dataset').table('users')

    row = {
        'username': username,
        'password': password,
        'email': email
    }

    client.insert_rows(table, [row])

    return jsonify({'message': 'User registered successfully'})

@auth_bp.route('/api/login', methods=['POST'])
def login():
    # Extract request data
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Validate input and authenticate user
    # Implement your own logic here

    # Example: Authenticate user using BigQuery database
    client = bigquery.Client()
    query = f"SELECT * FROM `your_dataset.users` WHERE username = '{username}' AND password = '{password}'"

    query_job = client.query(query)
    results = query_job.result()

    if results.total_rows > 0:
        # User authenticated successfully
        return jsonify({'message': 'User logged in successfully'})
    else:
        # Invalid credentials
        return jsonify({'message': 'Invalid username or password'})
