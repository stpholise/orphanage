
import Volunteer from "./Volunteer";

const Assistance = () => {
  return (
    <div className="">
      <div className="container mx-auto flex flex-col gap-24 lg:px-8 px-4 py-9 md:py-12 lg:py-6 my-6">
       <Volunteer />
        <div className="container mx-auto flex flex-col gap-6">
          <div className="flex gap-8 items-center">
            <h4 className="whitespace-nowrap">Our Events</h4>{" "}
            <div className="border border-gray-600 h-0 w-full"></div>
          </div>
          <div className="flex sm:flex-row flex-col gap-6 sm:gap-7 justify-center">
            <div className="flex bg-[#F2C94C] h-40  p-9  gap-3 md:gap-4 rounded-xl w-full ">
              <div className="">
                <p className="text-3xl"> 13</p>
                <p> APR </p>
              </div>
              <div className="">
                <div className="text-sm uppercase flex items-center gap-2 md:gap-5">
                  {" "}
                  Next Event <div className="border-b border-black w-12"></div>
                </div>
                <div className=" text-base md:text-2xl font-semibold">
                  A day with our wonderful children{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-4 bg-[#F2C94C] h-40  p-9 rounded-xl w-full ">
              <div className="">
                <p className="text-3xl"> 25</p>
                <p> APR </p>
              </div>
              <div className="">
                <div className="text-sm uppercase flex items-center gap-2 md:gap-5">
                  {" "}
                  Next Event <div className="border-b w-12 border-black"></div>
                </div>
                <div className=" text-base md:text-2xl font-semibold">
                  Seminar: Caring for children with autism
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
