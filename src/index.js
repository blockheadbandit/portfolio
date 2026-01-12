import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/index.css';
import Home from './pages/Mainpage.js';
import Contact from './pages/Contactpage.js'
import Projects from './pages/Projectspage.js'
import About from './pages/Aboutpage.js'
import reportWebVitals from './reportWebVitals';
import {HashRouter, Routes, Route, Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
