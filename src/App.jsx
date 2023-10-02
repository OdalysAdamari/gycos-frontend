import { 
  createBrowserRouter, 
  RouterProvider,
  Outlet
 } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Homepage, Service, AboutUs, Portfolio, BlogContentPage, Blog } from "./pages"
import { Contact } from "./pages/Contact"


const Layout = () =>{

  
  return(
    <div className="flex flex-col">
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
        path:"/service",
        element:<Service/>
      },
      {
        path:"/aboutus",
        element:<AboutUs/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/blogg/:id",
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
