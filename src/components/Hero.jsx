import { motion } from "framer-motion";
import TypingText from "./TypingText.jsx";
import Avatar from "./Avatar.jsx";
import { profile } from "../data/profile.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Button({ href, children, variant = "ghost", ...rest }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow";
  const styles = {
    primary:
      "bg-gradient-to-r from-violet-glow to-indigo-glow text-white shadow-[0_0_30px_-4px_rgba(139,92,246,0.7)] hover:shadow-[0_0_40px_0_rgba(139,92,246,0.85)] hover:-translate-y-0.5",
    secondary:
      "glass text-white hover:border-violet-glow/60 hover:-translate-y-0.5",
    ghost: "text-slate-300 hover:text-white",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]}`} {...rest}>
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-violet-glow/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-sky-glow/10 blur-[130px]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pt-24 pb-16 lg:grid-cols-[1.5fr_1fr]"
      >
        <div>
        <motion.div
          variants={item}
          className="glass mb-8 inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-xs text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.featured.label}:{" "}
          <span className="font-medium text-white">{profile.featured.title}</span>
        </motion.div>

        <motion.p variants={item} className="mb-3 font-mono text-sm text-violet-glow">
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-5 min-h-[2.5rem] text-2xl font-semibold text-slate-200 sm:text-4xl"
        >
          <TypingText words={profile.typedRoles} />
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.ul variants={item} className="mt-6 flex flex-wrap gap-2" aria-label="Core stack">
          {profile.stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-line bg-ink-800/70 px-3 py-1 font-mono text-xs text-slate-300"
            >
              {s}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects" variant="primary">
            View Projects <span aria-hidden="true">→</span>
          </Button>
          <Button href={profile.links.resume} variant="secondary" download>
            Download Resume
          </Button>
          <Button href="#contact" variant="ghost">
            Contact Me
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-12 text-xs text-slate-500">
          {profile.education} · {profile.location}
        </motion.p>
        </div>
        <Avatar />
      </motion.div>
    </section>
  );
}
