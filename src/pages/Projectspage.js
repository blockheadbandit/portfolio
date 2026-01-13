import styles from '../resources/Projectspage.module.css';
import {TopBar, SocialsBar} from './Mainpage.js';
import { Component } from 'react';


class ProjectEntry extends Component {
	render(){
		return (
			<div className={styles.ProjectEntry}>
				<h2> {this.props.name} </h2>
				<p>{this.props.desc}</p>
				<div className={styles.ProjectLinks}>
					<a className={styles.RepoButton} href={this.props.repo}>
						<img src="icons/github-mark-white.svg" alt="Github Logo"/>
						Repo
					</a>
					{this.props.release && ( <a className={styles.ReleaseButton} href={this.props.release}>Releases</a> )}
					
				</div>
			</div>
		);
	}
}

export default function Projects() {
  return (
    <div className="Projects">
	 <TopBar />
	  <SocialsBar />
	  <div className={styles.MainPanel}>
		<div>
			<h1>My Projects</h1>
			<p>Here are all the projects I have worked on and uploaded to the public, feel free to take a look at the code or download a release.</p>
			<ProjectEntry name="Portfolio Website"
				desc="I made this website with React, you can find the project repo below."
				repo="https://github.com/blockheadbandit/portfolio/tree/master"
			/>
			<ProjectEntry name="Ktempsensor" 
				desc="This project started because I disliked having to use nvidia-smi and top/htop to view the temperature of my CPU and GPU. Currently, it is CLI only; however, I plan on adding a GUI at some point."
				repo="https://github.com/blockheadbandit/Ktempsensor" 
				release="https://github.com/blockheadbandit/Ktempsensor/releases"
			/>
			


		</div>
		
	  </div>
	</div>
  );
}



