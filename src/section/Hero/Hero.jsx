import style from './HeroStyle.module.css';
import heroImg from "../../assets/hero-img.jpg"
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import Resume from "../../assets/Resume.pdf"
import { useTheme } from "../../common/ThemeContext"


const Hero = ({ name, role, gitHub, linkedIn, objective }) => {

  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === "light" ? <FaSun size={30} onClick={toggleTheme} className='colorMode' /> : <FaMoon size={30} onClick={toggleTheme} className='colorMode' fill='white' />

  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModeContainer}>
        <img src={heroImg}
          alt={name}
          className={style.hero} />
        {themeIcon}
      </div>
      <div className={style.info}>
        <h1>{name}</h1>
        <h2>{role}</h2>
        <span>
          <a href={gitHub}>
            <FaGithub size={30} fill={theme === "light" ? 'black' : "white"} />
          </a>
          <a href={linkedIn}>
            <FaLinkedin size={30} fill={theme === "light" ? 'black' : "white"} />
          </a>
        </span>
        <p className={style.description}>{objective}</p>
        <a href={Resume} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}
export default Hero