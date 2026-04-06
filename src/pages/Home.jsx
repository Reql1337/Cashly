import React from 'react';
import { useCashly } from '../context/CashlyContext';
import { Shield, MapPin } from 'lucide-react';

const Home = () => {
  const { balance, triggerAlert } = useCashly();

  const handleStayOnTrack = () => {
    triggerAlert({
      title: "Pause.",
      message: "You're entering a high-risk zone at Target. You usually spend $65 here. Your safe limit is $30 today.",
      type: "location"
    });
  };

  return (
    <div className="flex-col h-full relative stagger-1" style={{ minHeight: '100%', zIndex: 1 }}>
      <div className="mesh-bg"></div>
      
      {/* V3 Minimal Header - Tightened */}
      <header className="flex justify-center items-center py-4 mb-6 stagger-2">
         <div className="badge badge-medium shadow-sm glass-panel text-warning" style={{ borderRadius: 'var(--radius-full)' }}>
             Medium Risk
         </div>
      </header>

      {/* Massive Hero Focus V3 - Tightened Vertical Space */}
      <div className="flex-col items-center justify-center flex-1 mt-2 mb-8 stagger-3">
        <h2 className="text-secondary font-bold text-xs mb-2 uppercase tracking-[0.2em] opacity-70">Safe To Spend</h2>
        <div 
          className="font-extrabold mb-8 drop-shadow-sm transition-all"
          style={{ fontSize: 'clamp(4.5rem, 18vw, 6.5rem)', letterSpacing: '-0.07em', lineHeight: 0.9, color: 'var(--fg-default)' }}
        >
          ${balance.safeToSpend}
        </div>
        
        <button 
          className="btn btn-success shadow-lg active:scale-95 transition-transform" 
          onClick={handleStayOnTrack}
          style={{ width: 'clamp(260px, 80%, 320px)', padding: 'var(--size-4) var(--size-6)', borderRadius: 'var(--radius-xl)' }}
        >
          Stay on Track
        </button>
      </div>

      {/* Single Key Insight V3 - Improved Proportions */}
      <div className="card-editorial flex items-center gap-4 mt-auto mb-4 stagger-4 glass-panel" style={{ padding: '18px 22px' }}>
         <div className="p-2.5 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: 'rgba(255, 59, 48, 0.15)', color: '#FF3B30' }}>
            <MapPin size={24} strokeWidth={2.5} />
         </div>
         <div className="flex-col justify-center">
            <span className="block text-[0.65rem] font-bold opacity-60 uppercase mb-0.5 tracking-[0.15em] text-secondary">Context Alert</span>
            <p className="font-bold text-[1rem] leading-tight tracking-tight text-primary">
               Target and delivery are your biggest risks today.
            </p>
         </div>
      </div>
    </div>
  );
};

export default Home;
