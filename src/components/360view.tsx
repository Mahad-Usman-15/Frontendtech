
import { ReactImageTurntable } from "react-image-turntable";
import image1 from "../assets/images/airpods1.jpg"
import image2 from "../assets/images/airpods2.jpg"
import image3 from "../assets/images/airpods3.jpg"
import image4 from "../assets/images/airpods4.jpg"
import image5 from "../assets/images/airpods5.jpg"
const props ={
    disabled:true,
    interval:2000
}
const image= [image1,image2,image3,image4,image5]
export default function Turntable() {
  return (
    <div className="lg:w-[500px] md:w-[400px]  flex flex-col ">
            <ReactImageTurntable autoRotate={props} images={image} className=""/>  
    </div>

  );
}
