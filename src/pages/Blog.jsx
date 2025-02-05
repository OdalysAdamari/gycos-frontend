
import { Card } from '../components';
import useFetch from '../hooks/useFetch';


export const Blog = () => {
  const { loading, data, error } = useFetch('http://gycos.juanpabloguleal.com/api/blogs?populate=*');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const blogs = data.data;

  return (
    <div className="w-full bg-[#f9f9f9] font-inter">
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:items-start mb-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl text-center md:text-left">
              Mantente al Día con las Últimas Tendencias y Avances
            </h1>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Blog Header"
              className="object-cover rounded-lg max-h-64 sm:max-h-96 w-full h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Card blogs={blogs}/>
        </div>
      </div>
    </div>
  );
};
  
