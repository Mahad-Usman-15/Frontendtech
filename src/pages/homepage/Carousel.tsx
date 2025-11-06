import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import { useState } from "react";
import video1 from "../../assets/videos/video1.mp4"
import video2 from "../../assets/videos/video2.mp4"
import video3 from "../../assets/videos/video3.mp4"

const videos = [
    {
        id: 0,
        src: video1,
    },
    {
        id: 1,
        src: video2,
    },
    {
        id: 2,
        src: video3,
    }
]

export default function Carousel() {
    const [bannerIndex, setBannerIndex] = useState(0);
    const nextBanner = () => {
        setBannerIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextBanner();
        }, 7000);
        return () => clearInterval(interval);
    }, [bannerIndex]);

    return (

        <div className="relative w-full  h-screen  overflow-hidden ">
            <AnimatePresence>
                {/* {videos[bannerIndex] && ( */}
                <motion.div
                    key={videos[bannerIndex].id}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-full"
                >
                    <video
                        src={videos[bannerIndex].src}
                        autoPlay 
                        loop
                        muted
                        className="object-cover object-center w-full h-full "
                    ></video>
                </motion.div>
            </AnimatePresence>
            {/* )} */}

            {/* Dots Navigation */}
            <div className="absolute bottom-6 md:top-6 md:right-0 w-full flex md:flex-col justify-center items-end space-x-2 md:space-x-0 md:mr-4 md:space-y-3">
                {videos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setBannerIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${bannerIndex === i ? "bg-blue-900 md:h-11" : "bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>

    )
}