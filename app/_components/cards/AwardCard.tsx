import Image from "next/image";

interface AwardProp {
  image: string;
  year: string;
  title: string;
  location: string;
}
const AwardCard = ({ image, year, title, location }: AwardProp) => {
  return (
    <div className="flex flex-row items-center md:flex-col  gap-4 md:gap-2  md:text-center md:w-1/4  w-full md:items-center">
      <div className="">
        <Image
          src={image || "/Images/awards/Award badge.svg"}
          alt="award image"
          width="100"
          height="100"
          className=" h-20 w-20 sm:w-32"
        />
      </div>
      <div className="">
      <h3 className="font-bold md:my-2 test-2xl">{year}</h3>
        <h3 className=" font-bold text-sm">{title}</h3>
        <p className="text-xs">{location}</p>
      </div>
    </div>
  );
};

export default AwardCard;
