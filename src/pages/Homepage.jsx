
import {Hero, SliderClients, ServiceCard, Projects, BlogContent} from "../components"
import { Blog } from "./Blog"
// import useFetch from "../hooks/useFetch"
// import { Link } from 'react-router-dom';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
/* eslint-disable react/prop-types */

export const Homepage = () => {
  // let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populated=*')
  // if(loading) return <p>loading..</p>
  // if(error) return <p>Error</p>
  // let blogs = data.data
     const services = [
       {
         id: 1,
         title:"Servicio 1",
         description: "Lorem ipsum dolor  sit amet, consectetur  adipiscing elit.",
         img: "http://localhost:1337/uploads/workshop_9f2080e907.png"},
       {
         id: 2,
         title:"Servicio 2",
         description: "Lorem ipsum dolor  sit amet, consectetur  adipiscing elit.",
         img: "http://localhost:1337/uploads/workshop_9f2080e907.png"},
       {
         id: 3,
         title:"Servicio 3",
         description: "Lorem ipsum dolor  sit amet, consectetur  adipiscing elit.",
         img: "http://localhost:1337/uploads/workshop_9f2080e907.png"},
       {
         id: 4,
         title:"Servicio 4",
         description: "Lorem ipsum dolor  sit amet, consectetur  adipiscing elit.",
         img: "http://localhost:1337/uploads/workshop_9f2080e907.png"}

     ]


    return (
    <div className=" ">
      
      <section className="flex items-center justify-center h-[500px] bg-slate-600">
            <div className="text-center ">
                <p className="text-xl font-medium tracking-wider text-gray-300">Lorem ipsum dolor</p>
                <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">Lorem ipsum dolor sit amet,  consectetur adipiscing elit</h2>
    
                <div className="flex justify-center mt-8">
                    <a className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500"
                        href="#">Get In Touch</a>
                </div>
            </div>
      </section>

      <section className="w-full mx-auto  bg-gray-50 dark:bg-gray-900 dark:text-white  ">
      
     
      <div className="py-16 bg-gray-100">  
        <h1 className="flex font-bold justify-center text-center text-2xl md:text-3xl  ">SERVICIOS QUE OFRECEMOS</h1>
        <span className=" my-4 flex font-medium justify-center text-center text-base md:text-lg xl:text-xl">Brindamos soluciones al sector industrial, desde el diseño electromecánico hasta la automatización de líneas de producción</span>
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#2e64da]">Graphic Design</h3>
                    <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <a href="#" className="block font-medium text-green-400">Know more</a>
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#2e64da]">UI Design</h3>
                    <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <a href="#" className="block font-medium text-green-400">Know more</a>
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#2e64da]">UX Design</h3>
                    <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <a href="#" className="block font-medium text-green-400">Know more</a>
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#2e64da]">UX Design</h3>
                    <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <a href="#" className="block font-medium text-green-400">Know more</a>
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
        </div>
    </div>
</div>
     
      
  </section>
  <Projects/>
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <h2 className="flex font-bold justify-center text-lg md:text-3xl xl:text-3xl mt-6 ">Nuestros clientes</h2>
        <SliderClients/>
      </div>
      

      
      
    
      
      
    
    </div>
    
  )
}

