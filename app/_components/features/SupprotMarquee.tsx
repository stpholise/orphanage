import Marquee from "react-fast-marquee";
import Image from "next/image";

const marqueeContents: string[] = [
  "/Logos/Logo1.svg",
  "/Logos/Logo2.svg",
  "/Logos/Logo3.svg",
  "/Logos/Logo4.svg",
  "/Logos/Logo5.svg",
  "/Logos/Logo6.svg",
];

const SupprotMarquee = () => {
  return (
    <div className="my-3">
      <Marquee>
        {marqueeContents.map((item, index) => (
          <div key={index} className="">
            <Image
              src={`${item}`}
              alt="marquee item"
              height="50"
              width="200"
              className="w-40 md:h-12 h-8 mr-9"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SupprotMarquee;
