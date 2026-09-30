# Samyo Transcription Services — Landing Page Brief

A frontend-only landing page for a freelance English transcription service. This file contains the project goals, design direction, technical requirements, and the full page copy, section by section.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| Brand | Samyo Transcription Services |
| Purpose | Attract clients who need high-quality English transcription of audio and video files |
| Scope | Frontend landing page only |
| Out of scope | Payments, authentication, database, file-upload infrastructure |

### Target Customers
YouTubers and content creators, podcasters, researchers and academics, students, businesses, coaches and consultants, interviewers, and any professional who needs audio/video converted into accurate text.

### Services Offered
General, clean verbatim, full verbatim, interview, podcast, YouTube/video, academic and research, business, timestamped, and audio/video transcription, all in English.

---

## 2. Design Direction

The site should feel **professional, reliable, clean, human, modern, and easy to understand**, like a real freelance business rather than an AI-generated template.

**Use**
- Modern typography (one display or serif face for headings, one clean sans for body)
- Generous whitespace and professional cards
- Subtle animations and smooth scrolling
- Mobile-first, responsive layout
- Accessible contrast (WCAG AA minimum) and clear CTA buttons
- A calm, trustworthy palette (for example deep navy or ink, a warm neutral background, and one restrained accent color)

**Avoid**
- Excessive gradients and neon colors
- Generic AI imagery
- Fake statistics, client logos, reviews, certifications, or accuracy percentages
- Overly complicated animations

### Content Rules
- Never claim "99.9% accuracy" or "100% guaranteed accuracy."
- Never present AI-generated transcripts as automatically perfect.
- Do not show fixed prices. Pricing is quote-based.
- Do not invent contact details. Use clearly marked placeholders.

---

## 3. Technical Requirements

- **React + TypeScript + Tailwind CSS**
- Modular, reusable components
- Semantic, accessible HTML (landmarks, heading order, labels, focus states, `aria-expanded` on accordion buttons, skip link)
- Functional in-page navigation with smooth scroll and a mobile menu
- Functional FAQ accordion
- Client-side form validation with clear inline error messages
- Respect `prefers-reduced-motion`

### Suggested Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/
│   ├── services.ts
│   ├── faqs.ts
│   ├── audiences.ts
│   └── pricingTiers.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Accordion.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── Services.tsx
│       ├── WhyChooseUs.tsx
│       ├── HowItWorks.tsx
│       ├── Formats.tsx
│       ├── SampleTranscript.tsx
│       ├── Pricing.tsx
│       ├── WhoWeServe.tsx
│       ├── FAQ.tsx
│       ├── FinalCTA.tsx
│       └── Contact.tsx
└── hooks/
    └── useFormValidation.ts
```

---

## 4. Page Copy and Section Specs

### 4.1 Navigation

- **Brand:** Samyo Transcription Services
- **Links:** Services · How It Works · Pricing · FAQ · Contact
- **CTA button:** Get a Quote (links to `#contact`)
- Sticky header; collapses to a hamburger menu on mobile.

### 4.2 Hero

**Headline:** Accurate Audio & Video Transcription, Delivered Clearly.

**Supporting text:** Turn your audio and video into clean, readable and professionally formatted transcripts. Ideal for podcasts, interviews, research, YouTube videos and business content.

**Primary CTA:** Get a Free Quote → `#contact`
**Secondary CTA:** View Services → `#services`

**Visual:** A three-part flow graphic built with SVG/CSS (not stock imagery):

```
[ Audio / Video ]  →  [ Transcription ]  →  [ Editable Text ]
 waveform + play       processing step        document with
 button                                        speaker lines
```

### 4.3 Trust / Value Bar

Four short benefits with small icons:

1. **Accurate Transcription**: Careful attention to what is actually said.
2. **Human Proofreading**: Every transcript is reviewed by a person.
3. **Clear Formatting**: Readable paragraphs, speakers and timestamps.
4. **Reliable Delivery**: Agreed turnaround, clear communication.

### 4.4 Services

**Heading:** Transcription Services for Every Kind of Recording

| Service | Description |
|---|---|
| General Transcription | Clear, readable transcripts of everyday audio and video, with clean punctuation and paragraphing. |
| Clean Verbatim | Captures what was said while removing filler words, false starts and stutters for smooth reading. |
| Full Verbatim | Records everything as spoken, including fillers, repetitions and pauses, when exact wording matters. |
| Interview Transcription | Multi-speaker interviews with clear speaker labels, suited to journalism, research and hiring. |
| Podcast Transcription | Episode transcripts for show notes, accessibility, blog posts and repurposed content. |
| YouTube & Video Transcription | Transcripts for videos to support captions, scripts, SEO and content repurposing. |
| Academic & Research Transcription | Careful handling of interviews, focus groups, lectures and technical vocabulary. |
| Business Transcription | Meetings, webinars, calls and presentations turned into professional, shareable records. |
| Timestamped Transcription | Time markers added at agreed intervals or speaker changes so you can find any moment fast. |

Each card: icon, service name, 1–2 sentence description.

### 4.5 Why Choose Us

**Heading:** AI-Assisted Transcription + Careful Human Proofreading

**Intro:** Speech-to-text technology can speed up the first draft. But a draft is not a finished transcript. Every file is then reviewed, corrected, formatted and proofread by a person, because automated output can misread accents, names, technical terms and unclear audio.

**Highlights (with icons):**
- **Careful proofreading**: Line-by-line review against the audio.
- **Speaker identification**: Clear labels when there is more than one voice.
- **Timestamp formatting**: Consistent, easy-to-scan time markers.
- **Paragraph formatting**: Logical breaks so the text reads naturally.
- **Grammar and punctuation correction**: Clean, professional output.
- **Difficult-audio review**: Extra attention to noisy or unclear passages.
- **Confidential handling of client files**: Your recordings are treated as private.

### 4.6 How It Works

**Heading:** A Simple Four-Step Process

| Step | Title | Description |
|---|---|---|
| 01 | Upload Your File | Submit your audio or video along with your requirements. |
| 02 | Get a Quote | Your file and requirements are reviewed, then you receive pricing and turnaround information. |
| 03 | Transcription & Proofreading | The recording is transcribed and carefully reviewed. |
| 04 | Receive Your Transcript | Get the finished transcript in an appropriate editable format. |

> Note: No upload infrastructure is built yet. Step 01 points to the contact form, where the client describes the file and can share a link (Google Drive, Dropbox, etc.) once contacted.

### 4.7 Transcription Formats

**Heading:** Delivered in the Format You Need

| Format | Typical use |
|---|---|
| DOCX | Editable Word document for editing and sharing |
| TXT | Plain text for simple, universal use |
| SRT | Subtitle file with timestamps for video players and editors |
| VTT | Web-friendly subtitle and caption format |
| PDF | Clean, read-only copy for sharing or archiving |

**Note:** Timestamped subtitle formats (SRT and VTT) can be provided when required. Tell us which format you need when you request a quote.

### 4.8 Sample Transcript

**Heading:** See What a Finished Transcript Looks Like

**Label (clearly visible badge):** *Fictional demonstration for illustration only*

Styled as a document card with monospace timestamps and colored speaker labels:

```
[00:01:12] Speaker 1:
Welcome everyone. Today we're going to discuss how small teams can
plan their content calendar without feeling overwhelmed.

[00:01:18] Speaker 2:
Thank you for having me. I'm excited to be here.
```

**Callouts pointing to the sample:** Timestamps · Speaker labels · Clean paragraphs

### 4.9 Pricing

**Heading:** Pricing Based on Your Recording

**Intro:** Every recording is different, so pricing is quoted individually. Send your file and requirements and you'll receive a clear quote and turnaround time.

**What affects the price:**
- Audio/video duration
- Audio quality
- Number of speakers
- Required turnaround time
- Timestamp requirements
- Level of verbatim transcription
- Technical vocabulary

**Cards** (no prices shown):

| Card | Description | Button |
|---|---|---|
| Standard | For clear recordings with one or two speakers and straightforward content. | Request a Quote |
| Clean Verbatim | For content that needs a polished, easy-to-read transcript without filler words. | Request a Quote |
| Specialized / Complex | For technical subjects, multiple speakers, difficult audio, or full verbatim requirements. | Request a Quote |

All buttons scroll to `#contact` and can pre-select the matching option in the "Service Required" field.

### 4.10 Who We Serve

**Heading:** Built for People Who Work With Spoken Words

| Audience | Copy |
|---|---|
| Content Creators | Turn videos into captions, scripts and written content. |
| Podcasters | Make every episode searchable, accessible and reusable. |
| Researchers | Accurate records of interviews and focus groups for analysis. |
| Students | Lectures and interviews converted into text for study and assignments. |
| Businesses | Meetings, webinars and calls documented clearly. |
| Coaches & Consultants | Session recordings turned into notes and client-ready material. |

### 4.11 FAQ

Interactive accordion (one open at a time, keyboard accessible).

**What types of files can I submit?**
Most common audio and video formats are accepted, such as MP3, WAV, M4A, MP4 and MOV. If you're unsure about your file, mention it in your quote request.

**How is transcription pricing calculated?**
Pricing depends on duration, audio quality, number of speakers, turnaround time, timestamp needs, level of verbatim, and technical vocabulary. You'll receive a quote before any work begins.

**Do you provide timestamps?**
Yes. Timestamps can be added at set intervals or at speaker changes. Let us know your preference when requesting a quote.

**Can you identify different speakers?**
Yes. Speakers can be labelled (for example Speaker 1, Speaker 2, or by name if you provide them). Clear audio makes identification more reliable.

**Do you provide clean verbatim transcription?**
Yes. Clean verbatim removes filler words, false starts and repetitions while keeping the meaning and tone of what was said. Full verbatim is also available.

**Can you transcribe interviews and podcasts?**
Yes. Interviews and podcasts are among the most common projects, including multi-speaker recordings.

**What file formats will I receive?**
Transcripts can be delivered as DOCX, TXT, PDF, and, when timestamps are needed, SRT or VTT.

**How should I submit my audio or video?**
Use the contact form to describe your project and requirements. You can then share the file through a link or another method agreed after your quote request.

> Adjust any answer to match what the freelancer actually offers (accepted file types, languages, and delivery method) before publishing.

### 4.12 Final CTA

**Heading:** Have an Audio or Video File That Needs Transcribing?
**Text:** Send your file and requirements to receive a transcription quote.
**Button:** Request a Quote → `#contact`

### 4.13 Contact

**Heading:** Request a Quote

**Form fields**

| Field | Type | Validation |
|---|---|---|
| Name | text | Required |
| Email | email | Required, valid format |
| Service Required | select | Required (options: General, Clean Verbatim, Full Verbatim, Interview, Podcast, YouTube/Video, Academic/Research, Business, Timestamped, Not sure) |
| Audio/Video Duration | text | Required (e.g. "45 minutes") |
| Additional Requirements | text/textarea | Optional (speakers, timestamps, format, deadline) |
| Message | textarea | Required, minimum length |

**Submit button:** Request a Quote

**Behavior:** Validate on submit and on blur, show inline errors linked with `aria-describedby`, and show a success message. There is no backend yet, so leave a clear `// TODO: connect to email service or form handler` in the submit function.

**Contact placeholders (do not invent details):**
- Email: `[your-email@example.com]`
- WhatsApp: `[WhatsApp number / link]`
- Social: `[LinkedIn URL]` · `[Instagram URL]` · `[Other professional profile]`

### 4.14 Footer

- **Samyo Transcription Services** with a one-line description
- Links: Services · How It Works · FAQ · Contact
- Legal: Privacy Policy · Terms of Service (placeholder links)
- Copyright line with current year

---

## 5. Accessibility Checklist

- [ ] Skip-to-content link
- [ ] One `h1`, logical `h2`/`h3` hierarchy
- [ ] Visible focus styles on every interactive element
- [ ] Text contrast of at least 4.5:1
- [ ] Buttons and links have descriptive labels
- [ ] Accordion uses `button`, `aria-expanded` and `aria-controls`
- [ ] Form fields have visible `label`s and error messages announced to screen readers
- [ ] Decorative icons hidden from assistive tech (`aria-hidden`)
- [ ] Animations disabled under `prefers-reduced-motion`

## 6. Launch Checklist

- [ ] Replace all contact placeholders with real details
- [ ] Confirm accepted file types, turnaround options and delivery methods
- [ ] Write real Privacy Policy and Terms of Service
- [ ] Connect the form to an email or form service
- [ ] Add real testimonials only if genuine and permitted
- [ ] Add meta title, description and Open Graph tags
- [ ] Test on mobile, tablet and desktop
