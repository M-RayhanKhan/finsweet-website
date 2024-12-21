import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <main>
      <section className="">
        <div className="text-center pt-10 md:pt-20">
          <h3 className="text-title font-bold text-4xl md:text-[50px]">
            Read our latest blogs
          </h3>
          <p className="text-description mt-2 md:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros <br className="hidden md:flex" /> elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor.
          </p>
        </div>
      </section>
      <Outlet />
    </main>
  );
};

export default Blog;
