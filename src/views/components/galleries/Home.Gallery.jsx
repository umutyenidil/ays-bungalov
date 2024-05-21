import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
import image5 from '../../../assets/images/image5.jpg';

const HomeGallery = () => {
    const sources = [
        image1,
        image2,
        image3,
        image4,
        image5,
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