
export const Portfolio = () => {
  return (
    <div>
        <div className="flex flex-col items-center p-5 md:p-10">
        <div className="h-[50vh] md:h-[60vh] flex flex-col justify-evenly my-10 p-10 rounded-2xl items-center  bg-[#ebebeb] w-screen  py-10 ">
            <h1 className="text-3xl md:text-6xl mt-2 md:mt-4 ">WACHA NUESTRO PORTAFOLIO</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet libero et tincidunt eleifend. </span>
        </div>
            <div>
            <h1 className="text-center">NUESTRO TRABAJO</h1>
            <h2 className="text-center">Proyectos que hemos realizado para nuestros clientes</h2>
            </div>
            <div className="py-5 md:py-10">
                <span className="mx-4">ALL</span>
                <span className="mx-4">CATEGORY 1</span>
                <span className="mx-4">CATEGORY 2</span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-4 md:gap-5 ">
                <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                    <span className="text-center">Nombre de proyecto</span>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                </div>
            </div>
        </div>
    </div>
  )
}
