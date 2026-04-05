import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, BrainCircuit, Target, ArrowRight } from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      icon: <ShieldAlert size={64} className="text-warning mb-6" />,
      title: 'Stop overspending before it happens',
      desc: 'Cashly predicts risky spending moments and helps you stay in control in real time.'
    },
    {
      icon: <BrainCircuit size={64} className="text-success mb-6" />,
      title: 'We learn your habits',
      desc: 'Cashly detects when, where, and how you tend to overspend so it can intervene at the right moment.'
    },
    {
      icon: <Target size={64} className="text-primary mb-6" />,
      title: 'Simple guidance, not budgets',
      desc: 'See what is safe to spend today, get smart alerts, and build better habits without spreadsheets.'
    }
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleDemo = () => {
    navigate('/home');
  };

  const handleDotClick = (i) => {
    if (i <= 3) setStep(i);
  };

  return (
    <div className="flex-col flex-1 w-full h-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
      {step < 3 ? (
        <div className="flex-col p-6 flex-1 text-center animate-fade-in">
          {/* Main Content Area - Use fixed gap to keep content together */}
          <div className="flex-1 flex flex-col justify-center items-center w-full gap-size-6 max-h-[70%] mt-auto transition-all duration-300">
            <div>
              {slides[step].icon}
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="screen-title mb-0" style={{ fontSize: 'clamp(1.75rem, 7vw, 2.25rem)', lineHeight: 1.1 }}>
                {slides[step].title}
              </h1>
              <p className="screen-subtitle mb-0" style={{ fontSize: '1.05rem', maxWidth: '300px', margin: '0 auto' }}>
                {slides[step].desc}
              </p>
            </div>
          </div>
          
          {/* Controls Area - Push to bottom but with better integration */}
          <div className="w-full pt-10 pb-4 mt-auto flex-col items-center gap-6">
            <div className="flex gap-2 justify-center">
              {[0, 1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  onClick={() => handleDotClick(i)}
                  className="cursor-pointer"
                  style={{
                    width: i === step ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: i === step ? 'var(--accent-positive)' : 'var(--border-strong)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              ))}
            </div>
            <button className="btn btn-primary flex justify-center gap-sm shadow-lg active:scale-95" onClick={handleNext}>
              Continue <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-col p-6 flex-1 text-center animate-fade-in">
          <div className="flex-1 flex flex-col justify-center items-center w-full gap-6">
            <div 
              className="bg-success-light flex items-center justify-center shadow-sm animate-slide-up"
              style={{ width: '88px', height: '88px', borderRadius: '28px', animationDelay: '100ms' }}
            >
              <span style={{ fontSize: '44px' }}>💵</span>
            </div>
            <div className="flex flex-col gap-3 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h1 className="screen-title mb-0">Take control with Cashly</h1>
              <p className="screen-subtitle mb-0">Your real-time coach to stop bad spending before it starts.</p>
            </div>
          </div>
          
          <div className="w-full pb-4 flex flex-col gap-3 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <button className="btn btn-success shadow-xl active:scale-95" onClick={handleDemo}>
              Connect My Bank
            </button>
            <button className="btn btn-secondary active:scale-95" onClick={handleDemo}>
              Try Live Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
