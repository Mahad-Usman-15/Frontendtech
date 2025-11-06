import { Link } from "react-router-dom"

import { FaUser } from "react-icons/fa"

import logo from "../assets/images/tecahe-logo.jpg"
import prod from "../assets/images/headphonecolor2.png"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Cart from "./cart"
import SearchBar from "./search"
import MobileHeader from "./mobileheader"
type Category = "Earbuds" | "Handsfree" | "Neckband" | "Speakers" | "Headphones";
type HeaderItems = "Audio & Buds" | "Smart Watches" | "Charging Devices" | "Accessories"
const headeritems = ["Audio & Buds", "Smart Watches", "Charging Devices", "Accessories"] as const
const categories = ["Earbuds", "Handsfree", "Handsfree", "Speakers", "Headphones"] as const
const productData: Record<Category, string[]> = {
  Earbuds: Array.from({ length: 6 }, () => "ANC Earbuds"),
  Handsfree: Array.from({ length: 4 }, () => "Stereo Handsfree"),
  Neckband: Array.from({ length: 5 }, () => "Wireless Neckband"),
  Speakers: Array.from({ length: 3 }, () => "Bluetooth Speaker"),
  Headphones: Array.from({ length: 4 }, () => "Over-Ear Headphones"),
};
const Component1 = () => {
  const [ishovered, setishovered] = useState<Category | null>("Earbuds")
  return (
    <div className="w-full bg-white/40 backdrop-blur-sm rounded-3xl flex flex-row items-center justify-around h-96">

      <ul className="space-y-6 ">
        {categories.map((item, index) => (
          <li onClick={() => setishovered(item)} key={index} onMouseEnter={() => setishovered(item)} className="font-medium text-lg cursor-pointer">{item}</li>
        ))}

      </ul>
      <div className={`hidden lg:block w-px h-[250px] bg-gray-300 `} />

      {ishovered && (
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }} className="grid grid-cols-4 place-items-center gap-4 opacity-100 transition-opacity duration-300">
          {productData[ishovered].map((name, index) => (
            <div
              key={index}
              className="bg-white/80 flex flex-col items-center justify-center rounded-lg w-32 h-32"
            >
              <img src={prod} alt="image" className="-mt-20 w-20 h-20" />
              <h1 className="font-medium text-sm mt-3 text-center">{name}</h1>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
const Component2 = () => {
  const [ishovered, setishovered] = useState<Category | null>("Earbuds")
  return (
    <div className="w-full bg-white/40 backdrop-blur-sm rounded-3xl flex flex-row items-center justify-around h-96">

      <ul className="space-y-6 ">
        {categories.map((item, index) => (
          <li onClick={() => setishovered(item)} key={index} onMouseEnter={() => setishovered(item)} className="font-medium text-lg cursor-pointer">{item}</li>
        ))}

      </ul>
      <div className={`hidden lg:block w-px h-[250px] bg-gray-300 `} />

      {ishovered && (
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }} className="grid grid-cols-4 place-items-center gap-4 opacity-100 transition-opacity duration-300">
          {productData[ishovered].map((name, index) => (
            <div
              key={index}
              className="bg-white/80 flex flex-col items-center justify-center rounded-lg w-32 h-32"
            >
              <img src={prod} alt="image" className="-mt-20 w-20 h-20" />
              <h1 className="font-medium text-sm mt-3 text-center">{name}</h1>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
const Component3 = () => {
  const [ishovered, setishovered] = useState<Category | null>("Earbuds")
  return (
    <div className="w-full bg-white/40 backdrop-blur-sm rounded-3xl flex flex-row items-center justify-around h-96">

      <ul className="space-y-6 ">
        {categories.map((item, index) => (
          <li onClick={() => setishovered(item)} key={index} onMouseEnter={() => setishovered(item)} className="font-medium text-lg cursor-pointer">{item}</li>
        ))}

      </ul>
      <div className={`hidden lg:block w-px h-[250px] bg-gray-300 `} />

      {ishovered && (
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }} className="grid grid-cols-4 place-items-center gap-4 opacity-100 transition-opacity duration-300">
          {productData[ishovered].map((name, index) => (
            <div
              key={index}
              className="bg-white/80 flex flex-col items-center justify-center rounded-lg w-32 h-32"
            >
              <img src={prod} alt="image" className="-mt-20 w-20 h-20" />
              <h1 className="font-medium text-sm mt-3 text-center">{name}</h1>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
const Component4 = () => {
  const [ishovered, setishovered] = useState<Category | null>("Earbuds")
  return (
    <div className="w-full bg-white/40 backdrop-blur-sm rounded-3xl flex flex-row items-center justify-around h-96">

      <ul className="space-y-6 ">
        {categories.map((item, index) => (
          <li onClick={() => setishovered(item)} key={index} onMouseEnter={() => setishovered(item)} className="font-medium text-lg cursor-pointer">{item}</li>
        ))}

      </ul>
      <div className={`hidden lg:block w-px h-[250px] bg-gray-300 `} />

      {ishovered && (
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }} className="grid grid-cols-4 place-items-center gap-4 opacity-100 transition-opacity duration-300">
          {productData[ishovered].map((name, index) => (
            <div
              key={index}
              className="bg-white/80 flex flex-col items-center justify-center rounded-lg w-32 h-32"
            >
              <img src={prod} alt="image" className="-mt-20 w-20 h-20" />
              <h1 className="font-medium text-sm mt-3 text-center">{name}</h1>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

const components = {
  "Audio & Buds": Array.from({ length: 1 }, () => <Component1 />),
  "Smart Watches": Array.from({ length: 1 }, () => <Component2 />),
  "Charging Devices": Array.from({ length: 1 }, () => <Component3 />),
  "Accessories": Array.from({ length: 1 }, () => <Component4 />)
}
import { useLocation } from "react-router-dom"
import svg from "../assets/images/hamburger.svg"

export default function Header() {
  const pathname = useLocation()
  const [isOpened, setIsOpened] = useState(false);
const [isClicked,setisclicked]=useState(false)
  const [isheaderitemhovered, setisheaderitemhovered] = useState<HeaderItems | null>(null)
  const handleToggleMenu = () => {
    setIsOpened(!isOpened);

  };

  return (
    <>
      {pathname.pathname !== "/checkout" && (
        <header className="fixed top-0 left-0 px-2 py-2 mx-auto z-50 w-full">
          <section className="hidden mx-auto select-none lg:flex items-center justify-between bg-white rounded-full px-2 py-1 shadow-lg border w-full">
            <Link to={'/'}><img src={logo} alt="logo" width={130} height={50} /></Link>
            <div className="flex flex-row items-center gap-4">
              <h1 className='text-base bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 font-semibold'>Software Earbuds</h1>
              <ul className="flex items-center space-x-6">
                {headeritems.map((item, index) => (
                  <li onMouseEnter={() => setisheaderitemhovered(item)} onMouseLeave={() => setisheaderitemhovered(null)} key={index} className="text-base font-medium text-blue-950">
                    <Link to="/shop">{item}</Link>
                  </li>
                ))}

              </ul>
            </div>

            <div className="flex items-center justify-center gap-4">
              <SearchBar />
              <Cart />
              <Link to={'/login'}><FaUser className="text-blue-950  w-6 h-6" /></Link>
            </div>
          </section>
          <section className={`relative lg:hidden  flex items-center justify-between bg-white  px-4 py-3 rounded-full shadow-lg border ${isOpened?"rounded-t-full":""}`}>
            <Link to={'/'}><img src={logo} alt="logo" width={130} height={50} /></Link>
            <div className="flex items-center justify-center gap-4">
              <SearchBar />
              <Cart />
<svg onClick={handleToggleMenu} height="30" width="35" className="cursor-pointer" xmlns="http://www.w3.org/2000/svg">
                <image height="30" width="35" href={svg} />
              </svg>

            </div>


            {/* <div className="flex justify-end px-4"> */}
              
            {/* </div> */}
              
          </section>
           <AnimatePresence >
          {
            isOpened && (
              <MobileHeader />

            )
          }
          </AnimatePresence>
       
         <AnimatePresence>
  {isheaderitemhovered && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => setisheaderitemhovered(isheaderitemhovered)}
      onMouseLeave={() => setisheaderitemhovered(null)} 
      className="absolute left-0 top-[100%] w-full bg-white/40 backdrop-blur-md shadow-lg border-t border-gray-200 z-40 rounded-b-3xl"
    >
      {components[isheaderitemhovered].map((item, index) => (
        <div key={index} className="w-full">{item}</div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

        </header>
      )}
    </>

  )
}