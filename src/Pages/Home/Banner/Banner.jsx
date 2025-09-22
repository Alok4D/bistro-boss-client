import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/05.png';

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={1500}
        showStatus={false}
        showArrows={true}
      >
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <div key={index} className="flex justify-center items-center bg-gray-100">
            <img 
              src={img} 
              alt={`Banner ${index + 1}`} 
              className=" lg:h-full h-72 object-"
            />
          </div>
        ))}
      </Carousel>
  
    </div>
  );
};

export default Banner;
