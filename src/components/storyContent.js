import image from '../assets/images/team2.jpeg';
import { motion } from 'framer-motion';

const StoryContent = () => {
    return (
        
        <div className="bg-white">
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeIn' }}
    >
            <div className="mt-52 px-20 max-sm:px-2">
                <h1 className="text-[45px] max-sm:text-2xl font-playfair">The Standard of Excellence</h1>
                <p className="text-lg font-playfair text-gray-500">70 YEARS OF BESPOKE SERVICE BEHIND YOUR LISTING.</p>

                <div className='flex row gap-14 p-10 mt-20 max-sm:flex-col max-sm:p-0'>
                    <div className='basis-1/2 rounded-xl w-full flex justify-end '>
                        <img src={image} alt='home' className='object-cover rounded-xl w-[500px]'></img>
                    </div>
                    <div className='flex-col justify-center flex py-3 basis-1/2 gap-5'>
                    <p className='text-start text-[#F2CC2F] max-sm:text-center'>WHO WE ARE</p>
                        <h1 className='text-3xl font-semibold text-start max-sm:text-center font-merriweather'>We Help Clients buy and sell <br />House More than 30+ years</h1>
                        <p className='mt-6 text-lg text-justify mr-28 max-sm:text-center max-sm:m-0'>Our founders crafted an approach that had never been tried in Toronto: To focus on fine homes and a discriminating clientele, delivering superior results
                            through a blend of bespoke service and “inside” advice.</p>
                        {/* <p className='mt-9 text-xl text-start'>J&D Realtors possess a sixth sense, a ground-state awareness of luxury home sellers’ and buyers’ requirements and lifestyles – extending well beyond the deal. Anticipation over response. Professional-grade commitment over a hobbyist mentality.
                            And above all, wisdom, diligence and integrity beyond reproach.</p> */}
                            <div className='text-start max-sm:text-center'>
                                <button className='bg-[#3e3d3a] text-white font-semibold px-5 py-2 mt-5 rounded-lg'>Learn More</button>
                            </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    );
}
export default StoryContent;