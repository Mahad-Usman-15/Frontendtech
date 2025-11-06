import  { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Button } from '../../components/ui/button'
import airpods from "../../assets/images/product1.png"
import { ecommerceFeatures } from './stats'
import product from "../../assets/images/product.webp"
import AutoImage from './autoimagechanger'
import Footer from './footer'
import { motion } from 'framer-motion'

import { CircleQuestionMark, Cpu, GitCompareArrows } from 'lucide-react';
import Techspecs from './techspecs'
import FAQS from './faqs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Compare from './compare'
const ProductDetails = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    // You can adjust the scroll threshold (e.g., 50) to a value that suits your needs.
    // To determine the maximum scroll height, you can use `document.documentElement.scrollHeight - document.documentElement.clientHeight`.
    // However, directly displaying or using this maximum value within the component might not be ideal
    // as it can change dynamically with content updates. If you need to display the maximum scroll height,
    // consider calculating and displaying it separately, possibly with a button or information icon that triggers the calculation.
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
            } else if (window.scrollY < 500) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <div className='bg h-screen mt-16 grid grid-cols-1  lg:grid-cols-2  place-items-center gap-4 px-4 py-4'>
        <div className='flex flex-col items-start space-y-4 '>
          <h1 className='font-semibold text-3xl uppercase'>Eclipse Earbuds</h1>
          <span>ANC | ENC | Upto 80hr</span>
          <span className='flex items-center'>
            {
              Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} color='yellow' />
              ))
            }
            <h1>123...</h1>
          </span>
          <h1 className='font-semibold text-xl uppercase'>Rs.88896.000 PKR</h1>
          <span className='flex items-center gap-3'>
            <img src={airpods} alt="" className='w-20 h-20 border ' />
            <img src={airpods} alt="" className='w-20 h-20' />
          </span>
          <span className='flex items-center gap-3'>
            <Button>Add to Cart</Button>
            <Button>Buy Now</Button>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
            {ecommerceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-4 p-4  rounded shadow-sm w-20">
                  <Icon className="text-blue-600" size={25} />
                  <div>
                    <h4 className="text-sm font-semibold text-center">{feature.title}</h4>                                    </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='bg rounded-full  flex items-center gap-2'>
          <img src={product} alt="product" className='  px-3 py-2 ' width={500} height={600} />
          <AutoImage />
        </div>
      </div>
      <Tabs defaultValue="techspecs" className="w-full flex flex-col items-center justify-center">
        <TabsList >
          <TabsTrigger value="techspecs" className='gap-2' ><Cpu />Tech specs</TabsTrigger>
          <TabsTrigger value="faqs" className='gap-2'><CircleQuestionMark />faqs</TabsTrigger>
          <TabsTrigger value="compare" className='gap-2'><GitCompareArrows />compare</TabsTrigger>
        </TabsList>
        <TabsContent value="techspecs"><Techspecs /></TabsContent>
        <TabsContent value="faqs"><FAQS /></TabsContent>
        <TabsContent value="compare"><Compare /></TabsContent>
      </Tabs>
      {
        isScrolled && (
          <motion.div  className='w-full flex justify-center'>
<Footer />
          </motion.div>
          
        )
      }


    </div>
  )
}

export default ProductDetails