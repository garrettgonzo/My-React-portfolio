import ProjectItem from "../../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Navbar from "../navBar/navbar";

import "./projects.css";

function Projects() {
  console.log(ProjectList);
  return (
    <div className="container">
      <Navbar />
      <div className="projects">
        <h1 className="projectsTitle"> My Portfolio</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            console.log(project);
            return (
              <ProjectItem
                key={idx}
                id={idx}
                name={project.name}
                skills={project.skills}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
