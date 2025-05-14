import Image from "next/image";
interface Service {
  icon: string;
  title: string;
  details: string;
}

const ServiceCard = ({ icon, title, details }: Service) => {
  return (
    <div className="flex gap-3 md:gap-4 lg:gap-8 justify-start ">
      <div className="lg:w-14 md:w-20  ">
        <Image
          src={`${icon}`}
          alt={title}
          width={50}
          height={50}
          className="lg:w-8 lg:h-8 md:h-9 md:w-9 "
        />
      </div>
      <div className=" flex flex-col gap-1 md:gap-2">
        <h2 className="font-bold text-lg md:text-2xl ">{title} </h2>
        <p className="md:text-base text-sm">{details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
