import React from "react"
import { Title } from "./common/Title"
const ICALLMA_hero = () => {
  return (
    <>
      <section className='hero-sec'>
        <div className='container' >
          <div className='heading-title'>
            <Title title='ICALLMA 2025' />
            <p
            className="p-tag"
            >ICALLMA 2025 invites original research papers, surveys, and technical reports that contribute to the advancement of LLMs. With an emphasis on real-world applications and scalability, the conference will explore new models, algorithms, architectures, and frameworks. Participants are encouraged to present novel ideas, share case studies, and discuss the ethical implications of LLMs in diverse fields. The event will feature keynote speeches from prominent figures in the field, technical sessions, panel discussions, and workshops to foster collaboration and innovation in this rapidly growing domain.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ICALLMA_hero
