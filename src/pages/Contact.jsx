import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.target);
        formData.append("access_key", "979609b2-16a9-4e01-be1d-e5f6d417f6c2");
        formData.append("subject", "New Executive Inquiry - Contact Page");
        formData.append("from_name", "Favourman International Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                e.target.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                setError(t('common.error_message'));
            }
        } catch (err) {
            setError(t('common.error_message'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-rich-black min-h-screen pt-40 pb-24 overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-deep-navy/30 blur-[150px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <span className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 p-3 border border-gold/20 inline-block bg-gold/5">
                        {t('documentation.label')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-none tracking-tighter uppercase">
                        {t('navbar.contact').split(' ')[0]} <br />
                        <span className="text-gold italic font-light lowercase">{t('navbar.contact').split(' ').slice(1).join(' ')}</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Information Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6">{t('contact_info.inquiry_label')}</h4>
                            <div className="p-8 border border-white/5 bg-charcoal/30 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-[1px] bg-gold/30 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                                <div className="flex items-center gap-8">
                                    <div className="w-14 h-14 border border-gold/20 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-rich-black transition-all">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{t('contact_info.email_label')}</p>
                                        <p className="text-white text-xl font-bold group-hover:text-gold transition-colors">{t('contact_info.email')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6">{t('contact_info.phone_label')}</h4>
                            <div className="p-8 border border-white/5 bg-charcoal/30 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-[1px] bg-gold/30 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                                <div className="flex items-center gap-8">
                                    <div className="w-14 h-14 border border-gold/20 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-rich-black transition-all">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div dir="ltr" className="text-start">
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{t('contact_info.phone_label')}</p>
                                        <p className="text-white text-xl font-bold group-hover:text-gold transition-colors">{t('contact_info.phone')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6">{t('contact_info.contact_role')}</h4>
                            <div className="p-8 border border-white/5 bg-charcoal/30 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-[1px] bg-gold/30 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                                <div className="flex items-center gap-8">
                                    <div className="w-14 h-14 border border-gold/20 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-rich-black transition-all">
                                        <i className="fa-solid fa-user-tie" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{t('contact_info.contact_role')}</p>
                                        <p className="text-white text-xl font-bold group-hover:text-gold transition-colors">{t('contact_info.contact_person')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Engagement Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-charcoal border border-gold/10 p-10 md:p-14 relative"
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-20 h-20 border border-gold flex items-center justify-center mx-auto mb-8">
                                        <i className="fa-solid fa-check text-gold text-3xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gold mb-4 uppercase tracking-[0.2em]">{t('common.success_msg')}</h3>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-10"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="group">
                                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/60 block mb-4 group-focus-within:text-gold transition-colors">{t('service_detail.name')}</label>
                                        <input required name="name" type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors font-light" />
                                    </div>

                                    <div className="group">
                                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/60 block mb-4 group-focus-within:text-gold transition-colors">{t('service_detail.email')}</label>
                                        <input required name="email" type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors font-light" />
                                    </div>

                                    <div className="group">
                                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/60 block mb-4 group-focus-within:text-gold transition-colors">{t('service_detail.message')}</label>
                                        <textarea required name="message" rows="4" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold resize-none transition-colors font-light"></textarea>
                                    </div>

                                    {error && <p className="text-red-500 text-xs text-center">{error}</p>}

                                    <button
                                        disabled={isSubmitting}
                                        className="w-full py-6 bg-gold text-rich-black uppercase font-bold tracking-[0.4em] hover:bg-white transition-all duration-500 disabled:opacity-50"
                                    >
                                        {isSubmitting ? t('common.submitting') : t('common.submit')}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
