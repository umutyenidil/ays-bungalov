import {Carousel} from "primereact/carousel";
import HomeCarouselItem from "../items/HomeCarousel.Item.jsx";
import image1 from '../../../assets/images/image1.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image10 from '../../../assets/images/10.jpg';
import image11 from '../../../assets/images/11.jpg';
import image12 from '../../../assets/images/12.jpg';
import image13 from '../../../assets/images/13.jpg';
import image14 from '../../../assets/images/14.jpg';
import image15 from '../../../assets/images/15.jpg';
import image16 from '../../../assets/images/16.jpg';
import image17 from '../../../assets/images/17.jpg';
import image18 from '../../../assets/images/18.jpg';
import image19 from '../../../assets/images/19.jpg';

const HomeCarousel = () => {
    const items = [
        {
            image: image1,
        },
        {
            image: image3,
        },
        {
            image: image4,
        },
        {
            image: image5,
        },
        {
            image: image10,
        },
        {
            image: image11,
        },
        {
            image: image12,
        },
        {
            image: image13,
        },
        {
            image: image14,
        },
        {
            image: image15,
        },
        {
            image: image16,
        },
        {
            image: image17,
        },
        {
            image: image18,
        },
        {
            image: image19,
        }
    ];

    return (
        <Carousel value={items}
                  itemTemplate={HomeCarouselItem}
                  autoplayInterval={3000}/>
    );
};

export default HomeCarousel;

