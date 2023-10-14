import React from 'react';
import './style.css';

function DateInput({ value, onChange }) {
  return (
    <div>
      <div className="input-container">
        <input
          type="date"
          placeholder="Date of Birth"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="calendar-icon"></span>
      </div>
    </div>
  );
}

export default DateInput;
