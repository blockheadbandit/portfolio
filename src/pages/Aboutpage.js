
import styles from '../resources/Aboutpage.module.css';
import {TopBar, SocialsBar} from './Mainpage.js';

export default function About() {
  return (
    <div className="About">
		<TopBar /> 
		<SocialsBar />
	  <div className={styles.MainPanel}>
		<div>
			<h1>About Me</h1>
			<p>Hi, I'm Reece.</p>
			<p>I have made this website so that employers may see all my projects and access my cv.</p>
			<p>This section is going to be a bit of a blog styled ramble about my interests so you can get to know a little about me. :)</p>
			<p>
				My spare time mostly consists of programming, playing guitar, gaming or reading.
				If you would like to see any of my projects check out the My Projects section, I plan on putting a load of my personal projects onto github for people to see.
				I have been programming since 16 and have always found it such a satisfying hobby, I love the feeling of getting a program to work and working through a challenge to create something useful.
			</p>
			<h2>Programming</h2>
			<p>	
				Recently I have been starting to fully learn C++, since I moved to linux a year ago C++ development has been really fluid and I have enjoyed getting my hands dirty with a less simple language,
				The first project I shall be uploading to GitHub in C++ is a Temperature sensor, more information on that on the Projects page.
				I am very familiar with Python, and have even made a quite simple LLM model which was a blast to learn how to do. I also love when games include programming, I have so many hours making little programs 
				for my friends to use with the mod <a href="https://tweaked.cc/"> CC: Tweaked</a> for minecraft.
			</p>
			<p>I also know bits and bobs of all sorts of languages, a great example is this site. I made this site with React and it is being hosted via GitHub Pages which meant I had to learn how react works and brush up
				on HTML and CSS. Learning new technology has been a great way of expanding my horizons as it helps me figure out ways of performing tasks for a variety of needs.
			</p>
			<h2>Music & Reading</h2>
			<p>I also love my guitars, I have been playing for around 3-4 years now. My first single was released on spotify in 2024, It isn't too bad of a song but I have since gotten better at singing and playing.
				I'm Very grateful for the friends that let me use their studio and even helped me make the song.
			</p>
			<a className={styles.RoundedButton} href="https://open.spotify.com/track/6Iau16etlRenIRlsgcCITU"> My Song</a>
			<p>
				I have also gotten very into reading, it's a great way of winding down before bed. My collection of books currently consists of about 90% Star Wars books and 10% Manga.
				Books have also been helping me develop a more fleshed out vocabulary which also helps when it comes to writing songs (which I'm still not the best at).
			</p>
			<h2> Gaming </h2>
			<p>
				Gaming is another hobby I've had since a kid, I remember my first time playing Minecraft on my dads laptop before they had even added beds to the game! I love all sorts of games whether it's a story game, Multiplayer game, Puzzle game or Simulator.
			</p>
			<p>Some of my favourite games are:</p>
			<ul>

				<li>Minecraft<br/><span>
					My Favourite game of all, moddded Minecraft just has so many possibilities it's my favourite game to boot up and try different things, Tech mods, Magic mods, or even just building
				</span><p/></li>
				
				<li>Microsoft Flight Simulator 2020<br/><span>
					MSFS Is one of my big nerdy interests, I love doing flights in the A320, I picked up a Thrustmaster Airbus TCA this christmas and it does not dissapoint
				</span><p/></li>

				<li>Project Zomboid<br/><span>
					Zomboid is a great but brutal Zombie Survival game all the community content makes it one of the most in depth survival games you can get each playthrough always has different challenges to overcome
				</span><p/></li>
				
				<li>Space Station 14<br/><span>
					Space Station 14 is a Multiplayer Roleplaying game where 80 people run a space station whilst some of you try to destroy it, theres never a dull moment and everyone has such great characters.
					The chaos that unfolds each round makes it so enjoyable and replayable.
				</span><p/></li>
				
				<li>Kerbal Space Program<br/><span>
					KSP is a great space physics simulator, I love making rockets and assembling stations. There are also two mods called kOS and KRPC which allow you to program the rockets to stream telemetry or even automate them.
				</span><p/></li>	
			</ul>
			<h1>Thanks, If you read this far</h1>
			<p>This project has been great to work on, It let me ramble about my interests and make this neat little site. I dont expect employers to read all of this but if you're an employer and you did thank you!</p>
		</div>
	  </div>
	</div>
  );
}

