import { ProjectCard } from "../components/project_card/project_card";
import { projectsList } from "../helpers/projectList";

function Projects() {
  const projectList = projectsList.map((proj) => {
    return (
      <ProjectCard
        id={proj.id}
        title={proj.title}
        img={proj.img}
        key={proj.id}
      />
    );
  });
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">{projectList}</ul>
      </div>
    </main>
  );
}

export { Projects };
