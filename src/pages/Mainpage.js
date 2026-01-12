import cvicon from '../resources/cv.svg';
import homeicon from '../resources/home.svg'
import styles from '../resources/Mainpage.module.css';
import cv from '../resources/ReeceSteptoeCV.pdf'
import {Link} from 'react-router-dom'



export function TopBar() {
	return (
		<div className={styles.MenuBar}>
			<Link className={styles.LightButton} to="/">
				<img className={styles.HomeIcon} src={homeicon} />
			</Link>
			<Link className={styles.RoundedButton} to="/about">	
				About Me
			</Link>	
			<Link className={styles.RoundedButton} to="/projects">	
				My Projects	
			</Link>	
			<Link className={styles.RoundedButton} to="/contact">	
				Contact Info	
			</Link>
		</div>
	);
}


export default function Home() {
  return (
    <div className={styles.Home}>
	  <TopBar />
	  <div className={styles.MainPanel}>
		<div>
			<h1>Reece Steptoe's Portfolio</h1>
			<p>Welcome to my page! I'm Reece and this is my Portfolio page</p>
			<p>Grab a copy of my CV and have a browse.</p>
		</div>
		<div className = {styles.ButtonMenu}>
			<a className={styles.LightButton} href={cv}>
				<img className="svg-icon" src={cvicon} />
				Download CV
			</a>
			<Link className={styles.RoundedButton} to="mailto:steptoereece@gmail.com">Contact Me</Link>

		</div>
	  </div>
	</div>
  );
}


