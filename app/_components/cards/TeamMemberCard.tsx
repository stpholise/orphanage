import Image from "next/image";
import Link from "next/link";

interface TeamMemberProp {
  imageUrl: string;
  teamMemberName: string;
  teamMemberPosition: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

const TeamMemberCard = ({
  imageUrl,
  teamMemberName,
  teamMemberPosition,
  facebook,
  twitter,
  linkedin,
}: TeamMemberProp) => {
  return (
    <div className="xl:w-72 md:w-56 lg:w-72 text-center dark:text-gray-800 flex flex-col md:gap-2 lg:gap-3 gap-1 dark:bg-gray-200 xl:p-3 p-2 rounded-3xl ">
      <Image
        src={imageUrl || "/teamMembers/loe.jpg"}
        alt="team member image "
        width="290"
        height="320"
        className="w-full lg:h-80 md:h-64 sm:h-64 h-60 object-cover rounded-3xl"
      />
      <p className="font-bold md:text-xl lg:text-2xl sm:text-xl text-lg md:break-normal">{teamMemberName} </p>
      <p className="text-sm ">{teamMemberPosition} </p>
      <div className="flex justify-center gap-3">
        <div className="">
          <Link href={facebook || "facebook.com"}>
            <Image
              src="/icons/facebook.svg"
              alt="facebook icon"
              width="100"
              height="100"
              className="w-5 h-5"
            />
          </Link>
        </div>
        <div className="">
          <Link href={twitter || "twitter.com"}>
            <Image
              src="/icons/facebook.svg"
              alt="facebook icon"
              width="100"
              height="100"
              className="w-5 h-5"
            />
          </Link>
        </div>
        <div className="">
          <Link href={linkedin || "linkedin.com"}>
            <Image
              src="/Icons/facebook.svg"
              alt="facebook icon"
              width="100"
              height="100"
              className="h-5 w-5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
