import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Hero,
  SliderClients,
  ServiceCard,
  Projects,
  BlogContent,
  Card,
  Proceso,
} from "../components";
import { Blog } from "./Blog";
import useFetch from "../hooks/useFetch";

import { Link } from 'react-router-dom';

export const Homepage = () => {
  let { loading, data, error } = useFetch(
    "https://strapi.gycos.com.mx/api/blogs?populate=*"
  );
  if (loading) return <p>loading..</p>;
  if (error) return <p>Error</p>;
  let blogs = data.data;
  return (
    <div className="font-inter bg-gray-100">
     
      <section className="relative flex items-center justify-center min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://strapi.gycos.com.mx/uploads/dashboard_cover_058675caff.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Maximiza tu Productividad con Nuestras <span className="text-green-500">Soluciones Personalizadas</span>
          </h1>
          <Link to="/contacto" className="mt-6 px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-400 transition duration-300">
            Contáctanos
          </Link>
        </div>
      </section>

      <section className="w-full mx-auto bg-gray-50 dark:bg-gray-900 dark:text-black px-4 md:px-10">
        <div className="py-16 bg-gray-100 flex flex-col md:flex-col lg:flex-row items-center" data-aos="fade-left">
          <div className="flex flex-col w-full lg:w-1/3 px-5 mb-8 md:mb-0 text-center md:text-left">
            <span className="text-base text-3xl md:text-4xl font-bold">
	      SERVICIOS DE AUTOMATIZACION
	    </span>
            <span className="my-4 text-base md:text-lg xl:text-xl font-medium">
              Brindamos soluciones al sector industrial, desde el diseño electromecánico hasta la automatización de líneas de producción
            </span>
          </div>
          <div className="container m-auto mx-4 md:mx-10 text-gray-500 md:px-12 xl:px-0 pt-8 md:pt-40">
            <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-2 xl:grid-cols-4">
              <ServiceCard />
            </div>
          </div>
        </div>
      </section>

   
      {/* <section className="py-16 px-4">
        <Projects />
      </section> */}

      
      <section className="relative py-16 bg-fixed bg-cover bg-center text-black" style={{ backgroundImage: "url('https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fethic.es%2F2023%2F03%2Fel-enigma-de-la-imagen%2F&psig=AOvVaw119MLWXwxHuzNh5VqXg9wM&ust=1721700565668000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCP1sXIuYcDFQAAAAAdAAAAABAE')" }}>
        <div className="absolute inset-0 bg-gray-50 backdrop-blur-sm"></div>
        <div className="relative z-10 container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-lg md:text-3xl xl:text-3xl font-bold mt-6">Empresas que Confían en Nosotros</h2>
          <span className="my-10 text-base md:text-lg xl:text-xl font-medium">
            Descubre algunas de las empresas que han experimentado los beneficios de nuestras soluciones.
          </span>
          <SliderClients />
        </div>
      </section>

     
      <section className="bg-[#f9f9f9] py-12">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
                Mantente al Día con las Últimas Tendencias y Avances
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold text-center text-gray-700">
                Descubre los blogs más recomendados y mantente informado sobre las últimas novedades en tecnología y tendencias.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card blogs={blogs} />
          </div>
        </div>
      </section>

      
      <Proceso />
    </div>
  );
};
