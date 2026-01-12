import BackgroundAnimation from './background.js' ;

export default function Layout ({children}){
	return (<><BackgroundAnimation /> {children} </>);
}
