import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import useAlert from '../hooks/useAlert.js';
// import Alert from '../components/Alert.jsx';
import { toast } from 'react-toastify';

const Contact = () => {
    const formRef = useRef();

    // const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    //service_w82cqwt

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     emailjs
    //         .send(
    //             import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //             import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //             {
    //                 from_name: form.name,
    //                 to_name: 'Hung Dinh Dev',
    //                 from_email: form.email,
    //                 to_email: 'baohungdinhnguyen1412@gmail.com',
    //                 message: form.message,
    //             },
    //             import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    //         )
    //         .then(
    //             () => {
    //                 setLoading(false);
    //                 showAlert({
    //                     show: true,
    //                     text: 'Thank you for your message 😃',
    //                     type: 'success',
    //                 });

    //                 setTimeout(() => {
    //                     hideAlert(false);
    //                     setForm({
    //                         name: '',
    //                         email: '',
    //                         message: '',
    //                     });
    //                 }, [3000]);
    //             },
    //             (error) => {
    //                 setLoading(false);
    //                 console.error(error);

    //                 showAlert({
    //                     show: true,
    //                     text: "I didn't receive your message 😢",
    //                     type: 'danger',
    //                 });
    //             },
    //         );
    // };

    const { t, i18n } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            emailjs.send('service_w82cqwt', 'template_z46vk3p',
                {
                    from_name: form.name,
                    to_name: 'Hung Dinh Dev',
                    from_email: form.email,
                    to_email: 'baohungdinhnguyen1412@gmail.com',
                    message: form.message,
                }, 'SNb9qywjNasp6VmC7')
            setLoading(false)
            toast.success("Send Mail Success")
            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error("Something when wrong")
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            {/* {alert.show && <Alert {...alert} />} */}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}

                <div className="contact-container">
                    <h3 className="head-text">{t('contact_title')}</h3>
                    <p className="text-lg text-white-600 mt-3">
                        {t('contact_subtitle')}
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">{t('contact_form_fullname')}</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder={t('contact_form_fullname_exp')}
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">{t('contact_form_email')}</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder={t('contact_form_email_exp')}
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">{t('contact_form_message')}</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder={t('contact_form_message_exp')}
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? t('contact_button_sending') : t('contact_button_send')}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;