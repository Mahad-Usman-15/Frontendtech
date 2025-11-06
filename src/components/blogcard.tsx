// import "./styles.css"


import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { MoveRight } from "lucide-react"
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

export default function BlogCard({ title, image, shortdescription, slug, date }: Blog) {
  return (

    <div className=' bg-white rounded-2xl shadow-xl hover:shadow-2xl w-xs md:w-sm space-y-4'>
      <div className="relative rounded-t-2xl h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={200} height={280}
        />


      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>By Mahad Usman</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {shortdescription}
        </p>
        <Link to={`/blogs/${slug.current}`}>
          <motion.div
            className="flex items-center text-blue-500 font-medium transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm">Read More</span>
            <MoveRight className='ml-2' />
          </motion.div></Link>
      </div>
    </div>

  )
}
