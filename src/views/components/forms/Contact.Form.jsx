import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {IconMail} from "@tabler/icons-react";
import {Button} from "primereact/button";
import {useRef, useState} from "react";
import {Toast} from "primereact/toast";

const ContactForm = () => {
    const toast = useRef(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = async () => {
        try {
            if (!(name.length > 0 && surname.length > 0 && description.length > 0)) return;

            const formData = new FormData();

            formData.append("name", name + " " + surname);
            formData.append("email", "aysbungalov@gmail.com");
            formData.append("message", description);

            formData.append("access_key", "75b8e4d5-e3f5-45a4-a8b7-fed8bd9a8c62");
            //
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Başarılı',
                    detail: 'E-posta başarıyla gönderildi'
                });
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Başarısız',
                    detail: 'E-posta Gönderilemedi'
                });
            }
        } catch (err) {
            toast.current.show({
                severity: 'error',
                summary: 'Başarısız',
                detail: 'E-posta Gönderilemedi'
            });
        }
        setName("");
        setSurname("");
        setDescription("");
    };

    return (
        <>
            <Toast ref={toast}/>
            <div className='w-full flex flex-col-reverse sm:flex-row gap-8'>
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                    <div className='grid grid-col-2 gap-2'>
                        <InputText className='p-inputtext-sm'
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   type='text'
                                   keyfilter="alpha"
                                   placeholder="Adınız"/>
                        <InputText className='p-inputtext-sm'
                                   value={surname}
                                   onChange={(e) => setSurname(e.target.value)}
                                   type='text'
                                   keyfilter="alpha"
                                   placeholder="Soyadınız"/>
                    </div>
                    <InputTextarea className='w-full p-inputtext-sm'
                                   placeholder='Açıklama'
                                   value={description}
                                   onChange={(e) => setDescription(e.target.value)}
                                   rows={5}/>
                    <Button label='Gönder'
                            onClick={onSubmit}/>
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
        </>
    );
};

export default ContactForm;