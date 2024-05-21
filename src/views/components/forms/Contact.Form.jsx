import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {IconMail} from "@tabler/icons-react";

const ContactForm = () => {
    return (
        <div className='w-full flex flex-col-reverse sm:flex-row'>
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <div className='grid grid-col-2 gap-2'>
                    <InputText className='p-inputtext-sm'
                               type='text'
                               keyfilter="alpha"
                               placeholder="Adınız"/>
                    <InputText className='p-inputtext-sm'
                               type='text'
                               keyfilter="alpha"
                               placeholder="Soyadınız"/>
                </div>
                <InputTextarea className='w-full p-inputtext-sm'
                               value={'Aciklama'}
                               onChange={(e) => setValue(e.target.value)}
                               rows={5}/>
            </div>
            <div className='w-full sm:w-1/2 p-4 flex justify-center items-center'>
                <div className='flex flex-col items-center gap-y-2 text-center'>
                    <IconMail width={64} height={64}/>
                    <h3 className='text-3xl font-bold text-slate-800'>
                        Bizimle iletişime geçin
                    </h3>
                    <h3 className='text-md text-slate-400'>
                        Fiyat bilgisi almak, mekanlarımızı görmek ve geri kalan tüm sorularınız için bizimle
                        iletişim.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;