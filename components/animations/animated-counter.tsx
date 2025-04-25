"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface CounterProps {
  from: number
  to: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [count, setCount] = useState(from)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const nodeRef = useRef<HTMLSpanElement>(null)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const totalFrames = Math.round(duration * 60)
    const increment = (to - from) / totalFrames

    const animateCount = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const runtime = timestamp - startTimeRef.current
      const relativeProgress = runtime / (duration * 1000)
      const easedProgress = easeOutQuart(Math.min(relativeProgress, 1))
      const currentCount = Math.round(from + (to - from) * easedProgress)

      setCount(currentCount)

      if (relativeProgress < 1) {
        frameRef.current = requestAnimationFrame(animateCount)
      }
    }

    frameRef.current = requestAnimationFrame(animateCount)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [inView, from, to, duration])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <span ref={nodeRef}>
        {prefix}
        {count}
        {suffix}
      </span>
    </motion.span>
  )
}
