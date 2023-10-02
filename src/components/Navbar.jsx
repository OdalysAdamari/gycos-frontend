
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {logonav} from '../assets'
import { Link } from 'react-router-dom';


export const Navbar = () => {
const [nav, setNav] = useState(false);

const handleNav = () => {
  setNav(!nav)
}

  return ( 
   <nav className="w-screen h-[80px] md:h-20 z-10 fixed bg-black text-white ">
    <div className='flex justify-between items-center w-full h-full md:max-w[1240px] '>
        <div className='flex items-center'>
          <img src={logonav} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 w-full h-[25px] opacity-[80%]' />
        </div>

        <div className='flex items-center sm:mr-10 ss:mr-10 md:mr:3'>
          <ul className='hidden md:flex'>
            <li className='p-3'><Link to="/">Inicio</Link> </li>
            <li className='p-3'><Link to="/service">Servicios</Link></li>
            <li className='p-3'><Link to='/portfolio'>Portafolio</Link></li>
            <li className='p-3'><Link to='/aboutus'>Sobre nosotros</Link></li>
            <li className='p-3'><Link to='/blog'>Blog</Link></li>
            <li className='p-3'><Link to='/contact'>Contacto</Link></li>
            <li className='p-3'>Esp</li>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden mr-3'>
          {nav ? <CloseIcon className='w-[28px] h-[28px] text-white'/> : <MenuIcon className='w-[28px] h-[28px] text-white' /> }
        </div>
    </div>
   

    
    
        <ul className={nav?'absolute bg-black w-full px-8 md:hidden':'hidden'}>
            <li className='p-3'><Link to="/">Inicio</Link> </li>
            <li className='p-3'>Servicios</li>
            <li className='p-3'><Link to='/portfolio'>Portafolio</Link></li>
            <li className='p-3'><Link to='/aboutus'>Sobre nosotros</Link></li>
            <li className='p-3'><Link to='/blog'>Blog</Link></li>
            <li className='p-3'><Link to='/contact'>Contacto</Link></li>
            <li className='p-3'>Esp</li>
        </ul>
    
   </nav>
  )
}

