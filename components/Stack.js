export default function Stack() {
	return (
		<div className="bg-slate-700/25 w-full flex flex-col px-20 py-5 items-center grayscale hover:grayscale-0 absolute left-0 top-[50em] snap-center">
			<div className="flex">
				<div className="bg-[url('/icons/figma.png')] w-20 h-20 bg-contain bg-no-repeat bg-center m-2"></div>
				<div className="bg-[url('/icons/html.png')] w-20 h-20 bg-contain bg-no-repeat bg-center m-2"></div>
				<div className="bg-[url('/icons/css.png')] w-20 h-20 bg-contain bg-no-repeat bg-center m-2"></div>
				<div className="bg-[url('/icons/php.png')] w-24 h-24 bg-cover bg-center m-2"></div>
				<div className="bg-[url('/icons/mysql.png')] w-24 h-24 bg-contain bg-no-repeat bg-center m-2"></div>
				<div className="bg-[url('/icons/javascript.png')] w-[70px] h-[70px] bg-contain bg-no-repeat bg-center m-2"></div>
			</div >
			<div className="flex">
				<div className="bg-[url('/icons/laravel.png')] w-20 h-20 bg-contain bg-no-repeat bg-center m-2"></div>
				<div className="bg-[url('/icons/next.js.png')] w-20 h-20 bg-contain bg-no-repeat bg-center m-2"></div>
				<div className="bg-[url('/icons/react.png')] w-20 h-20 bg-contain bg-no-repeat bg-center m-2"></div>
				<div className="bg-[url('/icons/tailwindcss.png')] w-20 h-20 bg-contain bg-no-repeat bg-center m-2"></div>
			</div>
		</div>
	)
}
