export default function Services() {
	return (
		<div className="flex justify-between items-center mt-[30em] h-screen snap-center" id="services">
			<div className="w-[30em]">
				<h1 className="text-white text-7xl font-bold mb-10">My Awesome<br/>Services</h1>
				<p className="text-slate-400 text-lg">Kami akan selalu melayani anda kapapn pun dimana pun anda berada dalam senang walaupun duka.</p>
			</div>
			<div>
				<div className="rounded-lg border-slate-700 border-[1px] p-6 flex items-center w-[520px] justify-between m-10">
					<div className="flex">
						<div className="w-20 h-20 rounded-2xl bg-[url('/image/card1.jpg')] bg-cover mr-5"/>
						<div>
							<h1 className="text-2xl text-white font-semibold">Website Design</h1>
							<p className="text-slate-500">3+ Project</p>
						</div>
					</div>
					<div className="text-[#F8E7A1] text-4xl">
					→
					</div>
				</div>

				<div className="rounded-lg border-slate-700 border-[1px] p-6 flex items-center w-[520px] justify-between m-10">
					<div className="flex">
						<div className="w-20 h-20 rounded-2xl bg-[url('/image/card2.jpg')] bg-cover mr-5"/>
						<div>
							<h1 className="text-2xl text-white font-semibold">Wesite Desktop</h1>
							<p className="text-slate-500">2+ Project</p>
						</div>
					</div>
					<div className="text-[#F8E7A1] text-4xl">
					→
					</div>
				</div>

				<div className="rounded-lg border-slate-700 border-[1px] p-6 flex items-center w-[520px] justify-between m-10">
					<div className="flex">
						<div className="w-20 h-20 rounded-2xl bg-[url('/image/card3.jpg')] bg-cover mr-5"/>
						<div>
							<h1 className="text-2xl text-white font-semibold">Mobile Application</h1>
							<p className="text-slate-500">1+ Project</p>
						</div>
					</div>
					<div className="text-[#F8E7A1] text-4xl">
					→
					</div>
				</div>
			</div>
		</div>
	)
}
