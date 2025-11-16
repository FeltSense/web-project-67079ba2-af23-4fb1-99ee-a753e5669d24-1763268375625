export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0f172a]">
  {/* Animated Aurora Background */}
  <div className="absolute inset-0 opacity-40">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Starfield Effect */}
  <div className="absolute inset-0">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}
      ></div>
    ))}
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-300 text-sm font-medium">Real-time Sky Event Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-white">Predict the</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Unpredictable Sky
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            The first API that combines <span className="text-emerald-400 font-semibold">space weather</span>, <span className="text-cyan-400 font-semibold">cloud cover</span>, and <span className="text-purple-400 font-semibold">light pollution</span> to deliver postal-code accurate probabilities for auroras, meteor showers, and eclipses.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-gray-300 text-sm">🌍 Postal Code Precision</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-gray-300 text-sm">⚡ 15-min Updates</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-gray-300 text-sm">🔔 Webhook Alerts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-white text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get API Access
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl font-semibold text-white text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Documentation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex flex-wrap gap-8 justify-center lg:justify-start items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>NOAA + NASA Data</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SOC 2 Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="relative lg:block hidden">
          <div className="relative">
            {/* Main Card - API Response Preview */}
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-emerald-500/10 p-8 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
              
              {/* Code Preview */}
              <div className="relative space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400">API Response</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-gray-400">{&apos;{&apos;}</div>
                  <div className="pl-4">
                    <span className="text-purple-400">"event"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-emerald-400">"Northern Lights"</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"location"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-emerald-400">"98101"</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"probability"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-cyan-400">87</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"kp_index"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-cyan-400">6.2</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"cloud_cover"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-cyan-400">12</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"peak_time"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-emerald-400">"2024-01-15T23:30:00Z"</span>
                  </div>
                  <div className="text-gray-400">{&apos;}&apos;}</div>
                </div>
              </div>

              {/* Live indicator */}
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Updated 2 minutes ago</span>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -left-8 top-1/4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl border border-emerald-500/30 p-4 shadow-lg animate-float">
              <div className="text-2xl font-bold text-white">92%</div>
              <div className="text-xs text-gray-300">Accuracy Rate</div>
            </div>

            <div className="absolute -right-8 bottom-1/4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-xl border border-purple-500/30 p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-white">15min</div>
              <div className="text-xs text-gray-300">Update Interval</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-3xl font-bold text-emerald-400 mb-2">3</div>
          <div className="text-sm text-gray-400">Event Types Covered</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
          <div className="text-sm text-gray-400">Postal Codes</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-3xl font-bold text-purple-400 mb-2">&lt;100ms</div>
          <div className="text-sm text-gray-400">API Response Time</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
          <div className="text-sm text-gray-400">Monitoring</div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
  `}</style>
</div>
  );
}