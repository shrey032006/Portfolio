import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Skills" title="Technical toolkit">
      <div className="grid gap-5 sm:grid-cols-2">
        {profile.skills.map((g) => (
          <div key={g.group} className="glass rounded-2xl p-6">
            <h3 className="font-mono text-sm text-violet-glow">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-lg border border-line bg-ink-800/70 px-3 py-1.5 text-sm text-slate-200"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
