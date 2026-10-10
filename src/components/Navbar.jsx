import { useEffect, useState } from "react";
import { profile } from "../data/profile.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm tracking-tight text-white">
          <span className="text-violet-glow">&lt;</span>
          {profile.firstName}
          <span className="text-violet-glow"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {profile.nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden rounded-md border border-line px-3 py-1.5 text-sm text-slate-200"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="glass md:hidden px-5 pb-4">
          {profile.nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-200"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
