import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Wifi, Battery, Signal } from 'lucide-react';
import BottomNav from './BottomNav';
import AlertModal from './AlertModal';

const MobileLayout = () => {
  const location = useLocation();
  const showBottomNav = !location.pathname.startsWith('/onboarding') && location.pathname !== '/';
  
  // Real-time clock for status bar
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="mobile-view">
        
        {/* iOS V3 Simulated Framing */}
        <div className="status-bar">
          <span style={{ width: '54px', textAlign: 'center' }}>{time}</span>
          <div className="dynamic-island"></div>
          <div className="flex gap-[4px] items-center">
            <Signal size={14} strokeWidth={3} />
            <Wifi size={14} strokeWidth={3} />
            <Battery size={20} className="ml-[2px]" />
          </div>
        </div>

        <main className="main-content" style={{ paddingBottom: showBottomNav ? '85px' : '0' }}>
          <Outlet />
        </main>
        
        {showBottomNav && <BottomNav />}
        <AlertModal />
      </div>
    </div>
  );
};

export default MobileLayout;
