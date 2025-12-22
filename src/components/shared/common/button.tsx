"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        "h-8 sm:h-12 py-2 uppercase px-6 text-xs md:text-[15px] bg-primary font-medium font-outfit tracking-wider cursor-pointer transition hover:opacity-90 ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
