import React, { createContext, useState, useContext } from 'react';

const CashlyContext = createContext();

export const useCashly = () => useContext(CashlyContext);

export const CashlyProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Alex',
    currentLevel: 3,
    levelName: 'Controlled',
    points: 120, // points/dollars saved
    streak: 4
  });

  const [balance, setBalance] = useState({
    safeToSpend: 42,
    riskLevel: 'medium', // low, medium, high
  });

  // Example mocked data
  const [insights, setInsights] = useState([
    { id: 1, title: 'You tend to overspend on Mondays', type: 'pattern' },
    { id: 2, title: 'Delivery spending usually spikes after 9 PM', type: 'time' },
    { id: 3, title: 'You spend 28% more on weekends.', type: 'pattern' }
  ]);

  const [activeAlert, setActiveAlert] = useState(null);

  // Function to simulate an alert
  const triggerAlert = (alertData) => {
    setActiveAlert(alertData);
  };

  const closeAlert = () => {
    setActiveAlert(null);
  };

  return (
    <CashlyContext.Provider
      value={{
        user,
        setUser,
        balance,
        setBalance,
        insights,
        activeAlert,
        triggerAlert,
        closeAlert
      }}
    >
      {children}
    </CashlyContext.Provider>
  );
};
