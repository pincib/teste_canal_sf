"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { PropertyImage } from "@/types/property";

export interface PropertyCarouselProps {
  images: PropertyImage[];
  propertyTitle: string;
  variant?: "card" | "expanded";
  className?: string;
  priorityFirst?: boolean;
}

/**
 * PropertyCarousel component powered by Embla Carousel (headless & lightweight)
 * Meets all requirements of Section 10:
 * - 5 images per property
 * - Touch swipe (mobile) + Arrow buttons (desktop)
 * - Clickable dots pagination
 * - Slide counter badge (e.g. "1 / 5")
 * - Keyboard navigation (← / →)
 * - next/image with responsive sizing
 */
export function PropertyCarousel({
  images,
  propertyTitle,
  variant = "card",
  className,
  priorityFirst = false,
}: PropertyCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [isHovered, setIsHovered] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const syncEmblaState = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    queueMicrotask(syncEmblaState);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", syncEmblaState);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", syncEmblaState);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  const isExpanded = variant === "expanded";

  return (
    <div
      className={cn(
        "group/carousel relative overflow-hidden rounded-xl bg-surface-elevated select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        isExpanded
          ? "aspect-[16/10] sm:aspect-[16/9] w-full max-h-[560px]"
          : "aspect-[16/10] w-full",
        className
      )}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={`Galeria de fotos do imóvel: ${propertyTitle}`}
    >
      {/* Embla Viewport */}
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        <div className="flex h-full touch-pan-y">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative min-w-0 flex-[0_0_100%] h-full bg-[#111111]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Foto ${idx + 1} de ${images.length}`}
            >
              <Image
                src={img.src}
                alt={img.alt || `${propertyTitle} - Foto ${idx + 1}`}
                fill
                priority={priorityFirst && idx === 0}
                sizes={
                  isExpanded
                    ? "(max-width: 1024px) 100vw, 1200px"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                }
                className="object-cover transition-transform duration-500 ease-out group-hover/carousel:scale-[1.02]"
              />

              {/* Subtle gradient overlay at bottom for controls legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Top Floating Badge: Counter ("1 / 5") */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md shadow-md">
        <ImageIcon className="h-3 w-3 text-primary" />
        <span>
          {selectedIndex + 1} / {images.length}
        </span>
      </div>

      {/* Desktop Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          scrollPrev();
        }}
        aria-label="Foto anterior"
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-black/90 hover:border-primary/60 hover:text-primary active:scale-90 cursor-pointer shadow-lg",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none sm:opacity-80 sm:translate-x-0"
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          scrollNext();
        }}
        aria-label="Próxima foto"
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-black/90 hover:border-primary/60 hover:text-primary active:scale-90 cursor-pointer shadow-lg",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none sm:opacity-80 sm:translate-x-0"
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Bottom Floating Dots Pagination */}
      <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-1.5 pointer-events-auto">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 backdrop-blur-md shadow-md">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                scrollTo(idx);
              }}
              aria-label={`Ir para a foto ${idx + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                idx === selectedIndex
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
