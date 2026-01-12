
import styles from '../resources/Projectspage.module.css';
import {TopBar} from './Mainpage.js';

export default function Projects() {
  return (
    <div className="Projects">
	 <TopBar /> 
	  <div className={styles.MainPanel}>
		<div>
			<h1>My Projects</h1>
			<p>I currently do not have any projects uploaded yet. Check back later once I have gotten around to fleshing this page out</p>
		</div>
	  </div>
	</div>
  );
}

