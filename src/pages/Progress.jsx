import React from 'react';
import { useCashly } from '../context/CashlyContext';
import { Sparkles, ArrowRight } from 'lucide-react';

const Progress = () => {
  const { user } = useCashly();

  return (
    <div className="flex-col gap-4 mt-6 pb-12 relative" style={{ zIndex: 1 }}>
      <div className="flex flex-col gap-1 stagger-1 mb-2 px-1">
        <h1 className="screen-title text-2xl tracking-tight mb-0">Discipline</h1>
        <p className="screen-subtitle mb-0 text-sm font-semibold opacity-60">Mastering your behavior.</p>
      </div>

      {/* V2 Story Capsule - Compacted */}
      <div className="card-editorial flex-col p-6 overflow-hidden relative stagger-2" 
        style={{ 
          background: 'linear-gradient(145deg, #111827 0%, #1f2937 100%)', 
          color: 'white',
          boxShadow: '0 20px 40px -10px rgba(17, 24, 39, 0.4)',
          borderRadius: '24px'
        }}
      >
        <Sparkles size={28} strokeWidth={2} className="mb-4 text-warning" />
        <h2 className="text-[2.25rem] font-black mb-0 tracking-tighter" style={{ letterSpacing: '-0.06em' }}>Level {user.currentLevel}</h2>
        <div className="text-[0.6rem] font-black uppercase tracking-[0.25em] opacity-40 mb-6 mt-0.5">
          {user.levelName} Dashboard
        </div>
        
        {/* Progress bar to next level */}
        <div className="w-full bg-[rgba(255,255,255,0.08)] rounded-full h-[5px] mb-3 overflow-hidden">
          <div className="bg-success-light h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: '65%', transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}></div>
        </div>
        <p className="text-xs font-bold opacity-60">Almost at 'Elite Level'. Stay consistent.</p>
      </div>

      {/* Two clean data points */}
      <div className="flex gap-4 stagger-3">
        <div className="card-editorial flex-1 flex-col justify-center p-5 bg-surface-color shadow-sm" style={{ padding: '20px' }}>
          <span className="text-2xl font-black tracking-tighter text-success">${user.points}</span>
          <span className="text-[0.65rem] font-black opacity-50 mt-1 uppercase tracking-widest leading-none">Total Saved</span>
        </div>
        <div className="card-editorial flex-1 flex-col justify-center p-5 bg-surface-color shadow-sm" style={{ padding: '20px' }}>
          <span className="text-2xl font-black tracking-tighter text-warning">{user.streak} Days</span>
          <span className="text-[0.65rem] font-black opacity-50 mt-1 uppercase tracking-widest leading-none">Active Streak</span>
        </div>
      </div>

      {/* Narrative block - Optimized */}
      <h3 className="font-black text-xl mt-4 mb-0 tracking-tight stagger-4 px-1">Weekly Digest</h3>
      
      <div className="card-editorial p-5 border-l-[4px] border-l-primary-color stagger-5 shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
         <p className="text-[0.95rem] font-bold leading-snug" style={{ color: 'var(--text-primary)', opacity: 0.9 }}>
           "On Friday, you paused instead of spending $65 on delivery. That is behavioral change in action."
         </p>
         
         <button 
            className="flex items-center gap-2 font-black text-success mt-4 pt-4 border-t border-[rgba(0,0,0,0.05)] w-full text-xs uppercase tracking-widest hover:opacity-75 transition-opacity"
            onClick={() => alert("Full weekly logic analysis...")}
          >
            Weekly analysis <ArrowRight size={14} strokeWidth={3} />
         </button>
      </div>
    </div>
  );
};

export default Progress;
