import React from 'react';
import { HeartPulse, Clock, Activity, Zap, TrendingUp } from 'lucide-react';
import { useCashly } from '../context/CashlyContext';

const Insights = () => {  
  const { triggerAlert } = useCashly();

  const handleHeroAction = () => {
    triggerAlert({
      title: "Cooldown Active",
      message: "A structural purchase delay has been applied to high-risk categories for 2 hours.",
      type: "discipline"
    });
  };

  return (
    <div className="flex-col gap-6 mt-6 pb-12 px-2" style={{ zIndex: 1, position: 'relative' }}>
      
      {/* 1 & 2: Header Alignment and Subtitle tuning */}
      <header className="flex-col gap-0.5 mb-2">
        <h1 className="text-xl font-bold tracking-tight text-primary mb-0">Insights</h1>
        <p className="text-[0.85rem] text-secondary font-normal tracking-wide">Patterns affecting your budget.</p>
      </header>

      {/* Hero Insight - 3 & 4 & 5 & 10: Copy Density, Red Emphasis, Button Size, Typographic Weight */}
      <div className="card-editorial glass-panel flex-col p-5 stagger-2 border-l-[3px] border-l-danger">
        <span className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3 block">Primary Pattern</span>
        
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2.5 bg-surface-color rounded-[14px] text-danger mt-0.5 shadow-sm">
            <HeartPulse size={22} strokeWidth={2.5} />
          </div>
          <div className="flex-col gap-1 flex-1">
            <h3 className="text-[1.1rem] font-bold leading-tight text-primary">Stress Buying</h3>
            <p className="text-[0.85rem] text-secondary font-normal leading-relaxed pr-2">
              You spend <span className="font-semibold text-primary">40% more</span> when stressed. Pause before purchasing when overstimulated.
            </p>
          </div>
        </div>

        <button 
          onClick={handleHeroAction}
          className="btn py-2.5 rounded-lg font-bold text-[0.85rem] w-full transition-all active:scale-[0.98] flex items-center justify-center gap-2 border border-white/5 bg-white/5 hover:bg-white/10"
          style={{ color: 'var(--text-primary)' }}
        >
          <Zap size={16} className="opacity-50" strokeWidth={2.5} />
          Enable 2-Hour Cooldown
        </button>
      </div>

      {/* Secondary Insights - 6 & 7 & 10: Padding, Spacing, CTA Language, Typography */}
      <div className="flex-col gap-3 stagger-3 mt-2">
        <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-secondary ml-1 mb-1 opacity-70">Supporting Data</h2>
        
        {/* Insight A */}
        <div className="glass-panel p-4 flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="p-2.5 bg-surface-color rounded-lg text-success shrink-0">
              <TrendingUp size={18} strokeWidth={2.5} />
            </div>
            <div className="flex-col flex-1 min-w-0">
              <h4 className="text-[0.9rem] font-bold text-primary mb-0.5 truncate">Wednesday Zenith</h4>
              <p className="text-[0.75rem] text-secondary font-normal mb-0 truncate">92% budget success rate.</p>
            </div>
            <button className="text-[0.7rem] py-1.5 px-3 rounded-md font-bold text-primary active:scale-95 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors shrink-0" onClick={() => alert("Routine builder running...")}>
              Keep streak
            </button>
          </div>
        </div>

        {/* Insight B */}
        <div className="glass-panel p-4 flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="p-2.5 bg-surface-color rounded-lg text-warning shrink-0">
              <Clock size={18} strokeWidth={2.5} />
            </div>
            <div className="flex-col flex-1 min-w-0">
              <h4 className="text-[0.9rem] font-bold text-primary mb-0.5 truncate">8 PM Impulse Spike</h4>
              <p className="text-[0.75rem] text-secondary font-normal mb-0 truncate">Food delivery leaks dominant.</p>
            </div>
            <button className="text-[0.7rem] py-1.5 px-3 rounded-md font-bold text-primary active:scale-95 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors shrink-0" onClick={() => alert("Freeze logic setting saved.")}>
              Freeze delivery
            </button>
          </div>
        </div>
      </div>

      {/* Visual Data / Weekly Rhythm - 8 & 9: Finish Trend chart, align grid, layout */}
      <div className="glass-panel p-5 mt-4 stagger-4 flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Activity size={18} className="text-success" strokeWidth={2.5} />
            <span className="text-[1rem] font-bold text-primary">Impulse Volume</span>
          </div>
        </div>

        {/* Structured CSS Bar Chart */}
        <div className="relative w-full h-[140px] pt-4">
          {/* Background Grid Lines */}
          <div className="absolute top-[25%] left-0 right-0 border-t border-white/5 w-full"></div>
          <div className="absolute top-[50%] left-0 right-0 border-t border-dashed border-white/20 w-full z-0">
             <span className="absolute right-0 -top-4 text-[10px] text-secondary font-semibold">Safe Limit</span>
          </div>
          <div className="absolute top-[75%] left-0 right-0 border-t border-white/5 w-full"></div>
          
          <div className="flex h-full items-end justify-between px-2 gap-2 relative z-10 w-full rounded-b-md overflow-hidden pb-1">
            {[
              { day: 'M', h: 85, risk: true },
              { day: 'T', h: 35 },
              { day: 'W', h: 20 },
              { day: 'T', h: 40 },
              { day: 'F', h: 96, risk: true },
              { day: 'S', h: 65 },
              { day: 'S', h: 45 },
            ].map((stat, i) => (
              <div key={i} className="flex-col items-center flex-1 h-full justify-end group">
                  <div 
                    className="w-full max-w-[12px] mx-auto rounded-t-[4px] transition-all duration-700 ease-out"
                    style={{ 
                      height: `${stat.h}%`, 
                      backgroundColor: stat.risk ? 'var(--danger-color)' : 'var(--text-secondary)',
                      opacity: stat.risk ? 1 : 0.6
                    }}
                  ></div>
                  <span className="text-[10px] font-medium mt-3 text-secondary">{stat.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Insights;
