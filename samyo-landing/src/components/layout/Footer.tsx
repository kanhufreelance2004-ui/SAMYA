export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center text-white text-sm font-bold" aria-hidden="true">
                S
              </span>
              <span className="font-bold text-lg text-white">
                Samyo Transcription Services
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Professional English transcription of audio and video files.
              Accurate, clearly formatted, and delivered on time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <span className="text-slate-300">[your-email@example.com]</span>
              </li>
              <li>
                <span className="text-slate-500">WhatsApp:</span>{" "}
                <span className="text-slate-300">[WhatsApp number / link]</span>
              </li>
              <li className="flex gap-3 pt-2">
                <span className="text-slate-500">[LinkedIn]</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-500">[Instagram]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Samyo Transcription Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
