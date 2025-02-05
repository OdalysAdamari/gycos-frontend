import { 
  createBrowserRouter, 
  RouterProvider,
  Outlet
 } from "react-router-dom"
import { Footer,  Navbar } from "./components"
import { Homepage, Service, AboutUs, Portfolio, BlogContentPage, Blog } from "./pages"
import { Contact } from "./pages/Contact"


const Layout = () =>{

  
  return(
    <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/UI",
    element: <Layout/>,
    children:[
      {
        path:"/UI",
        element:<Homepage />
      },
      {
        path:"/UI/service",
        element:<Service/>
      },
      {
        path:"/UI/aboutus",
        element:<AboutUs/>
      },
      {
        path:"/UI/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/UI/contact",
        element:<Contact/>
      },
      {
        path:"/UI/blog/:id",
        element:<BlogContentPage/>
      },
      {
        path:"/UI/blog",
        element:<Blog/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
