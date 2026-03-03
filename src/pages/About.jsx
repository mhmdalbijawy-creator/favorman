import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-rich-black min-h-screen pt-32 pb-24 overflow-hidden">
            <section className="container mx-auto px-6 mb-32 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-0 right-0 w-2/3 h-full bg-gold/5 -skew-x-12 translate-x-1/3 blur-3xl p-6 pointer-events-none"
                />

                <div className="max-w-4xl relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gold uppercase tracking-[0.6em] text-xs font-bold mb-6 block"
                    >
                        {t('about.hero.label')}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-12 uppercase tracking-tighter leading-none"
                    >
                        {t('about.hero.title')} <br />
                        <span className="text-gold italic font-light lowercase">{t('about.hero.subtitle1')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-2xl text-gray-400 font-light leading-relaxed max-w-3xl"
                    >
                        {t('about.hero.description')}
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter leading-none">{t('about.legacy.title')}</h2>
                        <p className="text-gray-500 leading-relaxed mb-6">{t('about.legacy.description1')}</p>
                        <p className="text-gray-500 leading-relaxed">{t('about.legacy.description2')}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-8 border border-white/5 bg-charcoal group hover:border-gold/30 transition-all duration-500"
                        >
                            <h3 className="text-gold font-serif text-2xl mb-4 group-hover:translate-x-2 transition-transform">{t('about.pillars.vision.title')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t('about.pillars.vision.desc')}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="p-8 border border-white/5 bg-charcoal group hover:border-gold/30 transition-all duration-500"
                        >
                            <h3 className="text-gold font-serif text-2xl mb-4 group-hover:translate-x-2 transition-transform">{t('about.pillars.values.title')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t('about.pillars.values.desc')}</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
