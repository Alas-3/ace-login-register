import React, { useState } from 'react';
import './SalaryCalc.css';

const SalaryCalculator = () => {
  const [salary, setSalary] = useState('');
  const [daysPerMonth, setDaysPerMonth] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [error, setError] = useState('');
  const [hourlyEarnings, setHourlyEarnings] = useState('');
  const [dailyEarnings, setDailyEarnings] = useState('');
  const [yearlyEarnings, setYearlyEarnings] = useState('');

  const handleCurrencyToggle = () => {
    if (currency === 'USD') {
      setCurrency('PHP');
    } else {
      setCurrency('USD');
    }
  };

  const calculateSalary = () => {
    if (!salary || !daysPerMonth || !hoursPerDay) {
      setError('Please input all fields.');
      return;
    }
    setError('');

    const monthlySalary = parseFloat(salary);
    const hourlyRate = monthlySalary / (parseInt(daysPerMonth) * parseInt(hoursPerDay));
    const dailySalary = monthlySalary / parseInt(daysPerMonth);
    const yearlySalary = monthlySalary * 12;

    setHourlyEarnings(hourlyRate.toFixed(2));
    setDailyEarnings(dailySalary.toFixed(2));
    setYearlyEarnings(yearlySalary.toFixed(2));
  };

  return (
    <div className='parent-container'>
    <div className="salary-calculator-container">
      <h2>Salary Calculator</h2>
      <div>
        <label htmlFor="salary">Monthly Salary:</label>
        <input className="salary-input" type="number" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
      </div>
      <div>
        <label htmlFor="daysPerMonth">Days Worked per Month:</label>
        <input className="days-input" type="number" id="daysPerMonth" value={daysPerMonth} onChange={(e) => setDaysPerMonth(e.target.value)} />
      </div>
      <div>
        <label htmlFor="hoursPerDay">Hours Worked per Day:</label>
        <input className="hours-input" type="number" id="hoursPerDay" value={hoursPerDay} onChange={(e) => setHoursPerDay(e.target.value)} />
      </div>
      <div>
        <label htmlFor="currencyToggle">Currency:</label>
        <button className="currency-toggle" id="currencyToggle" onClick={handleCurrencyToggle}>{currency}</button>
      </div>
      <button className="calculate-button" onClick={calculateSalary}>Calculate</button>
      {error && <p className="error-message">{error}</p>}
      {hourlyEarnings && <p>Hourly Earnings: {currency === 'USD' ? '$' : '₱'}{hourlyEarnings}</p>}
      {dailyEarnings && <p>Daily Earnings: {currency === 'USD' ? '$' : '₱'}{dailyEarnings}</p>}
      {yearlyEarnings && <p>Yearly Earnings: {currency === 'USD' ? '$' : '₱'}{yearlyEarnings}</p>}
    </div>
    </div>
  );
};

export default SalaryCalculator;