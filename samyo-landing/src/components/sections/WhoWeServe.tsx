import { audiences } from "../../data/audiences";
import { SectionHeading } from "../ui/SectionHeading";

export function WhoWeServe() {
  return (
    <section className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built for People Who Work With Spoken Words" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.id}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-accent-200 hover:shadow-md transition-all motion-safe:animate-fade-in-up group"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform" aria-hidden="true">
                {audience.icon}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {audience.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
