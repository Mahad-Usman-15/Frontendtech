import { useState } from 'react'
import productbanner from "../../assets/images/productbanner.webp"
import ProductCard from '../../components/productcard'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
interface Product {
    name: string,
    description: string,
    price: number,
    rating: number,
    count: number,
    image: string,
    colors: string[],
    category: string
}
const Shop = () => {
    document.title = "Tecache-Shop"

    const [products, setisproducts] = useState<Product[]>([])
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/c/ba52-b37b-4da3-86b4", {
                    method: "GET"
                })
                const data = await response.json()
                if (!response.ok) {
                    console.log("Error Fetching.")
                }
                else if (data.products && Array.isArray(data.products)) {
                    setisproducts(data.products)
                } else {
                    setisproducts([])
                }

            } catch (error) {
                console.log("Error Coming=>",error)
            }
        }
        getproducts()
    }, [])
    const Filtered1 = products.filter((prod) => prod.category === "headphones")
    const FilteredEarbuds = products.filter((prod) => prod.category === "airpods")
    const FilteredHandsfree = products.filter((prod) => prod.category === "handsfree")
    const FilteredSpeakers = products.filter((prod) => prod.category === "speakers")
    const FilteredNeckbands = products.filter((prod) => prod.category === "neckbands")
    return (
        <div>

            <img src={productbanner} alt="" className='w-full' />
            <h1 className='text-5xl font-bold text-blue-900 p-4'>Shop</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 px-3'>
                {FilteredEarbuds.map((product, index) => (
                    <ProductCard key={index} image={product.image} colors={product.colors} name={product.name} price={product.price} rating={product.rating} />
                ))}
            </div>

            <div className='bg-image1' />
            <h1 className='text-5xl font-bold text-blue-900 p-4'>Earbuds</h1>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }} className='grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 px-3'>
                {FilteredEarbuds.map((product, index) => (
                    <ProductCard key={index} image={product.image} colors={product.colors} name={product.name} price={product.price} rating={product.rating} />
                ))}
            </motion.div>
            <div className='bg-image2' />
            <h1 className='text-5xl font-bold text-blue-900 p-4'>Headphones</h1>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }} className='grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 px-3'>
                {Filtered1.map((product, index) => (
                    <ProductCard key={index} image={product.image} colors={product.colors} name={product.name} price={product.price} rating={product.rating} />
                ))}
            </motion.div>
            <div className='bg-image3' />
            <h1 className='text-5xl font-bold text-blue-900 p-4'>Neckbands</h1>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }} className='grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 px-3'>
                {FilteredNeckbands.map((product, index) => (
                    <ProductCard key={index} image={product.image} colors={product.colors} name={product.name} price={product.price} rating={product.rating} />
                ))}
            </motion.div>
            <div className='bg-image4' />
            <h1 className='text-5xl font-bold text-blue-900 p-4'>Speakers</h1>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }} className='grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 px-3'>
                {FilteredSpeakers.map((product, index) => (
                    <ProductCard key={index} image={product.image} colors={product.colors} name={product.name} price={product.price} rating={product.rating} />
                ))}
            </motion.div>

            <div className='bg-image5' />
            <h1 className='text-5xl font-bold text-blue-900 p-4'>Handsfree</h1>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn", type: "spring", delay: 0.3 }}
                viewport={{ once: true }} className='grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 px-3'>
                {FilteredHandsfree.map((product, index) => (
                    <ProductCard key={index} image={product.image} colors={product.colors} name={product.name} price={product.price} rating={product.rating} />
                ))}
            </motion.div>
        </div>
    )
}

export default Shop