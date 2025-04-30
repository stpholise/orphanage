import SectionTitle from "../_components/ui/SectionTitle";
import Image from "next/image";
import SupprotMarquee from "../_components/features/SupprotMarquee";
import AwardWrapper from "../_components/utils/AwardWrapper";
import TeamMembersWrapper from "../_components/utils/TeamMembersWrapper";
import Assistance from "../_components/helpers/Assistance";

const page = () => {
  return (
    <div>
      <div className="container lg:mt-12 mx-auto lg:px-8 md:px-6 sm:px-4 flex flex-col lg:gap-8">
        <SectionTitle title={"know about us"} />
        <div className="flex gap-4 justify-end xl:ml-16 xl:w-[calc(100%-64px)] ">
          <div className="">
            <h1 className="font-bold lg:text-[52px] lg:w-[700px] leading-16">
              We are a non-governmental organization
            </h1>
          </div>
          <div className="flex flex-col gap-2 w-full xl:w-[464px]">
            <h2 className="text-base font-bold">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </h2>
            <p className="text-[#1D2130]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim elementum tristique.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:h-[1050px] relative my-4  ">
        <div className="xl:h-66 container mx-auto flex jusitfy-center relative">
          <Image
            src="/Images/BG.svg"
            alt="bg display"
            width="200"
            height="300"
            className="h-full w-full mx-auto xl:h-[400px] xl:w-[1200px] absolute -bottom-50 -left-50 -right-50
            "
          />
        </div>
        <div className="xl:h-[780px] xl:pt-66 w-full bg-[#FCEDC6]">
          <div className="container mx-auto lg:px-8 md:px-6 xl:gap-24 px-4  md:flex  justify-center">
            <div className=" w-96 flex flex-col gap-4">
              <h3 className="uppercase font-bold text-base">our mission</h3>
              <h4 className="font-bold text-2xl">
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
            <div className="w-96 flex flex-col gap-4">
              <h3 className="uppercase font-bold text-base">our Vision</h3>
              <h4 className="font-bold text-2xl">
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
          <div className="container mx-auto lg:px-8 lg:mt-16 md:px-6 px-4 flex flex-col gap-6">
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
        <div className="bg-[#F2C94C] h-[576px] flex gap-8 items-center py-12 px-8 rounded-2xl">
          <div className="px-8 flex items-center lg:gap-8">
            <div className="w-96 lg:w-[444px] flex flex-col lg:gap-6 lg:justify-center">
              <h3 className="uppercase font-bold text-base">OUR JOURNEY </h3>
              <h4 className="font-bold text-4xl">How we raised 34M</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh.
              </p>
              <div className=" flex justify-start lg:gap-8">
                <div className="">
                  <p className="font-bold text-3xl"> 34M+</p>
                  <p className="text-sm "> Donation Received </p>
                </div>
                <div className="">
                  <p className="font-bold text-3xl"> 400+</p>
                  <p className="text-sm "> Volunters </p>
                </div>
                <div className="">
                  <p className="font-bold text-3xl"> 20+</p>
                  <p className="text-sm "> Care homes </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={"/Images/our_journy.png"}
              alt="group photo"
              width="100"
              height="100"
              className="lg:w-[600px] lg:h-[444px]"
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
