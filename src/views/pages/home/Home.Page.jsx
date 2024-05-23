import HomeNavigationBar from "../../components/bars/HomeNavigation.Bar.jsx";
import HomeCarousel from "../../components/carousels/Home.Carousel.jsx";
import HomeGallery from "../../components/galleries/Home.Gallery.jsx";
import {IconCopyright, IconMail, IconPhone, IconMapPin, IconCircleCheck,} from "@tabler/icons-react";
import ContactForm from "../../components/forms/Contact.Form.jsx";

import image1 from '../../../assets/images/image3.jpg';
import HomeInformationList from "../../components/lists/HomeInformation.List.jsx";
import HomeInformationListItem from "../../components/items/HomeInformationList.Item.jsx";
import WhyUsList from "../../components/lists/WhyUs.List.jsx";
import HomeFooter from "../../components/footers/Home.Footer.jsx";


const HomePage = () => {
    return (
        <div>
            <HomeNavigationBar/>

            <HomeInformationList className='mb-16'/>

            <WhyUsList className='mb-16 px-10'/>

            <div className='px-10 mb-16 flex flex-col gap-y-4'>
                <h3 className='mb-8 text-4xl font-bold text-slate-800'>
                    Galerimiz
                </h3>
                <div className='hidden sm:block'>
                    <HomeCarousel/>
                </div>
                <HomeGallery/>
            </div>

            <div className='px-10 mb-16'>
                <h3 className='hidden sm:block mb-8 text-4xl font-bold text-slate-800'>
                    İletişim
                </h3>
                <ContactForm/>
            </div>

            <HomeFooter/>
        </div>
    );

};

export default HomePage;