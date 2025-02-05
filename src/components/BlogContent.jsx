import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

/* eslint-disable react/prop-types */
export const BlogContent = ({blogs}) => {

    const {id} = useParams()

   
      let blog = blogs.filter(blog => blog.id == id)
      blog = blog[0]
      console.log(blog)

    

  return (
    <div className="w-full py-8 bg-[#f9f9f9] font-inter">
  <div className="max-w-[1240px] mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">

      {/* Sección del Blog */}
      <div className="col-span-2 space-y-5">
        <img
          className='h-56 w-full object-cover rounded-lg shadow-md'
          src={blog.attributes.blogCoverImg.data ? blog.attributes.blogCoverImg.data.attributes.url: '/UI/src/assets/logonav.svg' }
          alt="Imagen del blog"
        />
        <h1 className="font-bold text-3xl md:text-4xl">{blog.attributes.blogTitle}</h1>
        <div className="text-base md:text-lg leading-relaxed">
          <ReactMarkdown className="line-break">{blog.attributes.blogContent}</ReactMarkdown>
        </div>
      </div>

      {/* Sección del Autor */}
      <div className="bg-white rounded-lg shadow-lg py-5 flex flex-col items-center space-y-4">
        <img
          className='rounded-full object-cover'
          src={blog.attributes.authorIcon.data ? blog.attributes.authorIcon.data[0].attributes.url: '/UI/src/assets/logonav.svg' }
          alt="Imagen del autor"
        />
        <h2 className="font-bold text-xl text-center">{blog.attributes.authorName}</h2>
        <p className="text-center text-sm md:text-base">{blog.attributes.authorDesc}</p>
      </div>
      
    </div>
  </div>
</div>

  )
}
