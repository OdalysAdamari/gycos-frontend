
export const AboutUs = () => {
  return (
    <div className="">
        <div className="h-[50vh] md:h-[60vh] flex flex-col justify-evenly my-10 p-10 rounded-2xl items-center  bg-[#ebebeb] w-screen  py-10 ">
            <h1 className="text-3xl md:text-6xl mt-2 md:mt-4 ">SOBRE NOSOTROS</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet libero et tincidunt eleifend. </span>
        </div>
        <div className="h-screen md:h-[60vh] flex flex-col md:flex-row justify-around my-10 p-10 rounded-2xl items-center  w-screen  py-10 ">
            <div className="w-full md:w-1/3 flex flex-col border-l-4 border-[#2457ff] pl-6 ">
                <span className="text-sm md:text-lg pb-4">GYCOS S.A. DE C.V. es una empresa integradora ubicada en el área metropolitana de Monterrey, N.L. dedicada a la optimización de procesos a través de la automatización y el desarrollo de la tecnología. 
                    Contamos con una experiencia de más 40 proyectos de instalación, programación y puesta en marcha de robots y celdas automatizadas, así como la distribución de nuestros propios dispositivos.</span>
                <span className="text-sm md:text-lg">Ofrecemos crear y mejorar los procesos de acuerdo a los requerimientos y necesidades del cliente. Buscando convertirnos en la empresa líder en soluciones de automatización e integración de tecnologías a nivel mundial.</span>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center mt-2 md:mt-0 ">
                <img className="h-full"  src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                
            </div>
        </div>

        <section className="bg-gray-800 dark:text-gray-100 w-full">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/3">
                <img src="https://images.pexels.com/photos/3823218/pexels-photo-3823218.jpeg?auto=compress&cs=tinysrgb&w=300" className="w-full h-full"></img>
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    
                    <h2 className="text-3xl font-semibold leadi">Modern solutions to all kinds of problems</h2>
                    <p className="mt-4 mb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum rem amet!</p>
                    <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900">Get started</button>
                </div>
            </div>
        </section>

        <div className="h-[90vh] md:h-[45vh] bg-[#2e64da] py-6  flex flex-col items-center ">
            
               <span className="text-white mt-0 text-2xl md:text-4xl ">POR QUE ELEGIRNOS</span>
                <div className="flex flex-col md:flex-row my-10 text-white text-md md:text-2xl items-center md:justify-center">
                    <div className="flex items-center justify-center text-center border-2 mx-10 p-4 aspect-square w-1/3 md:w-1/5 my-4 md:my-0 py-8 rounded-lg ">+40 PROYECTOS</div>
                    <div className="flex items-center justify-center text-center border-2 mx-10 p-4 aspect-square w-1/3 md:w-1/5 my-4 md:my-0  rounded-lg  "><span>3 AÑOS DE EXPERIENCIA</span></div>
                    <div className="flex items-center justify-center text-center border-2 mx-10 p-4 aspect-square  rounded-lg w-1/3 my-4 md:my-0 md:w-1/5 "><span>Nuestros tiempos de entrega nos avalan</span></div> 
                </div> 
                      
        </div>
        <div className="flex flex-col h-1/2 w-screen  bg-blue p-4 items-center justify-center ">
            
            
            <div className="flex flex-col w-full items-center">
                <span className="font-bold text-2xl md:text-4xl">SOCIOS COMERCIALES</span>
                <span>GYCOS S.A. DE C.V. tiene una empresa hermana llamada GP GRUPO INDUSTRIAL Y ADMINISTRATIVO SA DE CV dedicada el rubro administrativo e industrial.</span>
            </div>
            <div className="h-[40vh]">
            <img className="h-full"  src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>

            </div>

            
        </div>
    </div>
  )
}
