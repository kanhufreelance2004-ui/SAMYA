import { useState, useCallback } from "react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `panel-${item.id}`;
        const buttonId = `btn-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-300 ${
              isOpen
                ? "border-accent-200 bg-accent-50/30 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex items-center justify-between w-full px-6 py-4 text-left text-slate-800 font-medium text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 rounded-xl"
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
