
import product1 from "../../assets/images/product.webp"
import product2 from "../../assets/images/product2.avif"
import { BsFillModemFill,BsFillCollectionFill,BsBluetooth,BsVoicemail } from 'react-icons/bs'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
const Compare = () => {
    return (
        <div className='mt-10 flex flex-col items-center justify-center gap-4 space-y-3 container mx-auto'>
            <h2 className="text-4xl text-black font-bold text-center">Which Ronin Earbuds <br /> are right for you?</h2>

            <div className="grid grid-cols-3 grid-rows-1 gap-5 place-items-center">
                <div className='space-y-16'>
                   <Select >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Airpods" />
                        </SelectTrigger>
                        <SelectContent>
                            
                                                        {
                                                            ["Eclipse Earbuds", "Dynasty Earbuds","Eminence Earbuds","Nox Earbuds","Vesper Earbuds","Vox Earbud"].map((airpod, index) => (
                                                                <SelectItem key={index} value={airpod}>{airpod}</SelectItem>
                                                            ))
}
                        </SelectContent>
                    </Select>
                    <span className='flex flex-col items-center justify-center space-y-4'>
                        <img src={product1} alt="product-1" width={200} height={200} />
                        <h1 className='text-xl font-semibold'>Eminence Airpods</h1>
                        <h1 className='text-xl font-bold'>Rs 7000</h1>
                        <button className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white font-bold rounded-full w-20 px-2 py-2 hover:scale-105 transition-all duration-300">Buy</button>
                    </span>

                </div>
                <img src="https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Shape_1.png?v=1756885266" width={50} height={400} alt="vs" className="vs-icon" />
                <div className='space-y-16'>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Airpods" />
                        </SelectTrigger>
                        <SelectContent>
                            
                                                        {
                                                            ["Eclipse Earbuds", "Dynasty Earbuds","Eminence Earbuds","Nox Earbuds","Vesper Earbuds","Vox Earbud"].map((airpod, index) => (
                                                                <SelectItem key={index} value={airpod}>{airpod}</SelectItem>
                                                            ))
}
                        </SelectContent>
                    </Select>
                    <span className='flex flex-col items-center justify-center space-y-4'>
                        <img src={product2} alt="product-1" width={200} height={200} />
                        <h1 className='text-xl font-semibold'>Eminence Airpods</h1>
                        <h1 className='text-xl font-bold'>Rs 7000</h1>
                        <button className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white font-bold rounded-full w-20 px-2 py-2 hover:scale-105 transition-all duration-300">Buy</button>
                    </span>

                </div>
            </div>
<div className=' divide-x-2 divide-blue-950 w-full'>
    <div className='flex flex-col items-center justify-center gap-4'>
        <span className='flex items-center text-blue-900 text-2xl font-bold '><BsFillModemFill/>Model</span>
        <hr className='border-blue-900 w-full'/>
        <div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>Eminence</h1>
<h2 className='text-xl font-bold text-black'>Name</h2>
<h1 className='text-xl font-normal text-blue-900'>Eclipse</h1>
        </div>
        <hr className='border-blue-900 w-full'/>
        <div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>Eminence</h1>
<h2 className='text-xl font-bold text-black'>Model</h2>
<h1 className='text-xl font-normal text-blue-900'>Eclipse</h1>
        </div>
        <hr className='border-blue-900 w-full'/>
    </div>
</div>
<div className='mt-10 divide-x-2 divide-blue-950 w-full'>
<div className='flex flex-col items-center justify-center gap-4'>
<span className='flex items-center text-blue-900 text-2xl font-bold '><BsFillCollectionFill/>Colors</span>
<hr className='border-blue-900 w-full'/>
<div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>Black</h1>
<h2 className='text-xl font-bold text-black'>Colors</h2>
<h1 className='text-xl font-normal text-blue-900'>White</h1>
</div>
<hr className='border-blue-900 w-full'/>
<div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>Matte</h1>
<h2 className='text-xl font-bold text-black'>Look & Feel</h2>
<h1 className='text-xl font-normal text-blue-900'>Glossy</h1>
</div>
<hr className='border-blue-900 w-full'/>
</div>
</div>
<div className='  mt-10 divide-x-2 divide-blue-950 w-full'>
<div className='flex flex-col items-center justify-center gap-4'>
<span className='flex items-center text-blue-900 text-2xl font-bold '><BsBluetooth/>Connectivity</span>
<hr className='border-blue-900 w-full'/>
<div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>5.0</h1>
<h2 className='text-xl font-bold text-black'>Bluetooth</h2>
<h1 className='text-xl font-normal text-blue-900'>5.3</h1>
</div>
<hr className='border-blue-900 w-full'/>
<div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>10m</h1>
<h2 className='text-xl font-bold text-black'>Range</h2>
<h1 className='text-xl font-normal text-blue-900'>15m</h1>
</div>
<hr className='border-blue-900 w-full'/>
</div>
</div>
<div className='mt-20 divide-x-2 divide-blue-950 w-full'>
<div className='flex flex-col items-center justify-center gap-4'>
<span className='flex items-center text-blue-900 text-2xl font-bold '><BsVoicemail/>Audio Technology</span>
<hr className='border-blue-900 w-full'/>
<div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>Stereo</h1>
<h2 className='text-xl font-bold text-black'>Sound</h2>
<h1 className='text-xl font-normal text-blue-900'>Surround</h1>
</div>
<hr className='border-blue-900 w-full'/>
<div className='grid grid-cols-3 place-items-center space-x-6'>
<h1 className='text-xl font-normal text-blue-900'>Noise Isolation</h1>
<h2 className='text-xl font-bold text-black'>Features</h2>
<h1 className='text-xl font-normal text-blue-900'>Voice Assistant</h1>
</div>
<hr className='border-blue-900 w-full'/>
</div>
</div>


        </div>
    )
}

export default Compare