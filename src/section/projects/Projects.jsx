import { projects } from "../data";
import styles from "./ProjectStyles.module.css";

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                {projects.map(project => (
                    <div className={styles.project} key={project.id}>
                        <img src={project.image} alt="Vibes.com" className={styles.hover} />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <h3>{project.title}</h3>
                        </a>
                        <p>{project.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
