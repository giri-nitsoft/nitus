import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Home as HomeIcon, MessageSquare, Briefcase, Mail } from 'lucide-react';

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                            Brand Licensing
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

            {/* --- MOBILE BOTTOM GNB --- */}
            <div className="md:hidden fixed bottom-0 left-0 w-full h-[84px] bg-white/95 backdrop-blur-2xl border-t border-gray-100/50 flex items-center justify-around px-4 z-[9999] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                {navItems.filter(item => item.name !== 'CONTACT').map((item) => (
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

                {/* --- HAMBURGER TOGGLE BUTTON --- */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="flex flex-col items-center gap-2 group flex-1"
                >
                    <motion.div 
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-1.5 rounded-full bg-[#111111] transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:w-14"
                    />
                    <span className="text-[11px] font-black text-[#111111]/80 uppercase tracking-widest">MENU</span>
                </button>
            </div>

            {/* --- MOBILE FULL SCREEN MENU OVERLAY --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-[#Fdfdfd] z-[10000] flex flex-col p-8 md:hidden"
                    >
                        {/* Header within Menu */}
                        <div className="flex justify-between items-center mb-16">
                            <img src="/home/logo_n.png" alt="Logo" className="w-12 h-12 object-contain" />
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="p-4 bg-gray-100 rounded-full active:scale-95 transition-transform"
                            >
                                <X className="w-6 h-6 text-[#111111]" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col gap-8">
                            {[
                                { name: 'Home', path: '/', icon: <HomeIcon /> },
                                { name: 'Messaging Services', path: '/messaging', icon: <MessageSquare /> },
                                { name: 'Brand Licensing', path: '/licensing', icon: <Briefcase /> },
                                { name: 'Contact', path: '/contact', icon: <Mail /> },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between group py-2"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#8CA2D6]/10 group-hover:text-[#8CA2D6] transition-all">
                                                {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                                            </div>
                                            <span className="text-xl md:text-2xl font-bold text-[#111111] leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                                {item.name}
                                            </span>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-[#111111] transition-colors" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer in Menu */}
                        <div className="mt-auto pt-10 border-t border-gray-100 space-y-8">
                            <div className="flex flex-col gap-4">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Get in touch</p>
                                <p className="text-xl font-bold text-[#111111]">info@nitamerica.com</p>
                            </div>
                            <div className="flex gap-6">
                                <Link to="/privacy" onClick={() => setIsMenuOpen(false)} className="text-[10px] text-[#111111]/40 uppercase tracking-widest font-bold">Privacy Policy</Link>
                                <Link to="/terms" onClick={() => setIsMenuOpen(false)} className="text-[10px] text-[#111111]/40 uppercase tracking-widest font-bold">SMS Terms</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default RightSidebar;
