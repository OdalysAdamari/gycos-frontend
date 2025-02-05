import { BlogContent } from "../components"
import useFetch from "../hooks/useFetch"

export const BlogContentPage = () => {

  let {loading, data, error} = useFetch('http://gycos.juanpabloguleal.com/api/blogs?populate=*')
  if(loading) return <p>loading..</p>
  if(error) return <p>Error</p>
  let blogs = data.data

  return (
    <div className="py-8 sm:py-2">
      
      <BlogContent blogs={blogs}/>
    </div>
  )
}


