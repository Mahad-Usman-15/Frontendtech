
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import product2 from "../../assets/images/product.webp"
const AutoImage = () => {
     
    const [sliderRef] = useKeenSlider<HTMLImageElement>(
        {
          loop: true,
          vertical:true,
          slides: {
      origin: "center",
      perView: 3,
      spacing: 10,
    },
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
              }, 2000)
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

        <div ref={sliderRef} className="keen-slider " style={{ height: 200 ,width:100}}>
            <img src={product2} className='keen-slider__slide' alt="product" />
        <img src={product2} className='keen-slider__slide ' alt="product" />
        <img src={product2} className='keen-slider__slide' alt="product" />
        <img src={product2} className='keen-slider__slide' alt="product" />
        <img src={product2} className='keen-slider__slide ' alt="product" />
        <img src={product2} className='keen-slider__slide' alt="product" />
          </div>

  )
}

export default AutoImage