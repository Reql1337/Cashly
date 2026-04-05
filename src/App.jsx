import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MobileLayout from './components/MobileLayout';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Alerts from './pages/Alerts';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route element={<MobileLayout />}>
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
