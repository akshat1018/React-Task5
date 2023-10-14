import React from 'react';
import './App.css';

function CalculateButton({ onClick }) {
  return (
    <div>
      <button className="calculate-button" onClick={onClick}>Calculate Age</button>
    </div>
  );
}

export default CalculateButton;
