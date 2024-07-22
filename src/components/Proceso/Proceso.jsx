export const Proceso = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          ¿Listo para transformar tu negocio con nuestras soluciones de
          automatización?
        </h2>
        <p className="text-lg md:text-xl font-medium text-center text-gray-700 dark:text-gray-300 mb-12">
          Solicita tu cotización personalizada hoy mismo y descubre cómo podemos
          ayudarte a optimizar tus procesos.
        </p>
        <div className="flex justify-between">
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <svg
                className="w-full h-48"
                viewBox="0 0 1440 320"
                fill="currentColor"
              >
                <path fillOpacity="0.4" d="M0,64L1440,256L1440,0L0,0Z"></path>
              </svg>
            </div>
            <div className="relative">
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-16">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-400 text-white text-3xl font-bold rounded-full mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Análisis e Investigación
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Analizamos las necesidades y requerimientos de sus
                      procesos.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center mb-16">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-400 text-white text-3xl font-bold rounded-full mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Diseño
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Generamos una propuesta de diseño.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-400 text-white text-3xl font-bold rounded-full mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Implementación
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Implementamos las soluciones diseñadas y realizamos
                      pruebas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <form className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <span className="text-xl font-bold">Contactanos</span>
              <label className="block">
                <span className="text-gray-700">Nombre completo</span>
                <input
                  type="text"
                  placeholder="Leroy Jenkins"
                  className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Correo electrónico</span>
                <input
                  type="email"
                  placeholder="leroy@jenkins.com"
                  className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Mensaje</span>
                <textarea
                  rows="4"
                  placeholder="Tu mensaje..."
                  className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                ></textarea>
              </label>
              <button
                type="submit"
                className="self-center px-8 py-3 text-lg font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
