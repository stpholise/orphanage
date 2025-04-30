import SectionHeading from "../_components/helpers/SectionHeading";
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <section className="">
        <div className="container mx-auto lg:px-8 md:px-6 px-4  flex justify-between">
          <SectionHeading
            title="Donate"
            heading="Making a donation for our children."
            text="When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow."
            button="Donate now"
          />
             <div className="flex flex-col gap-2 w-full xl:w-[464px] rounded-2xl">
                    <Image
                      src="/images/BG-Image.jpg"
                      alt="background hero"
                      height="100"
                      width="100"
                      className="md:h-80 md:w-[460px] rounded-3xl object-fit"
                    />
                  </div> 
        </div>
      </section>
    </div>
  );
};

export default page;
