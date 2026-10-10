import { useEffect, useState } from "react";

/**
 * Typewriter that cycles through `words`.
 * Respects prefers-reduced-motion by rendering the first word statically.
 */
export default function TypingText({
  words,
  typeMs = 70,
  deleteMs = 35,
  holdMs = 1500,
}) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduced ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[index % words.length];

    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = holdMs;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduced, typeMs, deleteMs, holdMs]);

  return (
    <span aria-live="polite" aria-label={words.join(", ")}>
      <span className="text-gradient">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
