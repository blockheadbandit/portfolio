import {useEffect, useRef} from "react";
import * as THREE from "three"
import { WireframeGeometry2 } from 'three/addons/lines/WireframeGeometry2.js';
import { Wireframe } from 'three/addons/lines/Wireframe.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

let wireframe
let matLine, matLineBasic, matLineDashed;




export default function BackgroundAnimation(){
	// create some references to use to make sure nothing is duped
	const mountRef = useRef(null);
	const frameRef = useRef(null);
	const rendererRef = useRef(null)
	const runningRef = useRef(false);

	useEffect(() => {
		if(!mountRef.current) return;

		// scene and camera setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
		camera.position.z = 8;
		

		//renderer setup
		if (!rendererRef.current){ // got a renderer yet, if not make one
			const renderer = new THREE.WebGLRenderer({alpha: true, antialias:true});
			// setting sizes for rendering
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(window.devicePixelRatio);
			// mounting the render to the element on the page
			mountRef.current.appendChild(renderer.domElement);
			rendererRef.current = renderer;
		}
		const renderer = rendererRef.current;


		// our shape geometry for wireframe, could use any shape for this i use a polyhedron
		let geo = new THREE.IcosahedronGeometry (10, 1)
		const geometry = new WireframeGeometry2(geo)
		// make our line material for the wireframe
		matLine = new LineMaterial({
			color: 0x4a67cf,
			linewidth: 2,
			dashed: false 
		});
		// creating the actual wireframe model
		wireframe = new Wireframe (geometry, matLine);
		wireframe.computeLineDistances();
		wireframe.scale.set(0.5,0.5,0.5);
		scene.add(wireframe)
	
		//Resize handler
		const onResize = () => {
			// update aspect ratio and renderer size
			// could possibly add the option to have it scale down the shape on mobile
			// currently it works just as fine as desktop
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		// assign event handler
		window.addEventListener("resize", onResize);	
		runningRef.current = true;

		//animation		
		const animate = () => {
			if (!runningRef.current) return;
			//  anything above 0.005 is pretty quick and harsh on eyes
			wireframe.rotation.x += 0.003;
			wireframe.rotation.y += 0.003;
			wireframe.rotation.z += 0.003;
			renderer.render(scene, camera);
			frameRef.current = requestAnimationFrame(animate);
		};
		animate();	
	
		// cleanup for react
		return () => {
			runningRef.current = false;
			cancelAnimationFrame(frameRef.current);
			// remove event listner
			window.removeEventListener("resize",onResize);
			// dispose what we made
			renderer.dispose();
			matLine.dispose();
			geometry.dispose();
			// remove the renderer from the page
			if (mountRef.current && renderer.domElement.parentNode){
				mountRef.current.removeChild(renderer.domElement);
			}
		};
    },[])
	// content to return
	return( <div ref={mountRef} style={{position: "fixed", inset:0, zIndex: -1}}/> );
}
