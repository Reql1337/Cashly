import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCashly } from '../context/CashlyContext';
import { Settings, Shield, Wallet, Zap, ZapOff, Activity, ChevronRight, User } from 'lucide-react';

const Profile = () => {
  const { user } = useCashly();
  const navigate = useNavigate();
  const [energyState, setEnergyState] = useState(null);
  const [strictMode, setStrictMode] = useState(true);
  const [locationTriggers, setLocationTriggers] = useState(true);

  const energies = [
    { id: 'HIGH', label: 'Optimal', icon: <Zap size={22} strokeWidth={2.5} />, color: 'var(--success-color)' },
    { id: 'BASE', label: 'Baseline', icon: <Activity size={22} strokeWidth={2.5} />, color: 'var(--text-secondary)' },
    { id: 'LOW', label: 'Depleted', icon: <ZapOff size={22} strokeWidth={2.5} />, color: 'var(--danger-color)' }
  ];

  return (
    <div className="flex-col pb-12" style={{ zIndex: 1, position: 'relative' }}>
      
      {/* Header - Refined Proportions */}
      <div className="flex items-center gap-4 mt-6 mb-8 stagger-1 px-2">
         <div 
           className="w-14 h-14 shrink-0 rounded-full text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]"
           style={{ background: 'var(--surface-color)' }}
         >
            <User size={26} strokeWidth={2.5} />
         </div>
         <div className="flex-col">
            <h1 className="text-xl font-bold tracking-tight text-primary mb-0">{user.name}</h1>
            <p className="text-secondary font-medium text-[0.8rem] mt-0.5 tracking-wide opacity-80">Rank: <span className="text-primary font-bold">{user.levelName}</span></p>
         </div>
      </div>

      {/* Behavioral: Energy State Tracker */}
      <div className="stagger-2 mb-8 px-1">
          <h3 className="font-bold text-[0.7rem] mb-2 uppercase tracking-[0.15em] text-secondary ml-1 opacity-70">Energy State</h3>
          <div className="flex gap-2 w-full mb-3">
            {energies.map(e => (
               <button 
                key={e.id}
                onClick={() => setEnergyState(e.id)}
                className="flex flex-col flex-1 items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 transition-all"
                style={{ 
                  backgroundColor: energyState === e.id ? 'var(--surface-color)' : 'rgba(255,255,255,0.03)',
                  color: energyState === e.id ? e.color : 'var(--text-secondary)',
                  transform: energyState === e.id ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: energyState === e.id ? '0 4px 12px rgba(0,0,0,0.5)' : 'none',
                  border: energyState === e.id ? `1px solid ${e.color}33` : '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {e.icon}
                <span className="text-[0.65rem] font-bold mt-2 uppercase tracking-widest">{e.label}</span>
              </button>
            ))}
          </div>
          
          {energyState && (
            <div className="p-4 rounded-xl flex items-start gap-3 border-[0.5px] border-white/5 animate-slide-up"
              style={{ backgroundColor: energyState === 'LOW' ? 'rgba(255, 59, 48, 0.08)' : energyState === 'HIGH' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.05)' }}
            >
              <div 
                className="w-1.5 self-stretch rounded-full" 
                style={{ backgroundColor: energyState === 'LOW' ? 'var(--danger-color)' : energyState === 'HIGH' ? 'var(--success-color)' : 'var(--text-secondary)' }}
              ></div>
              <p className="text-[0.8rem] font-medium leading-relaxed my-0.5" style={{ color: energyState === 'LOW' ? '#FF4F45' : energyState === 'HIGH' ? 'var(--success-color)' : 'var(--text-secondary)' }}>
                {energyState === 'LOW' && "Depleted states increase impulse delivery likelihood by 68%. Strict parameters engaged."}
                {energyState === 'BASE' && "Baseline metrics recorded. Budget guardrails operating nominally."}
                {energyState === 'HIGH' && `Optimal state detected. Leverage this to solidify your ${user.streak}-day controlled streak.`}
              </p>
            </div>
          )}
      </div>

      {/* Security Interventions - Premium Fintech V4 */}
      <div className="stagger-3 px-1 mb-6">
        <h3 className="font-bold text-[0.7rem] mb-2 uppercase tracking-[0.15em] text-secondary ml-1 opacity-70">Security Protocols</h3>
        
        <div className="flex-col gap-3">
          {/* Strict Mode Toggle */}
          <div className="glass-panel p-4 flex justify-between items-center bg-surface-color">
            <div className="flex gap-3 items-center">
              <div className="p-2 bg-danger-light rounded-lg text-danger">
                 <Shield size={18} strokeWidth={2.5} />
              </div>
              <div className="flex-col min-w-0">
                <span className="font-bold text-[0.9rem] text-primary truncate">Strict Mode</span>
                <span className="text-[0.75rem] text-secondary font-normal truncate">Auto-block high risk merchants</span>
              </div>
            </div>
            
            <div 
              role="switch" aria-checked={strictMode} tabIndex={0}
              onClick={() => setStrictMode(!strictMode)}
              className="shrink-0 rounded-full flex items-center p-0.5"
              style={{ 
                width: '44px', height: '24px', cursor: 'pointer', transition: 'all 200ms ease-in-out',
                backgroundColor: strictMode ? 'var(--danger-color)' : 'var(--border-strong)',
                justifyContent: strictMode ? 'flex-end' : 'flex-start'
              }}
            >
              <div className="rounded-full bg-white shadow-sm" style={{ width: '20px', height: '20px' }}></div>
            </div>
          </div>

          {/* Geo-Fencing Toggle */}
          <div className="glass-panel p-4 flex justify-between items-center bg-surface-color">
            <div className="flex gap-3 items-center">
              <div className="p-2 bg-success-light rounded-lg text-success">
                 <Activity size={18} strokeWidth={2.5} />
              </div>
              <div className="flex-col min-w-0">
                <span className="font-bold text-[0.9rem] text-primary truncate">Location Guard</span>
                <span className="text-[0.75rem] text-secondary font-normal truncate">Intervene at known trigger stores</span>
              </div>
            </div>
            
            <div 
              role="switch" aria-checked={locationTriggers} tabIndex={0}
              onClick={() => setLocationTriggers(!locationTriggers)}
              className="shrink-0 rounded-full flex items-center p-0.5"
              style={{ 
                width: '44px', height: '24px', cursor: 'pointer', transition: 'all 200ms ease-in-out',
                backgroundColor: locationTriggers ? 'var(--success-color)' : 'var(--border-strong)',
                justifyContent: locationTriggers ? 'flex-end' : 'flex-start'
              }}
            >
              <div className="rounded-full bg-white shadow-sm" style={{ width: '20px', height: '20px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="stagger-4 px-1">
        <h3 className="font-bold text-[0.7rem] mb-2 uppercase tracking-[0.15em] text-secondary ml-1 opacity-70">Connections</h3>
        <div className="inset-group">
          <button className="inset-row w-full justify-between py-3 hover:bg-[var(--border-muted)] transition-colors" onClick={() => alert("Bank Integration opening...")}>
            <div className="flex items-center gap-3 flex-1">
              <div className="p-2 shrink-0 rounded-lg text-primary" style={{ backgroundColor: 'var(--bg-surface)' }}><Wallet size={18} strokeWidth={2.5} /></div>
              <div className="flex-col items-start text-left">
                <span className="font-bold text-[0.9rem] text-primary">Linked Accounts</span>
                <span className="text-[0.75rem] font-normal text-secondary lowercase">Chase •••• 1234</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-tertiary shrink-0" strokeWidth={3} />
          </button>
          
          <button className="inset-row w-full justify-between py-3 hover:bg-[var(--border-muted)] transition-colors" onClick={() => navigate('/settings')}>
            <div className="flex items-center gap-3 w-full">
              <div className="p-2 shrink-0 rounded-lg text-text-primary" style={{ backgroundColor: 'var(--bg-surface)' }}><Settings size={18} strokeWidth={2.5} /></div>
              <span className="font-bold text-[0.9rem] text-primary truncate">Preferences</span>
            </div>
            <ChevronRight size={16} className="text-tertiary shrink-0" strokeWidth={3} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
