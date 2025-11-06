
import truck from "../../../assets/images/truck.jpg"
import { Link } from 'react-router-dom'
const ExpressDelivery = () => {
  return (
    <div className='mt-20'>
      <div className='md:relative flex flex-col items-center justify-end'>
        <img src={truck} alt="Banner" className='w-full' />
        <div className='md:absolute shadow-md rounded-2xl border px-5 py-5 select-none space-y-2 max-w-5xl bg-white z-50 mx-auto -mb-20'>
          <h1 className='text-xl md:text-3xl font-semibold uppercase'>Express Delivery By <b className='text-blue-900'>Techache</b></h1>
          <p className='text-lg font-normal leading-relaxed'>Need your favorite RONiN product quickly? We’ve got you covered with our <strong>Express Delivery Service</strong>, ensuring your order reaches your doorstep within <strong>3 hours</strong> in Karachi—for prepaid orders only. For the rest of Pakistan, we offer free standard delivery with reliable timelines based on your location.</p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-40 px-3 py-2'>
        <h4 className='text-black font-bold text-xl md:text-3xl uppercase'>Express Delivery - <span className='text-blue-900'>Karachi Only</span></h4>
        <p className='font-normal text-lg text-start lg:text-center max-w-xl'>Our exclusive Express Delivery service for Karachi ensures you get your prepaid order in just 3 hours. Available only for orders placed between 9:00 AM and 4:00 PM, making it fast, seamless, and hassle-free.</p>
      </div>

      <div className='flex flex-col items-center justify-center space-y-3 md:bg-gradient-to-r  md:from-blue-50 via-blue-100 to-blue-20 rounded-lg container mx-auto'>
        <h4 className='font-bold text-blue-900 text-4xl uppercase text-center mt-20'>How It Works?</h4>
        <div className='flex flex-wrap items-center justify-center flex-row gap-3'>
          <div className="border shadow-lg rounded-2xl space-y-2 px-5 py-5 w-80">
            <h6 className='text-3xl font-bold text-blue-900'>Select</h6>
            <p className='text-base font-normal'>Only paid orders accepted for <br /> express delivery</p>
          </div>
          <div className="border shadow-lg rounded-2xl space-y-2 px-5 py-5 w-80">
            <h6 className='text-3xl font-bold text-blue-900'>Choose</h6>
            <p className='text-base font-normal'>Place a prepaid order online before <br /> <strong>[Cutoff Time : 4 PM]</strong></p>
          </div>
          <div className="border shadow-lg rounded-2xl space-y-2 px-5 py-5 w-80">
            <h6 className='text-3xl font-bold text-blue-900'>Recieve</h6>
            <p className='text-base font-normal'>Receive your order within <br /> <strong>3 hours!</strong></p>
          </div>
        </div>
      </div>
      <div className='hidden max-w-5xl mx-auto  relative lg:flex flex-col items-center  justify-end  rounded-xl mt-40'>
        <img src={truck} alt="truck" className='h-96 rounded-3xl w-full' />
        <div className="absolute inset-0 bg-black rounded-3xl bg-opacity-60"></div>
        <span className="absolute inset-0 flex flex-col items-center justify-center space-y-6">

          <h1 className="text-2xl sm:text-6xl text-white font-bold">Standard Delivery</h1>
          <h2 className='text-3xl font-bold text-white'>Free Delivery Nationwide</h2>
          <p className=" text-lg text-wrap text-center text-white w-md">Our exclusive Express Delivery service for Karachi ensures you get your prepaid</p>
        </span>
        <div className='lg:absolute flex flex-wrap items-center lg:items-start justify-center gap-5 lg:-mb-72 '>
          <div className='flex flex-col rounded max-w-80'>
            <span className='bg-white px-5 py-5 text-center text-blue-900 font-bold text-3xl'>
              Deilvery Timelines
            </span>
            <ul className='list-disc bg-blue-900 font-normal text-white px-10 py-10 '>
              <li>Karachi: 1–2 business days.</li>
              <li>Main Cities (Lahore, Islamabad, Rawalpindi, etc.): 3–4 business days.</li>
              <li>Other Cities: 4–5 business days.</li>
            </ul>
          </div>

          <div className='flex flex-col rounded-3xl max-w-96'>
            <span className='bg-white px-5 py-5 text-center text-blue-900 font-bold text-3xl'>
              Key Features
            </span>
            <ul className='list-disc bg-blue-900 font-normal text-white px-10 py-10 text-lg '>
              <li>Free Delivery: Enjoy standard shipping at no additional cost.</li>
              <li>Wide Coverage: Available in all cities and towns across Pakistan.</li>
              <li>Order Tracking: Stay informed with real-time tracking updates via email or SMS.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start justify-center  md:mt-80 mx-auto px-10 py-10 space-y-7'>
        <h4 className='text-black md:text-center font-bold text-3xl uppercase'>Why Choose <br /> <span className='text-blue-900'> TechStore Delivery</span></h4>
        <hr className='border-blue-800 w-full ' />
        <ul className='flex flex-col md:flex-row  items-center  gap-4'>
          <li className='flex flex-col items-start justify-start  lg:max-w-md'>
            <span className="text">01</span>
            <h6 className='text-2xl font-medium text-blue-900'>Fast and Reliable Service</h6>
            <p className='text-lg  text-blue-900'>Whether it’s Express or Standard, we ensure your products arrive on time.</p>
          </li>
          <li className='flex flex-col items-start justify-start  lg:max-w-md'>
            <span className="text">01</span>
            <h6 className='text-2xl font-medium text-blue-900'>Fast and Reliable Service</h6>
            <p className='text-lg  text-blue-900'>Whether it’s Express or Standard, we ensure your products arrive on time.</p>
          </li>
          <li className='flex flex-col items-start justify-start  lg:max-w-md'>
            <span className="text">01</span>
            <h6 className='text-2xl font-medium text-blue-900'>Fast and Reliable Service</h6>
            <p className='text-lg  text-blue-900'>Whether it’s Express or Standard, we ensure your products arrive on time.</p>
          </li>
        </ul>
      </div>
      <div className='md:mt-40 container mx-auto max-w-5xl bg-gradient-to-tr from-blue-800 via-blue-900 to-blue-950 flex flex-wrap space-y-3 items-center justify-between rounded-xl px-10 py-10'>
        <span className='flex flex-col items-start text-white font-medium space-y-3'>
          <h4 className=' text-3xl lg:text-5xl font-bold'>Track Your Order</h4>
          <p className='text-xl lg:text-2xl'>Track your delivery status in real time! Once your order</p>

        </span>
        <div className="bg-white font-semibold text-blue-950 rounded-md px-3 py-3">
          <Link to={'/trackorder'}>Track Your Order</Link>
        </div>
      </div>


    </div>

  )
}

export default ExpressDelivery