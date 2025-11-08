import { ReviewCarousel } from "./reviewCarousel";
import { Star, TrendingUp, Users, Award } from "lucide-react";
import { jura, switzer } from '@/lib/fonts'


const reviews = [
  {
    name: "Carlos Silva",
    rating: 5,
    date: "há 2 semanas",
    comment: "Excelente serviço de terraplenagem! Equipe profissional, pontual e com equipamentos de primeira linha. Fizeram a terraplanagem do meu terreno com perfeição e dentro do prazo combinado.",
    avatar: "CS"
  },
  {
    name: "Maria Santos",
    rating: 5,
    date: "há 1 mês",
    comment: "Recomendo demais! Fizeram todo o serviço de escavação e nivelamento do terreno para minha obra. Trabalho impecável, preço justo e muita atenção aos detalhes.",
    avatar: "MS"
  },
  {
    name: "João Oliveira",
    rating: 5,
    date: "há 3 semanas",
    comment: "Empresa séria e comprometida. Realizaram a terraplanagem de um grande projeto e superaram nossas expectativas. Equipe técnica muito capacitada.",
    avatar: "JO"
  },
  {
    name: "Ana Paula Costa",
    rating: 5,
    date: "há 2 meses",
    comment: "Serviço de altíssima qualidade! Fizeram todo o movimento de terra do meu loteamento. Equipamentos modernos e operadores muito experientes. Estou muito satisfeita!",
    avatar: "AC"
  },
  {
    name: "Roberto Ferreira",
    rating: 5,
    date: "há 1 semana",
    comment: "Melhor empresa de terraplenagem da região! Atendimento excelente desde o orçamento até a conclusão da obra. Cumpriram todos os prazos e o resultado ficou perfeito.",
    avatar: "RF"
  },
  {
    name: "Patricia Lima",
    rating: 5,
    date: "há 3 semanas",
    comment: "Profissionais extremamente competentes! Fizeram a escavação e aterramento do meu terreno com muito cuidado e profissionalismo. Recomendo de olhos fechados!",
    avatar: "PL"
  },
  {
    name: "Fernando Souza",
    rating: 5,
    date: "há 1 mês",
    comment: "Impressionante a qualidade do trabalho! Equipamentos de última geração e equipe super qualificada. Transformaram completamente meu terreno irregular.",
    avatar: "FS"
  },
  {
    name: "Juliana Mendes",
    rating: 5,
    date: "há 2 semanas",
    comment: "Contratei para um projeto grande e não me arrependo. Pontualidade, qualidade e preço justo. Já indiquei para vários amigos!",
    avatar: "JM"
  }
];

const stats = [
  { icon: Star, value: "5.0", label: "Avaliação Média" },
  { icon: Users, value: "500+", label: "Clientes Atendidos" },
  { icon: Award, value: "15+", label: "Anos de Experiência" },
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
              className={`${jura.className} text-4xl font-black text-center mb-10`}
            >
              A OPINIÃO DE QUEM JÁ CONHECE
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Centenas de clientes satisfeitos confiam em nossos serviços de terraplenagem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slide-in"
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
