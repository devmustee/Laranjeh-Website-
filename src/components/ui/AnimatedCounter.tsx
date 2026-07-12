"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // duration in seconds
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  duration = 2.0,
}) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(countRef, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, value, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest.toLocaleString());
    });
  }, [rounded]);

  return (
    <span ref={countRef} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};
