export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "general",
    title: "General Transcription",
    description:
      "Clear, readable transcripts of everyday audio and video, with clean punctuation and paragraphing.",
    icon: "📄",
  },
  {
    id: "clean-verbatim",
    title: "Clean Verbatim",
    description:
      "Captures what was said while removing filler words, false starts and stutters for smooth reading.",
    icon: "✨",
  },
  {
    id: "full-verbatim",
    title: "Full Verbatim",
    description:
      "Records everything as spoken, including fillers, repetitions and pauses, when exact wording matters.",
    icon: "📝",
  },
  {
    id: "interview",
    title: "Interview Transcription",
    description:
      "Multi-speaker interviews with clear speaker labels, suited to journalism, research and hiring.",
    icon: "🎙️",
  },
  {
    id: "podcast",
    title: "Podcast Transcription",
    description:
      "Episode transcripts for show notes, accessibility, blog posts and repurposed content.",
    icon: "🎧",
  },
  {
    id: "youtube-video",
    title: "YouTube & Video Transcription",
    description:
      "Transcripts for videos to support captions, scripts, SEO and content repurposing.",
    icon: "🎬",
  },
  {
    id: "academic-research",
    title: "Academic & Research Transcription",
    description:
      "Careful handling of interviews, focus groups, lectures and technical vocabulary.",
    icon: "🎓",
  },
  {
    id: "business",
    title: "Business Transcription",
    description:
      "Meetings, webinars, calls and presentations turned into professional, shareable records.",
    icon: "💼",
  },
  {
    id: "timestamped",
    title: "Timestamped Transcription",
    description:
      "Time markers added at agreed intervals or speaker changes so you can find any moment fast.",
    icon: "⏱️",
  },
];
