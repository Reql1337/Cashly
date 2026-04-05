import React, { useState } from 'react';
import { useCashly } from '../context/CashlyContext';
import { Settings, Bell, Shield, Wallet, Frown, Smile, Zap, RefreshCw, ChevronRight } from 'lucide-react';

const Profile = () => {
  const { user } = useCashly();
  const [mood, setMood] = useState(null);
  const [strictMode, setStrictMode] = useState(true);
  const [locationTriggers, setLocationTriggers] = useState(true);

  const moods = [
    { label: 'Stressed', icon: <Frown size={28} strokeWidth={2} />, color: 'var(--danger-color)' },
    { label: 'Bored', icon: <RefreshCw size={28} strokeWidth={2} />, color: 'var(--warning-color)' },
    { label: 'Happy', icon: <Smile size={28} strokeWidth={2} />, color: 'var(--success-color)' },
    { label: 'Tired', icon: <Zap size={28} strokeWidth={2} className="opacity-50" />, color: 'var(--text-secondary)' },
  ];

  return (
    <div className="flex-col pb-12" style={{ zIndex: 1, position: 'relative' }}>
      
      {/* Header - Refined Proportions */}
      <div className="flex items-center gap-4 mt-6 mb-8 stagger-1 px-2">
         <div 
           className="w-14 h-14 shrink-0 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-sm"
           style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)' }}
         >
            {user.name[0]}
         </div>
         <div className="flex-col">
            <h1 className="text-xl font-extrabold tracking-tight" style={{ lineHeight: 1.1 }}>{user.name}</h1>
            <p className="text-secondary font-semibold text-xs mt-1 uppercase tracking-wider opacity-70">Rank: {user.levelName}</p>
         </div>
      </div>

      {/* Mood Tracker */}
      <div className="stagger-2 mb-6 px-1">
          <h3 className="font-bold text-[0.75rem] mb-2 uppercase tracking-[0.15em] text-[#6b7280] ml-3 opacity-80">Daily Log</h3>
          <div className="inset-group p-2 flex gap-3 overflow-x-auto scrollbar-hide">
            {moods.map(m => (
              <button 
                key={m.label}
                onClick={() => setMood(m.label)}
                className="flex-col shrink-0 items-center justify-center p-3 rounded-[14px]"
                style={{ 
                  minWidth: '85px',
                  backgroundColor: mood === m.label ? m.color : 'rgba(0,0,0,0.03)',
                  color: mood === m.label ? 'white' : 'var(--text-primary)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: mood === m.label ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: mood === m.label ? '0 8px 16px -4px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {m.icon}
                <span className="text-[0.65rem] font-bold mt-2 uppercase tracking-wider">{m.label}</span>
              </button>
            ))}
          </div>
          
          {mood && (
            <div className="mx-2 mt-3 px-4 py-3 bg-warning-light border-l-[3px] border-warning-color rounded-r-lg animate-slide-up shadow-sm">
              <p className="text-[0.9rem] font-bold text-warning-color leading-tight">
                {mood === 'Stressed' && "Stress alert: You spend 40% more in this state. Pause today."}
                {mood === 'Bored' && "Focus: Boredom is your #1 trigger for delivery leaks. Stay strong."}
                {mood === 'Happy' && `Great energy! You're on a ${user.streak}-day controlled streak.`}
                {mood === 'Tired' && "Low energy detected. Guard against convenience spending."}
              </p>
            </div>
          )}
      </div>

      {/* Connections */}
      <div className="stagger-3 mb-6 px-1">
        <h3 className="font-bold text-[0.75rem] mb-2 uppercase tracking-[0.15em] text-[#6b7280] ml-3 opacity-80">Financial Sync</h3>
        <div className="inset-group">
          <button className="inset-row w-full justify-between py-3 hover:bg-[var(--border-muted)] transition-colors" onClick={() => alert("Bank Integration opening...")}>
            <div className="flex items-center gap-4 flex-1">
              <div className="p-2.5 shrink-0 bg-gray-100 rounded-lg text-primary" style={{ backgroundColor: '#f3f4f6' }}><Wallet size={18} strokeWidth={2.5} /></div>
              <div className="flex-col items-start text-left">
                <span className="font-bold text-[1rem]">Linked Accounts</span>
                <span className="text-xs font-semibold text-secondary lowercase">Chase •••• 1234</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-tertiary shrink-0 ml-2" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="stagger-4 px-1">
        <h3 className="font-bold text-[0.75rem] mb-2 uppercase tracking-[0.15em] text-[#6b7280] ml-3 opacity-80">Interventions</h3>
        <div className="inset-group">
          
          <div className="inset-row w-full justify-between py-3">
            <div className="flex items-center gap-4 flex-1">
              <div className="p-2.5 shrink-0 bg-danger-light rounded-lg text-danger"><Bell size={18} strokeWidth={2.5} /></div>
              <div className="flex-col items-start text-left">
                <span className="font-bold text-[1rem]">Strict Mode</span>
                <span className="text-xs font-semibold text-secondary">Auto-block high-risk purchases</span>
              </div>
            </div>
            {/* V4 Modern Toggle 1 */}
            <div 
              role="switch" aria-checked={strictMode} tabIndex={0}
              onClick={() => setStrictMode(!strictMode)}
              className="shrink-0 rounded-full flex items-center p-0.5 border"
              style={{ 
                width: '44px', height: '24px', cursor: 'pointer', transition: 'all 200ms ease-in-out',
                backgroundColor: strictMode ? 'var(--accent-positive)' : 'var(--border-strong)',
                borderColor: 'transparent',
                justifyContent: strictMode ? 'flex-end' : 'flex-start'
              }}
            >
              <div className="rounded-full bg-white shadow-sm" style={{ width: '20px', height: '20px' }}></div>
            </div>
          </div>

          <div className="inset-row w-full justify-between py-3 hover:bg-transparent">
            <div className="flex items-center gap-4 flex-1">
              <div className="p-2.5 shrink-0 bg-[#eff6ff] rounded-lg text-[#3b82f6]"><Shield size={18} strokeWidth={2.5} /></div>
              <div className="flex-col items-start text-left">
                <span className="font-bold text-[1rem]">Geo-Fencing</span>
                <span className="text-xs font-semibold text-secondary">Real-time alerts at store entry</span>
              </div>
            </div>
             {/* V4 Modern Toggle 2 */}
             <div 
              role="switch" aria-checked={locationTriggers} tabIndex={0}
              onClick={() => setLocationTriggers(!locationTriggers)}
              className="shrink-0 rounded-full flex items-center p-0.5 border"
              style={{ 
                width: '44px', height: '24px', cursor: 'pointer', transition: 'all 200ms ease-in-out',
                backgroundColor: locationTriggers ? 'var(--accent-positive)' : 'var(--border-strong)',
                borderColor: 'transparent',
                justifyContent: locationTriggers ? 'flex-end' : 'flex-start'
              }}
            >
              <div className="rounded-full bg-white shadow-sm" style={{ width: '20px', height: '20px' }}></div>
            </div>
          </div>
          
          <button className="inset-row w-full justify-between py-3 hover:bg-[var(--border-muted)] transition-colors" onClick={() => alert("Settings opening...")}>
            <div className="flex items-center gap-4 flex-1">
              <div className="p-2.5 shrink-0 bg-gray-100 rounded-lg text-text-primary" style={{ backgroundColor: '#f3f4f6' }}><Settings size={18} strokeWidth={2.5} /></div>
              <span className="font-bold text-[1rem]">Safety Preferences</span>
            </div>
            <ChevronRight size={16} className="text-tertiary shrink-0 ml-2" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
