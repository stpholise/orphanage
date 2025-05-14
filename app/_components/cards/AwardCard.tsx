import Image from "next/image";

interface AwardProp {
  image: string;
  year: string;
  title: string;
  location: string;
}
const AwardCard = ({ image, year, title, location }: AwardProp) => {
  return (
    <div className="flex flex-row items-center md:flex-col p-3 gap-4 md:gap-2  md:text-center md:w-1/4  w-full md:items-center dark:bg-gray-200 lg:w-40 rounded-2xl  ">
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
      <h3 className="font-bold md:my-2 test-2xl dark:text-gray-500">{year}</h3>
        <h3 className=" font-bold text-sm dark:text-gray-600">{title}</h3>
        <p className="text-xs dark:text-gray-400 ">{location}</p>
      </div>
    </div>
  );
};

export default AwardCard;
