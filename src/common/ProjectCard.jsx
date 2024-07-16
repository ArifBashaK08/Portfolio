import styles from "../section/projects/ProjectStyles.module.css";

const Project = ({ title, image, link, desc }) => {
    return (
        <>
            <img src={image} alt={title} className={styles.hover} />
            <a href={link} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
            </a>
            <p>{desc}</p>
        </>
    )
}
export default Project