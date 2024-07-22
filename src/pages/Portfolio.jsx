export const Portfolio = () => {
    return (
      <div className="font-inter bg-gray-50 text-gray-800">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-16 shadow-md">
          <h1 className="text-3xl md:text-5xl text-center font-semibold text-white animate-fadeInDown">NUESTRO TRABAJO</h1>
          <h2 className="text-lg md:text-xl text-center mt-2 text-white animate-fadeInUp">Proyectos que hemos realizado para nuestros clientes</h2>
        </div>
  
        {/* Filter Category Section */}
        <div className="flex justify-center space-x-4 py-6 md:py-10 bg-gray-100">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300">ALL</button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300">CATEGORY 1</button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300">CATEGORY 2</button>
        </div>
  
        {/* Project Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-xl">
              <img className="w-full h-48 object-cover" src={`https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`} alt={`Project ${i}`} />
              <div className="p-4">
                <span className="block text-gray-800 text-lg font-medium text-center">Nombre de proyecto {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  