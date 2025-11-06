import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Mock news data
import { Getblogs } from '../news';
import NotFound from '../../components/notFound';

const NewsDetailPage = () => {
    const [isloading,setisloading]=useState(true)
    const { title } = useParams()
    const news = Getblogs()
    const newsitem=news.find((item)=>item.title===title)
    if (!newsitem){
        return <NotFound/>
    }
    if (!isloading){
        setisloading(false)
        return <div className='loader'>Loading...</div>
    }
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {/* Article Container */}
                <article className="bg-white rounded-xl shadow-lg overflow-hidden">

                    {/* Header Section */}
                    <header className="px-6 py-8 sm:px-8 sm:py-10">
                        {/* Meta Information */}
                    

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            {newsitem.title}
                        </h1>

                        {/* Description */}
                        <div className="border-l-4 border-blue-500 pl-4 mb-6">
                            <p className="text-xl text-gray-600 font-medium">
                                {newsitem.description}
                            </p>
                        </div>

                        {/* Introduction */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {newsitem.content}
                            </p>
                        </div>

                        {/* Author and Date */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-6 border-t border-gray-200">
                            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold text-sm">
                                            {newsitem.author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {newsitem.author}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Senior Technology Correspondent
                                    </p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                Published on {new Date(newsitem.publishedAt).getDate()}
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 relative">
                        <img
                            src={newsitem.urlToImage}
                            alt={newsitem.title}
                            className="w-full h-full object-cover"
                           
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Article Content */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div
                            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: newsitem.content }}
                        />
                    </div>

                    {/* Tags */}
                    <footer className="px-6 py-6 sm:px-8 bg-gray-50 border-t border-gray-200">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">Tags:</span>
                            {['AI', 'Healthcare', 'Technology', 'Innovation', 'Medical', 'Research'].map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </footer>
                </article>

                {/* Related Articles */}
                <aside className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "The Future of Telemedicine",
                                description: "How digital health platforms are transforming patient care and accessibility worldwide.",
                                date: "2024-01-10",
                                category: "Healthcare"
                            },
                            {
                                title: "Machine Learning in Drug Discovery",
                                description: "AI accelerates pharmaceutical research and development processes significantly.",
                                date: "2024-01-08",
                                category: "Technology"
                            },
                            {
                                title: "Ethical Considerations in Medical AI",
                                description: "Balancing innovation with patient privacy and safety concerns.",
                                date: "2024-01-05",
                                category: "Ethics"
                            }
                        ].map((article, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                                <div className="p-6">
                                    <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded mb-3">
                                        {article.category}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {article.description}
                                    </p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        {/* <span>{formatDate(article.date)}</span> */}
                                        <span>3 min read</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

             
                
            </div>
        </div>
    );
};

export default NewsDetailPage;