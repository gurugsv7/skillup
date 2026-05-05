import React, { useEffect, useState } from 'react';

const DesktopNotification: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main card */}
      <div className="relative max-w-2xl w-full">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-cyan-500/20 shadow-2xl overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

          <div className="p-12">
            {/* Logo & Title */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-cyan-500/50">
                  S4
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">s4skillup</h1>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest">Career Guidance Platform</p>
                </div>
              </div>
            </div>

            {/* Main message */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                📱 This is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Mobile-First</span> Experience
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                s4skillup is optimized for mobile devices to give you the best career guidance experience on the go. 
                Your next opportunity deserves a seamless, focused platform.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 hover:bg-cyan-500/15 transition-colors">
                <div className="text-2xl font-bold text-cyan-400 mb-1">72+</div>
                <div className="text-sm text-gray-300">Top Companies</div>
                <div className="text-xs text-gray-500 mt-2">TCS, Infosys, Google, Amazon & more</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 hover:bg-blue-500/15 transition-colors">
                <div className="text-2xl font-bold text-blue-400 mb-1">96+</div>
                <div className="text-sm text-gray-300">Interview Questions</div>
                <div className="text-xs text-gray-500 mt-2">Real questions from actual interviews</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 hover:bg-purple-500/15 transition-colors">
                <div className="text-2xl font-bold text-purple-400 mb-1">37+</div>
                <div className="text-sm text-gray-300">Tech Roles</div>
                <div className="text-xs text-gray-500 mt-2">Backend, Frontend, DevOps, ML & more</div>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4 hover:bg-pink-500/15 transition-colors">
                <div className="text-2xl font-bold text-pink-400 mb-1">45+</div>
                <div className="text-sm text-gray-300">Salary Insights</div>
                <div className="text-xs text-gray-500 mt-2">Real salary benchmarks by role & company</div>
              </div>
            </div>

            {/* What you get */}
            <div className="mb-8 bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">What s4skillup Offers</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <div>
                    <div className="text-white font-semibold">Smart Career Matching</div>
                    <div className="text-sm text-gray-400">Find roles and companies that align with your skills & goals</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <div>
                    <div className="text-white font-semibold">Interview Preparation</div>
                    <div className="text-sm text-gray-400">Real questions, detailed explanations, and company insights</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <div>
                    <div className="text-white font-semibold">Salary Intelligence</div>
                    <div className="text-sm text-gray-400">Percentile-based salary data for informed negotiations</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold">✓</span>
                  <div>
                    <div className="text-white font-semibold">Success Stories</div>
                    <div className="text-sm text-gray-400">Learn from real hiring journeys at your target companies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Instructions */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">📱</span>
                Open on Your Mobile Device
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>1️⃣ Grab your phone (iOS or Android)</p>
                <p>2️⃣ Navigate to <span className="font-mono text-cyan-400">www.s4skillup.com</span></p>
                <p>3️⃣ Start your career journey today</p>
              </div>
            </div>

            {/* Footer info */}
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                Built with <span className="text-pink-400">❤️</span> for ambitious tech professionals in India
              </p>
              <p className="text-xs text-gray-500 font-mono">
                © 2026 s4skillup | Career Guidance Made Simple
              </p>
            </div>
          </div>
        </div>

        {/* Floating accent elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default DesktopNotification;
