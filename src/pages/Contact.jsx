
export const Contact = () => {
  return (
    <div className="font-inter">
    {/* Section: Expert Needed */}
    <div className="h-[30vh] flex flex-col justify-evenly items-center bg-gradient-to-r from-blue-500 to-slate-500 w-full text-white">
        <h1 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4">¿Necesitas un experto?</h1>
        <span className="text-xl md:text-3xl text-center">Contactanos, nosotros podemos ayudarte.</span>
    </div>

    {/* Section: Contact Form */}
    <div className="flex flex-col justify-center items-center bg-gray-100 w-full py-12">
        <section className="w-full max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-start justify-center space-y-4">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Contáctanos</h1>
                    <p className="text-gray-600">Llena el formulario para iniciar una conversación</p>
                    <div className="space-y-4">
                        <p className="flex items-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-blue-500">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            Fake address, 9999 City
                        </p>
                        <p className="flex items-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-blue-500">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            +52 811 530 0892
                        </p>
                        <p className="flex items-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-blue-500">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            victor.garcia@gycos.com
                        </p>
                    </div>
                </div>
                <form className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-lg">
                    <label className="block">
                        <span className="text-gray-700">Nombre completo</span>
                        <input type="text" placeholder="Leroy Jenkins" className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Correo electrónico</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Mensaje</span>
                        <textarea rows="4" placeholder="Tu mensaje..." className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
                    </label>
                    <button type="submit" className="self-center px-8 py-3 text-lg font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enviar</button>
                </form>
            </div>
        </section>
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-10">
            {/* Puedes agregar un mapa o cualquier otro contenido aquí */}
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center rounded-lg shadow-lg">
                {/*<img className="w-full h-full object-cover" src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg"/>*/}
            </div>
        </div>
    </div>

    {/* Section: FAQ */}
    <section className="dark:bg-gray-800 dark:text-gray-100 py-12">
        <div className="container flex flex-col justify-center p-4 px-10 sm:px-4 sm:mx-auto md:p-8 sm:max-w-[80%]">
            <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">Preguntas frecuentes</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                {/*
                <details className="w-full">
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                    <div className="px-4 pb-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                    </div>
                </details>
                <details className="w-full">
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                    <div className="px-4 pb-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                    </div>
                </details>
                <details className="w-full">
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                        <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                    </div>
                </details>*/}
            </div>
        </div>
    </section>
</div>



  )
}
