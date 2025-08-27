import React from "react";
import { useParams } from "react-router-dom";
import myproject_data from "../../assets/myproject_data";
import "./ProjectDetails.css"

const ProjectDetails = () => {
  const { id } = useParams();
  const project = myproject_data.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="project-details">
      <h1 className="project-title">{project.title}</h1>
      <img className="project-image" src={project.p_img} alt={project.title} />

      <section className="project-overview">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      <section className="project-features">
        <h2>Key Features</h2>
        <ul>
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="project-techstack">
        <h2>Tech Stack</h2>
        <p>{project.techStack.join(", ")}</p>
      </section>
    </div>
  );
};

export default ProjectDetails;
