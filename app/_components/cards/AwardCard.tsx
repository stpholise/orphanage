import Image from "next/image";

interface AwardProp {
  image: string;
  year: string;
  title: string;
  location: string;
}
const AwardCard = ({ image, year, title, location }: AwardProp) => {
  return (
    <div className="flex md:flex-col gap-2 text-center md:w-1/4 sm:w-1/2 w-full md:items-center">
      <div className="">
        <Image
          src={image || "/Images/awards/Award badge.svg"}
          alt="award image"
          width="100"
          height="100"
          className=" sm:w-32"
        />
      </div>
      <h3 className="font-bold test-2xl">{year}</h3>
      <div className="">
        <h3 className=" font-bold text-sm">{title}</h3>
        <p className="text-xs">{location}</p>
      </div>
    </div>
  );
};

export default AwardCard;
