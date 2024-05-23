import {
    IconCopyright,
    IconMail,
    IconMapPin,
    IconPhone,
    IconBrandWhatsapp,
    IconBrandInstagram,
    IconBrandYoutube,
} from "@tabler/icons-react";

const HomeFooter = () => {
    return (
        <footer className='w-full p-8 bg-slate-100 flex flex-col gap-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div className='flex flex-col'>
                    <h3 className='font-bold text-2xl mb-4'>
                        AYS Bungalov
                    </h3>
                    <p className='text-slate-700'>
                        Başınızı dinleyebileceğiniz, doğayla iç içe, huzurlu bir yaşam alanı arıyorsanız, bungalov
                        evlerimiz tam size göre! Doğal malzemelerle inşa edilmiş, modern tasarımlarıyla dikkat çeken
                        bungalovlarımız, size hem konforlu hem de estetik bir yaşam sunuyor.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <ul className='flex flex-col gap-6'>
                        <li>
                            <a className='flex flex-row gap-2'
                               href="mailto:ays.bungalov@gmail.com">
                                <IconMail/>
                                ays.bungalov@gmail.com
                            </a>
                        </li>
                        <li>
                            <a className='flex flex-row gap-2'
                               href='tel:+903123950787'>
                                <IconPhone/>
                                +90 312 395 07 87
                            </a>
                        </li>
                        <li>
                            <a className='flex flex-row gap-2'
                               href='tel:+905377078347'>
                                <IconPhone/>
                                +90 537 707 83 47
                            </a>
                        </li>
                        <li>
                            <a className='flex flex-row gap-2'
                               href='https://wa.me/+905377078347'>
                                <IconBrandWhatsapp/>
                                +90 537 707 83 47
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-6'>
                        <li>
                            <a className='flex flex-row gap-2'
                               href='https://www.instagram.com/aysbungalov?igsh=MWt4YXBhcWd6OTd3cA%3D%3D&utm_source=qr'>
                                <IconBrandInstagram/>
                                aysbungalov
                            </a>
                        </li>
                        <li>
                            <a className='flex flex-row gap-2'
                               href='https://www.youtube.com/@AysBungalov'>
                                <IconBrandYoutube/>
                                AysBungalov
                            </a>
                        </li>
                        <li>
                            <a className='flex flex-row gap-2'
                               href='http://maps.google.com?q=39.9922153,32.7330716'>
                                <IconMapPin/>
                                Organize Sanayi Bölgesi
                                İvedik / Ankara
                            </a>
                        </li>
                    </ul>
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
    );
};

export default HomeFooter;