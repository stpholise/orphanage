import ContactForm from "../_components/features/ContactForm";
import SectionHeading from "../_components/helpers/SectionHeading";
const page = () => {
  return (
    <div className="">
      <div className="lg:h-[580px] w-full bg-[#FCEDC6] lg:py-16 py-12 ">
        <div className="container mx-auto px-4 md:px-6 flex flex-col   md:flex-row lg:gap-28 gap-8 lg:px-8 dark:text-gray-700">
          <SectionHeading
            title="Contact us"
            heading=" We'd love to hear from you"
            text="Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details."
          />

          <div className="lg:w-80 md:h-96 flex flex-col items-stretch lg:gap-8">
            <div className="border-b border-gray-200 h-1/3">
              <h3 className="md:text-xl font-bold mb-4">Let&apos;s talk! </h3>
              <div className=" flex xs:flex-row flex-col gap-4 pb-3">
                <p className="">+234 09012346514</p>
                <p>hello@largerthani.com</p>
              </div>
            </div>
            <div className="h-1/3 py-6">
              <h3 className="md:text-xl font-bold mb-4">Headoffice</h3>
              <div>
                <p className="">8 Brewery Drive, Lagos,</p>
                <p>Nigeria.</p>
              </div>
            </div>
            <div className="  h-1/3">
              <h3 className="md:text-xl font-bold mb-4">Branch Office</h3>
              <div>
                <p className="">Opp Opolo round about, Yenagoa, Bayelsa,</p>
                <p>Nigeria.</p>
              </div>
            </div>
            <div className="">foot</div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
