import React, { useState } from 'react';
import { ShoppingBag, Coffee, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const Alerts = () => {
  const [showFriction, setShowFriction] = useState(false);

  const pastAlerts = [
    { id: 1, type: 'Intercepted', store: 'Target', amount: '$120.00', time: 'Yesterday, 8:40 PM', icon: <ShoppingBag size={20} />, success: true },
    { id: 2, type: 'Warned', store: 'UberEats', amount: '$45.00', time: 'Monday, 10:15 PM', icon: <AlertCircle size={20} />, success: false },
    { id: 3, type: 'Intercepted', store: 'Starbucks', amount: '$8.50', time: 'Sunday, 2:00 PM', icon: <Coffee size={20} />, success: true },
  ];

  return (
    <div className="flex-col relative" style={{ minHeight: '100%', zIndex: 1, paddingBottom: 60 }}>
      {/* Immersive mesh wrapper */}
      <div className="mesh-bg opacity-40"></div>
      
      <header className="mb-4 flex justify-between items-center stagger-1 mt-6 px-1">
        <div className="flex flex-col gap-1">
          <h1 className="screen-title text-2xl mb-0">Interventions</h1>
          <p className="screen-subtitle mb-0 text-sm font-semibold opacity-60">Behavioral shields active.</p>
        </div>
        <button 
          className="btn btn-outline shadow-sm active:scale-95 transition-all" 
          style={{ padding: '8px 14px', fontSize: '0.75rem', width: 'auto', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '12px' }}
          onClick={() => setShowFriction(true)}
        >
          Demo Friction
        </button>
      </header>

      <div className="flex flex-col gap-3 mt-4 stagger-3">
        {pastAlerts.map(alert => (
          <button 
            key={alert.id} 
            className="card flex justify-between items-center py-3.5 px-4 mb-0 active:scale-[0.97] transition-all shadow-sm w-full text-left"
            style={{ borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div className="flex gap-4 items-center">
              <div 
                className="p-3 rounded-[14px] flex-shrink-0 shadow-sm" 
                style={{ backgroundColor: alert.success ? 'var(--accent-positive-light)' : 'var(--accent-warning-light)', color: alert.success ? 'var(--accent-positive)' : 'var(--accent-warning)' }}
              >
                {React.cloneElement(alert.icon, { size: 18, strokeWidth: 2.5 })}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-black text-[1rem] tracking-tight">{alert.store}</span>
                <span className="text-secondary text-[0.65rem] font-black flex gap-1.5 items-center uppercase tracking-widest opacity-60">
                   {alert.time}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span className="font-black text-[1.1rem] tracking-tighter">{alert.amount}</span>
              <span className="text-[0.6rem] font-black uppercase tracking-widest opacity-80" style={{ color: alert.success ? 'var(--accent-positive)' : 'var(--accent-warning)' }}>
                {alert.type}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Pre-purchase Friction Modal Demo - Refined */}
      {showFriction && (
        <div className="modal-overlay" style={{ zIndex: 1000, padding: '24px' }}>
          <div className="modal-content text-center overflow-hidden" style={{ borderRadius: '32px', padding: '32px 24px' }}>
             <div className="flex justify-center mb-6">
                <div className="bg-warning-light p-4 rounded-[24px] text-warning flex items-center justify-center shadow-sm">
                  <ShoppingBag size={32} strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="text-xl font-black mb-2 tracking-tight">Pause before you buy</h2>
              <p className="text-secondary mb-6 text-sm font-medium leading-relaxed px-2">
                This category spend is high this week. buying this may push you over your safe zone.
              </p>
              
              <div className="bg-[#f9fafb] rounded-[20px] p-4 mb-6 text-left border border-[#f3f4f6]">
                <div className="flex justify-between text-[0.7rem] uppercase font-black tracking-widest mb-2 opacity-50">
                  <span>Current Category</span>
                  <span>Suggested Limit</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-black text-danger">$185.00</span>
                  <span className="text-lg font-black opacity-30">$150.00</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <button className="btn btn-primary shadow-xl" style={{ backgroundColor: 'var(--accent-positive)', height: '54px' }} onClick={() => setShowFriction(false)}>
                  Wait 24 Hours
                </button>
                <div className="flex gap-2 w-full">
                  <button className="btn btn-outline w-full text-xs font-black uppercase tracking-widest" style={{ height: '48px', backgroundColor: '#f3f4f6', color: '#6b7280' }} onClick={() => setShowFriction(false)}>
                    Ignore
                  </button>
                  <button className="btn btn-outline w-full text-xs font-black uppercase tracking-widest" style={{ height: '48px', border: '1px solid #e5e7eb' }} onClick={() => setShowFriction(false)}>
                    Set Limit
                  </button>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alerts;
