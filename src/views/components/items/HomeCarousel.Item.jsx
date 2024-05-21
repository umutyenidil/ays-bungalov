import PropTypes from "prop-types";

const HomeCarouselItem = (item) => {
    return (
        <div className='w-full h-[50dvh] sm:h-[75dvh] flex justify-center items-center'>
            <img className='w-full h-full object-cover'
                 src={item.image}
                 alt={item.image}/>
        </div>
    );
};

HomeCarouselItem.propTypes = {
    item: PropTypes.object,
};

export default HomeCarouselItem;