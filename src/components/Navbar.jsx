
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {logonav} from '../assets'



export const Navbar = () => {
 const [openNav, setOpenNav] = useState(false)
 const toggleNav = () => {
  if (openNav) {
    setOpenNav(false);
  } else {
    setOpenNav(true);
  }
 }

 const handleClick = () => {
  setOpenNav(false);
 }
  return ( 
   <div className={`fixed top-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdropbackdrop-blur-sm
   ${openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm "}`}>
    <div className='flex items-center px-5 lg-px-7.5 xl:px-10 max-lg:py-4'>
        <a className='block w-[12rem] xl:mr-8'>
          <img src={logonav} width={190} height={40} alt="logoGYCOS" href="/"  />
        </a>

        <nav className={`${openNav ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0
        lg:static lg:flex lg:mx-auto lg:bg-transparent h-screen lg:h-auto bg-n-8/90 backdrop-blur-sm `}>
          <div className='relative z-2 flex flex-col items-center justify-center m-auto
          lg:flex-row   w-full '>
            <a href='/service' className={`block relative text-2xl uppercase transition-colors hover:text-green-500
            px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold`} onClick={handleClick}> Servicios</a>
            <a href='/portfolio' className={`block relative text-2xl uppercase transition-colors hover:text-green-500
            px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold`} onClick={handleClick}>Portafolio</a>
            <a href='/aboutus' className={`block relative text-2xl uppercase transition-colors hover:text-green-500
            px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold`} onClick={handleClick}>Sobre Nosotros</a>
            <a href='/blog' className={`block relative text-2xl uppercase transition-colors hover:text-green-500
            px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold`} onClick={handleClick}>Blog</a>
            <a href='/contact' className={`block relative text-2xl uppercase transition-colors hover:text-green-500
            px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold`} onClick={handleClick}>Contacto</a>

            <div className='absolute inset-0 pointer-events-none lg:hidden'> 
              <div className='absolute inset-0 opacity-[0.3]'></div>
            </div>
          </div>
        </nav>

        <a href='#esp' className='hidden mr-8 transition-colors hover:text-green-500 lg:block'>ESP</a>
        <button className='ml-auto lg:hidden' onClick={toggleNav}>
          {openNav ? <CloseIcon/> : <MenuIcon openNav={openNav} /> }
        </button>
        
    </div>
   
   </div>
  )
}

