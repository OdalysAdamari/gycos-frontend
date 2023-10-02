import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
/* eslint-disable react/prop-types */

export const Card = ({blogs}) => {

  return (
    <>
    
    {blogs?.map(blog =>
        <Link to={`/blogg/${blog.id}`} key={blog.id} className="cursor-pointer max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-200">
           <div className="">
                <img src="https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="object-cover w-full rounded h-44 dark:bg-gray-500"/>
           </div>
           <div className=" p-6 space-y-2">
                <h1 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.attributes.blogTitle}</h1>
                <span className="text-xs dark:text-gray-400">January 22, 2021</span>                <p className="pb-2">{blog.attributes.blogDesc}</p>
                <div className='py-2'>
                    <a className="text-green-400"> <AddCircleOutlineIcon/> Continua leyendo</a>
                </div>
           </div>
            
              
        </Link>
        
    )}
    
    </>
  )
}
