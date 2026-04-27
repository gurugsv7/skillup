
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  onSuccess: () => void;
  onBack: () => void;
}

const AuthView: React.FC<Props> = ({ onSuccess, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    // Simulate a "digital authentication" process
    setTimeout(() => {
      setIsScanning(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center p-6 relative overflow-hidden bg-background-dark">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm relative z-10"
      >
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            <span className="material-symbols-outlined text-3xl text-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
              {isLogin ? 'fingerprint' : 'person_add'}
            </span>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,1)] animate-scan"></div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            {isLogin ? 'Secure Access Portal' : 'New Identity Registration'}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="group relative">
              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1 mb-1 block group-focus-within:text-neon-cyan transition-colors">
                Digital Address
              </label>
              <div className="relative">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-neon-cyan/50 focus:bg-white/[0.07] transition-all"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm">alternate_email</span>
              </div>
            </div>

            <div className="group relative">
              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1 mb-1 block group-focus-within:text-neon-cyan transition-colors">
                Access Code
              </label>
              <div className="relative">
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-neon-cyan/50 focus:bg-white/[0.07] transition-all"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm">lock</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="hidden" />
              <div className="w-4 h-4 border border-white/20 rounded bg-white/5 flex items-center justify-center group-focus-within:border-neon-cyan">
                <div className="w-2 h-2 bg-neon-cyan rounded-sm opacity-0 group-active:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Remember</span>
            </label>
            <button type="button" className="text-[10px] text-primary font-mono uppercase tracking-widest hover:text-neon-cyan transition-colors">
              Lost Code?
            </button>
          </div>

          <button 
            disabled={isScanning}
            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest relative overflow-hidden group transition-all
              ${isScanning ? 'bg-primary/20 text-primary cursor-wait' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]'}
            `}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isScanning ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping"></span>
                  AUTHENTICATING...
                </>
              ) : (
                <>
                  {isLogin ? 'Enter Workspace' : 'Create Identity'}
                  <span className="material-symbols-outlined text-sm">login</span>
                </>
              )}
            </span>
            {!isScanning && (
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            )}
          </button>
        </form>

        <footer className="mt-12 text-center">
          <p className="text-gray-500 text-[10px] font-mono mb-4 uppercase tracking-[0.2em]">
            {isLogin ? "No identity recorded?" : "Already have an entry?"}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-white text-[10px] font-mono uppercase tracking-widest hover:bg-white/[0.05] hover:border-white/10 transition-all"
          >
            {isLogin ? 'Register New Account' : 'Switch to Login'}
          </button>
        </footer>

        <button 
          onClick={onBack}
          className="absolute -top-12 -left-4 p-2 text-gray-500 hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="text-[10px] font-mono uppercase tracking-widest">Return</span>
        </button>
      </motion.div>
    </div>
  );
};

export default AuthView;
