import CountUp from 'react-countup'
import { motion } from 'framer-motion'
export type Counter={
    suffix:string,
    prefix:string,
    number:number,
    title:string,
index:number
}
const Count = ({ suffix,prefix,number, title,index  }:Counter) => {
  return (
  <motion.div initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:0.7,delay:0.3*index,ease:"linear"}}  className="number flex flex-col items-center justify-center">
      <span className="text-3xl md:text-6xl flex flex-row items-center text-black font-bold ">
        <h1 >{prefix}</h1>
        <CountUp duration={10} className="counter" end={number} />
        <h1 className="text-blue-600">{suffix}</h1>
      </span>

      <span className='text-pretty font-normal text-2xl text-center'>{title}</span>
    </motion.div>
  )
}

export default Count