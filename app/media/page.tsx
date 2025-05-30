import Assistance from "../_components/helpers/Assistance";
import SectionTitle from "../_components/ui/SectionTitle";
import ReadMoreButton from "../_components/ui/buttons/ReadMoreButton";
import EventWrapper from "../_components/helpers/EventWrapper";
import SectionHeading from "../_components/helpers/SectionHeading";

const page = () => {
  return (
    <div>
      <div className="bg-[#FCEDC6] py-14">
        <div className="container mx-auto lg:px-8 md:px-6 px-4 flex lg:gap-14 gap-5 flex-col md:flex-row lg:text-left dark:text-gray-700 ">
          <SectionHeading
            title="Top news"
            heading=" Our goal is to provide inclusive care for children with special
                needs"
            text="  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere."
            button="Read More"
          />

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
