import productvideo from "../../assets/videos/productvideo.mp4"
import mobilevideo from "../../assets/videos/mobilevideo.mp4"
import productdetailimage from "../../assets/images/desktopdetailpage.webp"
import productdetailimage2 from "../../assets/images/image.webp"
import { motion } from "framer-motion"
export default function Techspecs(){
    return(
        <div>
  <video src={productvideo} className='mt-10 w-full lg:block hidden object-cover h-screen aspect-video' autoPlay muted loop ></video>
      <video src={mobilevideo} className='w-full visible lg:hidden object-cover h-screen aspect-video' autoPlay muted loop ></video>
      <div className='w-full bg-black flex flex-wrap items-center'>
        <motion.img initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 40 }}
          transition={{ duration: 0.7, ease: "easeIn" }} src={productdetailimage} alt="banner-desktop" className='w-[800px] h-[800px]' />
        <motion.div initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: -10 }}
          transition={{ duration: 0.7, ease: "easeIn" }} className='flex flex-col items-start gap-3'>
          <h1 className='text-5xl font-bold uppercase text-white'>dual tone finish</h1>
          <h2 className='text-xl font-normal uppercase text-white'>Quite luxury in a form that lasts  </h2>
        </motion.div>
      </div>
      <div className='w-full bg-black flex flex-wrap items-center'>
        <motion.img initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeIn" }} src={productdetailimage2} alt="banner-desktop" className='' />
      </div>
</div>
    
    )
}