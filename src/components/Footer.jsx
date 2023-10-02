import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <div className="w-screen bg-[#D9D9D9] py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 border-b-2 border-gray-500">
        <div>
          <h6 className="font-bold uppercase py-2">Mapa de sitio</h6>
          <ol>
            <li className="py-1">Home</li>
            <li className="py-1">Home</li>
            <li className="py-1">Home</li>
            <li className="py-1">Home</li>
            <li className="py-1">Home</li>
            <li className="py-1">Home</li>
          </ol>
        </div>

        <div className="">
          <h6 className="font-bold uppercase py-2">Ubicacion</h6>
          <p>Ubicacion</p>
          <h6 className="font-bold uppercase py-2">Contacto</h6>
          <p>Correo victor.garcia@gycos</p>
          <p>Numero  811 530 0892</p>
          <p>RS</p>
          <p>RS</p>
        </div>
      </div>

    <div className="flex flex-col max-w-[1240px]  py-4 m-auto justify-between sm:flex-row text-center">
      <p>2023 GYCOS, All rights reserved</p>
      <div className='flex justify-between sm:w-[300px]'>
        <FacebookIcon/>
        <YouTubeIcon/>
      </div>
    </div>

    </div>
  )
}
