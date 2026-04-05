import React from 'react';
import { Moon, ShieldAlert, HeartPulse, Clock } from 'lucide-react';

const Insights = () => {  
  return (
    <div className="flex-col gap-5 mt-4 pb-12" style={{ zIndex: 1, position: 'relative' }}>
      <h1 className="screen-title text-3xl stagger-1 mb-2">Behavior Patterns</h1>

      {/* Editorial Cards V3 */}
      <button 
        onClick={() => alert("Insight Details: Your stress-spending peaks on Mondays. Try a 5-minute meditation before checking your bank app.")}
        className="card-editorial stagger-2 text-danger-dark w-full text-left active:scale-[0.98] transition-all" 
        style={{ border: 'none', background: 'linear-gradient(135deg, var(--accent-danger-light) 0%, #fff 100%)', padding: 'var(--size-6)' }}
      >
        <div className="flex flex-col gap-4">
          <HeartPulse size={32} className="opacity-80" strokeWidth={2.5} />
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.5rem] font-extrabold leading-tight tracking-tighter" style={{ letterSpacing: '-0.04em' }}>
              You spend 40% more when stressed.
            </h3>
            <p className="font-medium opacity-80 text-[0.95rem] leading-snug">
              Boredom and stress are your primary triggers. Pause before purchasing when over-stimulated.
            </p>
          </div>
        </div>
      </button>
      
      <button 
        onClick={() => alert("Deep Dive: Your Wednesday success is driven by habit stacking. You pre-plan meals on Tuesday nights.")}
        className="card-editorial stagger-3 text-primary-dark w-full text-left active:scale-[0.98] transition-all" 
        style={{ border: 'none', background: 'linear-gradient(135deg, var(--accent-positive-light) 0%, #fff 100%)', padding: 'var(--size-6)' }}
      >
        <div className="flex flex-col gap-4">
          <ShieldAlert size={32} className="opacity-80" strokeWidth={2.5} />
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.5rem] font-extrabold leading-tight tracking-tighter" style={{ letterSpacing: '-0.04em' }}>
              Wednesday is your strongest day.
            </h3>
            <p className="font-medium opacity-80 text-[0.95rem] leading-snug">
              You have achieved a 92% success rate of staying under your safety limits mid-week.
            </p>
          </div>
        </div>
      </button>

      <button 
        onClick={() => alert("Solution: Set a late-night food delivery freeze starting at 9 PM to save an average of $22 per night.")}
        className="card-editorial stagger-4 text-warning-color w-full text-left active:scale-[0.98] transition-all" 
        style={{ border: 'none', background: 'linear-gradient(135deg, var(--accent-warning-light) 0%, #fff 100%)', padding: 'var(--size-6)' }}
      >
        <div className="flex flex-col gap-4">
          <Clock size={32} className="opacity-80" strokeWidth={2.5} />
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.5rem] font-extrabold leading-tight tracking-tighter" style={{ letterSpacing: '-0.04em' }}>
              Impulse spikes between 8 PM and 11 PM.
            </h3>
            <p className="font-medium opacity-80 text-[0.95rem] leading-snug">
              Food delivery constitutes 70% of your late-night leaks. Try setting a delivery freeze.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Insights;
