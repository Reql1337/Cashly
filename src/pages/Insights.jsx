import React from 'react';
import { Moon, ShieldAlert, HeartPulse, Clock } from 'lucide-react';

const Insights = () => {  
  return (
    <div className="flex-col gap-5 mt-4 pb-12" style={{ zIndex: 1, position: 'relative' }}>
      <h1 className="screen-title text-3xl stagger-1 mb-2">Behavior Patterns</h1>

      {/* Editorial Cards V3 - Compact Side-by-Side Layout */}
      <button 
        onClick={() => alert("Insight Details: Your stress-spending peaks on Mondays. Try a 5-minute meditation before checking your bank app.")}
        className="card-editorial stagger-2 text-danger-dark w-full text-left active:scale-[0.98] transition-all shadow-sm" 
        style={{ border: 'none', background: 'linear-gradient(135deg, rgba(254, 226, 226, 0.5) 0%, #fff 100%)', padding: '18px', borderRadius: '20px' }}
      >
        <div className="flex gap-4 items-start">
          <div className="p-2.5 bg-danger-light rounded-xl text-danger shrink-0 mt-0.5 shadow-sm">
            <HeartPulse size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.1rem] font-extrabold leading-tight tracking-tight" style={{ letterSpacing: '-0.02em', color: '#111827' }}>
              You spend 40% more when stressed.
            </h3>
            <p className="font-medium opacity-80 text-[0.85rem] leading-snug" style={{ color: '#4b5563' }}>
              Boredom and stress are your primary triggers. Pause before purchasing when over-stimulated.
            </p>
          </div>
        </div>
      </button>
      
      <button 
        onClick={() => alert("Deep Dive: Your Wednesday success is driven by habit stacking. You pre-plan meals on Tuesday nights.")}
        className="card-editorial stagger-3 text-primary-dark w-full text-left active:scale-[0.98] transition-all shadow-sm" 
        style={{ border: 'none', background: 'linear-gradient(135deg, rgba(209, 250, 229, 0.5) 0%, #fff 100%)', padding: '18px', borderRadius: '20px' }}
      >
        <div className="flex gap-4 items-start">
          <div className="p-2.5 bg-success-light rounded-xl text-success shrink-0 mt-0.5 shadow-sm">
            <ShieldAlert size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.1rem] font-extrabold leading-tight tracking-tight" style={{ letterSpacing: '-0.02em', color: '#111827' }}>
              Wednesday is your strongest day.
            </h3>
            <p className="font-medium opacity-80 text-[0.85rem] leading-snug" style={{ color: '#4b5563' }}>
              You have achieved a 92% success rate of staying under your safety limits mid-week.
            </p>
          </div>
        </div>
      </button>

      <button 
        onClick={() => alert("Solution: Set a late-night food delivery freeze starting at 9 PM to save an average of $22 per night.")}
        className="card-editorial stagger-4 text-warning-color w-full text-left active:scale-[0.98] transition-all shadow-sm" 
        style={{ border: 'none', background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.5) 0%, #fff 100%)', padding: '18px', borderRadius: '20px' }}
      >
        <div className="flex gap-4 items-start">
          <div className="p-2.5 bg-warning-light rounded-xl text-warning shrink-0 mt-0.5 shadow-sm">
            <Clock size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.1rem] font-extrabold leading-tight tracking-tight" style={{ letterSpacing: '-0.02em', color: '#111827' }}>
              Impulse spikes between 8 PM and 11 PM.
            </h3>
            <p className="font-medium opacity-80 text-[0.85rem] leading-snug" style={{ color: '#4b5563' }}>
              Food delivery constitutes 70% of your late-night leaks. Try setting a delivery freeze.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Insights;
