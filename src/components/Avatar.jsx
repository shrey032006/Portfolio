import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile.js";

/**
 * Profile photo with a glowing gradient ring.
 * Put your photo at client/public/profile.jpg (square or portrait works best).
 * If the file is missing, an initials badge is shown instead.
 */
export default function Avatar() {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.92 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
      }}
      className="relative mx-auto mt-14 w-60 sm:w-72 lg:mt-0 lg:w-80"
    >
      <div
        className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-violet-glow/40 via-indigo-glow/25 to-sky-glow/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="rounded-full bg-gradient-to-tr from-violet-glow via-indigo-glow to-sky-glow p-[3px] shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)]">
        <div className="aspect-square overflow-hidden rounded-full bg-ink-800">
          {failed ? (
            <div className="flex h-full w-full items-center justify-center text-7xl font-extrabold text-gradient">
              {initials}
            </div>
          ) : (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover object-top"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
