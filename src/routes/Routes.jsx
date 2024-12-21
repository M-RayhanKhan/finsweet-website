import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogTitle from "../components/blogsContainer/BlogTitle";


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
            element: <About/>,
            loader: async() => {
                const aboutRes = await fetch('/blogs.json');
                const aboutData = await aboutRes.json();
                return {aboutData}
            }
        },
        {
            path: '/blogs',
            element: <Blog/>,
            children: [
                {
                    path: '/blogs',
                    element: <BlogTitle/>,
                    loader: async () => {
                        const blogsRes = await fetch('/blogs.json');
                        const blogsData = await blogsRes.json();
                        const data = blogsData.find(blog => blog.id == blog.id );
                        return {data}
                    }
                },
                {
                    path: '/blogs/:id',
                    element: <BlogTitle/>,
                    loader: async ({params}) => {
                        const blogsRes = await fetch('/blogs.json');
                        const blogsData = await blogsRes.json();
                        const data = blogsData.find(blog => blog.id == params.id);
                        return {data}
                    }
                }
            ]
        },
        {
            path: '/contact',
            element: <Contact/>
        }
      ]
    },
  ]);

  export default router
