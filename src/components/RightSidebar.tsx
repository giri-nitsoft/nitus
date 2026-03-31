import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const navItems = [
    { id: '01', name: 'WORK', color: 'bg-[#8CA2D6]', path: '/' },
    { id: '02', name: 'ABOUT', color: 'bg-[#9DB2E0]', path: '/#about' },
    { id: '03', name: 'TEAM', color: 'bg-[#C9D7F2]', path: '/#team' },
    { id: '04', name: 'CONTACT', color: 'bg-[#DDE9F9]', path: '/contact' },
];

interface RightSidebarProps {
    mainRef?: React.RefObject<HTMLElement>;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ mainRef }) => {
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
        if (item.name === 'CONTACT') return;
        
        // If we are on the homepage, we want smooth scroll
        if (location.pathname === '/') {
            e.preventDefault();
            const scrollContainer = mainRef?.current || document.querySelector('main');
            if (!scrollContainer) return;

            if (item.name === 'WORK') {
                scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (item.name === 'ABOUT') {
                const el = document.getElementById('about');
                if (el) scrollContainer.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
            } else if (item.name === 'TEAM') {
                const el = document.getElementById('team');
                if (el) scrollContainer.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* --- RIGHT SIDEBAR NAVIGATION (Fixed GNB) --- */}
            <aside className="hidden md:flex fixed right-0 top-0 w-[240px] lg:w-[330px] h-screen flex-col z-50 border-l border-gray-100 bg-white">
                {/* Top Sidebar Area (Two Rectangular Boxes for Services) */}
                <div className="flex-[0.8] flex relative">
                    <Link
                        to="/messaging"
                        className="flex-1 bg-[#A1B3E0] flex items-end justify-end pb-12 border-r border-white/10 pr-4 group cursor-pointer hover:flex-[1.2] transition-all duration-700"
                    >
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            className="[writing-mode:vertical-rl] rotate-180 text-white font-bold uppercase tracking-[0.25em] text-lg lg:text-2xl"
                        >
                            Messaging<br />Service
                        </motion.div>
                    </Link>

                    {/* Center Logo - Clickable to Home */}
                    <Link 
                        to="/" 
                        className="absolute top-6 lg:top-10 left-1/2 -translate-x-1/2 z-30 group"
                    >
                        <motion.img 
                            src="/home/logo_n.png" 
                            alt="NIT America Logo" 
                            className="w-12 h-12 md:w-16 md:h-16 lg:w-22 lg:h-22 object-contain filter drop-shadow-xl"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                            whileHover={{ scale: 1.1 }}
                        />
                    </Link>

                    <Link
                        to="/licensing"
                        className="flex-1 bg-[#BCC9EA] flex items-end justify-end pb-12 pr-0 group cursor-pointer hover:flex-[1.2] transition-all duration-700"
                    >
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="[writing-mode:vertical-rl] rotate-180 text-white font-bold uppercase tracking-[0.25em] text-lg lg:text-2xl"
                        >
                            Brand Licensing<br />& Distribution
                        </motion.div>
                    </Link>
                </div>

                {/* Bottom Interactive Navigation Strips */}
                <nav className="flex flex-[1.2]">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5 + (index * 0.1),
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="flex-1"
                        >
                            <Link
                                to={item.path}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`${item.color} h-full w-full group cursor-pointer flex items-end justify-end pb-16 lg:pb-20 pr-0 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[2.5] hover:brightness-105`}
                            >
                                {/* Hover Gradient Layer */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="[writing-mode:vertical-rl] rotate-180 text-white font-bold uppercase tracking-[0.4em] text-lg lg:text-2xl whitespace-nowrap transition-all duration-500 group-hover:-translate-y-8 flex items-center gap-4">
                                    <span className="opacity-40 text-sm font-medium">({item.id})</span>
                                    <span>{item.name}</span>
                                </div>

                                {/* Hover Underline Effect */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-0 bg-white group-hover:h-8 transition-all duration-500 rounded-full" />
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </aside>

            {/* --- MOBILE NAVIGATION --- */}
            <div className="md:hidden fixed bottom-0 left-0 w-full h-[84px] bg-white/95 backdrop-blur-2xl border-t border-gray-100/50 flex items-center justify-around px-4 z-[9999] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        onClick={(e) => handleNavClick(e, item)}
                        className="flex flex-col items-center gap-2 group flex-1"
                    >
                        <motion.div 
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-1.5 rounded-full ${item.color} transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:w-14`} 
                        />
                        <span className="text-[11px] font-black text-[#1F1F23]/80 uppercase tracking-widest transition-colors group-hover:text-[#1F1F23]">{item.name}</span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default RightSidebar;
