import React from 'react';
import { Moon, ShieldAlert, HeartPulse, Clock } from 'lucide-react';

const Insights = () => {  
  return (
    <div className="flex-col gap-5 mt-4 pb-12" style={{ zIndex: 1, position: 'relative' }}>
      <h1 className="screen-title text-3xl stagger-1 mb-2">Behavior Patterns</h1>

      {/* Editorial Cards V3 - Compact Side-by-Side Layout */}
      <button 
        onClick={() => alert("Insight Details: Your stress-spending peaks on Mondays. Try a 5-minute meditation before checking your bank app.")}
        className="card-editorial stagger-2 w-full text-left active:scale-[0.98] transition-all glass-panel" 
        style={{ border: 'none', padding: '18px', borderRadius: '20px' }}
      >
        <div className="flex gap-4 items-start">
          <div className="p-2.5 bg-danger-light rounded-xl text-danger shrink-0 mt-0.5 shadow-sm">
            <HeartPulse size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.1rem] font-extrabold leading-tight tracking-tight text-primary" style={{ letterSpacing: '-0.02em' }}>
              You spend 40% more when stressed.
            </h3>
            <p className="font-medium opacity-80 text-[0.85rem] leading-snug text-secondary">
              Boredom and stress are your primary triggers. Pause before purchasing when over-stimulated.
            </p>
          </div>
        </div>
      </button>
      
      <button 
        onClick={() => alert("Deep Dive: Your Wednesday success is driven by habit stacking. You pre-plan meals on Tuesday nights.")}
        className="card-editorial stagger-3 w-full text-left active:scale-[0.98] transition-all glass-panel" 
        style={{ border: 'none', padding: '18px', borderRadius: '20px' }}
      >
        <div className="flex gap-4 items-start">
          <div className="p-2.5 bg-success-light rounded-xl text-success shrink-0 mt-0.5 shadow-sm">
            <ShieldAlert size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.1rem] font-extrabold leading-tight tracking-tight text-primary" style={{ letterSpacing: '-0.02em' }}>
              Wednesday is your strongest day.
            </h3>
            <p className="font-medium opacity-80 text-[0.85rem] leading-snug text-secondary">
              You have achieved a 92% success rate of staying under your safety limits mid-week.
            </p>
          </div>
        </div>
      </button>

      <button 
        onClick={() => alert("Solution: Set a late-night food delivery freeze starting at 9 PM to save an average of $22 per night.")}
        className="card-editorial stagger-4 w-full text-left active:scale-[0.98] transition-all glass-panel" 
        style={{ border: 'none', padding: '18px', borderRadius: '20px' }}
      >
        <div className="flex gap-4 items-start">
          <div className="p-2.5 bg-warning-light rounded-xl text-warning shrink-0 mt-0.5 shadow-sm">
            <Clock size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.1rem] font-extrabold leading-tight tracking-tight text-primary" style={{ letterSpacing: '-0.02em' }}>
              Impulse spikes between 8 PM and 11 PM.
            </h3>
            <p className="font-medium opacity-80 text-[0.85rem] leading-snug text-secondary">
              Food delivery constitutes 70% of your late-night leaks. Try setting a delivery freeze.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Insights;
