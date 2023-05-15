import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProgressChart = ({ theme }) => {
  const progressData = [
    { date: '2022-01-01', bodyFat: 28 },
    { date: '2022-02-01', bodyFat: 23 },
    { date: '2022-03-01', bodyFat: 19 },
    { date: '2022-04-01', bodyFat: 22 },
    { date: '2022-05-01', bodyFat: 17 },
    { date: '2022-06-01', bodyFat: 15 },
    // Add more data entries
  ];

  // Fetch progress data from backend API
  // useEffect(() => {
  //   const fetchProgressData = async () => {
  //     try {
  //       // Make an API call to fetch progress data
  //       // Replace <API_ENDPOINT> with the actual endpoint URL
  //       const response = await fetch('<API_ENDPOINT>');
  //       const data = await response.json();
  //       setProgressData(data);
  //     } catch (error) {
  //       console.error('Error fetching progress data:', error);
  //     }
  //   };

  //   fetchProgressData();
  // }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center' }}>Body Fat Percent Progress Chart</h2>
      <LineChart width={600} height={400} data={progressData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="bodyFat" stroke="#8884d8" name="Body Fat %" />
        {/* Add additional Line components for other metrics */}
      </LineChart>
    </div>
  );
};


export default ProgressChart;
