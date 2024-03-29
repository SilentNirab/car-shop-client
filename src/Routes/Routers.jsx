import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import PrivetRouter from "../Provider/PrivetRouter";
import CarCollections from "../Pages/CarCollections/CarCollections";
import ViewDetails from "../Pages/CarCollections/ViewDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivetRoute from "../Provider/PrivetRouter";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/car-brand.json')
        },
        {
           path: "/carcollections/:name",
           element: <CarCollections></CarCollections>,
           loader: () => fetch('https://brand-shop-server-o20o5wart-md-nirabs-projects.vercel.app/car')
        },
        {
            path: "/addproducts",
            element: <PrivetRouter><AddProducts></AddProducts></PrivetRouter>
        },
        {
            path: "/mycart/",
            element: <PrivetRouter><MyCart></MyCart></PrivetRouter>,
            loader: () => fetch('https://brand-shop-server-o20o5wart-md-nirabs-projects.vercel.app/car')
        },
        {
            path: "/viewdetails/:id",
            element: <PrivetRoute ><ViewDetails></ViewDetails></PrivetRoute>,
            loader: () => fetch('https://brand-shop-server-o20o5wart-md-nirabs-projects.vercel.app/car')
        },
        {
            path: "/updateproduct/:id",
            element: <PrivetRouter><UpdateProduct></UpdateProduct></PrivetRouter>,
            loader: ({params}) => fetch(`https://brand-shop-server-o20o5wart-md-nirabs-projects.vercel.app/car/${params.id}`)
        },
        {
            path: "/login",
            element: <Login></Login>

        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        }
      ]
    }
  ]);

  export default router;