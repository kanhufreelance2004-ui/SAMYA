import { useFormValidation } from "../../hooks/useFormValidation";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const serviceOptions = [
  "General",
  "Clean Verbatim",
  "Full Verbatim",
  "Interview",
  "Podcast",
  "YouTube/Video",
  "Academic/Research",
  "Business",
  "Timestamped",
  "Not sure",
];

export function Contact() {
  const {
    values,
    errors,
    touched,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormValidation();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-xl text-slate-800 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent ${
      errors[field as keyof typeof errors] && touched.has(field)
        ? "border-red-400 ring-1 ring-red-200"
        : "border-slate-200 hover:border-slate-300"
    }`;

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">
              Quote Request Sent!
            </h2>
            <p className="text-green-700 mb-6">
              Thank you for your request. You'll hear back shortly with a quote
              and turnaround time.
            </p>
            <Button onClick={resetForm} variant="outline">
              Send Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Request a Quote" />

        <form onSubmit={onSubmit} noValidate className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              className={inputClass("name")}
              placeholder="Your name"
              aria-describedby={errors.name && touched.has("name") ? "name-error" : undefined}
              aria-invalid={!!(errors.name && touched.has("name"))}
            />
            {errors.name && touched.has("name") && (
              <p id="name-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              className={inputClass("email")}
              placeholder="your@email.com"
              aria-describedby={errors.email && touched.has("email") ? "email-error" : undefined}
              aria-invalid={!!(errors.email && touched.has("email"))}
            />
            {errors.email && touched.has("email") && (
              <p id="email-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          {/* Service Required */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={(e) => handleChange("service", e.target.value)}
              onBlur={() => handleBlur("service")}
              className={inputClass("service")}
              aria-describedby={errors.service && touched.has("service") ? "service-error" : undefined}
              aria-invalid={!!(errors.service && touched.has("service"))}
            >
              <option value="">Select a service…</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && touched.has("service") && (
              <p id="service-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {errors.service}
              </p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Audio/Video Duration <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={values.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              onBlur={() => handleBlur("duration")}
              className={inputClass("duration")}
              placeholder="e.g. 45 minutes"
              aria-describedby={errors.duration && touched.has("duration") ? "duration-error" : undefined}
              aria-invalid={!!(errors.duration && touched.has("duration"))}
            />
            {errors.duration && touched.has("duration") && (
              <p id="duration-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {errors.duration}
              </p>
            )}
          </div>

          {/* Additional Requirements */}
          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Additional Requirements{" "}
              <span className="text-slate-400">(optional)</span>
            </label>
            <input
              type="text"
              id="requirements"
              name="requirements"
              value={values.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
              className={inputClass("requirements")}
              placeholder="Speakers, timestamps, format, deadline…"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              className={`${inputClass("message")} resize-y`}
              placeholder="Tell us about your project…"
              aria-describedby={errors.message && touched.has("message") ? "message-error" : undefined}
              aria-invalid={!!(errors.message && touched.has("message"))}
            />
            {errors.message && touched.has("message") && (
              <p id="message-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full">
            Request a Quote
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Button>
        </form>

        {/* Contact Placeholders */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <p className="text-center text-sm text-slate-500 mb-4">
            Or reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-600">
            <span>
              Email:{" "}
              <span className="text-accent-600 font-medium">
                [your-email@example.com]
              </span>
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>
              WhatsApp:{" "}
              <span className="text-accent-600 font-medium">
                [WhatsApp number / link]
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
