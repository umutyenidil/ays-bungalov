import HomeNavigationBar from "../components/bars/HomeNavigation.Bar.jsx";
import HomeCarousel from "../components/carousels/Home.Carousel.jsx";
import HomeFooter from "../components/footers/Home.Footer.jsx";
import HomeGallery from "../components/galleries/Home.Gallery.jsx";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {IconCopyright, IconMail, IconPhone, IconMapPin} from "@tabler/icons-react";
import ContactForm from "../components/forms/Contact.Form.jsx";

const HomePage = () => {
    return (
        <div>
            <HomeNavigationBar/>

            <div className='px-10 my-4 flex flex-col'>
                <span className='text-3xl font-bold text-slate-800'>
                    Bungalov Tatiliniz İçin Mükemmel İstasyon
                </span>
                <span className='text-md text-slate-500'>
                    Şehrin Gürültüsünden Uzak, Doğayla İç İçe
                </span>
            </div>

            <div className='mb-4'>
                <HomeCarousel/>
            </div>

            <div className='px-10 mb-8 flex flex-col gap-y-4'>
                <h3 className='text-3xl font-bold text-slate-800'>
                    Galerimiz
                </h3>
                <HomeGallery/>
            </div>

            <div className='px-10 mb-8'>
                <ContactForm/>
            </div>

            <footer className='w-full p-8 bg-slate-100 flex flex-col gap-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-2xl mb-4'>
                            AYS Bungalov
                        </h3>
                        <p className='text-slate-700'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row gap-2'>
                                <IconMail/>
                                <p>
                                    ays.bungalov@gmail.com
                                </p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <IconPhone/>
                                <p>
                                    +90 312 395 07 87
                                </p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <IconPhone/>
                                <p>
                                    +90 537 707 83 47
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row gap-2'>
                                <IconMapPin/>
                                <p>
                                    Organize Sanayi Bölgesi
                                    İvedik / Ankara
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex justify-center items-center'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <IconCopyright/>
                        <h6 className='text-sm font-bold'>
                            2024 Copyrights : Umut Yenidil
                        </h6>
                    </div>
                </div>
            </footer>
        </div>
    );

};

export default HomePage;