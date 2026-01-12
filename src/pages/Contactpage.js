import styles from '../resources/Contactpage.module.css';
import {TopBar} from './Mainpage.js';
import {Link} from 'react-router-dom'

export default function Contact() {
  return (
    <div className="Contact">
	 <TopBar /> 
	  <div className={styles.MainPanel}>
		<div>
			<h1>Contact Details</h1>
			<p>The best way to contact me is via email here: steptoereece@gmail.com</p>
			<Link className={styles.RoundedButton} to="mailto:steptoereece@gmail.com">Contact Me</Link>
		</div>
	  </div>
	</div>
  );
}

