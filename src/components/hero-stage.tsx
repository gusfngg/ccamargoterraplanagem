'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'

// Quando a próxima folha sobe, o hero recua: encolhe, arredonda e escurece,
// como a tela que fica atrás de uma sheet no iOS.
export function HeroStage({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 900], [1, reduce ? 1 : 0.92])
  const radius = useTransform(scrollY, [0, 400], [0, reduce ? 0 : 40])
  const dim = useTransform(scrollY, [0, 900], [0, 0.6])

  return (
    <motion.div style={{ scale, borderRadius: radius }} className="relative h-full origin-top overflow-hidden">
      {children}
      <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-20 bg-night" />
    </motion.div>
  )
}
