export default function Project() {
	return (
		<div className="snap-center" id="">
			<div className="flex justify-between mb-14">
				<h1 className="text-white text-6xl font-bold">My Project</h1>
				<a className="text-[#F8E7A1]">see all →</a>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 justify-center">
				<div className="flex flex-col items-center">
					<div className="w-[360px] h-[270px] bg-[url('/image/img1.png')] bg-cover"/>
					<div className="w-[340px]">
						<h1 className="text-white text-2xl font-semibold mt-5">Toogle Dark Mode | CSS Native</h1>
						<p className="text-slate-500">Mobile App</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="w-[360px] h-[270px] bg-[url('/image/img2.png')] bg-cover"/>
					<div className="w-[340px]">
						<h1 className="text-white text-2xl font-semibold mt-5">IDN Politeknik Website</h1>
						<p className="text-slate-500">Landing Page</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="w-[360px] h-[270px] bg-[url('/image/img3.png')] bg-cover"/>
					<div className="w-[340px]">
						<h1 className="text-white text-2xl font-semibold mt-5">Website PT BUD Tech</h1>
						<p className="text-slate-500">Landing Page</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="w-[360px] h-[270px] bg-[url('/image/img4.png')] bg-cover"/>
					<div className="w-[340px]">
						<h1 className="text-white text-2xl font-semibold mt-5">Movie Platform</h1>
						<p className="text-slate-500">Mobile App</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="w-[360px] h-[270px] bg-[url('/image/img5.png')] bg-cover"/>
					<div className="w-[340px]">
						<h1 className="text-white text-2xl font-semibold mt-5">Quizzy App | with Next.js</h1>
						<p className="text-slate-500">Website App</p>
					</div>
				</div>
				<div className="flex flex-col items-center m]">
					<div className="w-[360px] h-[270px] bg-[url('/image/img6.png')] bg-cover"/>
					<div className="w-[340px]">
						<h1 className="text-white text-2xl font-semibold mt-5">Play Music</h1>
						<p className="text-slate-500">Mobile App</p>
					</div>
				</div>
			</div>
		</div>
	)
}
