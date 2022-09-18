import About from "../components/About"
import Hero from "../components/Hero"
import Project from "../components/Project"
import Services from "../components/Services"
import Stack from "../components/Stack"
import Testimoni from "../components/Testimoni"
import Layout from "/components/Layout"

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Stack/>
      <Services/>
      <Project/>
      <Testimoni/>
      <About/>
    </Layout>
  )
}
