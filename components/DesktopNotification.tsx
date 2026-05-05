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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-0 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
      </div>

      {/* Main content - full screen */}
      <div className="relative w-full h-full flex flex-col overflow-y-auto">
        {/* Hero Section - Top portion */}
        <div className="min-h-screen flex flex-col justify-center items-center relative px-8 py-20">
          {/* Top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

          {/* Logo & Main Title */}
          <div className="text-center mb-16 max-w-4xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center font-bold text-white text-4xl shadow-2xl shadow-cyan-500/50 animate-pulse">
                S4
              </div>
            </div>
            <h1 className="text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              s4skillup
            </h1>
            <p className="text-2xl text-cyan-400 font-mono tracking-widest mb-8">Career Guidance Platform</p>
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
              📱 This is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Mobile-First</span> Experience
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Optimized for mobile devices to give you the best career guidance experience on the go. 
              Your next opportunity deserves a seamless, focused platform.
            </p>
          </div>

          {/* Key metrics - large and prominent */}
          <div className="grid grid-cols-2 gap-6 max-w-3xl mb-16">
            <div className="bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border-2 border-cyan-500/40 rounded-2xl p-8 hover:border-cyan-500/70 transition-all">
              <div className="text-5xl font-black text-cyan-400 mb-2">72+</div>
              <div className="text-lg text-gray-200 font-semibold">Top Companies</div>
              <div className="text-sm text-gray-400 mt-3">TCS, Infosys, Google, Amazon & more</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/15 to-blue-500/5 border-2 border-blue-500/40 rounded-2xl p-8 hover:border-blue-500/70 transition-all">
              <div className="text-5xl font-black text-blue-400 mb-2">96+</div>
              <div className="text-lg text-gray-200 font-semibold">Interview Questions</div>
              <div className="text-sm text-gray-400 mt-3">Real questions from actual interviews</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/15 to-purple-500/5 border-2 border-purple-500/40 rounded-2xl p-8 hover:border-purple-500/70 transition-all">
              <div className="text-5xl font-black text-purple-400 mb-2">37+</div>
              <div className="text-lg text-gray-200 font-semibold">Tech Roles</div>
              <div className="text-sm text-gray-400 mt-3">Backend, Frontend, DevOps, ML & more</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/15 to-pink-500/5 border-2 border-pink-500/40 rounded-2xl p-8 hover:border-pink-500/70 transition-all">
              <div className="text-5xl font-black text-pink-400 mb-2">45+</div>
              <div className="text-lg text-gray-200 font-semibold">Salary Insights</div>
              <div className="text-sm text-gray-400 mt-3">Real salary benchmarks by role & company</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="min-h-screen flex flex-col justify-center relative px-8 py-20">
          {/* What you get */}
          <div className="max-w-5xl mx-auto w-full mb-20">
            <h3 className="text-4xl font-black text-white mb-4">What s4skillup Offers</h3>
            <p className="text-gray-400 mb-12 text-lg">Everything you need to land your dream role</p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🎯</span>
                  <div>
                    <div className="text-white font-bold text-xl mb-2">Smart Career Matching</div>
                    <div className="text-gray-300">Find roles and companies that align with your skills & goals</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">📚</span>
                  <div>
                    <div className="text-white font-bold text-xl mb-2">Interview Preparation</div>
                    <div className="text-gray-300">Real questions, detailed explanations, and company insights</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">💰</span>
                  <div>
                    <div className="text-white font-bold text-xl mb-2">Salary Intelligence</div>
                    <div className="text-gray-300">Percentile-based salary data for informed negotiations</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-2 border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/60 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🏆</span>
                  <div>
                    <div className="text-white font-bold text-xl mb-2">Success Stories</div>
                    <div className="text-gray-300">Learn from real hiring journeys at your target companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-5xl mx-auto w-full mb-20">
            <h3 className="text-4xl font-black text-white mb-4">Complete Toolkit</h3>
            <p className="text-gray-400 mb-12 text-lg">Everything included in your journey</p>
            
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: '🧠', label: 'Interview Prep' },
                { icon: '📊', label: 'Salary Benchmarks' },
                { icon: '🏢', label: 'Company Insights' },
                { icon: '🎓', label: 'Role Guidance' },
                { icon: '⭐', label: 'Success Stories' },
                { icon: '📚', label: 'Learning Paths' },
                { icon: '💬', label: 'Career Chat AI' },
                { icon: '📈', label: 'Progress Tracking' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/20 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-300 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto w-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 border-2 border-cyan-500/50 rounded-3xl p-12 text-center mb-20">
            <h3 className="text-3xl font-black text-white mb-4">Ready to Start?</h3>
            <p className="text-xl text-gray-200 mb-8">Grab your phone and open www.s4skillup.com</p>
            <div className="space-y-3 text-lg text-gray-300">
              <p>📱 Open on any mobile device (iOS or Android)</p>
              <p>🚀 Start your career journey instantly</p>
              <p>🎯 Get personalized guidance for your tech career</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Companies */}
        <div className="min-h-screen flex flex-col justify-center relative px-8 py-20">
          <div className="max-w-5xl mx-auto w-full">
            <h3 className="text-4xl font-black text-white mb-4">Trusted by Top Companies</h3>
            <p className="text-gray-400 mb-12 text-lg">Real data from India's leading tech companies</p>
            
            <div className="grid grid-cols-5 gap-4 mb-12">
              {['TCS', 'Infosys', 'Wipro', 'Amazon', 'Google', 'Zoho', 'Microsoft', 'Freshworks', 'Chargebee', 'Deloitte', 'PwC', 'EY', 'KPMG', 'PayPal', 'Tech Mahindra', 'Accenture', 'Capgemini', 'IBM', 'Mindtree', 'Aspire'].map(company => (
                <div key={company} className="aspect-square bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-xl border-2 border-cyan-500/30 flex items-center justify-center text-sm font-black text-gray-200 hover:border-cyan-500/70 hover:bg-cyan-500/25 transition-all">
                  {company}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-center text-lg">... and 52+ more companies</p>
          </div>
        </div>

        {/* Footer */}
        <div className="py-16 px-8 border-t border-white/10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg text-gray-400 mb-2">
              Built with <span className="text-pink-400">❤️</span> for ambitious tech professionals in India
            </p>
            <p className="text-sm text-gray-500 font-mono">
              © 2026 s4skillup | Career Guidance Made Simple
            </p>
          </div>
        </div>

        {/* Floating accent elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default DesktopNotification;
