import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import FloatingLabelInput from "./FloatingLabelInput";

// To go live: create a free account at https://www.emailjs.com, then
// replace the three constants below and uncomment the emailjs call in
// handleSubmit. `npm install @emailjs/browser` first.
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = "Tell me your name.";
    if (!values.email.trim()) next.email = "An email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "That email doesn't look right.";
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = "A few more words would help — 10 characters minimum.";
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    try {
      // import emailjs from "@emailjs/browser";
      // await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      await new Promise((resolve) => setTimeout(resolve, 1100)); // demo delay
      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(145,94,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(145,94,255,0.15) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <SectionHeading method="POST" path="/contact" title="Let's build something" description="Open to freelance work, contract roles, and full-time opportunities." />

      <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 px-6 md:grid-cols-[1.2fr,1fr]">
        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-8">
            <FloatingLabelInput id="name" label="Your name" value={form.name} onChange={handleChange} error={errors.name} />
            <FloatingLabelInput id="email" label="Email address" type="email" value={form.email} onChange={handleChange} error={errors.email} />
            <FloatingLabelInput id="message" label="What are you building?" as="textarea" value={form.message} onChange={handleChange} error={errors.message} />

            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor="hover"
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-mono text-sm font-semibold text-void transition-opacity disabled:opacity-70"
            >
              {status === "sending" && "Sending…"}
              {status === "sent" && (
                <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                  <FiCheck /> Message sent
                </motion.span>
              )}
              {status === "idle" && (
                <>
                  <FiSend /> Send message
                </>
              )}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass flex h-full flex-col justify-between rounded-3xl p-6 sm:p-8">
            <div>
              <p className="eyebrow">Direct</p>
              <a
                href="mailto:sayyedahmedhussain6@gmail.com"
                data-cursor="hover"
                className="focus-ring mt-3 flex items-center gap-2 font-mono text-sm text-white hover:text-accent"
              >
                <FiMail /> sayyedahmedhussain6@gmail.com
              </a>
            </div>

            <div className="mt-8">
              <p className="eyebrow">Elsewhere</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://github.com/sayyedahmedhussain"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  aria-label="GitHub"
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-colors hover:border-accent hover:text-accent"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sayyed-ahmed-hussain-626914293/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  aria-label="LinkedIn"
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg transition-colors hover:border-accent hover:text-accent"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>

            <p className="mt-8 font-mono text-[11px] text-muted">
              200 OK — replies usually land within a day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
