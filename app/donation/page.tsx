"use client";
import SectionHeading from "../_components/helpers/SectionHeading";
import Image from "next/image";
import Volunteer from "../_components/helpers/Volunteer";
import SummaryTabs from "../_components/features/SummaryTabs";

const page = () => {
  return (
    <div>
      <section className=" lg:py-16">
        <div className="container mx-auto lg:px-8 md:px-6 px-4  flex lg:gap-16 justify-between">
          <SectionHeading
            title="Donate"
            heading="Making a donation for our children."
            text="When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow."
            button="Donate now"
          />
          <div className="flex flex-col gap-2 w-full xl:w-[464px] rounded-2xl">
            <Image
              src="/Images/BG-Image.jpg"
              alt="background hero"
              height="100"
              width="100"
              className="md:h-80 md:w-[460px] rounded-3xl object-fit"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between gap-12 container mx-auto px-4 md:px-6 lg:px-8 lg:py-16">
        <div className="w-1/2 flex flex-col gap-8">
          <h2 className="font-bold text-5xl">
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
      <section className="flex justify-stretch lg:gap-14 container mx-auto px-4 md:px-6 lg:px-8 lg:py-16">
        <h2 className="max-w-96 lg:w-80 font-bold text-5xl">
          How we use your donation
        </h2>
        <p className="max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Nunc ut sem vitae risus tristique posuere.
        </p>
        <p className="max-w-96">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
          cursus id rutrum lorem imperdiet.
        </p>
      </section>
      <div className="container mx-auto lg:py-16 lg:px-8 md:px-6 px-4">
        <Volunteer />
      </div>
    </div>
  );
};

export default page;
