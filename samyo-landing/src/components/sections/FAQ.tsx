import { faqs } from "../../data/faqs";
import { SectionHeading } from "../ui/SectionHeading";
import { Accordion } from "../ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" />
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
