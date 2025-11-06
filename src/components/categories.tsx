
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import category1 from "../assets/images/image.avif"
import category2 from "../assets/images/image5.avif"
import category3 from "../assets/images/image4.avif"
import category4 from "../assets/images/image 3.avif"
import category5 from "../assets/images/image2.avif"
const images=[category1,category2,category3,category4,category5]
export default function Catgories() {
  const [sliderRef] = useKeenSlider<HTMLImageElement>(
    {
      loop: true,
      slides: {
          perView:2
      },
      breakpoints:{
        '(min-width: 900px)':{
disabled:true
        }
      },
      drag:true
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (

      <div ref={sliderRef} className=" mt-10 keen-slider flex items-center justify-center">
        
{images.map((image,index)=>(

        <img key={index} src={image} alt="banner" className="keen-slider__slide "/>
        
 
))}
      </div>

  )
}


