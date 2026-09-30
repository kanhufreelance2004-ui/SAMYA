import { pricingTiers } from "../../data/pricingTiers";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const factors = [
  "Audio/video duration",
  "Audio quality",
  "Number of speakers",
  "Required turnaround time",
  "Timestamp requirements",
  "Level of verbatim transcription",
  "Technical vocabulary",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pricing Based on Your Recording"
          subtitle="Every recording is different, so pricing is quoted individually. Send your file and requirements and you'll receive a clear quote and turnaround time."
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.id}
              highlighted={tier.highlighted}
              className="p-7 flex flex-col motion-safe:animate-fade-in-up relative"
              // @ts-expect-error style for animation delay
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-600 text-white text-xs font-bold rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {tier.title}
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {tier.description}
              </p>
              <ul className="space-y-2.5 mb-7 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                as="a"
                href={`#contact`}
                variant={tier.highlighted ? "primary" : "outline"}
                className="w-full"
                onClick={() => {
                  // Pre-select the service in the contact form
                  setTimeout(() => {
                    const select = document.getElementById("service") as HTMLSelectElement | null;
                    if (select) {
                      select.value = tier.serviceValue;
                      select.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                  }, 100);
                }}
              >
                Request a Quote
              </Button>
            </Card>
          ))}
        </div>

        {/* Factors */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-900 text-center mb-4">
            What affects the price
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {factors.map((factor) => (
              <span
                key={factor}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
