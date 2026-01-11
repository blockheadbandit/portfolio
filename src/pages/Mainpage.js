import cvicon from '../resources/cv.svg';
import styles from '../resources/Mainpage.module.css';

import {Link} from 'react-router-dom'



export function TopBar() {
	return (
		<div className={styles.MenuBar}>
			<Link className={styles.RoundedButton} to="/about">	
				About Me
			</Link>	
			<Link className={styles.RoundedButton} to="/projects">	
				My Projects	
			</Link>	
			<Link className={styles.RoundedButton} to="/contact">	
				Contact	
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
			<p>Welcome to my page! here you can find all the information you may need.</p>
		</div>
		<div className = {styles.ButtonMenu}>
			<a className={styles.DownloadButton}>
				<img className="svg-icon" src={cvicon} />
				Download CV
			</a>
			<Link className={styles.RoundedButton} to="/contact">Contact Me</Link>

		</div>
	  </div>
	</div>
  );
}


