import Banner from "@/components/Banner"
import Deadline_hero from "@/components/Deadline_hero"
import ICALLMA_hero from "@/components/ICALLMA_hero"
import Tracks_hero from "@/components/Tracks_hero"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>

          <TitleLogo caption='1st' className='logo-bg' />
          <h1 className='hero-title'>International Conference on Advancement in Large Language Models and Applications</h1>

          <div className='sub-heading'>
            <TitleSm title='ICALLMA 2025' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='About ICALLMA 2025' />
            <p
            className="p-tag"
            >The 1st International Conference on Advancement in Large Language Models and its Applications (ICALLMA 2025) aims to bring together leading researchers, industry professionals, and academic scholars to explore the cutting-edge developments in Large Language Models (LLMs) and their wide-ranging applications. With LLMs transforming various industries, the conference will focus on their impact across multiple domains such as healthcare, natural language processing (NLP), language understanding, and ambiguity resolution, while also exploring their role in financial technologies (FinTech), autonomous systems, legal technologies, personalized education, bioinformatics, creative arts (including content generation and music composition), social sciences, and environmental sciences. The event provides a platform to discuss the latest theoretical advancements, practical implementations, and the challenges posed by these powerful AI models. It also seeks to highlight interdisciplinary applications and novel methodologies that push the boundaries of how LLMs are used in fields like medical diagnostics, education, robotics, and social sciences.
            </p>
          </div>
        </div>
      </section>
      <Tracks_hero />
      <ICALLMA_hero />
      <Banner />
      <Deadline_hero />
    </>
  )
}

export default Hero
