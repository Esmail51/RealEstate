import image1 from '../assets/images/torrontoPotrait.webp';
import image2 from '../assets/images/HallOffame.webp';
import image3 from '../assets/images/royal_ontario_museum.webp';
import image4 from '../assets/images/toronto-501729_1280.jpg'
import { motion,useInView } from 'framer-motion';
import { useRef  } from 'react';

const FeatureNeighbour = () => {
    const images = [
        {
            image: image1,
            name: 'Toronto'
        },
        {
            image: image2,
            name: 'National Park'
        },
        {
            image: image3,
            name: 'Ontario Museum'
        },
        {
            image: image4,
            name: 'Cosa Loma'
        },
    ]
    const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
          },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 }, // Start off the screen on the right
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Smoother transition
    };
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    return (
            <motion.div
            ref={ref}
      className="flex p-5 h-[600px] gap-7 mt-28 overflow-hidden max-sm:flex-col max-sm:p-2 max-sm:h-auto"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
        <motion.div
        className="basis-1/5 p-5 text-start flex flex-col justify-center gap-3"
        variants={itemVariants}
      >
        <h1 className="text-2xl max-sm:text-center max-sm:font-playfair">Featured Neighbourhoods</h1>
        <p className="text-lg max-sm:text-center">
          In the vibrant city of Toronto, Ontario. Our Realtors are renowned
          among residents, property developers, local businesses, and
          professionals in the real estate industry for their remarkable skills,
          dynamic approach, and tireless commitment to facilitating transactions
          for buyers and sellers.
        </p>
      </motion.div>

      {images.map((image, index) => (
        <motion.div
          key={index}
          className="basis-1/5 relative"
          variants={itemVariants}
        >
          <img
            src={image.image}
            alt={image.name}
            className="h-full opacity-80 hover:opacity-100 transition-opacity duration-300 max-sm:w-full "
            loading="lazy" 
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl font-semibold">{image.name}</h1>
          </div>
        </motion.div>
      ))}
    </motion.div>
            
    )
}

export default FeatureNeighbour;