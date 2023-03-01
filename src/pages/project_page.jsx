import { useParams } from "react-router-dom";

import { BtnGitHub } from "../components/btn_git_hub/btn_git_hub";

import { projectsList } from "../helpers/projectList";

function ProjectPage() {
  const { id } = useParams();
  const project = projectsList.find((proj) => proj.id === Number(id));
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.bigImg}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desk">
            <p>{project.skills}</p>
          </div>
          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
}

export { ProjectPage };
