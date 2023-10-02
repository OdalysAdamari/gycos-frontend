
import { Card } from "../components"
import useFetch from "../hooks/useFetch"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Blog = () => {
    let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populated=*')
    if(loading) return <p>loading..</p>
    if(error) return <p>Error</p>
    let blogs = data.data
    
    return (
      <div className="w-full bg-[#f9f9f9] py-[100px]">
        <div className="h-[50vh] md:h-[60vh] flex flex-col justify-evenly rounded-2xl items-center  bg-[#ebebeb] w-screen   ">
            <h1 className="text-3xl md:text-6xl mt-2 md:mt-4 ">DESCUBRE ARTICULOS INTERESANTES</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet libero et tincidunt eleifend. </span>
        </div>
        <div className="max-w-[1240px] mx-auto">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 my-5 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-200">
            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
              <div className='py-2'>
                    <a className="text-green-400"> <AddCircleOutlineIcon/> Continua leyendo</a>
                </div>
            </div>
          </a>
            <div className="grid sm:grid-cols-3 gap-8 px-4 text-black">
                
                    <Card className="drop-shadow-2xl" blogs={blogs}/>
                
            </div>

        </div>
        
      </div>
    )
  }
  
  
  