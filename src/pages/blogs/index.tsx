import  { useEffect, useState } from 'react'
import BlogCard from '../../components/blogcard'
import { motion } from 'framer-motion'
import client from '../../client'
type Blog = {
  title: string,
  image: string,
  shortdescription: string,
  slug: {
    _type:"slug",
    current:string
  },
  date: string,
  description?:string
}


export const Getblogs =()=>{
        const [blogs,setisblogs]=useState<Blog[]>([])
    useEffect(()=>{
client.fetch(`*[_type=='posts']{
title,
slug,
shortdescription,
description,
date,
"image":image.asset->url
}
`
    ).then((data)=>setisblogs(data)).catch(console.error)
    },[])

    return blogs
}

const Bloglisting = () => {
    const blogs = Getblogs()
    return (
        <div className='px-3 py-3'>
            <div className='flex items-center justify-between mt-20'>
            <h1 className='text-4xl font-normal '>Posts</h1>
<h1>BlogsCount:{blogs.length}</h1>

            </div>
            <motion.div  initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.7, ease: "easeInOut",delay:0.1,staggerChildren:0.2 }}  className='mt-5 grid grid-cols-1 lg:grid-cols-3  place-content-center mx-auto gap-4 '>
                {blogs.map((blog, index) => (
                    <BlogCard date={blog.date}  title={blog.title} image={blog.image} shortdescription={blog.shortdescription} slug={blog.slug} key={index} />
                ))}
            </motion.div>
        
        </div>
    )
}

export default Bloglisting