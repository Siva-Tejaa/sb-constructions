import React, {useState, useEffect} from 'react';
import { projects, projectsNav } from '../../utils/Data';

const Projects = () => {

  const[projectCategory, setProjectCategory] = useState("all");
  const[updatedProjects, setUpdatedProjects] = useState(projects);

  const projectClick = (name) => {
    setProjectCategory(name);

    if(name==="all"){
      setUpdatedProjects(projects);
    }else{
      const filteredProjects = projects.filter((project) => (
        project.category === name
      ))
      setUpdatedProjects(filteredProjects);
    }
  }



  return (
    <div id="projects" className='m-3'>
        <p className='text-3xl font-semibold text-center mt-12'>Projects</p>
        <p className='text-sm text-center mb-2 text-gray-400'>What We Build</p>
        <div className='flex items-center justify-center mb-5'>
          {
            projectsNav.map((projectNav, index) => (
              <button key={index} className={`m-5 px-2 py-1 rounded-md font-medium ${projectCategory === projectNav?.name && "bg-[#F7BB05] text-white"} hover:text-white hover:bg-[#F7BB05]`} onClick={() => projectClick(projectNav?.name)}>{projectNav?.name.charAt(0).toUpperCase() + projectNav?.name.slice(1)}</button>
            ))
          }
        </div>

        <div className='flex items-center justify-center flex-wrap gap-4'>

        {
          updatedProjects.map((project, index) =>(
            <div key={index}>
              <img src={project?.image} alt={project?.name} className='border-4 border-[#F7BB05] w-60 h-60 rounded-sm'/>
              <p className='text-lg mt-2 text-center font-medium'>{project?.name}</p>
              <p className='text-xs text-center text-slate-400'>{project?.work.join(", ")}</p>
              <p className='text-base text-center mb-4 text-[0.93rem]'>{project?.address}</p>
            </div>
          ))
        }

        </div>
        
    </div>
  )
}

export default Projects