'use client';

import { Star, Quote } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

export const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
            >
              <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-goldAm rounded-2xl p-6 h-full hover:shadow-2xl  transition-all duration-300">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-blueAm/20" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-blueAm text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground">{review.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating 
                              ? "fill-goldAm text-goldAm" 
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 relative z-10">
                  {review.comment}
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{review.date}</span>
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                    alt="Google" 
                    className="h-3 opacity-70"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'w-8 bg-blueAm' 
                : 'w-2 bg-muted hover:bg-blueAm/50'
            }`}
            aria-label={`Ir para review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
