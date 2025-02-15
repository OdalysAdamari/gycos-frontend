import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../index.css'

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const handleClick = () => {
    setOpenNav(false);
  };

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    setVisible(scrollPosition > currentScrollPosition || currentScrollPosition < 10);
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header className={`font-inter fixed top-0 w-full z-50 border-b border-n-6 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${openNav ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto flex items-center justify-between p-5 lg:px-10">
        <a href="/" className="w-16">
          <img src="/portal/uploads/logo_final_2_c6e211b380.png" alt="logoGYCOS" className="w-full" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="lg:hidden focus:outline-none z-20"
        >
          {openNav ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Navigation Links */}
        <nav className={`lg:flex lg:items-center lg:space-x-6 lg:ml-auto transition-transform duration-300 ${openNav ? 'fixed inset-0 bg-n-8 flex flex-col items-center justify-center' : 'hidden lg:flex'}`}>
        <div className='lg:hidden focus:outline-none flex w-full justify-end '>
          <button onClick={toggleNav}
          className=" aling-end px-6 pb-6 "><CloseIcon/></button>
        </div>
          <a
            href="/"
            className="text-lg lg:text-sm font-semibold transition-colors hover:text-green-500 px-6 py-3"
            onClick={handleClick}
          >
            Inicio
          </a>
          <a
            href="/servicios"
            className="text-lg lg:text-sm font-semibold transition-colors hover:text-green-500 px-6 py-3"
            onClick={handleClick}
          >
            Servicios
          </a>
          <a
            href="/portafolio"
            className="text-lg lg:text-sm font-semibold transition-colors hover:text-green-500 px-6 py-3"
            onClick={handleClick}
          >
            Portafolio
          </a>
          <a
            href="/nosotros"
            className="text-lg lg:text-sm font-semibold transition-colors hover:text-green-500 px-6 py-3"
            onClick={handleClick}
          >
            Sobre Nosotros
          </a>
          <a
            href="/blog"
            className="text-lg lg:text-sm font-semibold transition-colors hover:text-green-500 px-6 py-3"
            onClick={handleClick}
          >
            Blog
          </a>
          <a
            href="/contacto"
            className="text-lg lg:text-sm font-semibold transition-colors hover:text-green-500 px-6 py-3"
            onClick={handleClick}
          >
            Contacto
          </a>

          {/* Language Switcher */}
          <a
            href="#esp"
            className="mt-4 lg:hidden transition-colors hover:text-green-500"
          >
            ESP
          </a>
        </nav>
      </div>
    </header>
  );
};
