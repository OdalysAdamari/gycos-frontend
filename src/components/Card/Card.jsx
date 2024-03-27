import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */

export const Card = ({blogs}) => {

  return (
    <>
    
    {blogs?.map(blog =>
        <Link to={`/blogg/${blog.id}`} key={blog.id} className="cursor-pointer max-w-sm mx-auto group hover:no-underline focus:no-underline"> 
           <div className="flex flex-col items-start col-span-12 space-y-3  sm:col-span-6 xl:col-span-4">
            <img
                src="https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
            <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
                rounded-full uppercase ">Entertainment</p>
            <a className="text-lg font-bold sm:text-xl md:text-2xl">{blog.attributes.blogTitle}</a>
            <p className="text-sm text-black">{blog.attributes.blogDesc}</p>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
              <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
              <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
          </div>
      </div>
              
        </Link>
        
    )}
    
    </>
  )
}
