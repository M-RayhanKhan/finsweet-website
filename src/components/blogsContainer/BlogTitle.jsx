import { useLoaderData } from "react-router-dom";

const BlogTitle = () => {
    const {data} = useLoaderData();
    const {title , img, description, date} = data;
    return (
        <section className="max-w-7xl mx-2 rounded-3xl my-12 flex gap-12 md:flex-row flex-col border border-[#d8d8d8] lg:mx-auto lg:p-12 p-5">
            <div className="md:w-1/2 flex flex-col justify-evenly">

            <h5 className="text-xl font-bold bg-gradient-to-r from-red-400 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">Trending Post</h5>

            <h1 className="lg:text-5xl md:text-4xl text-3xl my-4 md:my-0 font-bold text-title">{title}</h1>
            <p className="text-[#6d6e76]">{description}</p>
            <p className="text-[#6d6e76] font-medium">{date}</p>
            </div>
            <div className="md:w-1/2 h-[300px]">
            <img className="h-full object-cover w-full rounded-2xl" src={img} alt="" />
            </div>
        </section>
    );
};

export default BlogTitle;