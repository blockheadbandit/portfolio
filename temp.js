import Image from "next/image";

function TopBar() {
	return (
		<div className="flex flex-col gap-4 text-base font-medium sm:flex-row justify-centerw-full max-w-3xl px-16 min-w-xl py-2 my-3 bg-zinc-50 dark:bg-black rounded-xl absolute top-2 md:top-2 ld:top-2">
			<a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" href="" target="_blank" rel="noopener noreferrer">	
				About Me	
			</a>	
			<a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" href="" target="_blank" rel="noopener noreferrer">	
				My Projects	
			</a>	
			<a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" href="" target="_blank" rel="noopener noreferrer">	
				Contact	
			</a>
		</div>
	);
}


export default function Home() {
  return (

	<div className="flex flex-col min-h-screen justify-center bg-zinc-50 font-sans dark:bg-zinc-950 items-center">
		<TopBar />
		<main className="flex rounded-2xl w-full max-w-3xl flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">

			<div className="py-10">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"> 
					<h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
						Reece Steptoe's Portfolio
					</h1>
					<p>Welcome to my page! here you can find all the information you may need.</p>
				</div>
				<div className="flex flex-col py-3 gap-4 text-base font-medium sm:flex-row">
					<a
						className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
						href=""
						target="_blank"
						rel="noopener noreferrer">
					<Image  src="ReecePortfolioPage/cv.svg" alt="Download CV" width={16} height={16}/>
					Download CV
	          </a>
	          <a
					className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
					href=""
					target="_blank"
					rel="noopener noreferrer">
					Contact
	          </a>
	        </div>
		</div>


	  </main>
    </div>
  );
}
