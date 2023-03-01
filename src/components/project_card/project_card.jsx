import { Link } from "react-router-dom";

import "./project_card.css";

function ProjectCard(props) {
  const { title, img, id } = props;

  return (
    <li className="project">
      <Link to={`/project/${id}`}>
        <img className="project__img" src={img} alt="Project example" />
      </Link>

      <h3 className="project__title">{title}</h3>
    </li>
  );
}

export { ProjectCard };
