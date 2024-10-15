import reviewImg1 from "../assets/images/reviewImg.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from '../components/customArrows';
import Slider from "react-slick";
const ReviewContent = () => {
    const reviews = [
        {
            image: reviewImg1,
            positon: "Designer",
            name: "John Doe",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.The test Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            image: reviewImg1,
            positon: "Designer",
            name: "Nancy Doe",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.The test Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        }
    ];
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    };

    return (
        <div className="mt-28 p-10 bg-Amber-50 max-sm:p-2">
        <div>
                <h1 className="text-[45px] font-playfair text-center">Testimonals</h1>
            </div>
        <div className="px-20 py-10 flex w-full mt-16 max-sm:flex max-sm:flex-col max-sm:p-0">
            <div className="w-1/2 text-start float-left flex flex-col gap-6 p-5 max-sm:w-full">
                <h1 className="text-3xl font-bold">What our customers are saying us?</h1>
                <p className="text-lg">Various versions have evolved over the years, sometimes by <br/>accident, sometimes on purpose injected humour
                <br/>and the like.</p>

                <div className="flex justify-around">
                    <div className="basis-1/2 float-left">
                        <h1 className="text-3xl">30+ years</h1>
                        <span className="mt-7">of Real Estate Experience</span>
                    </div>
                    <div className="basis-1/2 float-left">
                        <h1 className="text-3xl">2012-2024</h1>
                        <span className="mt-7"> Realtors®️ Sales Award</span>
                    </div>
                </div>
            </div>
            <div className='w-1/2 float-right p-5 max-sm:w-full'>
                <Slider {...settings}>
                    {reviews.map((item, index) => (
                        <div key={index} className="flex gap-6">
                            <div className="flex items-center gap-6">
                                <img src={item.image} alt="review" className="object-cover w-20 rounded-full"></img>
                                <div className="flex flex-col text-start">
                                    <p className="text-3xl font-semibold">{item.name}</p>
                                    <span className="text-xl">{item.positon}</span>
                                </div>
                            </div>
                            <p className="mt-10 leading-9 text-start text-xl font-semibold">{item.review}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </div>
    );
};
export default ReviewContent;