import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  onClick?: () => void;
}

export function ServiceCard({ title, description, image, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl cursor-pointer",
        "bg-card border border-border shadow-md",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
        "active:scale-98"
      )}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      </div>
      
      <div className="p-4 space-y-1.5">
        <h3 className="text-lg font-bold text-blueAm">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="pt-1">
          <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            Saiba mais
            <svg 
              className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
