import { ServiceCard } from './serviceCard';
import { jura, switzer } from '@/lib/fonts'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from './ui/dialog';

import drillingImg from '@/assets/services-imgs/1.png';
import landClearingImg from '@/assets/services-imgs/2.png';
import levelingImg from '@/assets/services-imgs/3.png';
import demolitionImg from '@/assets/services-imgs/4.png';
import excavationImg from '@/assets/services-imgs/5.png';
import Image from 'next/image';

const services = [
  {
    id: 'drilling',
    title: 'Perfuração de Solo',
    shortDesc: 'Tecnologia avançada para fundações profundas e investigação geotécnica',
    description:
      'A perfuração de solo é uma etapa fundamental na engenharia civil e construção, usada para investigar, descompactar ou criar espaços específicos no terreno. Esse processo é essencial para fundações, coleta de amostras para análise geotécnica, instalação de estacas e suporte para estruturas subterrâneas.',
    image: drillingImg,
  },
  {
    id: 'land-clearing',
    title: 'Limpeza de Terreno',
    shortDesc: 'Preparação completa do terreno para novos projetos de construção',
    description:
      'A limpeza de terreno é um serviço fundamental para a preparação de áreas destinadas a novas construções. Esse processo envolve a remoção de entulhos, vegetação, árvores e outros resíduos, deixando o terreno limpo e adequado.',
    image: landClearingImg,
  },
  {
    id: 'leveling',
    title: 'Nivelamento de Terreno',
    shortDesc: 'Correção topográfica precisa para bases estáveis',
    description:
      'O nivelamento de terreno é essencial para garantir uma base plana e estável para construções. Esse processo ajusta a topografia do solo, corrigindo desníveis e preparando a área para receber fundações e estruturas com segurança.',
    image: levelingImg,
  },
  {
    id: 'demolition',
    title: 'Demolição',
    shortDesc: 'Desmontagem controlada e segura de estruturas existentes',
    description:
      'A demolição é o serviço de desmontagem controlada de estruturas antigas ou indesejadas no terreno, preparando a área para novos projetos. Esse processo inclui a remoção segura de todos os resíduos, garantindo um espaço limpo.',
    image: demolitionImg,
  },
  {
    id: 'excavation',
    title: 'Escavação',
    shortDesc: 'Movimentação de terra para fundações e estruturas profundas',
    description:
      'A escavação é o processo de remoção de solo para abrir fundações, valas ou outras estruturas subterrâneas essenciais. Com equipamentos especializados, essa etapa prepara o terreno para obras profundas, garantindo segurança na construção.',
    image: excavationImg,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
          <h1 className={`text-2xl md:text-3xl font-bold ${jura.className}`}>
            NOSSOS SERVIÇOS
          </h1>
        <p className={`${switzer.className} text-lg text-muted-foreground max-w-2xl mx-auto`}>
          Soluções especializadas em terraplanagem e preparação de terrenos com
          tecnologia de ponta
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Dialog key={service.id}>
            <DialogTrigger asChild>
              <div>
                <ServiceCard
                  title={service.title}
                  description={service.shortDesc}
                  image={service.image}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-slate-200">
              <DialogHeader>
                <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground pt-4 text-left leading-relaxed">
                  {service.description}
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video w-full overflow-hidden rounded-lg mt-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
