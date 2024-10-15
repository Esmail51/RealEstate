import BlogImg1 from "../assets/images/blogImage-banner.jpg";
import BlogImg2 from "../assets/images/QC-Montreal-Skyline_hero.webp";
import BlogImg3 from "../assets/images/blogImage-4.webp";
const BlogContent = () => {
    return (
        <div className="p-10 flex flex-col w-full gap-5 mt-36 max-sm:p-2">
            <div className="flex flex-col mb-28">
                <h1 className="text-[45px] max-sm:text-2xl  font-playfair">Recent Blog Posts</h1>
                <p className="text-lg font-playfair text-gray-500">View featured blog posts from our local experts.</p>
            </div>

            <div className="relative group">
                <img src={BlogImg1} alt='blog' className='w-full h-[400px] object-cover opacity-80' />
                <div className="absolute top-[72%] p-3 inset-0 max-sm:top-[52%]">
                        <p className="text-3xl font-bold font-playfair text-white text-center">The best of Torront’s vibrant cities from coast to coast</p>
                        <p className=" text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">To receive the best vibe in the city, we have created a blog for you.</p>
                    </div>
            </div>
            <div className="flex flex-row gap-5 max-sm:flex-col">
                <div className="basis-1/2 relative group">
                    <img src={BlogImg2} alt='blog' className='object-cover h-[400px] w-full opacity-80' />
                    <div className="absolute top-[72%] p-3 inset-0 text-start max-sm:top-[57%]">
                        <p className="text-3xl font-bold font-playfair text-white">Best Areas for family and kids</p>
                        <p className=" text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">To receive the best vibe in the city, we have created a blog for you.</p>
                    </div>
                </div>
                <div className="basis-1/2 relative group">
                    <img src={BlogImg3} alt='blog' className='object-cover h-[400px] w-full opacity-80 ' />
                    <div className="absolute top-[72%] p-3 inset-0 text-start max-sm:top-[57%]">
                        <p className="text-3xl font-bold font-playfair text-white">The Top 10 Attraction in Monteral</p>
                        <p className=" text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">To receive the best vibe in the city, we have created a blog for you.</p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button className="p-3 border border-gray-200 bg-Stone-600 text-white w-32
                hover:bg-white hover:border-[#F2CC2F] hover:text-black">Load More</button>
            </div>
        </div>
    );
}

export default BlogContent;