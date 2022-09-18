import Image from 'next/image'

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center py-5 sticky -top-1 z-50 px-32 backdrop-blur-xl">
			<a href='#hero'>
				<Image 
					src="/icons/logo.png" 
					alt="logi"
					height={50}
					width={130}
				/>
			</a>
			<ul className="flex">
					<li><a href="#services" className="px-5 py-3 text-white rounded-md hover:bg-slate-400/50 ">Services</a></li>
					<li><a href="#project" className="px-5 py-3 text-white rounded-md hover:bg-slate-400/50 ">Project</a></li>
					<li><a href="#testi" className="px-5 py-3 text-white rounded-md hover:bg-slate-400/50 ">Testimoni</a></li>
					<li><a href="#about" className="px-5 py-3 text-white rounded-md hover:bg-slate-400/50 ">About</a></li>
			</ul>
		</nav>
	)
}
