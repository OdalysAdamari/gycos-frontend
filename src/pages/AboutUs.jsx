
export const AboutUs = () => {
  
    return (
        <div className="font-inter bg-gray-50 text-gray-800">
      
          
          <header className="relative py-16 px-10 bg-fixed bg-cover bg-center text-center text-white  flex flex-col items-center" style={{ backgroundImage: "url('https://strapi.gycos.com.mx/uploads/aboutus_background_19d448784e.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <div className="relative z-10">
            <h1 className="text-4xl font-bold">GYCOS S.A. DE C.V.</h1>
            <span className="mt-2 text-xl">Soluciones de automatización y tecnología</span>
            </div>
          </header>
      
          <section className="flex flex-col md:flex-row items-center justify-between py-16 px-10 bg-white">
            <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">QUIÉNES SOMOS</h2>
              <p className="text-lg mb-4">
                GYCOS S.A. DE C.V. es una empresa integradora ubicada en el área metropolitana de Monterrey, N.L. dedicada a la optimización de procesos a través de la automatización y el desarrollo de la tecnología. Contamos con una experiencia de más de 40 proyectos de instalación, programación y puesta en marcha de robots y celdas automatizadas, así como la distribución de nuestros propios dispositivos.
              </p>
              <p className="text-lg">
                Ofrecemos crear y mejorar los procesos de acuerdo a los requerimientos y necesidades del cliente, buscando convertirnos en la empresa líder en soluciones de automatización e integración de tecnologías a nivel mundial.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img className="rounded-lg shadow-lg" src="https://strapi.gycos.com.mx/uploads/aboutus_cover_07723d5cbd.png" alt="Company Image" />
            </div>
          </section>
      
         
          <section className="relative py-16 px-10 bg-fixed bg-cover bg-center text-center" style={{ backgroundImage: "url('https://strapi.gycos.com.mx/uploads/aboutus_background_19d448784e.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8">POR QUÉ ELEGIRNOS</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { text: '+40 PROYECTOS', class: 'bg-blue-600' },
                  { text: '3 AÑOS DE EXPERIENCIA', class: 'bg-blue-500' },
                  { text: 'Nuestros tiempos de entrega nos avalan', class: 'bg-blue-400' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center justify-center w-48 h-48 rounded-lg shadow-lg ${item.class} bg-opacity-80 hover:bg-opacity-100 transition duration-300`}>
                    <span className="text-white text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
      
          <section className="bg-gray-800 text-gray-100 py-16 text-center">
            <h2 className="text-3xl font-bold">Contáctanos</h2>
            <span className="text-lg md:text-2xl block mt-4">Formulario de Contacto</span>
          </section>
        </div>
      );
      
      
}
