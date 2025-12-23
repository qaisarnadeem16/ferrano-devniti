"use client";

import Link from "next/link";
import Container from "./common/container";
import { usePathname } from "next/navigation";


interface HeroButton {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "secondary";
}

interface LuxuryHeroProps {
  backgroundImage: string;
  title ?: string;
  highlightedText: string;
  description ?: React.ReactNode;
  buttons?: HeroButton[];
  className ?: string;
}

export function LuxuryHero({
  backgroundImage,
  title,
  highlightedText,
  description,
  buttons = [],
  className =''
}: LuxuryHeroProps) {

  const pathname = usePathname();


  return (
    <section
      className={`relative min-h-126 py-3 lg:min-h-175 w-full bg-cover bg-center flex items-center ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content container */}
      <Container className={`relative z-10 lg:py-24 `}>
            {/* Title  */}
            <h1 className={`text-5xl sm:text-6xl xl:text-[80px] font-thin font-outfit uppercase text-white mb-2 ${pathname === '/faqs' ? 'font-bold! text-primary!':''}`}>
              {title}
            </h1>

            {/* Highlighted golden text   */}
            <h2 className="text-5xl sm:text-6xl xl:text-7xl uppercase font-bold tracking-wide text-primary mb-4">
              {highlightedText}
            </h2>

            {/*   underline */}
            <div className="w-32 h-0.5 bg-primary mb-8" />

            {/* Description  */}
            <div className="max-w-133.5 w-full mb-8">
              <p className="text-white text-base lg:text-lg font-outfit font-light">
                {description}
              </p>
            </div>

            {/* buttons */}
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className="w-full sm:w-fit bg-primary hover:bg-Primary/60 font-medium text-white h-8 sm:h-12 tracking-wider uppercase sm:px-14 text-xs md:text-[15px]"
                  >
                    {button.href ? (
                      <Link href={button.href}> {button.label}</Link>
                    ) : (
                      <span>{button.label}</span>
                    )}
                  </button>
                ))}
              </div>
            )}
      </Container>
    </section>
  );
}
