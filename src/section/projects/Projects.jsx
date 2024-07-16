import { projects } from "../data";
import styles from "./ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";



const Projects = () => {

 

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          {projects.map(({ id, image, link, title, desc }) => {
            return (
              <div className={styles.project} key={id}>
                <ProjectCard image={image} title={title} link={link} desc={desc} />
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Projects;