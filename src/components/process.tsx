'use client'

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const steps = [
  {
    title: 'Análise do terreno',
    text: 'Avaliamos o terreno e o projeto para definir onde cortar, onde aterrar e em que nível o chão precisa ficar.',
  },
  {
    title: 'Limpeza',
    text: 'Retiramos mato, tocos e entulho. Assim o trabalho segue só com o solo.',
  },
  {
    title: 'Corte e aterro',
    text: 'A terra das partes altas vai para as partes baixas até o terreno chegar ao nível do projeto. O que sobra sai de caminhão.',
  },
  {
    title: 'Compactação',
    text: 'Compactamos em camadas e cuidamos da drenagem. O chão fica firme para receber a fundação.',
  },
]

// Corte transversal do terreno em unidades do viewBox (y cresce para baixo).
const W = 1000
const H = 320
const LEVEL = 150
const bump = (x: number, mid: number, spread: number) => Math.exp(-((x - mid) ** 2) / (2 * spread ** 2))
const XS = Array.from({ length: 101 }, (_, i) => i * 10)
// Arredonda para servidor e navegador gerarem o mesmo SVG (Math.sin difere nas últimas casas).
const Y0 = XS.map(
  (x) =>
    Math.round(
      (LEVEL - 92 * bump(x, 250, 120) + 78 * bump(x, 720, 115) + 6 * Math.sin(x / 27) + 3 * Math.sin(x / 9 + 1)) * 10,
    ) / 10,
)
const y0At = (x: number) => Y0[Math.round(x / 10)]
const pts = (ys: number[]) => XS.map((x, i) => `${x},${ys[i].toFixed(1)}`)

// k = 0: terreno natural. k = 1: tudo no nível do projeto.
function profile(k: number) {
  const ys = Y0.map((y) => LEVEL + (y - LEVEL) * (1 - k))
  const surface = `M${pts(ys).join('L')}`
  return {
    surface,
    ground: `${surface}L${W},${H}L0,${H}Z`,
    // corte: o que existia acima da superfície atual
    cut: `M${pts(Y0.map((y, i) => Math.min(y, ys[i]))).join('L')}L${pts(ys).reverse().join('L')}Z`,
    // aterro: o que foi colocado acima do terreno original
    fill: `${surface}L${pts(Y0.map((y, i) => Math.max(y, ys[i]))).reverse().join('L')}Z`,
  }
}

const tufts = [30, 90, 150, 210, 300, 350, 420, 480, 560, 640, 700, 790, 850, 920, 970]
  .map((x) => {
    const y = y0At(x)
    return `M${x - 6},${y}l-4,-12M${x},${y}v-16M${x + 6},${y}l4,-12`
  })
  .join('')
const rocks = [
  [380, 5],
  [600, 6],
  [614, 4],
  [880, 5],
].map(([x, r]) => ({ x, r, y: y0At(x) - r + 1 }))

const at = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` })
const tag =
  'absolute -translate-y-1/2 whitespace-nowrap rounded-full bg-surface/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-ink sm:text-[11px]'

export function Process() {
  const stepsRef = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const reduceRef = useRef(reduce)
  reduceRef.current = reduce

  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ['start 0.65', 'end 0.65'] })
  // Com movimento reduzido, cada etapa aparece pronta, sem transição contínua.
  const p = useTransform(scrollYProgress, (v) => (reduceRef.current ? Math.min(1, (Math.floor(v * 4) + 1) / 4) : v))
  const draw = useTransform(p, [0, 0.16], [0, 1])
  const clear = useTransform(p, [0.25, 0.41], [0, 1])
  const k = useTransform(p, [0.5, 0.68], [0, 1])
  const pack = useTransform(p, [0.75, 0.91], [0, 1])

  const shape = useTransform(k, profile)
  const surface = useTransform(shape, (s) => s.surface)
  const ground = useTransform(shape, (s) => s.ground)
  const cut = useTransform(shape, (s) => s.cut)
  const fill = useTransform(shape, (s) => s.fill)

  const revealW = useTransform(draw, [0, 1], [0, W])
  const vegOpacity = useTransform(clear, [0, 1], [1, 0])
  const vegY = useTransform(clear, [0, 1], [0, -16])
  const naturalOpacity = useTransform(k, [0, 0.3], [1, 0])
  const levelLabel = useTransform([draw, k], ([a, b]: number[]) => a * (1 - Math.min(1, b * 3)))
  const cutOpacity = useTransform([k, pack], ([a, b]: number[]) => Math.min(1, a * 2) * (1 - 0.55 * b))
  const cutLabel = useTransform([k, pack], ([a, b]: number[]) => Math.min(1, a * 2) * (1 - b))

  const [active, setActive] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setActive(Math.min(3, Math.max(0, Math.floor(v * 4)))))

  return (
    <section
      id="process"
      className="layer theme-dark bg-[radial-gradient(60rem_32rem_at_85%_0%,rgb(207_171_92/0.13),transparent_70%)] pb-24 pt-20 sm:pb-32 sm:pt-28"
    >
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <h2 className="t-section max-w-[16ch]">Como o terreno fica pronto</h2>
        <p className="t-lead mt-5 max-w-[42ch] text-muted">
          Cada etapa vista em corte, do terreno natural ao chão compactado.
        </p>

        <div className="mt-8 grid lg:mt-0 lg:grid-cols-12 lg:gap-16">
          <div
            aria-hidden
            className="sticky top-0 z-10 -mx-5 bg-paper/85 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:top-[calc(50vh-12rem)] lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mx-0 lg:self-start lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
          >
            <div className="rounded-[28px] border border-white/10 bg-surface/60 p-4 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between gap-4 px-1">
                <p className="text-[13px] font-medium tracking-[-0.01em] text-muted">
                  Etapa {active + 1} de {steps.length}
                </p>
                <div className="flex gap-1.5">
                  {steps.map((s, i) => (
                    <span
                      key={s.title}
                      className={`h-1 w-6 rounded-full transition-colors duration-500 sm:w-8 ${i <= active ? 'bg-gold' : 'bg-ink/15'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="t-title mt-1.5 px-1">{steps[active].title}</p>

              <div className="relative mt-4 overflow-hidden rounded-[12px] bg-[linear-gradient(rgb(var(--ink)/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--ink)/0.05)_1px,transparent_1px)] bg-[size:20px_20px]">
                <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full">
                  <defs>
                    <pattern id="hatch-soil" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line y2="9" className="stroke-ink/15" strokeWidth="1.5" />
                    </pattern>
                    <pattern id="hatch-fill" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                      <line y2="7" className="stroke-gold" strokeWidth="2.5" />
                    </pattern>
                    <clipPath id="reveal">
                      <motion.rect height={H} width={revealW} />
                    </clipPath>
                  </defs>

                  <motion.path d={ground} className="fill-ink/[0.05]" />
                  <motion.path d={ground} fill="url(#hatch-soil)" />
                  <motion.path d={fill} className="fill-gold/25" />
                  <motion.path d={fill} fill="url(#hatch-fill)" />
                  <motion.path
                    d={cut}
                    style={{ opacity: cutOpacity }}
                    className="fill-ink/[0.04] stroke-ink/40"
                    strokeWidth={1.5}
                    strokeDasharray="6 5"
                    vectorEffect="non-scaling-stroke"
                  />

                  <motion.g
                    style={{ opacity: vegOpacity, y: vegY }}
                    className="stroke-ink/60"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    fill="none"
                  >
                    <path d={tufts} vectorEffect="non-scaling-stroke" />
                    {rocks.map((r) => (
                      <circle key={r.x} cx={r.x} cy={r.y} r={r.r} className="fill-surface" vectorEffect="non-scaling-stroke" />
                    ))}
                  </motion.g>

                  <motion.path
                    d={surface}
                    fill="none"
                    className="stroke-ink"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  <motion.g style={{ opacity: pack }} className="stroke-ink/30" strokeWidth={1.2} strokeDasharray="2 6">
                    {[14, 28, 42].map((d) => (
                      <line key={d} x1={0} x2={W} y1={LEVEL + d} y2={LEVEL + d} vectorEffect="non-scaling-stroke" />
                    ))}
                  </motion.g>

                  <line
                    x1={0}
                    x2={W}
                    y1={LEVEL}
                    y2={LEVEL}
                    clipPath="url(#reveal)"
                    className="stroke-gold"
                    strokeWidth={2}
                    strokeDasharray="10 7"
                    vectorEffect="non-scaling-stroke"
                  />
                  <motion.line
                    x1={0}
                    x2={W}
                    y1={LEVEL}
                    y2={LEVEL}
                    style={{ opacity: pack, filter: 'drop-shadow(0 0 6px rgb(207 171 92 / 0.7))' }}
                    className="stroke-gold"
                    strokeWidth={4}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <motion.span style={{ ...at(250, y0At(250) - 24), opacity: naturalOpacity }} className={`${tag} -translate-x-1/2`}>
                  Terreno natural
                </motion.span>
                <motion.span style={{ ...at(600, y0At(600) - 44), opacity: vegOpacity }} className={`${tag} -translate-x-1/2`}>
                  Mato e entulho
                </motion.span>
                <motion.span
                  style={{ right: '0.75%', top: `${((LEVEL - 16) / H) * 100}%`, opacity: levelLabel }}
                  className={tag}
                >
                  Cota do projeto
                </motion.span>
                <motion.span style={{ ...at(250, LEVEL - 32), opacity: cutLabel }} className={`${tag} -translate-x-1/2`}>
                  Corte
                </motion.span>
                <motion.span style={{ ...at(720, LEVEL + 28), opacity: cutLabel }} className={`${tag} -translate-x-1/2`}>
                  Aterro
                </motion.span>
                <motion.span style={{ ...at(480, LEVEL + 56), opacity: pack }} className={`${tag} -translate-x-1/2`}>
                  Base compactada
                </motion.span>
              </div>
            </div>
          </div>

          <ol ref={stepsRef} className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={`flex min-h-[55vh] flex-col justify-center transition-opacity duration-500 lg:min-h-[78vh] ${active === i ? 'opacity-100' : 'opacity-30'}`}
              >
                <span className="t-eyebrow tabular-nums" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.028em]">
                  {s.title}
                </h3>
                <p className="t-lead mt-4 max-w-[38ch] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
