export const ProductosMenu = () => {
  return (
    <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100 font-inter">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Conoce nuestros servicios</h2>
        <p className="dark:text-gray-400">Descubre lo que ofrecemos</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Integración de Procesos",
            href: "#integracion",
          },
          { title: "Mantenimiento", href: "#mantenimiento" },
          { title: "Refacción", href: "#refaccion" },
          { title: "Capacitación", href: "#capacitacion" },
        ].map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="flex flex-col items-center p-4 transform transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-2xl font-semibold">{service.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

