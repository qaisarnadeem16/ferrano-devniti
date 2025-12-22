import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="  bg-[#C8894A] space-y-[16px] px-[25px] py-[33px] flex items-center flex-col text-center text-white">
      <Image
        src={icon}
        alt={title}
        height={60}
        width={60}
      />

      <h4 className="text-[24px] font-semibold">
        {title}
      </h4>

      <p className="">
        {description}
      </p>
    </div>
  );
};

export default Card;
