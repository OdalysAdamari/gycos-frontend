import useFetch from "../hooks/useFetch";

export const Portfolio = () => {
  let { loading, data, error } = useFetch(
    "http://gycos.com.mx/api/proyectos?populate=*"
  );

  if (loading) return <p>loading..</p>;
  if (error) return <p>Error</p>;

  let projects = data.data;

    return (
      <div className="font-inter bg-gray-50 text-gray-800">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-16 shadow-md">
          <h1 className="text-3xl md:text-5xl text-center font-semibold text-white animate-fadeInDown">NUESTRO TRABAJO</h1>
          <h2 className="text-lg md:text-xl text-center mt-2 text-white animate-fadeInUp">Proyectos que hemos realizado para nuestros clientes</h2>
        </div>
  
        {/* Filter Category Section */}
        {/*<div className="flex justify-center space-x-4 py-6 md:py-10 bg-gray-100">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300">ALL</button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300">CATEGORY 1</button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300">CATEGORY 2</button>
        </div>*/}
  
        {/* Project Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-xl">
              <img className="w-full h-48 object-cover" src={ project.attributes.ProjectImg ? project.attributes.ProjectImg.data[0].attributes.url : '/src/assets/logonav.svg' } alt={`Project ${project.id}`} />
              <div className="p-4">
                <span className="block text-gray-800 text-lg font-medium text-center">{project.attributes.Name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  