
import photo_collage from "../../../assets/images/photo-collage_png.webp"
import { Button } from '../../../components/ui/button'
const Careers = () => {
  return (
    <div className='mt-20 min-h-screen flex items-center justify-center flex-col space-y-10'>
<h1 className='uppercase text-6xl font-bold text-blue-900'>Careers</h1>
<section className="container mx-auto px-2">
  <div className="space-y-5">
    <h4 className='font-extrabold uppercase text-center text-xl md:text-3xl '>WHAT MAKES RONIN A GREAT PLACE TO WORK?</h4>
    <p className='font-normal'>At RONIN, we believe in more than just work—we believe in creating a positive and energetic vibe that helps everyone grow.Whether you're just starting out or an experienced professional, RONIN offers a supportive environment where your ideas matter.We encourage creativity, value teamwork, and celebrate achievements, big or small. With opportunities to learn, grow, and make a real impact,  RONIN is a place where you can build your career while enjoying what you do.</p>
    <p className='font-normal'>We’re not just building products, we’re building futures—and we’d love for you to be a part of it!</p>
  </div>
</section>
<div className='container mx-auto flex flex-col md:flex-row  items-center gap-6'>
    <img src={photo_collage} alt="Photo Collage" className='md:w-1/2'/>
    <div className='flex flex-col  items-start space-y-5 px-3'>
       <h4 className='font-extrabold uppercase text-2xl md:text-4xl text-center md:text-start'>WHERE FRESH IDEAS LEAD TO BIG FUTURES</h4>
        <p className='font-normal '>At RONIN, we believe in fresh ideas and the power of new talent. Whether you’re a student looking for opportunities or just starting your career, we want you to grow with us. If you have the passion to contribute to our success, we’ll make sure to contribute to yours. Are you someone who thinks outside the box? You might be our next designer. Are you great with people and communication? Then you’ll enjoy connecting with our customers, who are the heart of everything we do. This version keeps the language simple and motivational, while encouraging a range of candidates to apply!</p>
    </div>
</div>
<Button>Apply Now</Button>
    </div>
  )
}

export default Careers