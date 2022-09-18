import Image from 'next/image'

export default function Hero() {
	return (
		<div className="flex justify-between items-center pt-10 snap-center" id='hero'>

            <article className="absolute z-40 ">
                <h2 className="text-2xl font-bold text-slate-400">Web Developer</h2>
                <h1 className="text-[80px] font-bold text-white">Miftahul Khoir</h1>
                <div className="h-2 w-40 bg-[#F8E7A1] rounded-full"/>
                <p className='w-72 text-slate-400 my-20'>hello, i am miftahul khoir, i am 20 years old from tangerang and now live in jonggol bogor. I graduated from Social Science High School in 2020 and now I'm studying at IDN Polytechnic majoring in Programming</p>
                <a href="https://wa.me/qr/U2C67CCEVB2WB1" className='text-[#F8E7A1]' target="blank">Lets's talk →</a>
            </article>

            <div></div>

            <div className='ml-40'>
                <Image 
                    src="/profile.jpg" 
                    className='rounded-2xl'
                    alt="profile" 
                    width={410}
                    height={587}
                />
            </div>

            <div className="text-white justify-between">
                <p>Years of<br/>Experienxe</p>
                <div className="text-7xl font-bold mb-10">1-</div>
                <p>Complete<br/>Project</p>
                <div className="text-7xl font-bold mb-10">4</div>
                <p>Client</p>
                <div className="text-7xl font-bold mb-10">2+</div>
            </div>

        </div>
	)
}
