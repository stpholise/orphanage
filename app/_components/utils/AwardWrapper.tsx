"use client";
import AwardCard from "../cards/AwardCard";

interface AwardProp {
  id: string;
  image: string;
  year: string;
  title: string;
  location: string;
}

const awardArr: AwardProp[] = [
  {
    id: "11112de",
    image: "/Images/awards/Award badge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "Berlin, Germany",
  },
  {
    id: "112333de",
    image: "/Images/awards/Award badge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "Berlin, Germany",
  },
  {
    id: "i123343",
    image: "/Images/awards/Award badge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "Berlin, Germany",
  },
  {
    id: "11232",
    image: "/Images/awards/Award badge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "Berlin, Germany",
  },
];

const AwardWrapper = () => {
  return (
    <div className="container mx-auto lg:my-6 lg:py-6 md:py-10 py-8 flex flex-col  lg:px-8 md:px-6 px-4 lg:gap-12 md:gap-10 gap-6">
      <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center">
        Awards & Recognitions
      </h2>
      <div className=" flex xs:grid xs:grid-cols-2 sm:border-0  sm:grid sm:grid-cols-2 md:flex-row flex-col sm:flex-row sm:flex-normal lg:gap-12  md:flex  md:gap-8 gap-4 justify-evenly">
        {awardArr.map((item) => (
          <AwardCard
            key={item.id}
            image={item.image}
            year={item.year}
               title={item.title}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardWrapper;
