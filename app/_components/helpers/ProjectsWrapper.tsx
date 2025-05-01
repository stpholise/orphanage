import ProjectCard from "../cards/ProjectCard";

interface Project {
  projectTitle: string;
  projectDescription: string;
}

const ourProjects: Project[] = [
  {
    projectTitle: "Mission smile 1k: Outdoor charity",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    projectTitle: "Weekly excursions",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    projectTitle: "Monthly public awareness",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

const ProjectsWrapper = () => {
  return (
    <div className="">
      <div className=" flex flex-col md:flex-row gap-6">
        {ourProjects.map((item, index) => (
          <ProjectCard
            key={index}
            projectTitle={item.projectTitle}
            projectDescription={item.projectDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsWrapper;
