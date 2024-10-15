import video from '../assets/vedios/real-Estate.mp4';
import mobileVideo from '../assets/vedios/mobile.mp4';
import search from '../assets/images/search (1).png'

const BannerVideo = () => {
    return (
        <>
            <div className='w-full h-2/5 relative'>
                <video src={video} autoPlay loop muted className='max-sm:hidden bg-black/70'></video>
                <video src={mobileVideo} autoPlay loop muted className='xl:hidden'></video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <h1 className='text-[65px] leading-[69px] font-bold text-white font-merriweather max-sm:text-2xl'>Luxury Real Estate in <br />Toronto</h1>
                    <div className='p-5 font-open-sans flex mt-7 ml-16 bg-white rounded-lg justify-between pr-5 w-[500px] pl-10 max-sm:p-2 max-sm:w-auto max-sm:mx-0'>
                        <input
                            className='placeholder:text-gray-500 w-full placeholder:text-xs max-sm:placeholder:text-sm outline-none'
                            placeholder="search by area, city, postal code or MLS® number" 
                        />
                        <img src={search} alt='search' width={25} />
                    </div>
                </div>
            </div>

        </> 
    )
};

export default BannerVideo;