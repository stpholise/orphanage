 
 interface Project {
    projectTitle: string;
    projectDescription: string; 
 }


const ProjectCard = ({projectTitle, projectDescription}: Project) => {
  return (
    <div className="p-12 bg-black rounded-3xl text-white flex flex-col h-[444px] justify-between">
        <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-bold">{projectTitle}</h4>
            <p>{projectDescription}</p>
        </div>

        <button className="text-black bg-white rounded-sm w-36 h-11"> Learn more </button>
    </div>
  )
}

export default ProjectCard