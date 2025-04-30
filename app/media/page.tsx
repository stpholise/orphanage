import Assistance from "../_components/helpers/Assistance";
import SectionTitle from "../_components/ui/SectionTitle";
import ReadMoreButton from "../_components/ui/buttons/ReadMoreButton";
import EventWrapper from "../_components/helpers/EventWrapper";

const page = () => {
  return (
    <div>
      <div className="bg-[#FCEDC6] py-14">
        <div className="container mx-auto lg:px-8 md:px-6 px-4 flex lg:gap-9">
          <div className="">
            <SectionTitle title={"Top news"} />
            <div className="ml-16 max-w-[490px]  flex flex-col lg:gap-8 gap-4">
              <h1 className="lg:text-[52px] font-bold">
                Our goal is to provide inclusive care for children with special
                needs
              </h1>
              <p className="">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </p>
              <div className="">
                <ReadMoreButton
                  href="#"
                  label="Read More"
                  target="_self"
                  bg="bg-[#F2C94C]"
                />
              </div>
            </div>
          </div>
          <EventWrapper />
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
