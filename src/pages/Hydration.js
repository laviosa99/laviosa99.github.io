import '../App.css';
import React, { useState } from "react";

function HydrationApp() {
  const [weight, setWeight] = useState("");
  const [dailyGoal, setDailyGoal] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [selectedBeverage, setSelectedBeverage] = useState("Water");
  const [selectedAmount, setSelectedAmount] = useState(0);

  const beverages = [
    { name: "Water", multiplier: 1 },
    { name: "Coffee", multiplier: 0.5 },
    { name: "Tea", multiplier: 0.5 },
    { name: "Juice", multiplier: 1 },
    { name: "Soda", multiplier: 1 },
    { name: "Milk", multiplier: 1 },
  ];
  
  const amounts = [4, 8, 12, 16, 20, 24, 28, 32, 46, 40]; // in ounces

  const calculateDailyGoal = (weight) => {
    return Math.round(weight * 0.5); // in ounces
  }

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    const goal = calculateDailyGoal(newWeight);
    setDailyGoal(goal);
    setRemaining(goal);
  }

  const handleBeverageChange = (e) => {
    setSelectedBeverage(e.target.value);
  }

  const handleAmountChange = (e) => {
    setSelectedAmount(parseInt(e.target.value));
  }

  const handleAddIntake = () => {
    if (selectedBeverage && selectedAmount) {
      const beverage = beverages.find(b => b.name === selectedBeverage);
      const intake = selectedAmount * beverage.multiplier;
      setRemaining(prev => Math.max(prev - intake, 0));
    }
  } 

  const percentComplete = dailyGoal ? ((dailyGoal - remaining) / dailyGoal) * 100 : 0;

  return (
    <div className="MainContent">
      <h1>Hydration Tracker</h1>
      <p>
        Staying hydrated is essential for maintaining good health. This simple hydration tracker helps you monitor your daily water intake and encourages you to drink enough water throughout the day. 
        
        Caffinated beverages like coffee and tea count towards your daily intake, but since they are diuretics, they only count as half their volume. For example, an 8 oz cup of coffee counts as 4 oz of water.
      </p>
    
      <div className="column" >
        <h2>Set your Daily Goal</h2>
        <label>
          Weight (lbs):{" "}
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            min="0"
          />

          Hydration Goal (oz):{" "}
          <input
            type="number"
            value={weight/2}
            onChange={handleWeightChange}
            min="0"
          />
        </label>
      </div>
      <div>
        <h2>Log Your Intake</h2>
        <label>
          Beverage:{" "}
          <select value={selectedBeverage} onChange={handleBeverageChange}>
            {beverages.map((bev) => (
              <option key={bev.name} value={bev.name}>
                {bev.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Amount (oz):{" "}
          <select value={selectedAmount} onChange={handleAmountChange}>
            <option value={0}>Select</option>
            {amounts.map((amt) => (
              <option key={amt} value={amt}>
                {amt}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handleAddIntake}>Hydrate</button>
        <h3>Daily Goal: {dailyGoal} oz</h3>
        <h3>Remaining: {remaining} oz</h3>  
      </div>
      
      <div className="progress-bar" style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '13px', margin: '20px 0' }}>
        <div
          className="progress-bar-fill"
          style={{
            height: '20px',
            width: `${percentComplete}%`,
            backgroundColor: percentComplete >= 100 ? '#4caf50' : '#2196f3',
            borderRadius: '13px',
            transition: 'width 0.5s ease-in-out'
          }}
        ></div>
      </div>

      
      


    </div>
 );
}

export default HydrationApp;    



        