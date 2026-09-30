import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Have an Audio or Video File That Needs Transcribing?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Send your file and requirements to receive a transcription quote.
            </p>
            <Button as="a" href="#contact" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-0 shadow-lg">
              Request a Quote
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
