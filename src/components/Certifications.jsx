import { useEffect, useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

function Lightbox({ cert, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          className="max-h-[78vh] w-auto rounded-xl border border-line object-contain shadow-[0_0_60px_-10px_rgba(139,92,246,0.6)]"
        />
        <p className="mt-4 text-center text-sm text-slate-300">
          <span className="font-semibold text-white">{cert.title}</span> · {cert.issuer}
        </p>
        <div className="mt-3 flex gap-3">
          <button onClick={onPrev} className="glass rounded-lg px-4 py-1.5 text-sm text-white">
            ← Prev
          </button>
          <button onClick={onClose} className="glass rounded-lg px-4 py-1.5 text-sm text-white">
            Close
          </button>
          <button onClick={onNext} className="glass rounded-lg px-4 py-1.5 text-sm text-white">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const list = profile.certifications;
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? i : (i - 1 + list.length) % list.length));
  const next = () => setActive((i) => (i === null ? i : (i + 1) % list.length));

  return (
    <Section id="certifications" eyebrow="04 / Learning" title="Certifications & courses">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <article
            key={c.title}
            className="glass group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-violet-glow/60"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="relative block h-48 w-full overflow-hidden bg-ink-800 focus-visible:outline-2 focus-visible:outline-violet-glow"
              aria-label={`View ${c.title} certificate`}
            >
              <img
                src={c.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink-950/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                View certificate ↗
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-xs text-sky-glow">{c.issuer}</p>
              <h3 className="mt-1 font-semibold text-white">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{c.text}</p>
              <p className="mt-4 font-mono text-xs text-slate-500">{c.meta}</p>
            </div>
          </article>
        ))}
      </div>

      {active !== null && (
        <Lightbox cert={list[active]} onClose={close} onPrev={prev} onNext={next} />
      )}
    </Section>
  );
}
