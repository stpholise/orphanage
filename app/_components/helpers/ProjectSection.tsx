import ProjectsWrapper from "./ProjectsWrapper";
import SectionTitle from "../ui/SectionTitle";

const ProjectSection = () => {
  return (
    <div className="">
      <div className="container mx-auto flex flex-col gap-6 sm:gap-9 md:gap-12 lg:px-8 px-4 py-9  md:py-12 lg:py-14">
        <div className="flex gap-9 md:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col sm:gap-6 gap-3 md:gap-9  ">
            <SectionTitle title={"projects we have done"} />
            <div className=" ml-2 lg:w-[607px] flex flex-col gap-8 xl:ml-16 lg:ml-16 ">
              <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold">
                We are creating a place where children with special needs can
                thrive
              </h2>
            </div>
          </div>
        </div>
        <ProjectsWrapper />
      </div>
    </div>
  );
};

export default ProjectSection;
