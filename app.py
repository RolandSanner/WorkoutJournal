from flask import Flask
from api.auth import auth_bp
from api.workouts import workouts_bp
from api.progress import progress_bp

app = Flask(__name__)

# Register the blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(workouts_bp)
app.register_blueprint(progress_bp)

if __name__ == '__main__':
    app.run(debug=True)
