import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {  Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import {
    Pagination,
    PaginationContent,

    PaginationItem,

    PaginationNext,
    PaginationPrevious,
} from "../../components/ui/pagination"
type News = {
    author: string,
    title: string,
    description: string,
    content: string,
    publishedAt: string,
    urlToImage: string
}
export function Getblogs() {
    const [news, setisnews] = useState<News[]>([])
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=airpods&apiKey=d7b71d9585884643ad113c94943cfcfe');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.articles && Array.isArray(data.articles)) {
                    setisnews(data.articles);
                } else {
                    setisnews([]);
                }
            } catch (error) {
                console.error('Fetching error:', error);
                setisnews([]);
            } finally {
console.log("Error")
            }
        };

        fetchNews();
    }, []);
    return news
}

const NewsListing = () => {
    const newsPerPage = 10
    const [startIndex, setisStartIndex] = useState(0)
    const [endIndex, setisendIndex] = useState(newsPerPage)
    const news = Getblogs()
    document.title = "Tecache-News"
    return (
        <React.Fragment>
            <h1 className='text-4xl font-normal mt-20 px-4'>News</h1>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 py-3'>
                {news.slice(startIndex, endIndex).map((item, index) => (
                    <div key={index} className=' bg-white rounded-2xl shadow-xl hover:shadow-2xl w-xs md:w-sm space-y-4'>
                        <div className="relative rounded-t-2xl h-64 overflow-hidden">
                            <img
                                src={item.urlToImage}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                width={200} height={280}
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-3 gap-1">
                                <span>By</span>
                                <span>{item.author}</span>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {item.description}
                            </p>
                            <Link to={`/news/${item.title}`}>
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
                ))}

            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem className={`cursor-pointer`}>
                        <PaginationPrevious onClick={() => {
    if (startIndex > 0) {
      setisStartIndex(startIndex - newsPerPage);
      setisendIndex(endIndex - newsPerPage);
    }
                        }}  />
                    </PaginationItem>


                    <PaginationItem className={`cursor-pointer`}>
                        <PaginationNext  onClick={() => {
    if (endIndex < news.length) {
      setisStartIndex(startIndex + newsPerPage);
      setisendIndex(endIndex + newsPerPage);
    }
  }} />
                    </PaginationItem>

                </PaginationContent>
            </Pagination>

        </React.Fragment>

    )
}

export default NewsListing