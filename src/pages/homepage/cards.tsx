
import { GoChevronRight } from "react-icons/go";

import bgimage from "../../assets/images/bgimage.webp"
import { AnimatePresence } from "framer-motion";
import Turntable from "../../components/360view";
import headphones1 from "../../assets/images/headphone1.png"
import headphones2 from "../../assets/images/headphonecolor2.png"
import headphones3 from "../../assets/images/headphonecolor3.png"
import headphones4 from "../../assets/images/headphonecolor4.png"
import headphones5 from "../../assets/images/headphonecolor5.png"
import { IoPlay, IoPause } from "react-icons/io5";

const images = [headphones1, headphones2, headphones3, headphones4, headphones5]
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
export default function Cards() {
    const [isclicked, setIsClicked] = useState<boolean>(true)
    const [currentindex, setBannerIndex] = useState(0)
    const nextBanner = () => {
        setBannerIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
if(isclicked){
    nextBanner()
} 
        }, 1000)
        return () => clearTimeout(timeout)
    }, [currentindex,isclicked])


    return (
        <section className="space-y-5">
            <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.7, ease: "easeIn" }} className="container mx-auto h-[800px]  w-full shadow-xl rounded-md flex flex-col items-center justify-center px-10 py-10">
                <Turntable />
                {/* <video  autoPlay src={product} className="aspect-video"></video> */}
                <div className="flex flex-row flex-col lg:flex-row items-center justify-between px-10 py-10 w-full mt-10">
                    <span className="flex flex-col md:items-start items-center space-y-2">
                        <h1 className="text-3xl md:text-5xl font-medium text-shadow-lg">AirPods Pro 3</h1>
                        <h1 className="text-lg md:text-2xl font-medium text-shadow-lg text-center">The world’s best in-ear Active Noise Cancellation.</h1>
                        <h1 className="text-xl font-light ">$249
                        </h1>
                    </span>
                    <span className="z-20 flex place-items-end items-center  justify-end bottom-0 right-0  gap-2  ">
                        <button className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white font-bold rounded-full w-20 px-2 py-2 hover:scale-105 transition-all duration-300">Buy</button>
                        <button className="text-[#0066CC] text-lg flex items-center">Learn More<GoChevronRight /></button>
                    </span>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.7, ease: "easeIn" }} className="container relative mx-auto h-[680px] w-full shadow-xl rounded-md flex flex-col  justify-end ">
                <img src={bgimage} alt="Airpod-1" className="rounded-lg w-full h-full object-cover object-left-bottom md:object-cover" />
                <div className="absolute flex flex-wrap items-center justify-between space-y-2 z-20 w-full px-10 py-10">
                    <div className="flex items-start flex-col space-y-4">
                        <h1 className="text-6xl font-bold text-white">AirPods 4</h1>
                        <h1 className="text-2xl md:text-4xl font-bold text-white">Iconic. Now supersonic.</h1>
                        <h1 className="text-xl font-light text-white">Starting at $129 With Active Noise Cancellation $179
                        </h1>
                    </div>

                    <span className="flex items-center  gap-2">
                        <button className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white font-bold rounded-full w-20 px-2 py-2 hover:scale-105 transition-all duration-300">Buy</button>
                        <button className="text-[#0066CC] text-lg flex items-center">Learn More<GoChevronRight /></button>
                    </span>
                </div>
            </motion.div>





            <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.7, ease: "easeIn" }} className="container mx-auto relative h-[680px] w-full shadow-xl flex flex-col justify-between items-center rounded-md px-2 py-2">
                <div onClick={() => setIsClicked(!isclicked)} className="fixed top-0 right-0 bg-gray-200 rounded-full px-2 py-2 mx-2 my-4">
                    {
                        isclicked ? <IoPause className="fill-black w-6 h-6" /> : <IoPlay className="fill-black w-6 h-6" />
                    }

                    {/* <IoPause className="fill-black w-6 h-6"/> */}
                </div>
                <div className=" flex flex-col items-center h-full justify-center  space-y-2 z-60">
                    <h1 className="lg:text-9xl text-6xl font-bold mt-28 text-center">Airpods Max</h1>
                </div>

                {images[currentindex] && (
                    <AnimatePresence>
                        <motion.img key={currentindex}
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            exit={{ opacity: 0, }}
                            transition={{ duration: 0.7, ease: "easeInOut" }} src={images[currentindex]} alt="Airpod-1" className="absolute z-20" />
                    </AnimatePresence>
                )}

                <div className="flex lg:flex-row flex-col items-center justify-between px-10 py-10 w-full  md:mt-10 z-20">
                    <span className="flex flex-col md:items-start items-center space-y-2">
                        <h1 className="text-3xl font-bold text-center">Five fresh colors. Bold sound.</h1>
                        <h1 className="text-xl font-light text-center ">Starting at $129 With Active Noise Cancellation $179</h1>
                    </span>
                    <span className="z-20 flex place-items-end items-center  justify-end bottom-0 right-0  gap-2  ">
                        <button className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white font-bold rounded-full w-20 px-2 py-2 hover:scale-105 transition-all duration-300">Buy</button>
                        <button className="text-[#0066CC] text-lg flex items-center">Learn More<GoChevronRight /></button>
                    </span>
                </div>
            </motion.div>
        </section>
    )
}