"use client";
import SectionHeading from "../_components/helpers/SectionHeading";
import Image from "next/image";
import Volunteer from "../_components/helpers/Volunteer";
import SummaryTabs from "../_components/features/SummaryTabs";

const page = () => {
  return (
    <div>
      <section className=" lg:py-16 md:py-14 py-12">
        <div className="container mx-auto lg:px-8 md:px-6 px-4  flex lg:gap-16 sm:gap-8 justify-between">
          <SectionHeading
            title="Donate"
            heading="Making a donation for our children."
            text="When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow."
            button="Donate now"
          />
          <div className="sm:flex flex-col gap-2 w-fit sm:w-64 md:w-full xl:w-[464px] rounded-2xl hidden">
            <Image
              src="/Images/BG-Image.jpg"
              alt="background hero"
              height="700"
              width="1500"
              className="md:h-80 md:w-[460px] sm:w-64 sm:h-64 rounded-3xl object-fit"
            />
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col justify-between lg:gap-12 md:gap-10 gap-6 container mx-auto px-4 md:px-6 lg:px-8 lg:py-16 md:py-14">
        <div className="md:w-1/2 w-full flex flex-col md:gap-8 gap-4">
          <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl">
            How you can contribute to caring for our kids
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="">
          <SummaryTabs />
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="border bordder-gray-50 height-0 "></div>
      </div>
      <section className="flex md:flex-row flex-col sm:items-center md:justify-stretch lg:gap-14 md:gap-11 gap-5 container mx-auto px-4 md:px-6 lg:px-8 lg:py-16 md:py-14 py-6">
        <h2 className=" md:max-w-96 lg:w-80 font-bold md:text-5xl text-3xl">
          How we use your donation
        </h2>
        <p className="md:max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Nunc ut sem vitae risus tristique posuere.
        </p>
        <p className="md:max-w-96">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
          cursus id rutrum lorem imperdiet.
        </p>
      </section>
      <div className="container mx-auto lg:py-16 md:py-14 py-6 lg:px-8 md:px-6 px-4">
        <Volunteer />
      </div>
    </div>
  );
};

export default page;
