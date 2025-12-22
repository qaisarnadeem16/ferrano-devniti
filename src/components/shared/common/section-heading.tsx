import React from "react";

interface SectionHeadingProps {
  normalText?: string;
  highlightedText?: string;

  wrapperClassName?: string;
  normalClassName?: string;
  highlightedClassName?: string;
  underlineClassName?: string;

  showUnderline?: boolean;
}

const SectionHeading = ({
  normalText,
  highlightedText,
  wrapperClassName = "",
  normalClassName = "",
  highlightedClassName = "",
  underlineClassName = "",
  showUnderline = true,
}: SectionHeadingProps) => {
  return (
    <div className={ `uppercase ${wrapperClassName}`}>
      {/* Normal text */}
      {normalText && (
        <h1
          className={`text-3xl lg:text-[40px] font-thin font-outfit text-white mb-2 ${normalClassName}`}
            
        >
          {normalText}
        </h1>
      )}

      {/* Highlighted text */}
      {highlightedText && (
        <h2
          className={`text-3xl lg:text-[36px] xl:text-[40px] font-bold tracking-wide text-white mb-4 ${highlightedClassName}`}
        >
          {highlightedText}
        </h2>
      )}

      {/* Underline */}
      {showUnderline && ( highlightedText) && (
        <div
          className={`w-12 h-0.5 bg-white ${underlineClassName}`}
            
        />
      )}
    </div>
  );
};

export default SectionHeading;
