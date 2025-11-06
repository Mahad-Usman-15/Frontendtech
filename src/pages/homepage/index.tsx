import Carousel from "./Carousel"
import Cards from "./cards"
import ProductCard from "../../components/productcard"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { motion } from "framer-motion"
import blog1 from "../../assets/images/blogimage.webp"
import Banner from "../../components/banner"

const animation = {
  duration: 25000,
  easing: (t: number) => t
}

import type { Counter } from "../../components/counter"
import Count from "../../components/counter"
import Head from "../../components/head"
import { useState,useEffect } from "react"
const stats: Counter[] = [
  {
    prefix: "",
    suffix: "+",
    number: 100000,
    title: "Products Sold",
    index: 1
  },
  {
    prefix: "$",
    suffix: "M+",
    number: 25,
    title: "Annual Revenue",
    index: 1
  },
  {
    prefix: "",
    suffix: "K+",
    number: 500,
    title: "Active Customers",
    index: 1
  },
  {
    prefix: "",
    suffix: "+",
    number: 99,
    title: "Countries Shipped To",
    index: 1
  }
];
interface Product{
    name:string,
    description:string,
    price:number,
    rating:number,
    count:number,
    image:string,
    colors:string[],
    category:string
}
const HomePage = () => {
  const [products,setisproducts]=useState<Product[]>([])
      useEffect(()=>{
          const getproducts = async ()=>{
              try {
      const response = await fetch("https://dummyjson.com/c/ba52-b37b-4da3-86b4",{
                  method:"GET"
              })
              const data = await response.json()
              if (!response.ok){
                  console.log("Error Fetching.")
              }
              else if (data.products && Array.isArray(data.products)){
      setisproducts(data.products)
              }else {
                  setisproducts([])
              }
              
              }catch(error){
                  console.log ("Error Coming=>",error)
              }
          }
          getproducts()
      },[])
  const [isopened, setisopened] = useState(false)
  const [sliderRef] = useKeenSlider<HTMLElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 3,
    },
    breakpoints: {
      '(max-width:750px)': {
        slides: {
          perView: 1
        }
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },

    breakpoints: {
      '(max-width: 750px)': {
        slides: {
          perView: 1.5,
          spacing: 20,

        }
      },
    }
  })
  const handleopen = () => {
    setisopened(!isopened)
  }
  return (
    <div >
      <Carousel />
      {/* <Catgories /> */}
      <Cards />

      <Head head1="New" head2="Arrival" />

      <div ref={ref} className="keen-slider container mx-auto px-2 py-2 gap-3 w-full">
        {products.slice(1,6).map((product, index) => (
          <div key={index} className="keen-slider__slide">
            <ProductCard colors={product.colors} name={product.name} image={product.image} price={product.price} rating={product.rating} key={index} />
          </div>
        ))}
      </div>

      <Banner />
      <Head head1="Latest" head2="blogs" />
      <div ref={sliderRef} className="container mx-auto keen-slider flex flex-row items-center gap-2 mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="keen-slider__slide rounded-md shadow-md h-full bg-white hover:text-blue-700 transition-all duration-200">
            <motion.img whileHover={{ scale: 1.05 }} src={blog1} alt="blog" width={200} height={100} className="object-cover w-full " />
            <h2 className="text-xl font-medium  px-2 py-3 line-clamp-2">The Art of producing best qiuality arpods ans the best ...</h2>
            <h2 className=" px-2 py-3 text-blue-900">June 20,2025</h2>
          </div>
        ))}
      </div>
      <div className="container mx-auto flex items-center flex-wrap justify-center gap-16 shadow-2xl rounded-xl mt-10 px-4 py-4">
        {stats.map((stat, index) => (
          <Count index={stat.index} key={index} number={stat.number} prefix={stat.prefix} suffix={stat.suffix} title={stat.title} />
        ))}
      </div>

      <div className="px-2 container mx-auto mt-20 space-y-4">
        <h1 className="font-medium text-2xl text-gray-900">Tecache-A Globally Accredited Smart Wearable And Tech Products</h1>
        <p className="text-gray-800 leading-normal text-base">Swimming is a fantastic way to stay fit, but let’s be real—sometimes, the silence underwater can be a bit too peaceful. The good news is, with the right pair of wireless swimming earbuds, you can bring your favorite tunes into the pool and enhance your swim sessions with rhythm and motivation. However, it’s essential to choose the right earbuds that offer a secure fit, great sound quality, and most importantly, water resistance suitable for swimming. Let’s dive into some of the best wireless swimming earbuds available in Pakistan that keep the music flowing, even when you’re underwater.</p>

        <button onClick={handleopen}>Read More +</button>
        {
          isopened && (
            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}>
              <h1 className="font-medium text-xl text-gray-900">Tecache-A Globally Accredited Smart Wearable And Tech Products</h1>
              <p className="text-gray-800  leading-normal text-base">Swimming is a fantastic way to stay fit, but let’s be real—sometimes, the silence underwater can be a bit too peaceful. The good news is, with the right pair of wireless swimming earbuds, you can bring your favorite tunes into the pool and enhance your swim sessions with rhythm and motivation. However, it’s essential to choose the right earbuds that offer a secure fit, great sound quality, and most importantly, water resistance suitable for swimming. Let’s dive into some of the best wireless swimming earbuds available in Pakistan that keep the music flowing, even when you’re underwater.</p>
              <h1 className="font-medium text-xl text-gray-900">Tecache-A Globally Accredited Smart Wearable And Tech Products</h1>
              <p className="text-gray-800 leading-normal text-base">Swimming is a fantastic way to stay fit, but let’s be real—sometimes, the silence underwater can be a bit too peaceful. The good news is, with the right pair of wireless swimming earbuds, you can bring your favorite tunes into the pool and enhance your swim sessions with rhythm and motivation. However, it’s essential to choose the right earbuds that offer a secure fit, great sound quality, and most importantly, water resistance suitable for swimming. Let’s dive into some of the best wireless swimming earbuds available in Pakistan that keep the music flowing, even when you’re underwater.</p>
              <h1 className="font-medium text-xl text-gray-900">Tecache-A Globally Accredited Smart Wearable And Tech Products</h1>
              <p className="text-gray-800 leading-normal text-base">Swimming is a fantastic way to stay fit, but let’s be real—sometimes, the silence underwater can be a bit too peaceful. The good news is, with the right pair of wireless swimming earbuds, you can bring your favorite tunes into the pool and enhance your swim sessions with rhythm and motivation. However, it’s essential to choose the right earbuds that offer a secure fit, great sound quality, and most importantly, water resistance suitable for swimming. Let’s dive into some of the best wireless swimming earbuds available in Pakistan that keep the music flowing, even when you’re underwater.</p>
            </motion.div>


          )
        }




      </div>
    </div>
  )
}

export default HomePage