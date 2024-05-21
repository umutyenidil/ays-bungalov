import {Carousel} from "primereact/carousel";
import HomeCarouselItem from "../items/HomeCarousel.Item.jsx";
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
import image5 from '../../../assets/images/image5.jpg';

const HomeCarousel = () => {
    const items = [
        {
            image: image1,
        },
        {
            image: image2,
        },
        {
            image: image3,
        },
        {
            image: image4,
        },
        {
            image: image5,
        }
    ];

    return (
        <Carousel value={items}
                  itemTemplate={HomeCarouselItem}
                  autoplayInterval={3000}/>
    );
};

export default HomeCarousel;

