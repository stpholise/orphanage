import { useAOS } from "@/app/_hooks/useAOS";

interface Project {
  projectTitle: string;
  projectDescription: string;
}

const ProjectCard = ({ projectTitle, projectDescription }: Project) => {
  useAOS();
  return (
    <div
      data-aos="flip-left"
      className="lg:p-12 px-6 py-8 md:p-8 bg-[url('/Images/BG-Image.jpg')]  rounded-3xl text-white flex flex-col h-72  md:h-96 lg:h-[420px] justify-between"
    >
      <div className="flex flex-col gap-5 sm:gap-8">
        <h4 className="text-2xl font-bold">{projectTitle}</h4>
        <p>{projectDescription}</p>
      </div>

      <button className="text-black bg-white rounded-sm w-36 h-11">
        {" "}
        Learn more{" "}
      </button>
    </div>
  );
};

export default ProjectCard;
