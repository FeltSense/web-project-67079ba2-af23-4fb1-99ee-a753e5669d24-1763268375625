export default function Services() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
  {/* Animated aurora background effect */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <div className="text-center mb-16 md:mb-24">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        <span className="text-sm font-medium text-emerald-300">API Capabilities</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
        Precision Sky Event Intelligence
      </h2>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Four powerful capabilities that transform space weather data into actionable, location-specific predictions
      </p>
    </div>

    {/* Services grid with alternating layouts */}
    <div className="space-y-12 md:space-y-20">
      
      {/* Service 1 - Real-time Probability */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-4">
            <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wide">Live Updates</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real-Time Probability Calculations
          </h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Our algorithms process space weather data, cloud cover, and atmospheric conditions every 15 minutes to deliver continuously updated visibility probabilities. Never miss a celestial event again.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">15-minute refresh intervals for accuracy</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Multi-source data fusion from NOAA, NASA, and meteorological services</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Historical accuracy rate of 87% for aurora predictions</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-400">Live Probability Feed</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs text-emerald-400">Active</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Aurora Visibility</span>
                  <span className="text-2xl font-bold text-emerald-400">82%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-xs text-slate-400 mt-2">Updated 3 min ago • Clear skies • Low light pollution</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-indigo-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Meteor Shower</span>
                  <span className="text-2xl font-bold text-indigo-400">45%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-slate-400 mt-2">Updated 8 min ago • Partial clouds • Peak at 2:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Postal Code Precision */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Checking Location</p>
                  <p className="text-lg font-bold text-white">98101 - Seattle, WA</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">Light Pollution</p>
                  <p className="text-xl font-bold text-yellow-400">Moderate</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">Cloud Cover</p>
                  <p className="text-xl font-bold text-blue-400">23%</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">Air Quality</p>
                  <p className="text-xl font-bold text-emerald-400">Good</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">Moon Phase</p>
                  <p className="text-xl font-bold text-slate-300">Waning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wide">Hyper-Local</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Postal Code Precision
          </h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Deliver hyper-localized predictions by accounting for light pollution levels, terrain elevation, local weather patterns, and atmospheric conditions unique to each postal code.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Coverage across North America, Europe, and expanding globally</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Light pollution data from satellite imagery and ground sensors</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Terrain-aware calculations for mountain and coastal regions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Service 3 - Webhook Notifications */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Automation</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Webhook Notifications
          </h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Automate your sky event alerts with intelligent webhooks that trigger based on customizable probability thresholds. Perfect for newsrooms needing instant notifications and apps requiring real-time updates.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Custom threshold triggers (e.g., alert when probability exceeds 70%)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">JSON payload with full event details and timing windows</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Retry logic and delivery confirmation for mission-critical alerts</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <span className="text-xs text-slate-400 ml-2 font-mono">webhook_config.json</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <pre className="text-slate-300">
                <span className="text-purple-400">{`{`}</span>{&apos;\n&apos;}
                <span className="text-slate-500">  // Webhook endpoint</span>{&apos;\n&apos;}
                <span className="text-blue-400">  "url"</span>: <span className="text-emerald-400">"https://api.your-app.com/alerts"</span>,{&apos;\n&apos;}
                {&apos;\n&apos;}
                <span className="text-slate-500">  // Trigger conditions</span>{&apos;\n&apos;}
                <span className="text-blue-400">  "triggers"</span>: <span className="text-purple-400">{`{`}</span>{&apos;\n&apos;}
                <span className="text-blue-400">    "aurora"</span>: <span className="text-purple-400">{`{`}</span>{&apos;\n&apos;}
                <span className="text-blue-400">      "threshold"</span>: <span className="text-yellow-400">75</span>,{&apos;\n&apos;}
                <span className="text-blue-400">      "locations"</span>: <span className="text-purple-400">[</span><span className="text-emerald-400">"98101"</span>, <span className="text-emerald-400">"10001"</span><span className="text-purple-400">]</span>{&apos;\n&apos;}
                    <span className="text-purple-400">{`}`}</span>{&apos;\n&apos;}
                  <span className="text-purple-400">{`}`}</span>,{&apos;\n&apos;}
                {&apos;\n&apos;}
                <span className="text-slate-500">  // Status</span>{&apos;\n&apos;}
                <span className="text-blue-400">  "active"</span>: <span className="text-yellow-400">true</span>,{&apos;\n&apos;}
                <span className="text-blue-400">  "last_triggered"</span>: <span className="text-emerald-400">"2024-01-15T03:42:00Z"</span>{&apos;\n&apos;}
                <span className="text-purple-400">{`}`}</span>
              </pre>
            </div>
            <div className="bg-emerald-500/10 border-t border-emerald-500/20 p-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs text-emerald-300 font-medium">3 webhooks active • 847 alerts sent this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Embeddable Widgets */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
          <div className="relative space-y-4">
            {/* Widget preview 1 */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-bold text-lg">Tonight&apos;s Sky Events</h4>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">Live</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                  <div className="text-3xl">🌌</div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Aurora Borealis</p>
                    <p className="text-slate-400 text-xs">Peak visibility: 11:30 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold text-lg">82%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                  <div className="text-3xl">☄️</div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Geminid Meteors</p>
                    <p className="text-slate-400 text-xs">Peak visibility: 2:00 AM</p>
                  </div>
                  <div className="text-right">
                    <p className="text-indigo-400 font-bold text-lg">58%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Widget preview 2 - Compact */}
            <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Aurora Alert for 98101</p>
                  <p className="text-slate-400 text-xs">Visibility improving in your area</p>
                </div>
                <div className="text-emerald-400 font-bold text-xl">76%</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">Integration</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Embeddable Widgets
          </h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Drop beautiful, responsive widgets directly into your website or app with a single line of code. Fully customizable themes and layouts that match your brand while delivering real-time sky event data to your users.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Multiple layouts: full dashboard, compact card, or notification banner</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Theme customization with CSS variables for perfect brand alignment</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-300">Auto-updates without page refresh • React, Vue, and vanilla JS support</span>
            </li>
          </ul>
          <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <p className="text-xs text-slate-400 mb-2 font-mono">Integration example:</p>
            <code className="text-sm text-emerald-400 font-mono block">
              {`<script src="northern-lights-widget.js"></script>`}
            </code>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-20 text-center">
      <div className="inline-block bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl border border-indigo-500/30 p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to integrate precise sky event predictions?
        </h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Join newsrooms, weather apps, and astronomy platforms already using Northern Lights API
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105">
            Get API Access
          </button>
          <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}