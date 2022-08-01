import {useState} from 'react';
import { projects as projectsData } from "../data";
import ProjectsNavbar from "../components/ProjectNavbar";
import ProjectCard from "../components/projectCard";

import {Category} from "../typs";

const Projects = () => {

  const [Projects,setProjects] = useState(projectsData);
  const [active, setActive] = useState("all")

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-auto" style={{ height: "65vh" }}>
       <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <div className="relative grid grid-cols-12 gap-4 my-3">
          {
              Projects.map(project=>(
                <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                  <ProjectCard project={project} key={project.name} />
                </div>
              ))
          }
        </div>
    </div>
  )
}

export default Projects