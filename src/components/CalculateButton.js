import React from 'react';
import './style.css';

function CalculateButton({ onClick }) {
  return (
    <div>
      <button className="calculate-button" onClick={onClick}>Calculate Age</button>
    </div>
  );
}

export default CalculateButton;
