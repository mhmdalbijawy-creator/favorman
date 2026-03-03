import { motion } from 'framer-motion';

const Logo = ({ className = "w-16 h-16" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={`${className} flex items-center justify-center`}
        >
            <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                <g transform="translate(100, 75)">
                    {/* 
                      Abstract Phoenix Logo
                      Symmetrical, layered feathers, spreading UP and OUT.
                      Color: Solid Gold
                    */}

                    <defs>
                        <filter id="goldGlow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    <g filter="url(#goldGlow)">
                        {/* Central Core */}
                        <circle cx="0" cy="0" r="8" fill="#D4AF37" />

                        {/* RIGHT WING - Segmented Fan Design */}
                        <g fill="#D4AF37">
                            <path d="M5,-2 L45,-35 Q50,-33 48,-28 L8,0 Z" />
                            <path d="M7,2 L55,-20 Q60,-18 58,-12 L10,5 Z" />
                            <path d="M8,6 L60,0 Q62,5 60,10 L10,12 Z" />
                            <path d="M7,12 L55,25 Q58,30 52,32 L9,18 Z" />
                            <path d="M5,18 L40,45 Q42,50 36,52 L6,25 Z" />
                            <path d="M3,22 L20,55 Q21,60 15,62 L2,30 Z" />
                            <path d="M0,24 L0,65 Q-5,67 -5,60 L-1,30 Z" transform="rotate(-15, 0, 0)" />
                        </g>

                        {/* LEFT WING - Mirrored */}
                        <g fill="#D4AF37" transform="scale(-1, 1)">
                            <path d="M5,-2 L45,-35 Q50,-33 48,-28 L8,0 Z" />
                            <path d="M7,2 L55,-20 Q60,-18 58,-12 L10,5 Z" />
                            <path d="M8,6 L60,0 Q62,5 60,10 L10,12 Z" />
                            <path d="M7,12 L55,25 Q58,30 52,32 L9,18 Z" />
                            <path d="M5,18 L40,45 Q42,50 36,52 L6,25 Z" />
                            <path d="M3,22 L20,55 Q21,60 15,62 L2,30 Z" />
                            <path d="M0,24 L0,65 Q-5,67 -5,60 L-1,30 Z" transform="rotate(-15, 0, 0)" />
                        </g>
                    </g>
                </g>
            </svg>
        </motion.div>
    );
};

export default Logo;
