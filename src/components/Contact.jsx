import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

const items = [
  { label: "Email", value: profile.links.emailAddress, href: profile.links.email },
  { label: "LinkedIn", value: "shreya-bagewadi-85041537", href: profile.links.linkedin },
  { label: "GitHub", value: "shrey032006", href: profile.links.github },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="05 / Contact" title="Let's work together">
      <p className="max-w-xl text-slate-400">
        I'm looking for opportunities to contribute to a professional team while I keep
        learning. Reach out, I'd be glad to talk.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((i) => (
          <a
            key={i.label}
            href={i.href}
            target={i.label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            className="glass rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-violet-glow/60"
          >
            <p className="font-mono text-xs text-slate-500">{i.label}</p>
            <p className="mt-1 break-all font-medium text-white">{i.value}</p>
          </a>
        ))}
      </div>

      <a
        href={profile.links.resume}
        download
        className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-violet-glow to-indigo-glow px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-0.5"
      >
        Download Resume
      </a>

      <footer className="mt-20 border-t border-line pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </Section>
  );
}
