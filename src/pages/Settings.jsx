import React, { useState } from 'react';
import { ChevronLeft, User, Bell, Lock, CreditCard, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [pushEnabled, setPushEnabled] = useState(true);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="flex-col pb-12" style={{ zIndex: 1, position: 'relative', minHeight: '100%' }}>
      {/* Header */}
      <div className="flex items-center justify-between mt-6 px-2 mb-6">
        <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-muted)] transition-colors active:scale-95">
          <ChevronLeft size={28} strokeWidth={2.5} className="text-primary" />
        </button>
        <h1 className="text-xl font-extrabold tracking-tight mb-0">Settings</h1>
        <div style={{ width: '44px' }}></div> {/* Spacer to center title */}
      </div>

      <div className="flex-col gap-6">
        {/* Account Section */}
        <div className="px-1 stagger-1">
          <h3 className="font-bold text-[0.75rem] mb-2 uppercase tracking-[0.15em] text-[#6b7280] ml-3 opacity-80">Account</h3>
          <div className="inset-group">
            <button className="inset-row w-full justify-between py-3 hover:bg-[var(--border-muted)] transition-colors">
              <div className="flex items-center gap-3 w-full pr-4">
                <div className="p-2.5 shrink-0 bg-primary-light rounded-lg text-primary"><User size={18} strokeWidth={2.5} /></div>
                <div className="flex flex-col items-start text-left overflow-hidden w-full">
                  <span className="font-bold text-[1rem] truncate w-full">Personal Information</span>
                </div>
              </div>
              <ChevronRight size={16} className="text-tertiary shrink-0 ml-2" strokeWidth={3} />
            </button>
            <button className="inset-row w-full justify-between py-3 hover:bg-[var(--border-muted)] transition-colors">
              <div className="flex items-center gap-3 w-full pr-4">
                <div className="p-2.5 shrink-0 bg-[#f3e8ff] rounded-lg text-[#9333ea]"><CreditCard size={18} strokeWidth={2.5} /></div>
                <div className="flex flex-col items-start text-left overflow-hidden w-full">
                  <span className="font-bold text-[1rem] truncate w-full">Bank Connections</span>
                  <span className="text-xs font-semibold text-secondary truncate w-full">1 active connection</span>
                </div>
              </div>
              <ChevronRight size={16} className="text-tertiary shrink-0 ml-2" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="px-1 stagger-2">
          <h3 className="font-bold text-[0.75rem] mb-2 uppercase tracking-[0.15em] text-[#6b7280] ml-3 opacity-80">Preferences</h3>
          <div className="inset-group">
            <div className="inset-row w-full justify-between py-3">
              <div className="flex items-center gap-3 w-full pr-4">
                <div className="p-2.5 shrink-0 bg-warning-light rounded-lg text-warning"><Bell size={18} strokeWidth={2.5} /></div>
                <div className="flex flex-col items-start text-left overflow-hidden w-full">
                  <span className="font-bold text-[1rem] truncate w-full">Push Notifications</span>
                  <span className="text-xs font-semibold text-secondary truncate w-full">Smart intervention alerts</span>
                </div>
              </div>
              <div 
                role="switch" aria-checked={pushEnabled} tabIndex={0}
                onClick={() => setPushEnabled(!pushEnabled)}
                className="shrink-0 rounded-full flex items-center p-0.5 border"
                style={{ 
                  width: '44px', height: '24px', cursor: 'pointer', transition: 'all 200ms ease-in-out',
                  backgroundColor: pushEnabled ? 'var(--accent-positive)' : 'var(--border-strong)',
                  borderColor: 'transparent',
                  justifyContent: pushEnabled ? 'flex-end' : 'flex-start'
                }}
              >
                <div className="rounded-full bg-white shadow-sm" style={{ width: '20px', height: '20px' }}></div>
              </div>
            </div>
            
            <div className="inset-row w-full justify-between py-3">
              <div className="flex items-center gap-3 w-full pr-4">
                <div className="p-2.5 shrink-0 bg-success-light rounded-lg text-success"><Lock size={18} strokeWidth={2.5} /></div>
                <div className="flex flex-col items-start text-left overflow-hidden w-full">
                  <span className="font-bold text-[1rem] truncate w-full">Face ID & Security</span>
                  <span className="text-xs font-semibold text-secondary truncate w-full">Biometric auth</span>
                </div>
              </div>
              <div 
                role="switch" aria-checked={faceIdEnabled} tabIndex={0}
                onClick={() => setFaceIdEnabled(!faceIdEnabled)}
                className="shrink-0 rounded-full flex items-center p-0.5 border"
                style={{ 
                  width: '44px', height: '24px', cursor: 'pointer', transition: 'all 200ms ease-in-out',
                  backgroundColor: faceIdEnabled ? 'var(--accent-positive)' : 'var(--border-strong)',
                  borderColor: 'transparent',
                  justifyContent: faceIdEnabled ? 'flex-end' : 'flex-start'
                }}
              >
                <div className="rounded-full bg-white shadow-sm" style={{ width: '20px', height: '20px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="px-1 stagger-3">
          <h3 className="font-bold text-[0.75rem] mb-2 uppercase tracking-[0.15em] text-[#6b7280] ml-3 opacity-80">Support</h3>
          <div className="inset-group">
            <button className="inset-row w-full justify-between py-3 hover:bg-[var(--border-muted)] transition-colors">
              <div className="flex items-center gap-3 w-full">
                <div className="p-2.5 shrink-0 rounded-lg text-text-primary" style={{ backgroundColor: 'var(--bg-surface)' }}><HelpCircle size={18} strokeWidth={2.5} /></div>
                <span className="font-bold text-[1rem] truncate">Help & Feedback</span>
              </div>
              <ChevronRight size={16} className="text-tertiary shrink-0 ml-2" strokeWidth={3} />
            </button>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="px-3 mt-6 stagger-4">
          <button 
             className="btn flex justify-center items-center gap-2 w-full active:scale-95 shadow-sm glass-panel" 
             style={{ color: 'var(--danger-color)', border: '1px solid var(--danger-color)', padding: '16px' }}
             onClick={() => alert("Logging out...")}
          >
            <LogOut size={20} strokeWidth={2.5} />
            <span className="font-extrabold text-[1.05rem]">Log Out</span>
          </button>
          <div className="text-center mt-6 mb-8 text-xs font-semibold text-secondary opacity-50 uppercase tracking-widest">
            Cashly Version 1.0.4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
