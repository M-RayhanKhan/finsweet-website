import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <NotFoundPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/product',
            element: <Product/>
        },
        {
            path: '/pricing',
            element: <Pricing/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/contact',
            element: <Contact/>
        }
      ]
    },
  ]);

  export default router
