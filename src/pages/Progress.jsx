import React from 'react';
import { useCashly } from '../context/CashlyContext';
import { Sparkles, ArrowRight } from 'lucide-react';

const Progress = () => {
  const { user } = useCashly();

  return (
    <div className="flex-col gap-6 mt-6 pb-12 px-2 relative" style={{ zIndex: 1 }}>
      <header className="flex-col gap-0.5 mb-2 stagger-1">
        <h1 className="text-xl font-bold tracking-tight text-primary mb-0">Discipline</h1>
        <p className="text-[0.85rem] text-secondary font-normal tracking-wide">Mastering your behavior.</p>
      </header>

      {/* V4 Story Capsule - Thinner, more elegant */}
      <div className="card-editorial flex-col p-6 overflow-hidden relative stagger-2 glass-panel border-[0.5px] border-white/5" 
        style={{ color: 'var(--text-primary)' }}
      >
        <Sparkles size={24} strokeWidth={2.5} className="mb-3 text-warning drop-shadow-md" />
        <h2 className="text-[2rem] font-bold mb-0 tracking-tight text-primary">Level {user.currentLevel}</h2>
        <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary opacity-80 mb-6 mt-1">
          {user.levelName}
        </div>
        
        {/* Apple-style thin progress bar */}
        <div className="w-full rounded-full h-[4px] mb-3 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          <div className="bg-success h-full rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" style={{ width: '65%', transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}></div>
        </div>
        <p className="text-[0.75rem] font-medium text-secondary">Almost at 'Elite Level'. Stay consistent.</p>
      </div>

      {/* V4 Sleek Inset Data Points */}
      <div className="stagger-3">
        <div className="inset-group">
          
          <div className="inset-row w-full justify-between py-3">
            <span className="text-[0.85rem] font-bold text-secondary">Total Prevented Leaks</span>
            <span className="text-[1.1rem] font-bold tracking-tighter text-success">${user.points}</span>
          </div>

          <div className="inset-row w-full justify-between py-3">
            <span className="text-[0.85rem] font-bold text-secondary">Current Discipline Streak</span>
            <div className="flex items-center gap-2">
              <span className="text-[1.1rem] font-bold tracking-tighter text-warning">{user.streak} Days</span>
            </div>
          </div>

        </div>
      </div>

      {/* Algorithmic Win State */}
      <h3 className="font-bold text-[0.7rem] uppercase tracking-[0.15em] text-secondary ml-1 mt-2 opacity-70 stagger-4">Behavioral Win</h3>
      
      <div className="card-editorial p-5 border-l-[3px] border-l-success stagger-5 glass-panel" style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}>
         <p className="text-[0.9rem] font-medium leading-relaxed text-primary">
           On Friday, you successfully paused instead of making a high-risk <span className="font-bold text-success">$65</span> purchase. 
         </p>
         
         <button 
            className="flex items-center justify-between w-full font-bold text-success mt-4 pt-4 border-t border-success/10 text-[0.75rem] uppercase tracking-wider hover:opacity-80 transition-opacity"
            onClick={() => alert("Full weekly logic analysis...")}
          >
            Review Analysis <ArrowRight size={14} strokeWidth={3} />
         </button>
      </div>
    </div>
  );
};

export default Progress;
