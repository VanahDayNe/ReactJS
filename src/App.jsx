import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout.jsx"
import Home from "./Pages/Home.jsx"
import Shop from "./Pages/Shop.jsx"
import Error404 from "./Pages/Error404.jsx"
import Product from "./Pages/Product.jsx"
import Cart from "./Pages/Cart.jsx"
import Checkout from "./Pages/Checkout.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error404/>,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/:cat',
        element: <Shop/>
      },
      {
        path: '/:cat/:id',
        element:<Product/>
      },
      {
        path: '/cart',
        element:<Cart/>
      },
      {
        path: '/checkout',
        element: <Checkout/>
      }
  ]}
])
function App() {

  return (
   
       <RouterProvider router={router}/>

    
  )
}

export default App
