
import { Button, Card, Footer, ServiceCard, Slider, SliderClients } from "../components"
import useFetch from "../hooks/useFetch"
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
/* eslint-disable react/prop-types */

export const Homepage = () => {
  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populated=*')
  if(loading) return <p>loading..</p>
  if(error) return <p>Error</p>
  let blogs = data.data
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
    <div className="absolute flex flex-col items-center bg-[#f0f0f0] w-screen ">
      <Slider/>

      <div className="flex flex-col md:w-5/6 xl:w-4/5 my-6 px-3 md:px-0 md:my-10 rounded-2xl justify-center md:justify-around w-screen  md:h-[50vh] md:max-h-[50vh]">
        <div className="flex flex-col justify-center items-center mx-2 my-4 md:m-x10">
          <h1 className="flex font-bold justify-center text-center text-2xl md:text-3xl ">CONOCE NUESTROS SERVICIOS </h1>
          <span className=" my-4 flex font-medium justify-center text-center text-base md:text-lg xl:text-xl">Brindamos soluciones al sector industrial, desde el diseño electromecánico hasta la automatización de líneas de producción</span>
        </div>
        <div className="grid md:grid-cols-2  gap-6 my-4 md:flex md:flex-row w-full md:justify-center">
          <ServiceCard services={services}/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-screen bg-[#d5dcde]  ">
        <div className="flex flex-col md:flex-row w-screen md:w-1/2  ">
          <img src="https://images.pexels.com/photos/3823218/pexels-photo-3823218.jpeg?auto=compress&cs=tinysrgb&w=300" className="w-full h-full"></img>
        </div>
        <div className="flex flex-col justify-center w-screen md:w-1/2 my-6 ">
          <div className="flex flex-col items-center align-center">
          <p className="flex font-bold text-2xl text-center md:text-left md:text-3xl w-screen md:w-4/5 px-3 md:px-0  ">Mas de 4 años de experiencia</p>
          <h1 className="flex font-semibold text-center md:text-left text-xl md:text-2xl w-screen md:w-5/6 px-3 my-4 md:my-10 "> Contamos con experiencia de 40+ proyectos de instalacion, programacion, y puesta en marcha de robots y celdas automatizadas </h1>
          </div>
          <div className="px-4 pt-4 md:pt-0 flex w-full    ">
            <Button/>
          </div>
        </div>
      </div>

      <div className="px-3 my-6 md:p-6 w-screen md:w-5/6 ">
        <div className="container mx-auto  w-full flex flex-col md:flex-row ">
          <div className="flex flex-col justify-center items-start w-full md:w-1/2">
            <h2 className="text-xl md:text-5xl font-bold ">Nuestro proceso de cotizacion</h2>
            <span className="block mb-2 text-sm md:text-xl font-medium uppercase  p-0 md:pr-10">How it works. Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id</span>
            <Button/>
          </div>
          <div className="grid gap-6 lg:grid-rows-3 w-1/2 justify-items-center">
            <div className="flex p-4 space-y-4 rounded-md dark:bg-gray-900 ">
              <div>
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue-600 text-white">1</div>
                <p className="text-2xl font-semibold">
                  Analisis e investigacion
                </p>
                <p>Analizamos las necesidades y requerimientos de sus procesos</p>
              </div>
              <div className="flex flex-col md:flex-row w-1/2 items-center ">
              <img src="src\assets\workshop.png" className="  rounded-sm"/>
              </div>
            </div>
            <div className="flex p-4 space-y-4 rounded-md dark:bg-gray-900">
              <div className="flex flex-col md:flex-row w-1/2 items-center ">
              <img src="src\assets\workshop.png" className="  rounded-sm"/>
              </div>
              <div>
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue-600 text-white">2</div>
                <p className="text-2xl font-semibold">
                  Diseno
                </p>
                <p>Generamos una propuesta de diseño</p>
              </div>
            </div>
            <div className="flex p-4 space-y-4 rounded-md dark:bg-gray-900">
              <div>
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue-600 text-white">3</div>
                <p className="text-2xl font-semibold">
                  Analisis e investigacion
                </p>
                <p>Analizamos las necesidades y requerimientos de sus procesos</p>
              </div>
              <div className="flex flex-col md:flex-row w-1/2 items-center ">
              <img src="src\assets\workshop.png" className="  rounded-sm"/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <h2 className="flex font-bold justify-center text-lg md:text-4xl xl:text-5xl mt-6 md:m-10">Nuestros clientes</h2>
        <SliderClients/>
      </div>
      

    

      <div className=" flex items-center justify-center ">
        
        <div className=" flex flex-col justify-center items-center w-4/5 my-5 ">
          <h1 className="flex font-bold justify-center text-lg md:text-4xl xl:text-5xl mb-6 "> NOTICIAS Y BLOG </h1>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          
          <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 my-5 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-200">
            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
              <div className='py-2'>
                    <a className="text-green-400"> <AddCircleOutlineIcon/> Continua leyendo</a>
                </div>
            </div>
          </a>

          <div className="grid w-full justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="drop-shadow-2xl" blogs={blogs?blogs:""}/>
          </div>
          <div className="w-full flex justify-center m-4">
            <Link to="/blog" className=" cursor-pointer p-2 md:p-3 w-36 md:w-56 drop-shadow-md border-2 border-black hover:border-white hover:bg-white hover:text-[#15D896]  rounded-full text-center text-md md:text-xl text-black font-semibold mt-6 ">Ver mas posts</Link>
          </div>
        </div>
    </div>

      <div className="w-full bg-[#4472c4]" >
        <div className="container flex flex-row flex-wrap justify-evenly p-4 py-20 mx-auto md:p-10">
          <div className="flex flex-col">
            <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">Contactanos</h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
          </div>
          
          <div className="flex flex-row h-1/2">
            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
          </div>
        </div>
      </div>

      <Footer/>
      
      
      
    </div>
    
  )
}

