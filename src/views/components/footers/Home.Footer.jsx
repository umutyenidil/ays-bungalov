import {IconCopyright, IconMail, IconMapPin, IconPhone} from "@tabler/icons-react";

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
    );
};

export default HomeFooter;