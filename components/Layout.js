import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({children}) {
	return (
		<>
			<Head>
				<title>My Portfolio</title>
				<link rel="shortcut icon" href="logo.png"/>
			</Head>
			<main className="bg-[#030E21] bg-[url('/background/background.svg')] bg-cover w-full backdrop-blur-3xl">
				<Navbar/>
				<article className="snap-y px-32">
					{children}
				</article>
				<Footer/>
			</main>
		</>
	)
}
