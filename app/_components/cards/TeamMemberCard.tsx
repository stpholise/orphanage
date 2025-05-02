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
    <div className="xl:w-72 lg:w-72 text-center flex flex-col gap-3">
      <Image
        src={imageUrl || "/teamMembers/loe.jpg"}
        alt="team member image "
        width="100"
        height="100"
        className="w-full h-80 object-fill rounded-3xl"
      />
      <p className="font-bold text-2xl">{teamMemberName} </p>
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
