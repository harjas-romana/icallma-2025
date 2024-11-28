import React from "react"
import { Card } from "./common/Card"
import { helpData } from "@/assets/data/dummydata"

const BlogCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {helpData.map((item) => (
          <Card data={item} key={item.id} path='/help' />
        ))}
      </div>
    </>
  )
}

export default BlogCard
