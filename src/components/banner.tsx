
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import banner1 from "../assets/images/banne2.webp"
import banner2 from "../assets/images/banner3.webp"
import banner3 from "../assets/images/banner4.webp"
import banner4 from "../assets/images/banner5.webp"
export default function Banner() {
  const [sliderRef] = useKeenSlider<HTMLImageElement>(
    {
      loop: true,
      slides: {
          perView:2
      },
      breakpoints:{
        '(max-width:750px)':{
slides:{
  perView:1
}
        },
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

      <div ref={sliderRef} className="mt-10 keen-slider flex items-center px-2">
        <img src={banner1} alt="banner" className="keen-slider__slide"/>
        <img src={banner2} alt="banner" className="keen-slider__slide"/>
       <img src={banner3} alt="banner" className="keen-slider__slide"/>
          <img src={banner4} alt="banner" className="keen-slider__slide"/>
      </div>

  )
}


