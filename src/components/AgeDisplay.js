import React from 'react';
import './style.css';

function AgeDisplay({ age }) {
  return (
    <div>
      {age !== null ? (
        <p className="age-display">You are {age} years old.</p>
      ) : (
        <p className="age-display">Please calculate your age.</p>
      )}
    </div>
  );
}

export default AgeDisplay;
