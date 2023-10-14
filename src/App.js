import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import DateInput from './DateInput';
import CalculateButton from './CalculateButton';
import AgeDisplay from './AgeDisplay';

function App() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dateOfBirth) { // Check if dateOfBirth is not empty
      const birthDate = new Date(dateOfBirth);
      const currentDate = new Date();
      const ageDifference = currentDate - birthDate;
      const calculatedAge = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365.25));
      setAge(calculatedAge);
    } else {
      alert("Please enter your date of birth before calculating your age.");
    }
  };

  return (
    <div className="App">
      <div className="center-content">
        <Header />
        <DateInput value={dateOfBirth} onChange={(value) => setDateOfBirth(value)} />
        <CalculateButton onClick={calculateAge} />
        <AgeDisplay age={age} />
      </div>
    </div>
  );
}

export default App;
