import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

export default function About() {
  const { about, educationList } = profile;
  return (
    <Section id="about" eyebrow="01 / About" title="Fundamentals first, full-stack next">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-5 text-slate-400 leading-relaxed lg:col-span-3">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="glass mt-8 rounded-2xl p-5">
            <p className="font-mono text-xs text-violet-glow">Education</p>
            {educationList.map((e) => (
              <div key={e.degree} className="mt-2">
                <p className="font-semibold text-white">{e.degree}</p>
                <p className="text-sm text-slate-400">
                  {e.school} · {e.place}
                </p>
              </div>
            ))}
          </div>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {about.highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-5">
              <dt className="font-mono text-xs text-slate-500">{h.label}</dt>
              <dd className="mt-1 font-medium text-white">{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
