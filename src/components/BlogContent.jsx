import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

/* eslint-disable react/prop-types */
export const BlogContent = ({blogs}) => {

    const {id} = useParams()

   
      let blog = blogs.filter(blog => blog.id == id)
      blog = blog[0]
      console.log(blog)

    

  return (
    <div className="w-full py-8 bg-[#f9f9f9]">
        <div className=" max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-3
            sm:gap-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

                <div className="col-span-2 sm:gap-8">
                    <img className='h-56 w-full object-cover' src={blog.coverImg} />
                    <h1 className="font-bold text-2xl my-1 pt-5">{blog.attributes.blogTitle}</h1>
                    <div className="pt-5"><ReactMarkdown className="line-break">{blog.attributes.blogContent}</ReactMarkdown></div>
                </div>

                <div className="w-full bg-white rounded-sm overflow-hidden drop-shadow-md py-5 max-h-[250px]">
                    <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.authorImg} alt="AutorIcon" />
                        <h1 className="font-bold text-2xl text-center text-black pt-3">{blog.attributes.authorName}</h1>
                        <p className="text-center font-medium">{blog.attributes.authorDesc}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
