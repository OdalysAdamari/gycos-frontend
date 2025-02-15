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
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Homepage />
      },
      {
        path:"/servicios",
        element:<Service/>
      },
      {
        path:"/nosotros",
        element:<AboutUs/>
      },
      {
        path:"/portafolio",
        element:<Portfolio/>
      },
      {
        path:"/contacto",
        element:<Contact/>
      },
      {
        path:"/blog/:id",
        element:<BlogContentPage/>
      },
      {
        path:"/blog",
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
