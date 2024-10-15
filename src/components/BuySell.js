import bussinesswoman from '../assets/images/elegant-businesswoman@2x.jpg'
import { motion } from 'framer-motion';
const BuyorSell = () => {
    return (
        
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeIn' }}
    >
        <div className="px-20  bg-Stone-50 mt-28 max-sm:px-2 flex max-sm:block">
            <div className='p-10 basis-1/2 relative max-sm:p-0'>
                <img src={bussinesswoman} alt='business' height={1000}></img>
                <div className='p-4 max-sm:hidden absolute top-[59%] left-[25%] w-[70%] bg-Stone-50 rounded-md'>
                <p className='text-xl font-semibold text-start'>We’re the most respected company in the industry because we deliver 
                    extraordinary experiences 
                    by defying mediocrity and always giving you 121% of what you expect from us.</p>
                </div>
            </div>
            <div className='p-10 basis-1/2 flex flex-col justify-center text-start max-sm:p-0'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold'>NEVER SETTLE</h2>
                <h1 className='text-3xl font-bold'>Looking to Buy or Sell a <br/>Home?</h1>
                <p className='text-xl'>We’re the most respected company in the industry because we deliver 
                    extraordinary experiences 
                    by defying mediocrity and always giving you 121% of what you expect from us.</p>
                    </div>
                    <div className='flex gap-3 mt-[120px]'>
                        <div className='p-2 flex flex-col gap-3'>
                        <h3 className='text-xl'>HOME SELLERS</h3>
                        <p>The award-winning team can help you get the most value for your home</p>
                        <button className="p-3 border border-gray-200 bg-Stone-600 text-white w-32
                hover:bg-white hover:border-[#F2CC2F] hover:text-black">Sell a Home</button>
                        </div>
                        <div className='p-2 flex flex-col gap-3'>
                            <h3 className='text-xl'>HOME BUYERS</h3>
                            <p>Find your perfect home now with jhon affiliated Buyer Agents</p>
                            <button className='p-3 border border-gray-200 bg-Stone-600 text-white w-32
                hover:bg-white hover:border-[#F2CC2F] hover:text-black'>Buy a Home</button>
                        </div>
                    </div>
            </div>
        </div>
        </motion.div>
    )
}

export default BuyorSell;