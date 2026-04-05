import React from 'react';
import { useCashly } from '../context/CashlyContext';
import { OctagonAlert } from 'lucide-react';

const AlertModal = () => {
  const { activeAlert, closeAlert } = useCashly();

  if (!activeAlert) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content text-center">
        
        <div className="flex justify-center mb-6 mt-2">
          <div className="text-danger">
            <OctagonAlert size={64} strokeWidth={1.5} />
          </div>
        </div>
        
        <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: '-0.03em' }}>
          {activeAlert.title.replace('.', '')}.
        </h2>
        
        <p className="text-text-secondary text-lg leading-relaxed mb-10 px-2 font-medium">
          {activeAlert.message}
        </p>
        
        <div className="flex-col gap-sm">
          {/* Compliant Action - Massive, Heavy */}
          <button 
             className="btn btn-primary" 
             onClick={closeAlert}
             style={{ padding: '20px', fontSize: '1.2rem', borderRadius: '24px' }}
          >
            Wait 24 Hours
          </button>
          
          <button 
             className="btn btn-secondary mt-2" 
             onClick={closeAlert}
             style={{ padding: '20px', fontSize: '1.2rem', borderRadius: '24px', backgroundColor: 'var(--border-color-dark)' }}
          >
            Set $30 Limit
          </button>

          {/* Rejection Action - Muted Tertiary Link */}
          <button 
            className="btn btn-outline mt-4 border-none text-secondary" 
            onClick={closeAlert}
          >
            Buy Anyway
          </button>
        </div>

      </div>
    </div>
  );
};

export default AlertModal;
