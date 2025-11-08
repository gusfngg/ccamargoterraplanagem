import { ReviewCarousel } from "./reviewCarousel";
import { Star, TrendingUp, Users, Award } from "lucide-react";
import { jura, switzer } from '@/lib/fonts'


const reviews = [
  {
    name: "Obra JK",
    rating: 5,
    date: "há 4 mês",
    comment: "Excelente fornecedor! Atendimento com muito comprometimento, preços justos e total transparência. Recomendo de olhos fechados para quem busca parcerias de verdade!",
    avatar: "OJ"
  },
  {
    name: "Váleria Freire",
    rating: 5,
    date: "há 3 anos",
    comment: "Excelente empresa! A equipe que me atendeu era muito experiente e qualificada. O serviço foi executado conforme especificado em projeto, com cuidado e precisão. Paguei um valor justo. Super recomendo!",
    avatar: "VF"
  },
  {
    name: "Nelso Torres",
    rating: 5,
    date: "há 11 mês",
    comment: "Empresa integra com profissionais extremamente comprometidos. Serviço de qualidade e competência. Muitíssimo satisfeito.",
    avatar: "NT"
  },
  {
    name: "Debora Cristina",
    rating: 5,
    date: "há 4 anos",
    comment: "Super recomendo, o serviço ficou de excelente qualidade, os funcionários desde o atendimento até o operador  muito bem atenciosos e prestativos e pontual em relação a data e horário combinados! 👏👏👏",
    avatar: "DC"
  },
  {
    name: "Vera Márcia",
    rating: 5,
    date: "há 4 semanas",
    comment: "Excelente profissional, segunda vez que fechamos com ele e o serviço foi executado com rapidez e excelência!",
    avatar: "VM"
  },
  {
    name: "Paulo Júnior",
    rating: 5,
    date: "há 4 anos",
    comment: "Excelentes profissionais. Cumprem o que prometem, trabalho honesto. Excelente serviço. Com certeza voltarei a fazer serviços com eles e com certeza eu indico.",
    avatar: "PJ"
  },
  {
    name: "Paulo Rogério",
    rating: 5,
    date: "há 3 anos",
    comment: "Trabalho realizado no prazo estipulado, com ótima qualidade e profissionalismo, preço justo. Super recomendo.",
    avatar: "PG"
  },
  {
    name: "Élio Batista",
    rating: 5,
    date: "há 3 mês",
    comment: "Foi muito fácil de combinar o trabalho e resolveu tudo que eu precisei. Excelente, obrigado!",
    avatar: "EB"
  }
];

const stats = [
  { icon: Star, value: "4.9", label: "Avaliação Média" },
  { icon: Users, value: "2.000+", label: "Clientes Atendidos" },
  { icon: Award, value: "15+", label: "Anos no Mercado" },
  { icon: TrendingUp, value: "98%", label: "Satisfação" }
];

export const ReviewsSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center border-goldAm gap-2 bg-blueAm/10 text-blueAm px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Avaliações Google</span>
          </div>
          
          <h1
              className={`${jura.className} text-4xl font-black text-center`}
            >
              A OPINIÃO DE QUEM JÁ CONHECE
          </h1>
          
          <p className="text-base font-thin md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de clientes satisfeitos confiam em nossos serviços de terraplenagem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-goldAm/40 rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 text-blueAm" />
              <div className="text-2xl md:text-3xl font-bold text-blueAm mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <ReviewCarousel reviews={reviews} />
      </div>
    </section>
  );
};
