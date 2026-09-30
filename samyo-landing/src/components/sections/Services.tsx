import { services } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Transcription Services for Every Kind of Recording" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="p-6 motion-safe:animate-fade-in-up group"
              // @ts-expect-error style prop for animation delay
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
