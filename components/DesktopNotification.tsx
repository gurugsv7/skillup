import React, { useEffect, useState } from 'react';

const DesktopNotification: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-screen bg-cover bg-fixed overflow-y-auto" style={{
      backgroundImage: `
        radial-gradient(circle at 15% 50%, rgba(0, 240, 255, 0.05), transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.05), transparent 25%),
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
      backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
      backgroundColor: '#050a14',
      color: '#e1e1ee'
    }}>

      {/* HERO Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-20 mt-20 text-center lg:text-left">
        <div className="flex-1 flex flex-col items-center lg:items-start lg:justify-center">
          <h1 className="text-6xl font-bold text-white mb-6 max-w-4xl tracking-tight leading-tight">s4skillup is for your phone.</h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">To use s4skillup, please open this website on your smartphone. Our tools are built for mobile to help you grow your career on the go.</p>
          
          <div className="mt-8 border-l-2 border-cyan-400 pl-6 text-left">
            <h4 className="text-2xl text-white mb-3 font-semibold">Why mobile-first?</h4>
            <ul className="space-y-3 text-gray-400 text-base">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-400 text-sm">bolt</span>
                Agile Prep on the commute
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-violet-500 text-sm">radar</span>
                Real-time Intelligence updates
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-400 text-sm">smart_toy</span>
                Career Chat AI at your fingertips
              </li>
            </ul>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex-1 hidden lg:flex justify-center items-center relative">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute w-80 h-80 bg-violet-500/10 rounded-full blur-2xl -z-10 translate-x-20 translate-y-20"></div>
          
          <div className="relative" style={{
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.15), inset 0 0 20px rgba(0, 240, 255, 0.05)',
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div className="border-8 border-gray-700 rounded-3xl overflow-hidden w-72 bg-black" style={{
              backgroundImage: 'linear-gradient(to bottom, #050a14, #0a101f)'
            }}>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

              {/* Phone Content */}
              <div className="w-full pt-8 px-4 pb-4 flex flex-col gap-4 h-full min-h-96">
                {/* Top bar */}
                <div className="flex justify-between items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                  <div className="w-12 h-3 bg-gray-700 rounded-full"></div>
                </div>

                {/* Hero banner */}
                <div className="w-full h-24 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-white/5 rounded-xl animate-pulse"></div>

                {/* Search bar */}
                <div className="w-full h-8 bg-gray-800 rounded-lg animate-pulse"></div>

                {/* Grid cards */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="h-20 bg-gray-800 rounded-lg border border-white/5 flex flex-col justify-end p-2">
                    <div className="w-6 h-6 bg-cyan-500/20 rounded mb-1"></div>
                    <div className="w-12 h-1.5 bg-white/20 rounded"></div>
                  </div>
                  <div className="h-20 bg-gray-800 rounded-lg border border-white/5 flex flex-col justify-end p-2">
                    <div className="w-6 h-6 bg-violet-500/20 rounded mb-1"></div>
                    <div className="w-12 h-1.5 bg-white/20 rounded"></div>
                  </div>
                </div>

                {/* AI Chat area */}
                <div className="w-full flex-1 bg-gradient-to-tr from-cyan-500/5 to-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mt-auto mb-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/5 blur-xl"></div>
                  <span className="material-symbols-outlined text-cyan-400 text-4xl relative z-10" style={{
                    textShadow: '0 0 15px rgba(0, 240, 255, 0.5)',
                    fontVariationSettings: "'FILL' 1"
                  }}>robot_2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cyan Card */}
          <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center border-t-2 border-t-cyan-400/50" style={{
            backgroundColor: 'rgba(10, 16, 31, 0.6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(-5px)';
            el.style.borderColor = 'rgba(0, 240, 255, 0.3)';
            el.style.boxShadow = 'inset 0 0 20px rgba(0, 240, 255, 0.05), 0 10px 30px rgba(0, 240, 255, 0.1)';
          }} onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(0)';
            el.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            el.style.boxShadow = 'none';
          }}>
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/20">
              <span className="material-symbols-outlined text-3xl text-cyan-400" style={{fontVariationSettings: "'FILL' 1"}}>business</span>
            </div>
            <h3 className="text-3xl text-white mb-1 font-bold">72+</h3>
            <p className="text-base text-gray-400 tracking-wide">Top Companies</p>
          </div>

          {/* Violet Card */}
          <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center border-t-2 border-t-violet-500/50" style={{
            backgroundColor: 'rgba(10, 16, 31, 0.6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(-5px)';
            el.style.borderColor = 'rgba(139, 92, 246, 0.3)';
            el.style.boxShadow = 'inset 0 0 20px rgba(139, 92, 246, 0.05), 0 10px 30px rgba(139, 92, 246, 0.1)';
          }} onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(0)';
            el.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            el.style.boxShadow = 'none';
          }}>
            <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mb-4 border border-violet-500/20">
              <span className="material-symbols-outlined text-3xl text-violet-400" style={{fontVariationSettings: "'FILL' 1"}}>forum</span>
            </div>
            <h3 className="text-3xl text-white mb-1 font-bold">96+</h3>
            <p className="text-base text-gray-400 tracking-wide">Interview Questions</p>
          </div>

          {/* Amber Card */}
          <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center border-t-2 border-t-amber-400/50" style={{
            backgroundColor: 'rgba(10, 16, 31, 0.6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(-5px)';
            el.style.borderColor = 'rgba(255, 170, 0, 0.3)';
            el.style.boxShadow = 'inset 0 0 20px rgba(255, 170, 0, 0.05), 0 10px 30px rgba(255, 170, 0, 0.1)';
          }} onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(0)';
            el.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            el.style.boxShadow = 'none';
          }}>
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
              <span className="material-symbols-outlined text-3xl text-amber-400" style={{fontVariationSettings: "'FILL' 1"}}>badge</span>
            </div>
            <h3 className="text-3xl text-white mb-1 font-bold">37+</h3>
            <p className="text-base text-gray-400 tracking-wide">Tech Roles</p>
          </div>

          {/* Green Card */}
          <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center border-t-2 border-t-green-400/50" style={{
            backgroundColor: 'rgba(10, 16, 31, 0.6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(-5px)';
            el.style.borderColor = 'rgba(10, 255, 0, 0.3)';
            el.style.boxShadow = 'inset 0 0 20px rgba(10, 255, 0, 0.05), 0 10px 30px rgba(10, 255, 0, 0.1)';
          }} onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = 'translateY(0)';
            el.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            el.style.boxShadow = 'none';
          }}>
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20">
              <span className="material-symbols-outlined text-3xl text-green-400" style={{fontVariationSettings: "'FILL' 1"}}>insights</span>
            </div>
            <h3 className="text-3xl text-white mb-1 font-bold">45+</h3>
            <p className="text-base text-gray-400 tracking-wide">Salary Insights</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-40 w-full py-20 border-t border-white/5 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <div className="text-2xl text-white font-bold mb-4 tracking-tight">s4skillup</div>
            <p className="text-base text-gray-400 opacity-80">© 2024 s4skillup. Elite Career Engineering.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default DesktopNotification;
