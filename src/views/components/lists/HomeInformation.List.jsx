import image1 from "../../../assets/images/image3.jpg";
import {IconCircleCheck} from "@tabler/icons-react";
import PropTypes from "prop-types";
import HomeInformationListItem from "../items/HomeInformationList.Item.jsx";

const HomeInformationList = ({className}) => {
    return (
        <div className={`${className} relative w-full h-[90dvh]`}>
            <img className='w-full h-full object-cover'
                 src={image1}
                 alt={image1}/>
            <div className='absolute top-0 p-8'>
                <div className='mb-8 flex flex-col gap-8'>
                        <span className='text-4xl font-bold text-white'>
                            Hayalinizdeki Evi Keşfedin
                        </span>
                         <span className='text-md text-slate-200'>
                            Bungalov evlerimiz, geniş verandaları, ferah iç mekanları ve özenle planlanmış detaylarıyla, size her anın tadını çıkarma fırsatı sunuyor. Şehir stresinden uzaklaşmak ve sevdiklerinizle kaliteli zaman geçirmek için mükemmel bir ortam.
                        </span>
                </div>
                <ul className='flex flex-col gap-8 text-white'>
                    <HomeInformationListItem content='Ormanın ortasında ya da deniz kenarında, doğanın kalbinde bir yaşam.'/>
                    <HomeInformationListItem content='Ahşap ve taşın sıcak dokunuşuyla, modern yaşamın tüm konforu bir arada.'/>
                    <HomeInformationListItem content='Yüksek yalıtım standartlarıyla, enerji tasarrufu sağlar.'/>
                    <HomeInformationListItem content='İhtiyacınıza göre şekillendirilebilen modüler tasarımlar.'/>
                </ul>
            </div>
        </div>
    );
};

HomeInformationList.propTypes = {
    className: PropTypes.string,
};

export default HomeInformationList;