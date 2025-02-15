import './parallax.css';

export const ProductoSection = () => {
  return (
    <section className="parallax general-bg text-gray-100">
      <div className="bg-black bg-opacity-75">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          {/* Integración de Procesos */}
          <div id="integracion" className="mb-20 p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-90">
            <h2 className="text-4xl font-extrabold text-blue-500 mb-6 text-center">Integración de Procesos</h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Optimización e integración de procesos industriales para una mayor eficiencia.
            </p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Nuestros Servicios</h3>
                <div className="space-y-8">
                  {[
                    { title: 'Simulación', items: ['Procesos', 'Programas de robot y PLC'] },
                    { title: 'Prototipado 3D', items: [] },
                    { title: 'Ensamble', items: ['Conveyor', 'Bancos de prueba', 'Polipastos'] },
                    { title: 'Programación', items: [
                        'ROBOTS: FANUC, ABB, KUKA, UNIVERSAL, COMAU, REIS, MOTOMAN',
                        'PLC: Allen Bradley, Siemens, OMNRON, MITSUBISHI, KEYENCE',
                        'HMI: Allen Bradley, Siemens, Keyence, Omron y Delta',
                        'Drivers: Powerflex y Simatic'
                      ]
                    },
                    { title: 'Entrega y puesta en marcha', items: ['Instalación en planta', 'Pruebas de funcionamiento', 'Arranque de línea', 'Capacitación de operación de celdas'] },
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                          <svg xmlns="/UI/src/assets/product-management.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-50">{service.title}</h4>
                        {service.items.length > 0 ? (
                          <ul className="mt-2 list-disc list-inside text-gray-400">
                            {service.items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2 text-gray-400">Descripción detallada del servicio.</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
		<div className="self-center">
                	<img src="/UI/src/assets/robot-arm.png" alt="Servicios" className="inset-0 rounded-lg shadow-lg hover:opacity-90 transition duration-300 w-full" />
                </div>
	      </div>
            </div>
          </div>

          {/* Mantenimiento */}
          <div id="mantenimiento" className="mb-20 p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-90">
            <h2 className="text-4xl font-extrabold text-blue-500 mb-6 text-center">Mantenimiento</h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Mantenimiento preventivo y correctivo para asegurar el óptimo funcionamiento de su maquinaria.
            </p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
		<div className="self-center">
                <img src="/UI/src/assets/mantenimiento.png" alt="Mantenimiento" className="rounded-lg shadow-lg hover:opacity-90 transition duration-300 w-full" />
              </div>
	    </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Nuestros Servicios</h3>
                <div className="space-y-8">
                  {[
                    { title: 'Mantenimiento Preventivo', items: ['Maquinaria', 'Robots'] },
                    { title: 'Mantenimiento Correctivo', items: ['Maquinaria', 'Robots'] }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-50">{service.title}</h4>
                        <ul className="mt-2 list-disc list-inside text-gray-400">
                          {service.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Refacción */}
          <div id="refaccion" className="mb-20 p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-90">
            <h2 className="text-4xl font-extrabold text-blue-500 mb-6 text-center">Refacción</h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Proveemos refacciones de calidad para mantener su maquinaria en óptimas condiciones.
            </p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Nuestros Productos</h3>
                <div className="space-y-8">
                  {[
                    { title: 'Motores', items: [] },
                    { title: 'Sensores', items: [] },
                    { title: 'Controladores', items: [] },
                    { title: 'Actuadores', items: [] }
                  ].map((product, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-50">{product.title}</h4>
                        <p className="mt-2 text-gray-400">Descripción detallada del producto.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
		<div className="self-center">
                <img src="/UI/src/assets/product-management.png" alt="Refacción" className="w-[128px] h-[128px] rounded-lg shadow-lg hover:opacity-90 transition duration-300" />
              	</div>
	      </div>
            </div>
          </div>

          {/* Capacitación */}
          <div id="capacitacion" className="bg-gray-900 p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-90">
            <h2 className="text-4xl font-extrabold text-blue-500 mb-6 text-center">Capacitación</h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Cursos especializados para desarrollar habilidades en automatización y control.
            </p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
		<div className="self-center">
                <img src="/UI/src/assets/workshop.png" alt="Capacitación" className="rounded-lg shadow-lg hover:opacity-90 transition duration-300 w-full" />
              </div>  
	    </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Nuestros Cursos</h3>
                <div className="space-y-8">
                  {[
                    { title: 'Cursos de Capacitación', items: [
                      'Configuración de drivers',
                      'Creación y diseño de HMI',
                      'Programación y control de robots',
                      'Programación de PLC'
                    ] }
                  ].map((course, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-50">{course.title}</h4>
                        <ul className="mt-2 list-disc list-inside text-gray-400">
                          {course.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
