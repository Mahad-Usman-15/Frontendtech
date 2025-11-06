"use client"
import { BsFacebook,BsInstagram,BsLinkedin,BsPinterest } from "react-icons/bs"
import { motion, useSpring, useScroll } from "framer-motion"
import blog2 from "../../assets/images/blog2.webp"
import blog3 from "../../assets/images/blog3.png"

import { useParams } from "react-router-dom"
import { Getblogs } from "../blogs"
import NotFound from "../../components/notFound"
export default function ScrollLinked() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
//  const [isScrolled, setIsScrolled] = useState(false);
//    useEffect(() => {
//      // You can adjust the scroll threshold (e.g., 50) to a value that suits your needs.
//      // To determine the maximum scroll height, you can use `document.documentElement.scrollHeight - document.documentElement.clientHeight`.
//      // However, directly displaying or using this maximum value within the component might not be ideal
//      // as it can change dynamically with content updates. If you need to display the maximum scroll height,
//      // consider calculating and displaying it separately, possibly with a button or information icon that triggers the calculation.
//      const handleScroll = () => {
//        if (window.scrollY > 5) {
//          setIsScrolled(true);
//              } else if (window.scrollY < 500) {
//          setIsScrolled(false);
//        }
//      };
//      window.addEventListener('scroll', handleScroll);
//      return () => window.removeEventListener('scroll', handleScroll);
//    }, []);

    return (
        <>
      


<motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#000000",

                }}
            />
            <BlogDetail />
{/* </>
        )} */}
            
        </>
    )
}

function BlogDetail() {
    const blogs=Getblogs()
    const params  = useParams<{slug:string}>()
    const blog =blogs.find((post)=>post.slug.current===params.slug)
  if (!blog){
    return <NotFound/>
  }
    return (
        <>
          <div className="mt-20 w-full flex flex-wrap items-center">
<div className="w-full lg:w-1/2 px-10 py-10 space-y-10">
<h1 className="text-6xl  text-gray-800">
    {blog.title}
</h1>
<p className="text-2xl font-normal text-gray-800">{blog.shortdescription}
</p>
</div>
<img src={blog.image} alt="blog-1" className="w-full lg:w-1/2" />
        </div>
          <div className="flex flex-wrap items-start mt-10">
            <div className="lg:sticky top-10 left-0 bg-white  px-4 py-4 space-y-4">
                <hr className="bg-gray-500"/>
                <h1 className="text-xl">By Muhammad hanif</h1>
                <h1>{new Date().toLocaleDateString('en-US',{
                    month:"long",
                    year:"numeric",
                    day:"2-digit"
                })}</h1>
                <span>Share</span>
                
                <span className="flex items-center gap-3">
                    <BsFacebook/>
                    <BsInstagram/>
                    <BsLinkedin/>
                    <BsPinterest/>
                </span>
            </div>
            <article style={{ maxWidth:700 }} className="space-y-10  mx-auto px-5">
                <h1 className="text-4xl text-gray-800 font-semibold">
                    Introduction
                </h1>
                <p className="text-base leading-relaxed" >
                    {blog.shortdescription}
            </p>
                <h2 className="text-4xl text-gray-800 font-semibold">{blog.title}</h2>
                <p className="text-base leading-relaxed" >
                    {blog.description}
            </p>
              <img src={blog2} alt="blog1" />
                {/* <p className="text-base leading-relaxed">
{
    blog.description
}                </p> */}
              
                <h2 className="text-4xl text-gray-800 font-semibold">Health Monitoring</h2>
                 <img src={blog3} alt="blog1" />
                <p>
                 Are you all about fitness, or perhaps just curious about your daily activity levels? Smartwatches are perfect for tracking everything from calories burned to steps taken, not to mention they come with numerous sports modes for activities like swimming, cardio, and pilates. With precise tracking and detailed health insights, you’ll optimize your workouts and maximize gym time. Plus, they monitor your heart rate, sleep, and even your blood oxygen levels, offering a comprehensive view of your health at a glance. Remember, though, with so many models on the market, choosing the right one can be daunting, and you'll want to steer clear of those low-quality knock-offs that promise the moon but fail to deliver.
                </p>
                <h2  className="text-4xl text-gray-800 font-semibold">Sub-header</h2>
                <p className="text-base leading-relaxed">
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p className="text-base leading-relaxed">
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p className="text-base leading-relaxed">Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p className="text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac rhoncus quam.
                </p>
                <p className="text-base leading-relaxed">
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                </p>
                <h2  className="text-4xl text-gray-800 font-semibold">Sub-header</h2>
                <p className="text-base leading-relaxed">
                    In eget sodales arcu, consectetur efficitur metus. Duis
                    efficitur tincidunt odio, sit amet laoreet massa fringilla
                    eu.
                </p>
                <p className="text-base leading-relaxed">
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p className="text-base leading-relaxed">
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p className="text-base leading-relaxed">
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac rhoncus quam.
                </p>
                <p>
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                </p>
                <h2>Sub-header</h2>
                <p>
                    In eget sodales arcu, consectetur efficitur metus. Duis
                    efficitur tincidunt odio, sit amet laoreet massa fringilla
                    eu.
                </p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
            </article>
        </div>
        </>
      
    )
}
