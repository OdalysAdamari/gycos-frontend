import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */

export const Card = ({blogs}) => {

  return (
    <>
      {blogs?.map((blog) => (
        <Link to={`/UI/blog/${blog.id}`} key={blog.id} className="group">
          <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={ blog.attributes.blogCoverImg ? blog.attributes.blogCoverImg.data.attributes.url : '/UI/src/assets/logonav.svg'}
              alt={blog.attributes.blogTitle}
              className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
            />
            <div className="p-4">
              <p className="bg-green-500 text-white text-xs font-medium py-1 px-2 rounded-full uppercase inline-block mb-3">
                {blog.attributes.blogCategory  || 'Sin categoria'}
              </p>
              <h2 className="text-xl font-bold mb-2">{blog.attributes.blogTitle}</h2>
              <p className="text-sm text-gray-700 mb-3">{blog.attributes.blogDesc}</p>
              <div className="text-xs text-gray-500">
                <span className="font-medium">{blog.attributes.authorName}</span>
                <span className="mx-1">·</span>
                <span>{blog.attributes.publishDate}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
