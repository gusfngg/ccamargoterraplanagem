import { switzer } from '@/lib/fonts'
import { Leaf, Target, Lock } from 'lucide-react'
import BlurFade from './ui/blur-fade'

export function Values() {
  return (
    <section id="values" className="py-20 px-4">
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <BlurFade inView delay={0}>
          <div className="group relative flex flex-col items-center text-center space-y-2 p-8 rounded-2xl transition-all duration-500 hover:bg-muted/30">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
              <div className="relative p-4 bg-background border border-blueAm rounded-2xl group-hover:border-primary/40 transition-all duration-500">
                <Leaf className="size-7 text-blueAm" strokeWidth={1.5} />
              </div>
            </div>
            
            <h3 className={`${switzer.className} text-xl font-semibold tracking-tight`}>
              Base pronta para construir
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Garanta um solo firme e nivelado para iniciar sua obra com total confiança e qualidade.
            </p>
          </div>
        </BlurFade>

        <BlurFade inView>
          <div className="group relative flex flex-col items-center text-center space-y-4 p-8 rounded-2xl transition-all duration-500 hover:bg-muted/30">
            <div className="relative">
              <div className="absolute inset-0 bg-blueAm/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
              <div className="relative p-4 bg-background border border-blueAm rounded-2xl group-hover:border-primary/40 transition-all duration-500">
                <Target className="size-7 text-blueAm" strokeWidth={1.5} />
              </div>
            </div>
            
            <h3 className={`${switzer.className} text-xl font-semibold tracking-tight`}>
              Processo ágil e controlado
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Monitore cada fase do serviço e veja sua obra avançar de forma organizada e eficiente.
            </p>
          </div>
        </BlurFade>

        <BlurFade inView>
          <div className="group relative flex flex-col items-center text-center space-y-4 p-8 rounded-2xl transition-all duration-500 hover:bg-muted/30">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
              <div className="relative p-4 bg-background border border-blueAM rounded-2xl group-hover:border-primary/40 transition-all duration-500">
                <Lock className="size-7 text-blueAm" strokeWidth={1.5} />
              </div>
            </div>
            
            <h3 className={`${switzer.className} text-xl font-semibold tracking-tight`}>
              Confiança do início ao fim
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Com métodos seguros e bem planejados, evitamos retrabalhos e asseguramos resultados duradouros.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
