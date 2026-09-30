export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What types of files can I submit?",
    answer:
      "Most common audio and video formats are accepted, such as MP3, WAV, M4A, MP4 and MOV. If you're unsure about your file, mention it in your quote request.",
  },
  {
    id: "faq-2",
    question: "How is transcription pricing calculated?",
    answer:
      "Pricing depends on duration, audio quality, number of speakers, turnaround time, timestamp needs, level of verbatim, and technical vocabulary. You'll receive a quote before any work begins.",
  },
  {
    id: "faq-3",
    question: "Do you provide timestamps?",
    answer:
      "Yes. Timestamps can be added at set intervals or at speaker changes. Let us know your preference when requesting a quote.",
  },
  {
    id: "faq-4",
    question: "Can you identify different speakers?",
    answer:
      "Yes. Speakers can be labelled (for example Speaker 1, Speaker 2, or by name if you provide them). Clear audio makes identification more reliable.",
  },
  {
    id: "faq-5",
    question: "Do you provide clean verbatim transcription?",
    answer:
      "Yes. Clean verbatim removes filler words, false starts and repetitions while keeping the meaning and tone of what was said. Full verbatim is also available.",
  },
  {
    id: "faq-6",
    question: "Can you transcribe interviews and podcasts?",
    answer:
      "Yes. Interviews and podcasts are among the most common projects, including multi-speaker recordings.",
  },
  {
    id: "faq-7",
    question: "What file formats will I receive?",
    answer:
      "Transcripts can be delivered as DOCX, TXT, PDF, and, when timestamps are needed, SRT or VTT.",
  },
  {
    id: "faq-8",
    question: "How should I submit my audio or video?",
    answer:
      "Use the contact form to describe your project and requirements. You can then share the file through a link or another method agreed after your quote request.",
  },
];
