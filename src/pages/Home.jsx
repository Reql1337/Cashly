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
    <div className="flex-col h-full relative stagger-1 px-2" style={{ minHeight: '100%', zIndex: 1 }}>
      <div className="mesh-bg"></div>
      
      {/* V4 Unified Behavior Module */}
      <div className="flex-col items-center justify-center flex-1 w-full stagger-2 mt-4 space-y-0">
        
        {/* State Indicators */}
        <div className="flex-col items-center gap-3 mb-2">
           <div className="badge badge-medium shadow-sm glass-panel text-warning px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 214, 0, 0.2)' }}>
               Medium Risk
           </div>
           <h2 className="text-secondary font-bold text-xs uppercase tracking-[0.2em] opacity-70">Safe To Spend</h2>
        </div>

        {/* Core Value */}
        <div 
          className="font-extrabold mb-1 drop-shadow-sm transition-all"
          style={{ fontSize: 'clamp(5rem, 20vw, 7rem)', letterSpacing: '-0.07em', lineHeight: 0.9, color: 'var(--fg-default)' }}
        >
          ${balance.safeToSpend}
        </div>
        
        {/* Temporal Subtext */}
        <p className="text-[0.75rem] text-secondary font-semibold uppercase tracking-wider opacity-60 mb-8 flex items-center gap-1.5">
           <span className="w-1.5 h-1.5 rounded-full bg-success opacity-80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span> 
           Available until midnight
        </p>
        
        {/* Behavioral Intervention CTA */}
        <button 
          className="btn btn-success shadow-lg active:scale-95 transition-transform font-extrabold tracking-wide" 
          onClick={handleStayOnTrack}
          style={{ width: 'clamp(260px, 85%, 320px)', padding: 'var(--size-4) var(--size-6)', borderRadius: 'var(--radius-xl)', color: '#020203' }}
        >
          Enable Location Guard
        </button>
      </div>

      {/* Algorithmic Context Brain */}
      <div className="card-editorial flex items-start gap-4 mt-auto mb-4 stagger-3 glass-panel border-[0.5px] border-white/5" style={{ padding: '20px' }}>
         <div className="p-2.5 rounded-xl shrink-0 shadow-sm" style={{ backgroundColor: 'rgba(255, 214, 0, 0.1)', color: 'var(--warning-color)' }}>
            <MapPin size={22} strokeWidth={2.5} />
         </div>
         <div className="flex-col justify-center gap-1">
            <span className="block text-[0.65rem] font-bold opacity-70 uppercase tracking-[0.15em] text-secondary">Algorithmic Deduction</span>
            <p className="font-semibold text-[0.9rem] leading-snug text-primary">
               Base limit dynamically reduced by <span className="font-bold text-warning">$18</span> to protect against your habitual mid-week delivery spikes.
            </p>
         </div>
      </div>
    </div>
  );
};

export default Home;
