import { Proceso, ProductosMenu, ProductoSection } from "../components"

export const Service = () => {
  return (
    <div>
      <section>
      <div className="dark:bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-900">SERVICIO</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
          
        </div>
      </div>
      
    </section>
    <section>
    <ProductosMenu/>
    <ProductoSection/>
    <Proceso/>
    </section>


    </div>
  )
}
