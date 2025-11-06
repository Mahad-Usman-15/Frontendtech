
import { Link } from "react-router-dom"
import { BsInstagram, BsYoutube, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
const footeritems = [
  {
    id: 0,
    heading: "Shop",

    liitems: [
      { item: "Earbuds", link: "/shop" },
      { item: "Handsfree", link: "/shop" },
      { item: "Neckband", link: "/shop" },
      { item: "Headphones", link: "/shop" },
      { item: "Power Bank", link: "/shop" },
      { item: "Charger", link: "/shop" },
      { item: "Smart Watch", link: "/shop" },
      { item: "Data Cable", link: "/shop" },
      { item: "Car Charger", link: "/shop" },
      { item: "Product Engraving", link: "/shop" },
      { item: "Gift Store", link: "/shop" },
      { item: "Corporate Orders", link: "/shop" }
    ]
  },
  {
    id: 1,
    heading: "Help",
    liitems: [
      { item: "Blogs", link: "/blogs" },
      { item: "Privacy Policy", link: "/privacy-policy" },
      { item: "Modes Of Payment", link: "/modes".toLowerCase().replace(/\s+/g, "-") },
      { item: "Terms and Conditions", link: "/terms".toLowerCase().replace(/\s+/g, "-") },
      { item: "Shopping and return policy", link: "/privacy policy".toLowerCase().replace(/\s+/g, "-") },
      { item: "Register a complaint", link: "/contact".toLowerCase().replace(/\s+/g, "-") },
      { item: "Track your order", link: "/trackorder".toLowerCase().replace(/\s+/g, "-") },
      { item: "Contact Us", link: "/contact".toLowerCase().replace(/\s+/g, "-") }
    ]
  },
  {
    id: 2,
    heading: "Company",
    liitems: [
      { item: "About us", link: "/about".toLowerCase().replace(/\s+/g, "-") },
      { item: "Express Delivery", link: "/expressdelivery".toLowerCase().replace(/\s+/g, "-") },
      { item: "Careers", link: "/careers" },
      { item: "Store Locator", link: "/contact".toLowerCase().replace(/\s+/g, "-") }
    ]
  }
];

export default function Footer() {
   const [isopened, setisopened] = useState<number|null>(null)
     const handleopen = (id:number) => {
    setisopened(isopened===id?null:id)
  }
    return (
        <footer className="px-2 py-2 m-4">
            {/* Desktop footer */}
            <section className="hidden lg:flex flex-col md:flex-row items-start md:items-center md:justify-evenly bg-blue-950 px-10 py-10 rounded-3xl">
                <div className="flex flex-col items-start space-y-3">
                    <h1 className="font-medium text-lg text-white">SHOP</h1>
                    <ul className="grid grid-cols-1 lg:grid-cols-2  lg:items-center lg:space-x-4">
                        <div className="space-y-2">
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Earbuds</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Handsfree</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Neckband</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Headphones</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Power Bank</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Charger</li></Link>
                        </div>
                        <div className="space-y-2">
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400  cursor-pointer hover:text-white transition-all duration-500">Smart Watch</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Data Cable</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Car Charger</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Product Engraving</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Gift Store</li></Link>
                            <Link to={'/shop'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Corporate Orders</li></Link>
                        </div>

                    </ul>
                </div>
                <div className="flex flex-col items-start space-y-3">
                    <h1 className="font-medium text-lg text-white uppercase">Help</h1>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-4">
                        <div className="space-y-2">
                            <Link to={'/blogs'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Blogs</li></Link>
                            <Link to={'/privacy-policy'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Privacy Policy</li></Link>
                            <Link to={'/modes'}><li className="text-sm font-medium  text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Modes Of Payment</li></Link>
                            <Link to={'/terms'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Terms and Conditions</li></Link>
                            <Link to={'/privacy-policy'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Shopping and return policy</li></Link>
                        </div>
                        <div className="space-y-2">
                            <Link to={'/contact'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Register a complaint</li></Link>
                            <Link to={'/trackorder'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Track your order</li></Link>
                            <Link to={'/contact'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Contact Us</li></Link>
                        </div>

                    </ul>
                </div>
                <div className="flex flex-col items-start space-y-3">
                    <h1 className="font-medium text-lg text-white uppercase">Company</h1>
                    <ul className="grid grid-cols-1 ">
                        <Link to={'/about'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">About us</li></Link>
                        <Link to={'/expressdelivery'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Express Delivery</li></Link>
                        <Link to={'/careers'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Careers</li></Link>
                        <Link to={'/contact'}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">Store Locator</li></Link>
                    </ul>
                </div>
                <div className="hidden lg:block w-px h-[250px] bg-gray-300"></div>
                <div className='flex items-start flex-col space-y-2'>
                    <h1 className='text-3xl font-medium text-white uppercase'>Tecache</h1>
                    <div className='flex items-center gap-2'>

                        {[<BsInstagram className='h-6 w-6' />, <BsYoutube className='h-6 w-6' />, <BsFacebook className='h-6 w-6' />, <BsLinkedin className='h-6 w-6' />].map((item, index) => (
                            <span key={index} className='text-white  hover:text-red-700 transition-all duration-500'>{item}</span>
                        ))}
                    </div>


                    <div className='flex flex-col '>
                        <h1 className='text-gray-500 font-medium text-lg'>We are here to help</h1>
                        {["Call us:03338273456", "Direct Suppport:021345678", "Email Us:abc@gmail.com"].map((item, index) => (
                            <span key={index} className='text-white text-lg font-medium cursor-pointer hover:text-red-700 transition-all duration-500'>{item}</span>
                        ))}
                    </div>
                    <div className='flex flex-col items-start '>
                        <h1 className='text-white font-bold text-lg'>We are here to help</h1>
                        <motion.div className='flex items-center gap-1' initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeIn" }}>
                            <Input placeholder='Enter your Email' />
                            <Button>Submit</Button>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Mobile footer */}
            <section className="lg:hidden flex flex-col lg:flex-row items-start lg:items-center md:justify-evenly bg-blue-950 px-10 py-10 rounded-3xl space-y-3">
                  {
                       footeritems.map((footer)=>(
                         <div key={footer.id} className="flex flex-col items-start space-y-3 w-full">
                  
                    <div className='flex items-center justify-between w-full'>
                        <h1 className="font-medium text-lg text-white">{footer.heading}</h1>
                        <FaPlus onClick={()=>handleopen(footer.id)} color='white'/>
                    </div>
                    <AnimatePresence >
                    {
                        isopened==footer.id && (
                             <motion.ul initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }} className="grid grid-cols-1">
                {
                    footer.liitems.map((foot,index)=>(
                    <div className="space-y-2">
                       
                            <Link key={index} to={foot.link}><li className="text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-all duration-500">{foot.item}</li></Link>

                       
                        </div>
                    ))
                }
                       
                        

                    </motion.ul>
                        )
                    }
                   </AnimatePresence>
                </div>
                       )) 
                    }
               
               <div className='flex items-start flex-col space-y-2'>
                   <h1 className='text-3xl font-medium text-white uppercase'>Tecache</h1>
                    <div className='flex items-center gap-2'>

                        {[<BsInstagram className='h-6 w-6' />, <BsYoutube className='h-6 w-6' />, <BsFacebook className='h-6 w-6' />, <BsLinkedin className='h-6 w-6' />].map((item, index) => (
                            <span key={index} className='text-white  hover:text-red-700 transition-all duration-500'>{item}</span>
                        ))}
                    </div>


                    <div className='flex flex-col '>
                        {["Call us:03338273456", "Direct Suppport:021345678", "Email Us:abc@gmail.com"].map((item, index) => (
                            <span key={index} className='text-white text-sm font-medium cursor-pointer hover:text-red-700 transition-all duration-500'>{item}</span>
                        ))}
                    </div>
                    <div className='flex flex-col items-start '>
                        <h1 className='text-white font-bold text-lg'>We are here to help</h1>
                        <motion.div className='flex items-center gap-1' initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeIn" }}>
                            <Input placeholder='Enter your Email' />
                            <Button>Submit</Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
                