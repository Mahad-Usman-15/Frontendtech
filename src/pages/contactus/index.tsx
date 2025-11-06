import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { contactdata } from './contactdata'
const Contact = () => {
    useEffect(()=>{
        document.title = "Tecache-News"
    },[])
    return (
        <div className='mt-40 flex flex-col items-center justify-center px-3'>
            <h1 className='text-5xl md:text-7xl font-bold text-blue-950 mb-10 text-center md:text-start'>Contact Us</h1>

            <div className='bg-blue-950 rounded-2xl mx-4 px-10 py-10 backdrop-blur-sm w-full mt-10'>
                <h1 className='text-white font-bold text-4xl'>Get In Touch</h1>
                <p className='text-sm md:text-xl font-normal text-white mt-2'>If you are unable to contact us via our customer hotline or online chat, <br /> please drop us you inquires;we will revert in 48 hours.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 place-content-center px-2 gap-4 '>
                    {
contactdata.map((item)=>{
    const Icon=item.icon
    return(
 <span key={item.id} className='flex flex-wrap  items-start text-white gap-2 mt-10'>
<Icon className='bg-white text-blue-950 rounded-full h-10 w-10 p-1'/>
<span className='flex flex-col items-start '>
    <h1 className='text-white font-medium'>{item.legend}</h1>
    <a href={`mailto:${item.title}`}>{item.title}</a>
</span>
                    </span>
    )
})
                    }
                   
                </div>
            </div>
            <motion.div
                whileHover={{
                    y: -10,
                    transition: { duration: 0.15, ease: "easeOut" }

                }}


                className='w-full p-6  shadow-lg rounded-2xl'
            >
                <div className="relative w-full overflow-hidden rounded-xl" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.62540125118!2d67.06005937443022!3d24.87664054461175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eecaef72355%3A0x3c9cca44c77de888!2sDolmen%20Mall%20Tariq%20Road!5e0!3m2!1sen!2s!4v1758987688486!5m2!1sen!2s"
                     style={{border:0}}
                     allowFullScreen
                     loading="lazy" 
                    width="100%" 
                    height={600}
                     referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </motion.div>
        </div>
    )
}

export default Contact