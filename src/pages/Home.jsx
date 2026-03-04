import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { serviceImages } from '../data/serviceImages';

const Home = () => {
    const { t, i18n } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.target);
        formData.append("access_key", "57d25b96-1837-4c3e-9275-3f7267ae25ad");
        formData.append("from_name", "Favourman Website");
        formData.append("subject", "New Inquiry from Home Page");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                e.target.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error("Web3Forms Error Detailed:", data);
                setError(data.message || t('common.error_message'));
            }
        } catch (err) {
            console.error("Submission Network/Fetch Error:", err);
            setError(t('common.error_message'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-rich-black">
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20 brightness-50">
                        <source src="https://player.vimeo.com/external/494254427.sd.mp4?s=ced5d8205f0d238b776fd17d093a1ee40a927a05&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-rich-black/90 via-deep-navy/40 to-rich-black z-10" />
                </div>

                <div className="container mx-auto px-6 z-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none uppercase">
                            {t('hero.title1')} <br />
                            <span className="text-gold italic font-light lowercase">{t('hero.title2')}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="#services" className="group relative px-12 py-5 bg-gold text-rich-black font-bold uppercase tracking-[0.3em] text-[10px] transform hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden">
                                <span className="relative z-10">{t('hero.cta_capabilities')}</span>
                                <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </a>
                            <a href="#contact" className="group relative px-12 py-5 border border-gold/40 text-gold font-bold uppercase tracking-[0.3em] text-[10px] transform hover:scale-105 transition-all duration-500 overflow-hidden group-hover:text-rich-black">
                                <span className="relative z-10 group-hover:text-rich-black transition-colors duration-500">{t('hero.initiate_protocol')}</span>
                                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Legacy/Story */}
            <section className="py-32 bg-rich-black relative" id="story">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 block">{t('home.story.label')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter uppercase leading-none">
                                {t('home.story.title')} <br />
                                <span className="text-gold italic font-light lowercase">{t('home.story.subtitle')}</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 border-l border-gold/20 ps-8">
                                {t('home.story.description')}
                            </p>
                            <p className="text-gray-500 font-light italic text-sm italic">
                                {t('home.story.history')}
                            </p>
                        </motion.div>
                        <div className="aspect-square bg-charcoal/50 border border-white/5 relative group p-4">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" alt="Executive HQ" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 bg-charcoal/20" id="services">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-24">
                        <span className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-6 block">{t('home.sectors.label')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none uppercase">
                            {t('home.sectors.title')} <br />
                            <span className="text-gold italic font-light lowercase">{t('home.sectors.subtitle')}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {t('home.sectors.items', { returnObjects: true }).map((service, index) => (
                            <Link
                                to={`/service/${index}`}
                                key={index}
                                className="group bg-rich-black border border-white/5 hover:border-gold/30 transition-all duration-700 relative overflow-hidden flex flex-col h-[500px]"
                            >
                                <div className="h-2/3 overflow-hidden relative bg-charcoal/20">
                                    <img
                                        src={serviceImages[index]?.url}
                                        alt={service.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";
                                        }}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-transparent opacity-80" />
                                </div>
                                <div className="p-8 pb-12 relative flex-grow flex flex-col justify-end">
                                    <span className="text-gold/30 text-[9px] font-bold tracking-[0.4em] mb-3 block uppercase group-hover:text-gold transition-colors">Tier {index + 1}</span>
                                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider leading-tight">{service.title}</h3>
                                    <p className="text-gray-500 text-xs font-light line-clamp-2 mb-6 group-hover:text-gray-300 transition-colors">{service.desc}</p>

                                    <div className="flex items-center gap-3 text-gold text-[8px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <span>{t('home.story.label')}</span>
                                        <div className="w-6 h-[1px] bg-gold" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Authority */}
            <section className="py-32 bg-rich-black overflow-hidden" id="network">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 block">{t('home.global_authority.label')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tighter leading-none uppercase">
                                {t('home.global_authority.architecture').split(' ')[0]} <br />
                                <span className="text-gold italic font-light lowercase">{t('home.global_authority.architecture').split(' ').slice(1).join(' ')}</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-light leading-relaxed mb-12 border-l border-gold/20 ps-8">
                                {t('home.global_authority.description')}
                            </p>
                            <div className="p-8 border border-white/5 bg-charcoal/30 flex gap-10 items-center">
                                <div className="text-gold text-3xl shrink-0"><i className="fa-solid fa-earth-americas" /></div>
                                <div>
                                    <p className="text-gold text-[10px] uppercase font-bold tracking-widest mb-1">{t('home.global_authority.corridors_title')}</p>
                                    <p className="text-white font-bold tracking-wide">{t('home.global_authority.corridors_desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[16/9] lg:aspect-[4/3] bg-charcoal/10 border border-gold/10 rounded-sm overflow-hidden group">
                            {/* Detailed World Map Background */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000 grayscale brightness-150"
                                style={{
                                    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
                                    backgroundSize: '90%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            />

                            {/* Global Network Dots (representing 200 countries) */}
                            <div className="absolute inset-0 z-0">
                                {[...Array(60)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-[1px] h-[1px] bg-gold/20 rounded-full"
                                        style={{
                                            left: `${10 + Math.random() * 80}%`,
                                            top: `${10 + Math.random() * 80}%`,
                                            boxShadow: '0 0 4px rgba(212,175,55,0.2)'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Strategic Presence Markers */}
                            {[
                                { x: '58.5%', y: '43%' }, // Middle East
                                { x: '58%', y: '50%' },   // Africa North
                                { x: '55%', y: '65%' },   // Africa South
                                { x: '66.5%', y: '42.5%' }, // Pakistan/Region
                                { x: '71.5%', y: '47%' },   // India
                                { x: '80%', y: '40%' },     // East Asia
                                { x: '48%', y: '35%' },     // Europe Central
                                { x: '42%', y: '32%' },     // Europe West
                                { x: '25%', y: '45%' },     // North America
                                { x: '15%', y: '40%' },     // North America West
                                { x: '35%', y: '70%' },     // South America
                                { x: '82%', y: '75%' },     // Oceania
                                { x: '75%', y: '55%' }      // SE Asia
                            ].map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                                    className="absolute flex flex-col items-center group/marker z-10"
                                    style={{ left: p.x, top: p.y }}
                                >
                                    {/* Pulse Effect */}
                                    <div className="relative">
                                        <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_15px_#D4AF37] relative z-20" />
                                        <div className="absolute inset-x-0 inset-y-0 w-1.5 h-1.5 bg-gold rounded-full animate-ping z-10 opacity-75" />
                                        <div className="absolute -inset-2 w-5.5 h-5.5 bg-gold/5 rounded-full z-0 group-hover/marker:bg-gold/20 transition-all duration-500" />
                                    </div>
                                </motion.div>
                            ))}

                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent h-20 w-full animate-scanline -z-0 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-32 bg-charcoal/10" id="contact">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-rich-black border border-gold/10 p-12 md:p-20 relative shadow-2xl overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-gold/10 translate-x-1/2 -translate-y-1/2" />

                        <div className="relative z-10">
                            <span className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-10 block text-center">{t('contact_info.inquiry_protocol')}</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center tracking-tighter uppercase">{t('contact_info.connect_strategically').split(' ')[0]} <span className="text-gold italic font-light lowercase">{t('contact_info.connect_strategically').split(' ').slice(1).join(' ')}</span></h2>

                            <form className="space-y-12" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="group/input relative">
                                        <label className="text-gold/50 text-[9px] uppercase font-bold tracking-widest mb-4 block group-focus-within/input:text-gold transition-colors">{t('service_detail.name')}</label>
                                        <input required name="name" type="text" className="bg-transparent border-b border-white/10 w-full py-3 text-white focus:outline-none focus:border-gold/50 transition-all font-light" />
                                    </div>
                                    <div className="group/input relative">
                                        <label className="text-gold/50 text-[9px] uppercase font-bold tracking-widest mb-4 block group-focus-within/input:text-gold transition-colors">{t('service_detail.email')}</label>
                                        <input required name="email" type="email" className="bg-transparent border-b border-white/10 w-full py-3 text-white focus:outline-none focus:border-gold/50 transition-all font-light" />
                                    </div>
                                </div>
                                <div className="group/input relative">
                                    <label className="text-gold/50 text-[9px] uppercase font-bold tracking-widest mb-4 block group-focus-within/input:text-gold transition-colors">{t('service_detail.brief')}</label>
                                    <textarea required name="message" rows="4" className="bg-transparent border-b border-white/10 w-full py-3 text-white focus:outline-none focus:border-gold/50 transition-all font-light resize-none" />
                                </div>

                                <input type="hidden" name="Inquiry Source" value="General Contact Form" />

                                <button disabled={isSubmitting} className="group relative w-full py-6 bg-gold text-rich-black uppercase font-bold tracking-[0.5em] text-[11px] overflow-hidden transition-all duration-700 hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-gold/20">
                                    <span className="relative z-10 group-hover:text-gold transition-colors duration-700">{isSubmitting ? t('service_detail.processing') : t('contact_info.submit_proposal')}</span>
                                    <div className="absolute inset-0 bg-rich-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                                </button>

                                {isSubmitted && <p className="text-gold text-center font-bold tracking-widest text-xs animate-pulse pt-4">{t('contact_info.transmitted')}</p>}
                                {error && <p className="text-red-500 text-center text-xs pt-4">{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
