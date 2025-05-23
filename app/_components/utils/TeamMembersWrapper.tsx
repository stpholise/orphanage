"use client";
import TeamMemberCard from "../cards/TeamMemberCard";

interface TeamMemberProp {
  id: string;
  imageUrl: string;
  teamMemberName: string;
  teamMemberPosition: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

const teamMembersArr: TeamMemberProp[] = [
  {
    id: "11111111ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
  {
    id: "11111112ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
  {
    id: "11111113ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
  {
    id: "11111114ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
  {
    id: "11111115ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
  {
    id: "11111116ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
  {
    id: "11111117ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
  {
    id: "11111118ccdd",
    imageUrl: "/Images/teamMembers/leo.jpg",
    teamMemberName: "Leonard John Davies",
    teamMemberPosition: "Cofounder CEO",
    facebook: "wwww.facebook.com",
    twitter: "www.twitter.com",
    linkedin: "www.linkedin.com",
  },
];

const TeamMembersWrapper = ({}) => {
  return (
    <div className="container  mx-auto lg:p-8 md:p-6 p-4 my-8 py-8">
      <div className="mx-auto  md:w-[512px] flex flex-col gap-3 text-center items-center justify-center lg:mb-8 md:mb-6 mb-6">
        <h3 className="text-3xl font-bold">Meet our team</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 md:gap-y-6 gap-5 my-t py-t">
        {teamMembersArr.map((member) => (
          <TeamMemberCard
            key={member.id}
            imageUrl={member.imageUrl}
            teamMemberName={member.teamMemberName}
            teamMemberPosition={member.teamMemberPosition}
            facebook={member.facebook}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembersWrapper;
