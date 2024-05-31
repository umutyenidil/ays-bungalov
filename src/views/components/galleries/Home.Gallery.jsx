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

const HomeGallery = () => {
    const sources = [
        image1,
        image3,
        image4,
        image5,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                sources.map((src) => {
                    return (
                        <img className='aspect-square object-cover cursor-pointer hover:scale-110 transition duration-100'
                             src={src}
                             alt={src}/>
                    );
                })
            }
        </div>
    );
};

export default HomeGallery;