import React from "react";
import { Link } from "react-router-dom";
import './MyProjects.css';
import myproject_data from '../../assets/myproject_data';

const MyProjects = () => {
  return (
    <section id="project" className='myprojects'>
      <div className="myprojects-title">
        <h1>Projects</h1>
      </div>
      <div className="myprojects-container">
        {myproject_data.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <img src={project.p_img} alt={project.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
