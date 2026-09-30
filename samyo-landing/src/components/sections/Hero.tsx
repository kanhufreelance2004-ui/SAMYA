import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 motion-safe:animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="motion-safe:animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Accurate Audio &amp; Video Transcription,{" "}
              <span className="text-accent-600">Delivered Clearly.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Turn your audio and video into clean, readable and professionally
              formatted transcripts. Ideal for podcasts, interviews, research,
              YouTube videos and business content.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="#contact" size="lg">
                Get a Free Quote
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button as="a" href="#services" variant="outline" size="lg">
                View Services
              </Button>
            </div>
          </div>

          {/* Flow Graphic */}
          <div className="motion-safe:animate-fade-in-up motion-safe:animation-delay-200 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
              {/* Step 1: Audio/Video */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-36 h-36 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow">
                  {/* Waveform SVG */}
                  <svg className="w-16 h-12 text-accent-600" viewBox="0 0 64 48" fill="none" aria-hidden="true">
                    <rect x="4" y="20" width="3" height="8" rx="1.5" fill="currentColor" opacity="0.6" />
                    <rect x="10" y="14" width="3" height="20" rx="1.5" fill="currentColor" opacity="0.8" />
                    <rect x="16" y="8" width="3" height="32" rx="1.5" fill="currentColor" />
                    <rect x="22" y="16" width="3" height="16" rx="1.5" fill="currentColor" opacity="0.7" />
                    <rect x="28" y="6" width="3" height="36" rx="1.5" fill="currentColor" />
                    <rect x="34" y="12" width="3" height="24" rx="1.5" fill="currentColor" opacity="0.9" />
                    <rect x="40" y="18" width="3" height="12" rx="1.5" fill="currentColor" opacity="0.5" />
                    <rect x="46" y="10" width="3" height="28" rx="1.5" fill="currentColor" opacity="0.8" />
                    <rect x="52" y="16" width="3" height="16" rx="1.5" fill="currentColor" opacity="0.6" />
                    <rect x="58" y="20" width="3" height="8" rx="1.5" fill="currentColor" opacity="0.4" />
                  </svg>
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-accent-600 translate-x-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm font-medium text-slate-600">
                  Audio / Video
                </span>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-slate-300 flex-shrink-0 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* Step 2: Transcription */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-36 h-36 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow">
                  <svg className="w-14 h-14 text-accent-600" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                    <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2.5" strokeDasharray="150.8" strokeDashoffset="37.7" strokeLinecap="round" className="motion-safe:animate-spin-slow origin-center" />
                    <path d="M22 28l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-600">
                  Transcription
                </span>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-slate-300 flex-shrink-0 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* Step 3: Editable Text */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-36 h-36 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow">
                  <svg className="w-14 h-14 text-accent-600" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <rect x="10" y="6" width="36" height="44" rx="4" stroke="currentColor" strokeWidth="2" />
                    <line x1="18" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                    <line x1="18" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                    <line x1="18" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                    <line x1="18" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                    <circle cx="14" cy="18" r="1.5" fill="currentColor" opacity="0.8" />
                    <circle cx="14" cy="30" r="1.5" fill="currentColor" opacity="0.8" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-600">
                  Editable Text
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
