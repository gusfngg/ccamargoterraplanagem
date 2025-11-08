import { switzer } from '@/lib/fonts'
import { Leaf, Target, Lock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import BlurFade from './ui/blur-fade'

export function Values() {
  return (
    <section id="values">
      <BlurFade inView>
        <h1
          className={`${switzer.className} font-medium text-2xl lg:text-3xl text-center mx-auto max-w-[900px]`}
        >
          Celebre a conquista de uma base sólida com nosso serviço de
          terraplenagem, que prepara seu terreno com precisão e segurança para a
          realização de seus projetos.
        </h1>
      </BlurFade>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto p-4 mt-20">
        <BlurFade inView>
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blueAm rounded-lg">
                <Leaf className="size-8 text-grayAm" />
              </div>
              <h3 className={`${switzer.className} text-xl font-medium`}>
                Terreno preparado com precisão
              </h3>
              <p className="text-muted-foreground">
                Otimize sua construção com nosso serviço de terraplenagem,
                garantindo um terreno nivelado e adequado para suas
                necessidades.
              </p>
            </CardContent>
          </Card>
        </BlurFade>

        <BlurFade inView>
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blueAm rounded-lg">
                <Target className="size-8 text-grayAm" />
              </div>
              <h3 className={`${switzer.className} text-xl font-medium`}>
                Execução eficiente
              </h3>
              <p className="text-muted-foreground">
                Defina suas necessidades e acompanhe o progresso da obra,
                assegurando que cada etapa seja realizada com qualidade e
                rapidez.
              </p>
            </CardContent>
          </Card>
        </BlurFade>

        <BlurFade inView>
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blueAm rounded-lg">
                <Lock className="size-8 text-grayAm" />
              </div>
              <h3 className={`${switzer.className} text-xl font-medium`}>
                Segurança em cada etapa
              </h3>
              <p className="text-muted-foreground">
                Com um processo controlado e seguro, sua obra conta com a
                proteção necessária para evitar problemas futuros.
              </p>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  )
}
