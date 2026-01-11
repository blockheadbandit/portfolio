
import styles from '../resources/Aboutpage.module.css';
import {TopBar} from './Mainpage.js';

export default function About() {
  return (
    <div className="About">
	 <TopBar /> 
	  <div className={styles.MainPanel}>
		<div>
			<h1>About Me</h1>
			<p>yadayayayayayaya</p>
		</div>
	  </div>
	</div>
  );
}

