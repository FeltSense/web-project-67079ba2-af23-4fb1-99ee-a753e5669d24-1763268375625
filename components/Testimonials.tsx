import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
  {/* Animated aurora background effect */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-emerald-400 text-sm font-medium tracking-wide">TRUSTED BY INDUSTRY LEADERS</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Real Results from
        <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Real Organizations
        </span>
      </h2>
      <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
        See how newsrooms, apps, and platforms are transforming sky event coverage with Northern Lights API
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 - News Organization */}
      <div className="group relative bg-gradient-to-br from-slate-900/50 to-indigo-900/30 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
        
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="text-slate-300 text-base leading-relaxed mb-6">
          "We reduced false aurora alerts by <span className="text-emerald-400 font-semibold">87%</span> in the first month. Our audience engagement jumped <span className="text-emerald-400 font-semibold">3.2x</span> because viewers actually trusted our predictions. The webhook system alerts our team 6-12 hours ahead with 94% accuracy—game-changing for broadcast scheduling."
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-emerald-500/30">
            <Image 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" 
              width={56} 
              height={56} 
              alt="Sarah Chen profile"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
          </div>
          <div>
            <div className="text-white font-semibold">Sarah Chen</div>
            <div className="text-slate-400 text-sm">Chief Meteorologist</div>
            <div className="text-emerald-400 text-sm font-medium">CBC North News</div>
          </div>
        </div>

        {/* Accent corner */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tl-2xl"></div>
      </div>

      {/* Testimonial 2 - Weather App */}
      <div className="group relative bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full filter blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="text-slate-300 text-base leading-relaxed mb-6">
          "Integration took our team <span className="text-cyan-400 font-semibold">under 4 hours</span>. The embeddable widgets are gorgeous and the postal-code precision means users get hyperlocal predictions. We&apos;ve seen <span className="text-cyan-400 font-semibold">230K+ premium subscriptions</span> directly attributed to the aurora feature. ROI positive in week three."
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-cyan-500/30">
            <Image 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              width={56} 
              height={56} 
              alt="Marcus Rodriguez profile"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
          </div>
          <div>
            <div className="text-white font-semibold">Marcus Rodriguez</div>
            <div className="text-slate-400 text-sm">Head of Product</div>
            <div className="text-cyan-400 text-sm font-medium">SkyWatch Mobile</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-tl-2xl"></div>
      </div>

      {/* Testimonial 3 - Tourism Platform */}
      <div className="group relative bg-gradient-to-br from-slate-900/50 to-emerald-900/30 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-3xl group-hover:bg-purple-500/10 transition-all"></div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="text-slate-300 text-base leading-relaxed mb-6">
          "Booking confidence is everything in aurora tourism. Northern Lights API increased our <span className="text-purple-400 font-semibold">advance bookings by 156%</span> and reduced last-minute cancellations by <span className="text-purple-400 font-semibold">68%</span>. The multi-event coverage—Perseids, eclipses, Geminids—keeps our season year-round now."
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500/30">
            <Image 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" 
              width={56} 
              height={56} 
              alt="Elena Virtanen profile"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
          </div>
          <div>
            <div className="text-white font-semibold">Elena Virtanen</div>
            <div className="text-slate-400 text-sm">Co-Founder & CEO</div>
            <div className="text-purple-400 text-sm font-medium">Arctic Sky Tours</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tl-2xl"></div>
      </div>
    </div>

    {/* Featured Long-form Testimonial */}
    <div className="relative bg-gradient-to-br from-slate-900/80 to-indigo-900/40 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-8 md:p-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[100px]"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-4 ring-emerald-500/30">
              <Image 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop" 
                width={128} 
                height={128} 
                alt="Dr. James Kowalski profile"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-purple-500/20"></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-slate-200 text-lg md:text-xl leading-relaxed mb-6 italic">
              "As an astronomy platform serving 2.4M users globally, we needed something bulletproof. We tested Northern Lights API against three competitors and our own in-house model. The results were stunning: <span className="text-emerald-400 font-semibold not-italic">91.7% accuracy rate</span> versus our previous <span className="text-slate-400 not-italic">64%</span>. The light pollution + cloud cover + space weather triangulation is what sets it apart. We&apos;ve processed <span className="text-cyan-400 font-semibold not-italic">18.7M API calls</span> in six months with zero downtime. The webhook system saved our dev team <span className="text-purple-400 font-semibold not-italic">40+ hours per week</span> in manual monitoring. Honestly, this API is what finally made hyperlocal sky event prediction viable at scale."
            </blockquote>

            <div>
              <div className="text-white font-bold text-xl mb-1">Dr. James Kowalski</div>
              <div className="text-slate-400 text-base mb-1">Director of Engineering</div>
              <div className="text-emerald-400 font-semibold">Stellarium Observatory Network</div>
            </div>

            {/* Metrics bar */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700/50">
              <div>
                <div className="text-2xl font-bold text-emerald-400">91.7%</div>
                <div className="text-slate-400 text-sm">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">18.7M</div>
                <div className="text-slate-400 text-sm">API Calls</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">0</div>
                <div className="text-slate-400 text-sm">Downtime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-16 text-center">
      <p className="text-slate-400 text-sm mb-6">TRUSTED BY ORGANIZATIONS WORLDWIDE</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
        <div className="text-slate-500 font-semibold text-lg">CBC</div>
        <div className="text-slate-500 font-semibold text-lg">SkyWatch</div>
        <div className="text-slate-500 font-semibold text-lg">Stellarium</div>
        <div className="text-slate-500 font-semibold text-lg">Arctic Sky</div>
        <div className="text-slate-500 font-semibold text-lg">Weather+</div>
      </div>
    </div>
  </div>
</section>
  );
}