"use client";
import Image from "next/image";
import SectionTitle from "../_components/ui/SectionTitle";
import Assistance from "../_components/helpers/Assistance";
import ProjectSection from "../_components/helpers/ProjectSection";
import ServiceCard from "../_components/cards/ServiceCard";
import SectionHeading from "../_components/helpers/SectionHeading";

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
    icon: "/Icons/scholarship-icon.svg",
    title: "Basic amenities",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "/Icons/therapy-icon.svg",
    title: "Therapy",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    icon: "/Icons/therapy-icon.svg",
    title: "Public outreach",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

const page = () => {
  return (
    <div className="my-8">
      {" "}
      <div className="container lg:mt-12 mx-auto sm:gap-8 lg:px-8 md:px-6 px-4 flex items-start justify-between lg:gap-8 md:gap-6 md:my-4 lg:py-4 md:py-8 ">
        <SectionHeading
          title="What we do"
          heading=" We are working cross country"
          text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat."
        />
        <div className="hidden sm:flex flex-col gap-2 w-fit xl:w-[464px] rounded-2xl ">
          <Image
            src="/Images/BG-Image.jpg"
            alt="background hero"
            height="100"
            width="100"
            className="md:h-80 md:w-[460px] h-64 w-72 rounded-3xl object-fit"
          />
        </div>
      </div>
      {/* =========================================================================== */}
      {/* services */}
      {/* =========================================================================== */}
      <div className="xl:h-[570px] bg-[#FCEDC6] my-4 py-4">
        <div className="container mx-auto lg:px-8 md:px-6 px-4 md:py-16 py-8 dark:text-gray-700">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 md:mb-6">
            What we do for our kids with special needs
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:my-7 lg:py-7 ">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </div>
      {/* =========================================================================== */}
      {/* Achievements*/}
      {/* =========================================================================== */}
      <ProjectSection />
      {/* =========================================================================== */}
      {/* Assist section */}
      {/* =========================================================================== */}
      <Assistance />
    </div>
  );
};

export default page;
