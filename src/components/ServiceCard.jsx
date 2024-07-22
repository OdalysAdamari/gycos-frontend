import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ServiceCard = () => {
  const services = [
    {
      id: 1,
      title: "Servicio 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Servicio 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "http://localhost:1337/uploads/workshop_9f2080e907.png"
    },
    {
      id: 3,
      title: "Servicio 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "http://localhost:1337/uploads/workshop_9f2080e907.png"
    },
    {
      id: 4,
      title: "Servicio 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "http://localhost:1337/uploads/workshop_9f2080e907.png"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      {services.map(service => (
        <div
          key={service.id}
          className="group relative bg-[#242323] rounded-2xl shadow-xl h-[350px] hover:scale-105 transition-transform duration-300"
          data-aos="fade-left"
        >
          <img
            src={service.img}
            className="h-full w-full object-cover rounded-2xl opacity-60"
            alt={service.title}
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full pb-4 px-4 space-y-4 bg-black bg-opacity-50 rounded-b-2xl">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="text-white">{service.description}</p>
          </div>
        </div>
      ))}
    </>
  );

};
