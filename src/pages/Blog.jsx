
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
              <div className="flex flex-col items-center px-8 md:px-0 sm:px-5 md:flex-row py-8">
              <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                    md:space-y-5">
                  <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                      uppercase ">
                    <p className="inline">
                      <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" 
                          xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                          00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                          1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                          0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </p>
                    <p className="inline text-xs font-medium">New</p>
                  </div>
                  <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Write anything. Be creative.</a>
                  <div className="pt-2 pr-0 pb-0 pl-0">
                    <p className="text-sm font-medium inline">author:</p>
                    <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
                    <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, April 2021 ·</p>
                    <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block">
                  <img
                      src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-4 gap-4 text-black">
                
                    <Card className="drop-shadow-2xl" blogs={blogs}/>
                
            </div>

        </div>
        
      </div>



    )
  }
  
  
  