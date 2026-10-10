import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="02 / Projects" title="Things I've built">
      <div className="grid gap-6">
        {profile.projects.map((p) => (
          <article
            key={p.title}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition-colors hover:border-violet-glow/50"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-glow/20 blur-[90px] transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-xs text-sky-glow">{p.tag}</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
              <p className="mt-3 max-w-2xl text-slate-400">{p.description}</p>

              <ul className="mt-5 space-y-2 text-slate-300">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-glow" />
                    {pt}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-ink-800/70 px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-violet-glow"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
