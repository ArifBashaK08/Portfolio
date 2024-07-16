import styles from "./skillStyles.module.css"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaReact, FaNodeJs,FaDocker } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs} from "react-icons/si";
import { useTheme } from "../../common/ThemeContext"


const Skills = () => {

    const {theme} = useTheme()

    const skillSet1 = [
        {
            id: 1,
            icon: <FaHtml5 color="#F97300" size={30} />,
            skill: "HTML"
        },
        {
            id: 2,
            icon: <FaCss3Alt color="#4B70F5" size={30} />,
            skill: "CSS"
        },
        {
            id: 3,
            icon: <TbBrandJavascript fill="#F4CE14" size={30} />,
            skill: "JavaScript"
        },
        {
            id: 4,
            icon: <FaGitAlt color="#F97300" size={30} />,
            skill: "Git"
        },
        {
            id: 5,
            icon: <FaGithub size={30} fill={theme === "light" ? 'black' : "white"} />,
            skill: "GitHub"
        },
    ];
    const skillSet2 = [
        {
            id: 1,
            icon: <FaReact color="#03AED2" size={30} />,
            skill: "ReactJS"
        },
        {
            id: 2,
            icon: <FaNodeJs color="#7ABA78" size={30} />,
            skill: "Node.js"
        },
        {
            id: 3,
            icon: <SiExpress fill="#F4CE14" size={30} />,
            skill: "Express.js"
        },
        {
            id: 4,
            icon: <SiMongodb color="#7ABA78" size={30} />,
            skill: "MongoDB"
        },
        {
            id: 5,
            icon: <SiTailwindcss color="#03AED2" size={30} />,
            skill: "Tailwind CSS"
        },
        
    ];
    const skillSet3 = [
        {
            id: 1,
            icon: <FaDocker color="#03AED2" size={30} />,
            skill: "Docker"
        },
        {
            id: 2,
            icon: <SiNextdotjs color="#fff" size={30} />,
            skill: "Next.js"
        },
        {
            id: 4,
            icon: <FaBootstrap color="#AF47D2" size={30} />,
            skill: "Bootstrap CSS"
        },
    ];

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                {skillSet1.map(({ id, icon, skill }) => (
                    <span key={id}>
                        {icon}
                        <p>{skill}</p>
                    </span>
                ))}
            </div>
            <hr />
            <div className={styles.skillList}>
                {skillSet2.map(({ id, icon, skill }) => (
                    <span key={id}>
                        {icon}
                        <p>{skill}</p>
                    </span>
                ))}
            </div>
            <hr />
            <div className={styles.skillList}>
                {skillSet3.map(({ id, icon, skill }) => (
                    <span key={id}>
                        {icon}
                        <p>{skill}</p>
                    </span>
                ))}
            </div>
        </section>
    )
}
export default Skills