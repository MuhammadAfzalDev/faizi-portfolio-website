"use client"

import { useEffect } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"
import { useInView } from "react-intersection-observer"

type AnimatedTextProps = {
  text: string | string[]
  el?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
  repeatDelay?: number
  animation?: {
    hidden: Variant
    visible: Variant
  }
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  repeatDelay = 0,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: once })

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const show = () => {
      controls.start("visible")
      if (repeatDelay) {
        timeout = setTimeout(() => {
          controls.start("hidden")
          timeout = setTimeout(show, 500)
        }, repeatDelay)
      }
    }

    if (inView) {
      show()
    } else {
      controls.start("hidden")
    }

    return () => clearTimeout(timeout)
  }, [controls, inView, repeatDelay])

  const words = Array.isArray(text) ? text : text.split(" ")

  return (
    <Wrapper className={className}>
      <span className="sr-only">{Array.isArray(text) ? text.join(" ") : text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block">
            <motion.span className="inline-block" variants={animation}>
              {word}
            </motion.span>
            {i !== words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
