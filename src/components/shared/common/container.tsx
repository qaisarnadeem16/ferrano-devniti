import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  parentStyle?: string;
}

export default function Container({
  children,
  className = "",
  parentStyle,
}: ContainerProps) {
  return (
    <div className={`w-full  ${parentStyle}`}>
      <div className={`max-w-360 mx-auto px-4 sm:px-6 lg:px-10 xl:px-25  ${className}`}>
        {children}
      </div>
    </div>
  );
}
