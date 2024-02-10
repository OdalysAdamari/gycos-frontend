
export const ServiceCard = (services) => {
  return (
    <>
    {services?.services.map(service =>
        <div key={service.id} className=" cursor-pointer flex flex-col mx-4 hover:border-4 rounded-lg  hover:border-green-400 transition ease-in-out delay-100 duration-300 hover:-translate-y-1 items-center hover:scale-120 hover:drop-shadow-sm">
            <img src="src\assets\workshop.png" className=" w-1/3 md:w-fit "/>
            <h1 className="font-bold text-sm md:text-xl py-2  ">{service.title}</h1>
            <p className="text-center text-sm md:text-xl px-2 md:px-0">{service.description}</p>   
        </div>
        
    )}
    
    </>
  )
}
