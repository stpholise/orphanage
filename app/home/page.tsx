"use client";
import HomeHero from "../_components/helpers/HomeHero";
import Image from "next/image";
import SupprotMarquee from "../_components/features/SupprotMarquee";
import ProjectCard from "../_components/cards/ProjectCard";
import Ellipse from "../_components/features/Ellipse";
import { cn } from "../_lib/utility";
import Assistance from "../_components/helpers/Assistance";
import ProjectSection from "../_components/helpers/ProjectSection";
import ServiceCard from "../_components/cards/ServiceCard";
import SectionTitle from "../_components/ui/SectionTitle";

interface Service {
  icon: string;
  title: string;
  details: string;
}

const services: Service[] = [
  {
    icon: "/Icons/family-support-icon.svg",
    title: "Family Support",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    icon: "/Icons/health-benefit-icon.svg",
    title: "Health Benefit",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    icon: "/Icons/scholarship-icon.svg",
    title: "Scholarship",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    icon: "/Icons/therapy-icon.svg",
    title: "Therapy",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

interface ChartData {
  title: string;
  value: number;
  color: string;
}

const chartData: ChartData[] = [
  { title: "child care home", value: 40, color: "#BEF3C0" },
  { title: "cleanliness program", value: 35, color: "#AC94F1" },
  { title: " helping people", value: 10, color: "#FFF0CA" },
  { title: " helping people", value: 10, color: "#F9CF64" },
  { title: " helping people", value: 5, color: "#F38FBF" },
];

// function fn(...input: ClassValue[] ){
//     return (twMerge(clsx(input)))
// }

const page = () => {
  return (
    <div className="text-black bg-white">
      {/* =========================================================================== */}
      {/* Hero */}
      {/* =========================================================================== */}
      <HomeHero />

      {/* =========================================================================== */}
      {/* About us */}
      {/* =========================================================================== */}
      <div className="">
        <div className="container mx-auto flex flex-col gap-9 md:gap-24 lg:px-8 md:px-6 px-4 py-9 md:py-12 lg:py-14 py:8">
          <div className="flex md:flex-row flex-col md:gap-11 lg:gap-16 items-center justify-between">
            <div className="flex flex-col gap-5 md:gap-5 lg:gap-9 lg:h-[460px] ">
              <div className="flex items-center justify-start gap-3 md:gap-5 font-bold">
                <SectionTitle title="KNOW ABOUT US" />
              </div>
              <div className=" xl:ml-16 lg:ml-16 xl:w-[607px] lg:[507px] flex flex-col gap-4 lg:gap-8 ">
                <h2 className=" md:text-4xl lg:text-5xl">
                  {" "}
                  We provide a place for children with special needs
                </h2>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.{" "}
                </p>
                <p className="">
                  {" "}
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
                  et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                  risus tristique posuere.
                </p>
                <button className=" h-9 w-28 md:h-12 md:w-36 bg-[#F2C94C] rounded-sm">
                  {" "}
                  Learn more
                </button>
              </div>
            </div>
            <div className=" hidden md:flex justify-center items-center w-full  ">
              <Image
                src="/Images/BG1.jpg"
                alt="kids image"
                width="100"
                height="100"
                className="xl:w-[444px] lg:h-[444px] md:h-96 md:min-w-72 md:w-80 w-7/12 h-68 rounded-3xl "
              />
            </div>
          </div>
          <div className="container mx-auto flex flex-col gap-6">
            <div className="flex gap-8 items-center">
              <h4 className="whitespace-nowrap">OUR SUPPORTERS</h4>{" "}
              <div className="border border-gray-600 h-0 w-full"></div>
            </div>
            <SupprotMarquee />
          </div>
        </div>
      </div>

      {/* =========================================================================== */}
      {/* Services */}
      {/* =========================================================================== */}
      <div className="bg-[#FCEDC6]">
        <div className="container mx-auto flex flex-col gap-24 lg:px-8 px-4 py-9 md:py-12 lg:py-14">
          <div className="flex lg:gap-16 items-center">
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-9 xl:min-h-[460px] xl:w-[670px] lg:w-[550px]  ">
              <div className="flex items-center justify-start gap-3 md:gap-5 font-bold">
              <div className="flex items-center justify-start gap-3 md:gap-5 font-bold">
                <SectionTitle title="What we do" />
              </div>
              </div>
              <div className=" md:ml-0 lg:ml-16 xl:w-[607px] lg:w-[444px] flex flex-col gap-3 md:gap-4 lg:gap-8 ">
                <h2 className=" text-3xl sm:text-4xl md:text-5xl font-medium lg:font-bold">
                  {" "}
                  Some services we provide for our children
                </h2>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.{" "}
                </p>
                <div className=" flex flex-col gap-5 px-4 md:px-8 border-l-2 border-gray-400">
                  {services.map((item, index) => (
                    <ServiceCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      details={item.details}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:flex ">
              <Image
                src="/Images/BG2.jpg"
                alt="kids image"
                width="100"
                height="100"
                className="lg:w-[444px] lg:h-[544px] md:min-w-72 md:w-80 md:h-96 rounded-3xl border border-red-200"
              />
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================================== */}
      {/* Achievements*/}
      {/* =========================================================================== */}
      <ProjectSection />
      {/* =========================================================================== */}
      {/* Donation Using */}
      {/* =========================================================================== */}
      <div className="bg-black text-white">
        <div className="container mx-auto flex flex-col gap-12 lg:px-8 px-4 py-9 md:py-12 lg:py-14">
          <div className="flex flex-col gap-5  md:gap-9 md:flex-row w-full lg:gap-16 items-center justify-between">
            <div className="flex flex-col gap-3 md:gap-9  ">
              <div className=" md:w-96 xl:w-[607px] lg:w-[550px] flex flex-col gap-8">
                <h2 className="lg:text-5xl md:text-4xl font-bold">
                  How we spend your donations and where it goes
                </h2>
                <p>
                  We understand that when you make a  donation, you want to know
                  exactly where your money is going and we pledge to be
                  transparent.
                </p>
                <div className="flex items-center flex-wrap gap-x-9 gap-y-4 text-sm ">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4  ">
                      <div
                        className={cn(
                          "w-4 h-4",
                          item.color ? `bg-[${item.color}]` : ""
                        )}
                      ></div>{" "}
                      <p className="whitespace-nowrap ">
                        {" "}
                        {item.value}% {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <Ellipse data={chartData} />
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================================== */}
      {/* Assist section */}
      {/* =========================================================================== */}
      <Assistance />
    </div>
  );
};

export default page;
