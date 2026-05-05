
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';

interface Props {
  onSuccess: () => void;
  onBack: () => void;
}

const AuthView: React.FC<Props> = ({ onSuccess, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAppContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (email.length < 3 || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsScanning(true);
    try {
      await login(email, password);
      setTimeout(() => {
        setIsScanning(false);
        onSuccess();
      }, 1500);
    } catch (err) {
      setIsScanning(false);
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center p-6 relative overflow-hidden bg-background-dark">
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
            {isScanning && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,1)] animate-scan"></div>}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            {isLogin ? 'Secure Access Portal' : 'New Identity Registration'}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full bg-transparent border-b-2 border-white/20 focus:border-neon-cyan text-white placeholder-gray-600 py-3 outline-none transition-colors duration-300"
              disabled={isScanning}
            />
            <span className="material-symbols-outlined absolute right-0 bottom-3 text-white/30 text-xl">mail</span>
          </div>

          <div className="relative group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-transparent border-b-2 border-white/20 focus:border-neon-cyan text-white placeholder-gray-600 py-3 outline-none transition-colors duration-300"
              disabled={isScanning}
            />
            <span className="material-symbols-outlined absolute right-0 bottom-3 text-white/30 text-xl">lock</span>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isScanning}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-neon-cyan to-primary text-white font-bold py-3 rounded-lg mt-8 disabled:opacity-50 flex items-center justify-center gap-2 transition-all duration-300"
          >
            {isScanning ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setEmail('');
                setPassword('');
                setError('');
              }}
              className="ml-2 text-neon-cyan hover:text-white transition-colors font-semibold"
              disabled={isScanning}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onBack}
            className="text-gray-500 hover:text-white transition-colors text-sm flex items-center justify-center gap-2 w-full"
            disabled={isScanning}
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span>Back to Home</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthView;
