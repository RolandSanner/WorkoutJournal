/* WorkoutLog.js */
import React from 'react';
import './WorkoutLog.css';

const WorkoutLog = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="workout-log-container">
      <h2 className="workout-log-title">Workout Log</h2>
      <div className="workout-exercise">
        <span className="exercise-name">Exercise 1 Chest and Back:</span>
        <span className="exercise-info">Sets: 3, Reps: 12, Weight: 50kg</span>
      </div>
      <div className="workout-exercise">
        <span className="exercise-name">Exercise 2 Biceps and Triceps:</span>
        <span className="exercise-info">Sets: 4, Reps: 10, Weight: 60kg</span>
      </div>
      {/* Add more workout exercise entries */}
    </div>
  );
};

export default WorkoutLog;
