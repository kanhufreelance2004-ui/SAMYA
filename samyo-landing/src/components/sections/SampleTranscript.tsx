import { SectionHeading } from "../ui/SectionHeading";

export function SampleTranscript() {
  return (
    <section className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="See What a Finished Transcript Looks Like" />

        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-medium rounded-full border border-amber-200">
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Fictional demonstration for illustration only
            </span>
          </div>

          {/* Transcript Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 border-b border-slate-100">
              <div className="w-3 h-3 rounded-full bg-red-300" aria-hidden="true" />
              <div className="w-3 h-3 rounded-full bg-amber-300" aria-hidden="true" />
              <div className="w-3 h-3 rounded-full bg-green-300" aria-hidden="true" />
              <span className="ml-3 text-xs text-slate-400 font-medium">
                transcript_sample.txt
              </span>
            </div>

            {/* Transcript Content */}
            <div className="p-6 md:p-8 font-mono text-sm leading-loose space-y-4">
              <div>
                <span className="text-slate-400 tabular-nums">[00:01:12]</span>{" "}
                <span className="font-semibold text-accent-600">Speaker 1:</span>
                <br />
                <span className="text-slate-700">
                  Welcome everyone. Today we're going to discuss how small teams
                  can plan their content calendar without feeling overwhelmed.
                </span>
              </div>
              <div>
                <span className="text-slate-400 tabular-nums">[00:01:18]</span>{" "}
                <span className="font-semibold text-teal-600">Speaker 2:</span>
                <br />
                <span className="text-slate-700">
                  Thank you for having me. I'm excited to be here.
                </span>
              </div>
            </div>
          </div>

          {/* Callouts */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Timestamps", "Speaker labels", "Clean paragraphs"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-50 text-accent-700 text-sm font-medium rounded-lg border border-accent-100"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
