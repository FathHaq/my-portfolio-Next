import Image from "next/image";


export default function Project() {

	const datas = [
		{
			'name' : 'Politeknik IDN Website',
			'sub' : 'Landing Page',
			'link' : 'idn.ac.id',
			'img' : '1'
		},
		{
			'name' : 'Website Travel',
			'sub' : 'Landing Page',
			'link' : '',
			'img' : '2'
		},
		{
			'name' : 'BUDTech Company Profile',
			'sub' : 'Landing Page',
			'link' : 'budtech.my.id',
			'img' : '3',
		},
		{
			'name' : 'Company Profile',
			'sub' : 'Design UI',
			'link' : '',
			'img' : '4',
		},
		{
			'name' : 'Company Profile',
			'sub' : 'Design UI',
			'link' : '',
			'img' : '5',
		},
		{
			'name' : 'Sistem Informasi Bencana',
			'sub' : 'Sistem Informasi',
			'link' : 'bencana.id',
			'img' : '6',
		},
	];

	return (
		<div className="snap-center" id="">
			<div className="flex justify-between mb-14">
				<h1 className="text-white text-6xl font-bold">My Project</h1>
				<a className="text-[#F8E7A1]">see all →</a>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 justify-center">
				{
					datas.map((data, index) =>{
						return (
							<a href={`https://${data.link}`} key={index}>
								<div className="flex flex-col items-center">
									{/* <div className={`w-[360px] h-[270px] bg-[url('/public/image/porto_${data.img}.png')] bg-cover`}/> */}
									<Image src={`/image/porto_${data.img}.png`} width={350} height={250} objectFit="cover" alt="Portofolio Picture" quality={80} />
									<div className="w-[340px]">
										<h1 className="text-white text-2xl font-semibold mt-5">{data.name}</h1>
										<p className="text-slate-500">{data.sub}</p>
									</div>
								</div>
							</a>
						)
					})
				}
				

			</div>
		</div>
	)
}
