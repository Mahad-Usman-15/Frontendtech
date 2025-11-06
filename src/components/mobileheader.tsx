import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

// Images
import airpod from "../assets/images/airpods1.jpg";
import airpod1 from "../assets/images/airpods2.jpg";
import airpod2 from "../assets/images/airpods3.jpg";
import airpod3 from "../assets/images/airpods4.jpg";
import airpod4 from "../assets/images/airpods5.jpg";

import { AnimatePresence, motion } from "framer-motion";

// Header categories
const headerItems: string[] = ["Audio & Buds", "Smart Watches", "Charging Devices", "Accessories"];

// Subcategories per header
const subitems: Record<string, string[]> = {
  "Audio & Buds": ["Earbuds", "Handsfree", "Neckbands", "Headphones", "Speakers"],
  "Smart Watches": ["Men Smart Watches", "Women Smart Watches"],
  "Charging Devices": ["Cables", "Mobile Chargers"],
  "Accessories": ["Cables", "Smart Watch Charging Cable", "Live Tracker", "Smart Watch Straps"]
};

// Images per main category
type CategoryImageMap = {
  [category: string]: string[];
};

const categoryImages: CategoryImageMap = {
  "Audio & Buds": [airpod, airpod1, airpod2, airpod3, airpod4],
  "Smart Watches": [airpod1, airpod4],
  "Charging Devices": [airpod2, airpod3],
  "Accessories": [airpod, airpod4],
};

export default function MobileHeader() {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  const [openSubKey, setOpenSubKey] = useState<string | null>(null);
  // const [isOpened, setIsOpened] = useState(false);

  const toggleSection = (index: number) => {
    setOpenSectionIndex(prev => (prev === index ? null : index));
    setOpenSubKey(null);
  };

  const toggleSubSection = (key: string) => {
    setOpenSubKey(prev => (prev === key ? null : key));
  };

  // const handleToggleMenu = () => {
  //   setIsOpened(!isOpened);
  //   setOpenSectionIndex(null); // Reset sections when toggling
  //   setOpenSubKey(null);
  // };

  return (
    // <div className="lg:hidden fixed  left-0 w-full  z-40  ">


    <motion.div initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 500,width:290 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }} className="absolute bg-white px-4 py-5 w-full   shadow-xl   z-50 mr-1 -mt-4 ml-2">
      <h1 className='text-base bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 font-semibold mb-2'>
        Software Earbuds
      </h1>

      {headerItems.map((item, sectionIndex) => (
        <div key={sectionIndex} className="border-b pb-2 mb-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-medium text-blue-950">{item}</h1>
            <RiArrowDropDownLine
              onClick={() => toggleSection(sectionIndex)}
              className="cursor-pointer"
              size={25}
            />
          </div>
<AnimatePresence>
          {openSectionIndex === sectionIndex && (
            <motion.div initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }} className="mt-2 space-y-2">
              {subitems[item]?.map((subitem, subIndex) => {
                const subKey = `${sectionIndex}-${subIndex}`;
                return (
                  <div key={subKey}>
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium text-lg">{subitem}</h2>
                      <FaPlus
                        onClick={() => toggleSubSection(subKey)}
                        className="cursor-pointer"
                        size={15}
                      />
                    </div>
                    <AnimatePresence>
                      {openSubKey === subKey && (
                        <motion.div initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }} className="flex items-center gap-3 overflow-x-auto py-2">
                          {(categoryImages[item] || []).map((img, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={img}
                              alt={`product-${imgIndex}`}
                              className="w-20 h-20 object-cover rounded-md shadow"
                            />
                          ))}
                        </motion.div>
                      )}</AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          )}</AnimatePresence>
        </div>
      ))}
    </motion.div>

    // </div>
  );
}
