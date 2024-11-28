import BlogCard from "@/components/BlogCard"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Help_page = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='EXPLORE' /> <br />
            <br />
            <Title title='VIT-A Place to Learn, A Chance to Grow' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Help_page
