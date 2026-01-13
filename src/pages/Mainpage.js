import styles from '../resources/Mainpage.module.css';
import cv from '../resources/ReeceSteptoeCV.pdf'
import {Link} from 'react-router-dom'

export function SocialsBar() {
	return(
	<div className={styles.SocialsBar}>	
		<a className={styles.LightButton} href="https://github.com/blockheadbandit"><img className={styles.SvgInvert} src="icons/github-mark-white.svg" alt="Github Logo"/></a>
		<a className={styles.LightButton} href="https://www.linkedin.com/in/reece-steptoe-634392252/"><img src="icons/linkedin.svg" alt="Linkedin Logo"/></a>
	</div>
	);
}

export function TopBar() {
	return (
		<div className={styles.MenuBar}>
			<Link className={styles.LightButton} to="/">
				<img className={styles.HomeIcon} src="icons/home.svg" alt="Home" />
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
	  <SocialsBar />
	  <div className={styles.MainPanel}>	
		<div>
			<h1>Reece Steptoe's Portfolio</h1>
			<p>Welcome to my page! I'm Reece and this is my Portfolio page</p>
			<p>Grab a copy of my CV and have a browse.</p>
		</div>
		<div className = {styles.ButtonMenu}>
			<a className={styles.LightButton} href={cv}>
				<img src="icons/cv.svg" alt="CV"/>
				Download CV
			</a>
			<Link className={styles.RoundedButton} to="mailto:steptoereece@gmail.com"><img src="/icons/gmail.svg"/>Contact Me</Link>

		</div>
	  </div>
	</div>
  );
}


