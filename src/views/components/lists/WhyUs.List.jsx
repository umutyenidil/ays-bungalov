import PropTypes from "prop-types";
import HomeInformationListItem from "../items/HomeInformationList.Item.jsx";

const WhyUsList = ({className}) => {
    return (
        <div className={`${className} `}>
            <h3 className='mb-8 font-bold text-4xl'>
                Neden Bizi Seçmelisiniz?
            </h3>
            <ul className='flex flex-col gap-8 text-black'>
                <HomeInformationListItem
                    content='Müşteri Memnuniyeti: Her aşamada yanınızda olan destek ekibimiz.'/>
                <HomeInformationListItem
                    content='Özelleştirme İmkanı: Kendi tarzınıza uygun bungalovu yaratın.'/>
                <HomeInformationListItem
                    content='Doğanın içinde, huzur ve konforla dolu bir yaşam için, bungalov evlerimizi keşfetmeye davetlisiniz.'/>
                <HomeInformationListItem
                    content='Hayalinizdeki evi birlikte inşa edelim!'/>
            </ul>
        </div>
    );
};

WhyUsList.propTypes = {
    className: PropTypes.string,
};

export default WhyUsList;