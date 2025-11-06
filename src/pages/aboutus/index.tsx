import { useEffect } from 'react'
import about from "../../assets/images/about1.webp"
import AOS from "aos"
import about2 from "../../assets/images/about2.webp"
const About = () => {
    useEffect(()=>{
          AOS.init();
    }
    ,[])
    document.title="Tecache-About"

    return (
        <div className='space-y-10 select-none px-3'>
            <div className='flex flex-col md:items-center items-start justify-center  mt-20 '>
                <h1 className='text-xl font-medium leading-relaxed text-start'>Welcome to TechStore</h1>
                <h1 className='text-2xl md:text-3xl font-bold leading-relaxed'>A Journey Spanning Decades</h1>
                <p className='text-base font-normal leading-relaxed md:text-center tracking-wide max-w-2xl'>Hey there! Welcome to <b>TechStore</b> , your one-stop-shop for all things audio and tech. We're not just a bunch of tech nerds obsessed with audio (although, we won't lie, we kinda are), but a crew of sound innovators and beat enthusiasts turning up the volume in the audio game.</p>
            </div>
            <h1 className='text-lg md:text-2xl font-semibold text-start md:text-center '>Who or what is an Audionic Star, you ask? <br/>
                It's You! Each one of you!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full  place-items-center px-3">
                    <p className='text-base font-normal leading-relaxed text-start tracking-wide max-w-xl'>So, whether you're a hardcore music fan, a film buff, a gaming legend, or just someone who loves a dope beat and cool tech gadgets, you're one of us. Audionic is here to level up your audio game and make everyday sound like your personal concert.</p>
                    <img src={about} alt="about-1" className='rounded-2xl'/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full  place-items-center px-3">
                    <img data-aos="fade-right"  src={about2} alt="about-1" className='rounded-2xl'/>
                    <span data-aos="fade-left" className='flex flex-col items-start space-y-4'>
                        <h1 className='text-3xl font-bold leading-relaxed'>Making the Audio World Go Around</h1>
                                            <p className='text-base font-normal leading-relaxed text-start tracking-wide max-w-xl'>So, whether you're a hardcore music fan, a film buff, a gaming legend, or just someone who loves a dope beat and cool tech gadgets, you're one of us. Audionic is here to level up your audio game and make everyday sound like your personal concert.</p>

                    </span>
                </div>
                <div className='rounded bg-gradient-to-r from-black via-black/80 to-black/60 w-full px-10 py-10 flex flex-col items-center justify-center space-y-4'>
                <h1 className='text-4xl font-semibold text-white'>What's next?</h1>
                <p className='text-base font-normal leading-relaxed text-center tracking-wide max-w-2xl text-white'>All that has happened to us is overwhelming, yes, but it pushes us to do more, be more and make more products that you can use to jazz up your lifestyle.</p>
                <p className='text-base font-normal leading-relaxed text-center tracking-wide max-w-2xl text-white'>So, in 2022, we've started to fearlessly rock in Pakistan with a range of products that free-spirited Pakistanis like you can truly call your own!</p>
                <h1 className=' text-3xl md:text-4xl font-semibold text-white'>PAKISTANI BRAND</h1>
                </div>
        </div>
    )
}

export default About