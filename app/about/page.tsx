import SectionTitle from "../_components/ui/SectionTitle";
import Image from "next/image";
import SupprotMarquee from "../_components/features/SupprotMarquee";
import AwardWrapper from "../_components/utils/AwardWrapper";
import TeamMembersWrapper from "../_components/utils/TeamMembersWrapper";
import Assistance from "../_components/helpers/Assistance";
import SectionHeading from "../_components/helpers/SectionHeading";

const page = () => {
  return (
    <div>
      <div className="container lg:mt-12 md:mt-10 mt-8 mx-auto lg:px-8 md:px-6 px-4 flex flex-col md:gap-8 lg:gap-10 xl:gap-12">
        <div className="flex md:flex-row flex-col gap-4 justify-between  lg:py-0 md:py-8">
          <SectionHeading
            title="know about us"
            heading=" We are a non-governmental organization"
          />

          <div className="flex flex-col justify-center gap-2 md:gap-3 lg:gap-4  w-full xl:w-[464px] lg:w-[550px]">
            <h2 className="text-base font-bold">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </h2>
            <p className="text-[#1D2130] dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim elementum tristique.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:h-[1050px] relative my-4 dark:text-gray-800 ">
        <div className="xl:h-66 lg:h-48 md:h-32 container mx-auto flex jusitfy-center relative ">
          <Image
            src="/Images/BG.jpg"
            alt="bg display"
            width="200"
            height="300"
            className="h-full w-full mx-auto md:h-96 lg:h-96 xl:h-[400px] xl:w-[1200px] lg:w-[860px] md:w-[760px] absolute -bottom-50 -left-50 -right-50 rounded-2xl 
            "
          />
        </div>
        <div className="xl:h-[780px] xl:pt-66 lg:pb-12 md:pb-10 xl:pb-4 lg:pt-56 md:pt-52 pt-12  pb-10 w-full bg-[#FCEDC6] ">
          <div className="container mx-auto lg:px-8 md:px-6 lg:gap-16 md:gap-12 xl:gap-24 gap-6 px-4   flex  flex-col md:flex-row justify-center">
            <div className=" w-full md:w-96 flex flex-col gap-2 md:gap-4">
              <h3 className="uppercase font-bold text-base">our mission</h3>
              <h4 className="font-bold md:text-2xl text-xl">
                We make sure to provide inclusive care for children with special
                needs
              </h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className=" w-full md:w-96 flex flex-col gap-2 md:gap-4">
              <h3 className="uppercase font-bold text-base">our Vision</h3>
              <h4 className="font-bold md:text-2xl text-xl">
                Provide more inclusive care to children around the world
              </h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
          <div className="container mx-auto lg:px-8 lg:mt-16 md:mt-14 md:px-6 px-4 flex flex-col gap-6">
            <div className="flex gap-8 items-center">
              <h4 className="whitespace-nowrap text-base">
                OUR SUPPORTERS
              </h4>{" "}
            </div>
            <SupprotMarquee />
          </div>
        </div>
      </div>
      {/*============================================================================== */}
      {/*===========================Award============================================== */}
      {/*============================================================================== */}
      <AwardWrapper />
      {/*============================================================================== */}
      {/*===========================OUR JOURNY========================================= */}
      {/*============================================================================== */}
      <div className=" container mx-auto my-8 lg:px-8 md:px-6 px-4 ">
        <div className="bg-[#F2C94C] dark:text-gray-800  xl:h-[576px] lg:h-[444px] md:h-96 flex md:flex-row flex-col-reverse gap-8 items-center md:py-8 lg:py-10 xl:py-12 md:px-6 lg:px-8 px-4 py-5 rounded-2xl ">
          <div className="lg:px-8 md:px-3 flex  items-center lg:gap-8 ">
            <div className="md:w-96 lg:w-[444px] flex flex-col lg:gap-6 md:gap-4 gap-3 lg:justify-center">
              <h3 className="uppercase font-bold text-base">OUR JOURNEY </h3>
              <h4 className="font-bold text-4xl">How we raised 34M</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh.
              </p>
              <div className=" flex  justify-start gap-4 md:gap-5 lg:gap-8">
                <div className="">
                  <p className="font-bold sm:text-3xl text-2xl"> 34M+</p>
                  <p className="text-sm "> Donation Received </p>
                </div>
                <div className="">
                  <p className="font-bold sm:text-3xl text-2xl"> 400+</p>
                  <p className="text-sm "> Volunters </p>
                </div>
                <div className="">
                  <p className="font-bold sm:text-3xl text-2xl"> 20+</p>
                  <p className="text-sm "> Care homes </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <Image
              src={"/Images/our_journy.png"}
              alt="group photo"
              width="100"
              height="100"
              className="lg:w-[600px] xl:h-[444px] lg:h-80 md:h-72 md:w-72 sm:w-80 xs:w-72 xxs:w-64 w-56 "
            />
          </div>
        </div>
      </div>
      {/*============================================================================== */}
      {/*===========================OUR TEAM MEMBERS=================================== */}
      {/*============================================================================== */}
      <TeamMembersWrapper />

      {/* =========================================================================== */}
      {/* Assist section */}
      {/* =========================================================================== */}
      <Assistance />
    </div>
  );
};

export default page;
