import { FaWhatsapp } from "react-icons/fa";

// Set your number in international format, no +, no spaces, no dashes.
// Example: US number (555) 123-4567 -> "15551234567"
const WHATSAPP_NUMBER = "+923356353506";
const DEFAULT_MESSAGE = "Hi Alex! I saw your portfolio and wanted to reach out.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center"
    >
      {/* pulsing glow ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md" />

      {/* button */}
      <span className="glass relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#25D366] text-2xl text-white shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
        <FaWhatsapp />
      </span>

      {/* tooltip */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-void/90 px-3 py-1.5 font-mono text-xs text-white opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
