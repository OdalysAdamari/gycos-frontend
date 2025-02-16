import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import useFetch from "../hooks/useFetch";

export const ServiceCard = () => {

  let { loading, data, error } = useFetch(
    "https://strapi.gycos.com.mx/api/services?populate=*"
  );

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
    
  }, []);

  if (loading) return <p>loading..</p>;
  if (error) return <p>Error</p>;

  let services = data.data;

  return (
    <>
      {services.map(service => (
        <div
          key={service.id}
          className="group relative bg-[#242323] rounded-2xl shadow-xl h-[350px] hover:scale-105 transition-transform duration-300"
          data-aos="fade-left"
        >
          <img
            src={ service.attributes.Img ? "https://strapi.gycos.com.mx" + service.attributes.Img.data.attributes.url : '/src/assets/logonav.svg' }
            className="h-full w-full object-cover rounded-2xl opacity-60"
            alt={service.attributes.Name}
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full pb-4 px-4 space-y-4 bg-black bg-opacity-50 rounded-b-2xl">
            <h3 className="text-xl font-semibold text-white">{service.attributes.Name}</h3>
            <p className="text-white">{service.attributes.Description}</p>
          </div>
        </div>
      ))}
    </>
  );

};
