import { SectionHeading } from "../ui/SectionHeading";

const formats = [
  { name: "DOCX", use: "Editable Word document for editing and sharing", icon: "📄" },
  { name: "TXT", use: "Plain text for simple, universal use", icon: "📝" },
  { name: "SRT", use: "Subtitle file with timestamps for video players and editors", icon: "🎬" },
  { name: "VTT", use: "Web-friendly subtitle and caption format", icon: "🌐" },
  { name: "PDF", use: "Clean, read-only copy for sharing or archiving", icon: "📑" },
];

export function Formats() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Delivered in the Format You Need" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {formats.map((format, index) => (
            <div
              key={format.name}
              className="bg-white rounded-xl border border-slate-200 p-5 text-center hover:border-accent-200 hover:shadow-md transition-all motion-safe:animate-fade-in-up group"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform" aria-hidden="true">
                {format.icon}
              </span>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                {format.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {format.use}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-8 max-w-xl mx-auto">
          Timestamped subtitle formats (SRT and VTT) can be provided when
          required. Tell us which format you need when you request a quote.
        </p>
      </div>
    </section>
  );
}
