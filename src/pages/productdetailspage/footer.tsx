
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
import { Button } from '../../components/ui/button'
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.7, ease: "easeIn" }} className='select-none fixed bottom-5  z-50  h-16 w-fit backdrop-blur-lg bg-white/30 rounded-full flex items-center border-black justify-center border px-5 py-5 space-x-6'>
            
            <h1 className='text-base  text-white font-medium'>Eminence Earbuds</h1>
            <div className="border w-px h-4 border-white hidden md:block" />
                        <h1 className='text-base  text-white font-medium'>Rs 30000</h1>

            <Select>
                <SelectTrigger className="w-[180px] hidden md:block">
                    <SelectValue placeholder="Select Airpods" className='text-white'/>
                </SelectTrigger>
                <SelectContent>

                    {
                        ["Eclipse Earbuds", "Dynasty Earbuds", "Eminence Earbuds", "Nox Earbuds", "Vesper Earbuds", "Vox Earbud"].map((airpod, index) => (
                            <SelectItem  key={index} value={airpod}>{airpod}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
            <Button>Add to Cart</Button>
        </motion.div>
    )
}

export default Footer
