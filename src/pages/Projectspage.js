
import styles from '../resources/Projectspage.module.css';
import {TopBar} from './Mainpage.js';

export default function Projects() {
  return (
    <div className="Projects">
	 <TopBar /> 
	  <div className={styles.MainPanel}>
		<div>
			<h1>About Me</h1>
			<p>add styled panels for my github projects</p>
		</div>
	  </div>
	</div>
  );
}

