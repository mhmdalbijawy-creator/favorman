import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    const links = [
        { name: t('navbar.home'), path: '/' },
        { name: t('navbar.documents'), path: '/documentation' },
        { name: t('navbar.join_us'), path: '/join-us' },
        { name: t('navbar.contact'), path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-rich-black/95 backdrop-blur-xl border-b border-gold/10 py-4' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-6 group relative">
                    <Logo className="w-16 h-16 md:w-20 md:h-20" />
                    <div className="flex flex-col relative overflow-hidden">
                        <motion.div
                            initial="initial"
                            whileHover="hover"
                            className="relative"
                            dir="ltr"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-white leading-none font-serif flex overflow-hidden">
                                {"FAVOURMAN".split("").map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                                <motion.span
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-gold"
                                >
                                    .
                                </motion.span>
                            </h2>
                            {/* Golden Shimmer Effect on Name */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 0.5, x: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-[9px] uppercase tracking-[0.7em] text-gold mt-3 font-bold group-hover:opacity-100 group-hover:text-white transition-all duration-700"
                        >
                            International Expertise
                        </motion.span>
                    </div>
                </Link>

                <div className="hidden lg:flex gap-12 items-center">
                    <div className="flex gap-10 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[11px] uppercase tracking-[0.3em] font-bold hover:text-gold transition-all relative group ${location.pathname === link.path ? 'text-gold' : 'text-gray-300'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-700 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                            </Link>
                        ))}
                    </div>
                    <button onClick={toggleLanguage} className="bg-gold/5 border border-gold/20 px-6 py-2 hover:bg-gold hover:text-rich-black transition-all text-[10px] font-bold tracking-widest text-gold uppercase rounded-sm">
                        {i18n.language === 'en' ? 'العربية' : 'English'}
                    </button>
                </div>

                <div className="flex items-center gap-6 lg:hidden">
                    <button onClick={toggleLanguage} className="text-gold font-bold text-[10px] uppercase border border-gold/20 px-3 py-1 rounded">
                        {i18n.language === 'en' ? 'AR' : 'EN'}
                    </button>
                    <button className="text-gold text-3xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-rich-black/98 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center"
                    >
                        <button className="absolute top-10 right-10 text-gold text-4xl" onClick={() => setIsOpen(false)}>
                            <FiX />
                        </button>
                        <div className="flex flex-col items-center space-y-10">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-2xl font-bold uppercase tracking-[0.4em] text-white hover:text-gold transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
