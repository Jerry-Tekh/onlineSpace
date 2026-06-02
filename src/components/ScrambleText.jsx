import React, { useEffect, useMemo, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SCRAMBLE_DURATION = 900;
const SCRAMBLE_STEP = 30;

const randomChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)];
const isScrambleTarget = (char) => /[A-Z0-9]/i.test(char);

function buildScrambledFrame(text, revealCount) {
  return text
    .split("")
    .map((char, index) => {
      if (!isScrambleTarget(char) || index < revealCount) return char;
      return randomChar();
    })
    .join("");
}

export default function ScrambleText({
  as: Tag = "p",
  text,
  className,
  once = true,
  amount = 0.7,
}) {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, amount });
  const revealableCount = useMemo(
    () => text.split("").filter((char) => isScrambleTarget(char)).length,
    [text],
  );

  useEffect(() => {
    setDisplayText(text);
    setHasAnimated(false);
  }, [text]);

  useEffect(() => {
    if (!isInView || prefersReducedMotion || (once && hasAnimated)) {
      if (prefersReducedMotion) setDisplayText(text);
      return undefined;
    }

    setDisplayText(buildScrambledFrame(text, 0));

    let frame = 0;
    const totalFrames = Math.max(1, Math.floor(SCRAMBLE_DURATION / SCRAMBLE_STEP));

    const interval = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * revealableCount);
      setDisplayText(buildScrambledFrame(text, revealCount));

      if (frame >= totalFrames) {
        window.clearInterval(interval);
        setDisplayText(text);
        setHasAnimated(true);
      }
    }, SCRAMBLE_STEP);

    return () => window.clearInterval(interval);
  }, [amount, hasAnimated, isInView, once, prefersReducedMotion, revealableCount, text]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {displayText}
    </Tag>
  );
}
