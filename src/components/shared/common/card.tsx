import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const Card = ({
  className = "bg-primary",
  icon,
  title,
  description,
}: CardProps) => {
  return (
    <div
      className={` space-y-4 px-6.25 py-8.25 flex items-center flex-col justify-between text-center text-white  ${className} `}
    >
      <Image src={icon} alt={title} height={60} width={60} />

      <h4 className="text-[24px] font-semibold">{title}</h4>

      <p className="">{description}</p>
    </div>
  );
};

export default Card;
