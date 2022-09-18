export default function Testimoni() {
	return (
		<div className="flex h-screen mt-80" id="testi">
			<div className="w-[30em] h-[40em] bg-[url('/image/sapik.jpg')] bg-cover bg-right mr-10 rounded-md"/>
			<div className="text-white">
				<p className="text-[7em]">❝</p>
				<p className="text-[3em] w-[15em] font-semibold">Miftah is a profesional worker who always gives resuslts that are beyond our expectacions, thanks for your services</p>
				<div className="flex justify-between">
					<div>
						<p className="font-semibold text-2xl mt-5">Syafiq</p>
						<p className="text-slate-400">Businessman</p>

					</div>
					<div className="text-slate-400">
						<button className="p-3 rounded-full text-4xl hover:text-[#F8E7A1]">←</button>
						<button className="p-3 rounded-full text-4xl hover:text-[#F8E7A1]">→</button>
					</div>
				</div>
			</div>
		</div>
	)
}
