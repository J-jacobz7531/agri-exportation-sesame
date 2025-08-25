"use client";
import React, { useEffect, useState } from "react";

export type TypewriterWord = {
  text: string;
  className?: string;
};

interface TypewriterProps {
  words: TypewriterWord[];
  typingSpeed?: number; // ms per character
  deletionSpeed?: number; // ms per character when deleting
  pauseTime?: number; // pause before deleting / typing next
  className?: string;
}

// Simple, smooth typewriter effect that types word-by-word in a loop
export const TypewriterEffectSmooth: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 120,
  deletionSpeed = 60,
  pauseTime = 1200,
  className = "",
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const currentWord = words[wordIndex]?.text || "";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // When typing
    if (!deleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), typingSpeed);
    }
    // Pause at full word then start deleting
    else if (!deleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    }
    // When deleting
    else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), deletionSpeed);
    }
    // Finished deleting, move to next word
    else if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((idx) => (idx + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, currentWord.length, deletionSpeed, pauseTime, typingSpeed, words.length]);

  const visible = currentWord.slice(0, Math.max(0, charIndex));
  const wordStyle = words[wordIndex]?.className || "";

  return (
    <h2
      className={`font-bold text-3xl sm:text-5xl md:text-6xl text-center whitespace-nowrap ${wordStyle} ${className}`}
    >
      {visible}
      <span className="inline-block w-[1ch] animate-blink">|</span>
    </h2>
  );
};
