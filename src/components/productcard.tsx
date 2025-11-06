

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
interface Product{
    name:string,
    price:number,
    rating:number,
    image:string,
    colors:string[],
}
const ProductCard = ({name,price,rating,image,colors}:Product) => {
    const rounded = Math.floor(Math.round(rating))
    return (
        <motion.div whileHover={{ y: -10, }}
            transition={{ duration: 0.5, ease: "easeInOut" }} className='rounded-2xl border  space-y-5 px-3 py-3 flex flex-col bg-white '>
             <h1 className='text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 font-semibold'>Software based airbuds</h1>
            <img src={image} alt='Product' className='object-center object-cover'/>
            <h1 className='text-lg md:text-2xl font-semibold '>{name}</h1>
            <span className='text-xs '>Hybrid ANC & ENC | 40 HR Playtime</span>
            <hr className='border-slate-900 w-full' />
            <span className="z-20 flex items-center justify-between bottom-0 right-0  gap-2  w-full">
                <span className='flex items-center'>{Array.from({ length: rounded }).map((_, index) => (
                    <FaStar key={index} color='yellow' size={20} />
                ))}</span>
                <div className='flex items-center gap-0.5'>
                    {colors.map((color,index)=>(
                                            <span key={index} className={`bg-${color}-900 rounded-full w-3 h-3 hover:scale-105`} />

                    ))}                </div>
            </span>
            <span className="z-20 flex items-center justify-between bottom-0 right-0  gap-2  w-full">
                <h2 className='text-slate-600 font-medium'>Rs{price}.00</h2>
                <button className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white font-bold rounded-full w-20 px-2 py-2 hover:scale-105 transition-all duration-300">Buy</button>
            </span>
        </motion.div>
    )
}

export default ProductCard