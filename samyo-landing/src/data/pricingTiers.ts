export interface PricingTier {
  id: string;
  title: string;
  description: string;
  features: string[];
  serviceValue: string;
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "standard",
    title: "Standard",
    description:
      "For clear recordings with one or two speakers and straightforward content.",
    features: [
      "Clear audio recordings",
      "1–2 speakers",
      "Standard turnaround",
      "Clean formatting",
      "DOCX or TXT delivery",
    ],
    serviceValue: "General",
  },
  {
    id: "clean-verbatim",
    title: "Clean Verbatim",
    description:
      "For content that needs a polished, easy-to-read transcript without filler words.",
    features: [
      "Filler words removed",
      "Polished, readable output",
      "Speaker labels included",
      "Professional formatting",
      "Multiple format options",
    ],
    serviceValue: "Clean Verbatim",
    highlighted: true,
  },
  {
    id: "specialized",
    title: "Specialized / Complex",
    description:
      "For technical subjects, multiple speakers, difficult audio, or full verbatim requirements.",
    features: [
      "Technical vocabulary",
      "Multiple speakers",
      "Difficult audio handling",
      "Full verbatim available",
      "Timestamped options",
    ],
    serviceValue: "Full Verbatim",
  },
];
