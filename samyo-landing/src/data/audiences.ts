export interface Audience {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const audiences: Audience[] = [
  {
    id: "content-creators",
    title: "Content Creators",
    description: "Turn videos into captions, scripts and written content.",
    icon: "🎥",
  },
  {
    id: "podcasters",
    title: "Podcasters",
    description: "Make every episode searchable, accessible and reusable.",
    icon: "🎙️",
  },
  {
    id: "researchers",
    title: "Researchers",
    description:
      "Accurate records of interviews and focus groups for analysis.",
    icon: "🔬",
  },
  {
    id: "students",
    title: "Students",
    description:
      "Lectures and interviews converted into text for study and assignments.",
    icon: "📚",
  },
  {
    id: "businesses",
    title: "Businesses",
    description: "Meetings, webinars and calls documented clearly.",
    icon: "🏢",
  },
  {
    id: "coaches-consultants",
    title: "Coaches & Consultants",
    description:
      "Session recordings turned into notes and client-ready material.",
    icon: "💡",
  },
];
