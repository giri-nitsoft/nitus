import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { ArrowRight, Check, MapPin, Send } from "lucide-react";
import { Link } from 'react-router-dom';
import SEO from "@/components/SEO";
import LogoMarquee from "../Home2/components/LogoMarquee";
import Footer from "@/components/Footer";

/**
 * HOME PAGE REDESIGN
 * Based on the user's provided layout image.
 * 
 * Features:
 * - Large, bold typography for 'Messaging Services'
 * - Vertical sidebar navigation with multi-colored strips
 * - Premium feel with balanced negative space and subtle animations
 */

const navItems = [
    { id: '01', name: 'WORK', color: 'bg-[#8CA2D6]', path: '#' },
    { id: '02', name: 'ABOUT', color: 'bg-[#9DB2E0]', path: '#about' },
    { id: '03', name: 'TEAM', color: 'bg-[#C9D7F2]', path: '#team' },
    { id: '04', name: 'CONTACT', color: 'bg-[#DDE9F9]', path: '/contact' },
];

const titles = ["Messaging Services", "Brand Licensing & Distribution"];
const licensingImages = [
    "/home/licensing_card.jpg",
    "/home/licensing_card_2.jpg",
    "/home/licensing_card_3.jpg"
];
const rollingTexts = [
    "We connect brands and customers through messaging",
    "We deliver reliable, high-volume messaging",
    "We simplify business communication",
    "We help brands grow in Korea",
    "We turn connection into growth"
];

function RollingTextFader() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % rollingTexts.length);
        }, 2800); // 2.8s interval
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mt-16 md:mt-24 h-24 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute text-center px-4"
                >
                    <span className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] font-bold tracking-tight text-[#1F1F23] leading-none block">
                        {rollingTexts[activeIndex]}
                    </span>
                    <div className="w-12 h-[1px] bg-black/10 mx-auto mt-6" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function OfficeCard({ city, address, image }: { city: string; address: string; image: string }) {
    return (
        <div data-reveal className="group h-[160px] md:h-[220px] [perspective:1000px] w-full">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-[24px] overflow-hidden shadow-sm border border-gray-100">
                    <img src={image} alt={`${city} Office`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-white text-lg md:text-xl font-bold tracking-widest uppercase">{city} OFFICE</h4>
                    </div>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-[24px] bg-[#1F1F23] [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-6 text-center border border-white/10">
                    <MapPin className="text-[#355BE5] w-6 h-6 mb-4" />
                    <p className="text-white/90 text-[13px] md:text-[14px] font-medium leading-relaxed max-w-[240px]">
                        {address}
                    </p>
                </div>
            </div>
        </div>
    );
}

const teamMembers = [
    {
        name: "Jin-sung Lim",
        role: "CEO & Co-Founder",
        initials: "JL",
        focus: "Leads overall strategy and cross-border partnerships between the U.S. and Korea. Builds scalable business models and drives global growth."
    },
    {
        name: "Tracy D'Orta",
        role: "VP Business Development",
        initials: "TD",
        focus: "Identifies American companies and products with high Korean market potential and coordinates U.S.-Korea operations."
    },
    {
        name: "Woo-jin Jang",
        role: "CFO",
        initials: "WJ",
        focus: "Oversees financial planning, budgeting, and performance management. Ensures alignment between financial goals and business execution."
    },
    {
        name: "Vincent Rosso",
        role: "CTO",
        initials: "VR",
        focus: "Leads technological strategy and infrastructure development, ensuring scalable and secure systems to support messaging and distribution operations."
    },
    {
        name: "Tyler Xu",
        role: "Operations Lead",
        initials: "TX",
        focus: "Oversee day-to-day operations, lead hiring and office infrastructure development, and act as a key liaison between the CEO and internal team to ensure efficient execution of company initiatives."
    }
];

function CountUp({ value, duration = 2, decimals = 0, suffix = "" }: { value: number; duration?: number; decimals?: number; suffix?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(0, value, {
            duration,
            ease: [0.16, 1, 0.3, 1], // Premium outward ease
            onUpdate: (latest) => {
                node.textContent = latest.toLocaleString(undefined, {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                }) + suffix;
            },
        });

        return () => controls.stop();
    }, [inView, value, duration, decimals, suffix]);

    return <span ref={nodeRef}>0{suffix}</span>;
}

export default function Re2() {
    const [index, setIndex] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % licensingImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const containerRef = useRef(null);
    const mainRef = useRef<HTMLElement>(null);

    const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
        if (item.name === 'CONTACT') return;
        e.preventDefault();

        const scrollContainer = mainRef.current || document.querySelector('main');
        if (!scrollContainer) return;

        if (item.name === 'WORK') {
            // Scroll to very top of the main container
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (item.name === 'ABOUT') {
            const el = document.getElementById('about');
            if (el) {
                // Ensure the Since 2025 part is visible
                const offset = el.offsetTop - 20; 
                scrollContainer.scrollTo({ top: offset, behavior: 'smooth' });
            }
        } else if (item.name === 'TEAM') {
            const el = document.getElementById('team');
            if (el) {
                scrollContainer.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25,
            rootMargin: "0px 0px -10% 0px"
        });

        const revealElements = document.querySelectorAll('[data-reveal], [data-svg-draw]');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="h-screen bg-white text-[#1F1F23] font-sans overflow-hidden flex flex-col md:flex-row selection:bg-[#8CA2D6]/30">
            <SEO
                title="NIT America | Leading Messaging Services & Market Expansion"
                description="NIT AMERICA helps businesses grow by connecting them to customers through messaging and to new markets through distribution."
            />

            {/* --- LEFT CONTENT AREA --- */}
            <main ref={mainRef} className="flex-1 flex flex-col justify-start px-6 sm:px-12 md:px-24 md:mr-[240px] lg:mr-[330px] pt-4 lg:pt-6 relative z-10 overflow-y-auto">
                <div className="max-w-[1200px] w-full">
                    {/* Rotating Main Title Section */}
                    <div className="mb-6 md:mb-8 lg:mb-10 h-[clamp(2.25rem,9vw,6.3rem)] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={titles[index]}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(1.8rem,6.48vw,5.22rem)] font-bold tracking-tight leading-[1] text-[#111111] whitespace-nowrap origin-bottom"
                            >
                                {titles[index]}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Description Section */}
                    <div className="space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="text-[#8CA2D6] font-bold tracking-[0.25em] uppercase text-sm md:text-xl lg:text-2xl mb-8">
                                Growth Infrastructure
                            </p>
                            <h2 className="text-[clamp(1.58rem,4.5vw,4.05rem)] font-bold leading-[1.05] tracking-tight max-w-[18ch] text-[#111111]">
                                Connecting Businesses to Customers and Brands to New Markets
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6"
                        >
                            <p className="text-[#1F1F23]/50 text-[14.4px] md:text-[18px] lg:text-[21.6px] leading-relaxed max-w-2xl font-medium">
                                NIT AMERICA helps businesses grow by connecting them to customers through messaging and to new markets through distribution.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-[21px] bg-[#111111] text-white px-7 md:px-11 py-[18px] md:py-[25px] rounded-full text-[16.2px] md:text-[18px] font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group shadow-2xl shadow-black/10"
                            >
                                Request Consultation
                                <ArrowRight className="w-[21px] h-[21px] md:w-[29px] md:h-[29px] group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Carousel Arc Section (Official Business Folder) */}
                    <div className="relative w-full pt-12 pb-60 overflow-visible mt-48 mb-0 flex justify-center">
                        
                        {/* THE BUSINESS FOLDER CONTAINER (z-index foundation) */}
                        <div className="relative w-[84%] max-w-[1330px] h-[500px] flex items-center justify-center pt-24 pb-12 overflow-visible">
                            
                            {/* 1. 3D Folder Body (Back Panel & Side Folds) */}
                            <div className="absolute inset-0 bottom-[-80px] bg-[#BC9D70] rounded-[6px] z-0 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] overflow-visible">
                                {/* Material Texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')] opacity-30 mix-blend-multiply" />
                                
                                {/* Realistic Side Gussets (Expanding pocket sides) */}
                                <div className="absolute top-0 left-0 bottom-0 w-24 bg-[#A6895D] origin-top-left skew-y-[-10deg] border-r border-black/5 shadow-inner" />
                                <div className="absolute top-0 right-0 bottom-0 w-24 bg-[#A6895D] origin-top-right skew-y-[10deg] border-l border-black/5 shadow-inner" />

                                {/* Subtle Edge Highlight */}
                                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/20" />
                            </div>

                            {/* 2. THE CARDS (Middle layer - Wrapped in their layout flex) */}
                            <div className="w-full max-w-full xl:max-w-[1600px] mx-auto h-full flex flex-col xl:flex-row items-center justify-center gap-12 md:gap-4 xl:gap-0 relative z-30 pt-0">

                            {/* Left Card (Tilted Left) */}
                            <motion.div
                                initial={{ rotate: 80, y: 300, opacity: 0 }}
                                animate={{ 
                                    rotate: -22, 
                                    y: -240, 
                                    opacity: 1,
                                    transition: { delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }
                                }}
                                whileHover={{ 
                                    scale: 1.04,
                                    rotate: -12,
                                    zIndex: 50,
                                    y: -340,
                                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="group relative w-full max-w-[432px] sm:max-w-[540px] aspect-[4/4.5] origin-bottom xl:origin-bottom-right xl:-mr-48 cursor-pointer overflow-visible"
                            >
                                {/* Realistic Paper Clip (Polished silver with depth) */}
                                <div className="absolute top-[-10px] left-10 z-50 pointer-events-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                                    <svg width="32" height="64" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Main clip body */}
                                        <path d="M18 10V34C18 37.3137 15.3137 40 12 40C8.68629 40 6 37.3137 6 34V10C6 6.13401 9.13401 3 13 3C16.866 3 20 6.13401 20 10V33C20 37.9706 15.9706 42 11 42C6.02944 42 2 37.9706 2 33V14" 
                                            stroke="#A0A0A0" strokeWidth="2.8" strokeLinecap="round" />
                                        {/* Chrome highlighting for 3D effect */}
                                        <path d="M17.5 10V34M6.5 10V34M13.5 3.5C13.5 3.5 17.5 4.5 17.5 10M5.5 10C5.5 10 9.5 4.5 13.5 3.5" 
                                            stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                                    </svg>
                                </div>
                                
                                {/* Fanned Paper Stack (Simulating thick document bundle) */}
                                <div className="absolute inset-0 bg-[#F5F5F5] rounded-sm rotate-[3.5deg] translate-x-4 translate-y-3 shadow-sm border border-black/5" />
                                <div className="absolute inset-0 bg-[#FAFAFA] rounded-sm rotate-[-1.5deg] translate-x-1 translate-y-1 shadow-sm border border-black/5" />

                                {/* Main Paper Sheet with Realistic Texture */}
                                <div className="absolute inset-0 bg-[#Fdfdfd] rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.12),0_5px_15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border border-black/5">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-40 mix-blend-multiply pointer-events-none" />
                                    {/* Top: Video/Media Area */}
                                    <div className="h-[43%] relative overflow-hidden border-b border-gray-100/50">
                                        <video
                                            autoPlay
                                            muted
                                            playsInline
                                            onTimeUpdate={(e) => {
                                                const video = e.currentTarget;
                                                if (video.currentTime >= 6.5) {
                                                    video.currentTime = 0;
                                                    video.play();
                                                }
                                            }}
                                            className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000"
                                        >
                                            <source src="/home/message%20video.mp4" type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                                        <div className="absolute bottom-4 left-6 z-10">
                                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                                                Messaging Services
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Bottom: Text Content Area (Paper Texture) */}
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-start space-y-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] bg-repeat">
                                        <div className="space-y-3">
                                            <p className="text-[#355BE5] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1 opacity-80">Infrastructure</p>
                                            <p className="text-[#1F1F23]/70 text-xs md:text-sm font-bold leading-relaxed">
                                                High-throughput APIs designed for mission-critical notifications and marketing.
                                            </p>
                                        </div>

                                        <ul className="space-y-2.5">
                                            {[
                                                "Global SMS Gateway",
                                                "Verified RCS Business Messaging",
                                                "Two-Factor Authentication (2FA) SDKs"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-[#1F1F23]/80 text-xs md:text-sm font-extrabold">
                                                    <Check className="w-4 h-4 text-[#355BE5] stroke-[3px]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-2">
                                            <div className="inline-flex items-center gap-2 text-[#355BE5] font-black text-xs md:text-sm uppercase tracking-widest border-b-2 border-[#355BE5]/10 hover:border-[#355BE5]/40 pb-1 transaction-colors duration-300">
                                                Learn more
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </motion.div>


                            {/* Right Card (Tilted Right) */}
                            <motion.div
                                initial={{ rotate: 80, y: 300, opacity: 0 }}
                                animate={{ 
                                    rotate: 22, 
                                    y: -240, 
                                    opacity: 1,
                                    transition: { delay: 0.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }
                                }}
                                whileHover={{ 
                                    scale: 1.04,
                                    rotate: 12,
                                    zIndex: 50,
                                    y: -340,
                                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="group relative w-full max-w-[432px] sm:max-w-[540px] aspect-[4/4.5] origin-bottom xl:origin-bottom-left xl:-ml-48 cursor-pointer overflow-visible"
                            >
                                {/* Matching Clip for consistency (Always visible) */}
                                <div className="absolute top-[-10px] left-10 z-50 pointer-events-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                                    <svg width="32" height="64" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 10V34C18 37.3137 15.3137 40 12 40C8.68629 40 6 37.3137 6 34V10C6 6.13401 9.13401 3 13 3C16.866 3 20 6.13401 20 10V33C20 37.9706 15.9706 42 11 42C6.02944 42 2 37.9706 2 33V14" 
                                            stroke="#A0A0A0" strokeWidth="2.8" strokeLinecap="round" />
                                        <path d="M17.5 10V34M6.5 10V34M13.5 3.5C13.5 3.5 17.5 4.5 17.5 10M5.5 10C5.5 10 9.5 4.5 13.5 3.5" 
                                            stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                                    </svg>
                                </div>

                                {/* Fanned Paper Stack */}
                                <div className="absolute inset-0 bg-[#F5F5F5] rounded-sm rotate-[2.5deg] translate-x-4 translate-y-3 shadow-sm border border-black/5" />
                                <div className="absolute inset-0 bg-[#FAFAFA] rounded-sm rotate-[-3.5deg] translate-x-[-2px] translate-y-1 shadow-sm border border-black/5" />

                                {/* Main Paper Sheet with Realistic Texture */}
                                <div className="absolute inset-0 bg-[#Fdfdfd] rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.12),0_5px_15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border border-black/5">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-40 mix-blend-multiply pointer-events-none" />
                                    {/* Top: Image/Slideshow Area */}
                                    <div className="h-[43%] relative overflow-hidden border-b border-gray-100/50">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={licensingImages[imgIndex]}
                                                src={licensingImages[imgIndex]}
                                                alt="Brand Licensing"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 0.95 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                                        <div className="absolute bottom-4 left-6 z-10">
                                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                                                Brand Distribution & Licensing
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Bottom: Text Content Area (Paper Texture) */}
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-start space-y-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] bg-repeat">
                                        <div className="space-y-3">
                                            <p className="text-[#355BE5] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1 opacity-80">Licensing</p>
                                            <p className="text-[#1F1F23]/70 text-xs md:text-sm font-bold leading-relaxed">
                                                End-to-end solutions for entering and scaling within the Korean and US markets.
                                            </p>
                                        </div>

                                        <ul className="space-y-2.5">
                                            {[
                                                "Cross-border IP Licensing",
                                                "Local Market Localization",
                                                "Distribution Channel Management"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-[#1F1F23]/80 text-xs md:text-sm font-extrabold">
                                                    <Check className="w-4 h-4 text-[#355BE5] stroke-[3px]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-2">
                                            <div className="inline-flex items-center gap-2 text-[#355BE5] font-black text-xs md:text-sm uppercase tracking-widest border-b-2 border-[#355BE5]/10 hover:border-[#355BE5]/40 pb-1 transaction-colors duration-300">
                                                Learn more
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3. 3D Folder Front Pocket (Matching the reference image) */}
                        <div className="absolute bottom-[-80px] left-0 right-0 h-[240px] z-40 overflow-visible pointer-events-none">
                            {/* The Front Panel with Rounded Top Corners */}
                            <div className="absolute inset-x-0 bottom-0 top-0 bg-[#C4A478] rounded-t-[20px] shadow-[0_-10px_30px_rgba(0,0,0,0.12)] select-none overflow-hidden pointer-events-auto border-t border-white/30">
                                {/* Material Texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')] opacity-40 mix-blend-multiply" />
                                
                                {/* Top Edge Refinement */}
                                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-b from-white/20 to-transparent" />
                                <div className="absolute top-[4px] left-0 right-0 h-[1px] bg-black/5" />

                                {/* 'OUR SERVICES' Debossed Effect (Refined lighting for '음각') */}
                                <div className="absolute bottom-10 left-16">
                                    <span className="text-[#4A321F]/50 font-[900] text-[24px] md:text-[32px] tracking-[0.3em] uppercase select-none mix-blend-multiply
                                        [text-shadow:0px_1px_1px_rgba(255,255,255,0.3),_-0.5px_-0.5px_0.5px_rgba(0,0,0,0.2)]">
                                        OUR SERVICES
                                    </span>
                                </div>

                                {/* Deep Gusset Shadow */}
                                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/15 to-transparent opacity-60" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- LOGO MARQUEE SECTION --- */}
                <div className="-mx-6 sm:-mx-12 md:-mx-24 overflow-hidden">
                    <LogoMarquee dark={false} />
                </div>

                {/* --- ABOUT SECTION: THE PLATFORM --- */}
                <section id="about" ref={containerRef} className="relative w-full pt-20 md:pt-32 pb-16 md:pb-20 flex flex-col items-center justify-center bg-white">
                    <div className="container max-w-[1200px] px-6 relative">
                        {/* Branding Area (Moved to Top of Section) */}
                        <div className="relative mb-20 text-center">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative inline-block"
                            >
                                <h2 className="text-[9vw] md:text-[112px] lg:text-[145px] font-bold text-[#1F1F23] leading-none tracking-[-0.04em]">
                                    NIT AMERICA
                                </h2>

                                {/* Decorative 'Since 2025' Overlay */}
                                <motion.div 
                                    initial={{ scale: 0, opacity: 0, rotate: 10 }}
                                    whileInView={{ scale: 1, opacity: 1, rotate: -5 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                                    className="absolute -top-8 md:-top-12 lg:-top-16 right-0 translate-x-[12%] flex flex-col items-start min-w-[200px]"
                                >
                                    <span className="text-[#FF4D4D] font-serif italic text-xl md:text-3xl lg:text-4xl whitespace-nowrap opacity-80">Since 2025</span>
                                    {/* Curved Red Arrow (SVG) */}
                                    <svg className="w-10 h-10 md:w-16 md:h-16 mt-1 -ml-4 text-[#FF4D4D] opacity-60" viewBox="0 0 100 100" fill="none">
                                        <path d="M70 20C65 45 40 65 15 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M12 70L15 80L25 78" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Description Text */}
                        <div className="max-w-[800px] mx-auto text-center mb-16">
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 1 }}
                                className="text-lg md:text-2xl text-[#1F1F23]/70 font-medium leading-[1.6] tracking-tight"
                            >
                                NIT AMERICA is a U.S.-based growth infrastructure company built on <br className="hidden md:block" />
                                NITSOFT’s proven messaging foundation. We connect businesses to <br className="hidden md:block" />
                                customers through messaging and help brands expand into new <br className="hidden md:block" />
                                markets through licensing & distribution.
                            </motion.p>
                        </div>

                        {/* --- ROLLING TEXT FADER --- */}
                        <div className="mb-32">
                            <RollingTextFader />
                        </div>

                        {/* Infrastructure Grid (Moved Below Branding) */}
                        <div className="mb-12 md:mb-16">
                            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-24 items-start">
                                {/* LEFT COLUMN - Cards */}
                                <div className="flex flex-col gap-8 md:gap-10 order-2 lg:order-1">
                                    {/* Messaging Channels */}
                                    <div data-reveal data-stagger="1" className="relative overflow-hidden group p-8 md:p-10 rounded-[40px] border border-[#1F1F23]/5 bg-[#1F1F23]/[0.02] hover:bg-[#1F1F23]/[0.04] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col gap-4">
                                        <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -z-0 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                            <img src="/re/message_bubble_3d.png" alt="" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="space-y-3 relative z-10">
                                            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#355BE5]">MESSAGING CHANNELS</p>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F23]">SMS / RCS / WA</h3>
                                            <p className="text-[#1F1F23]/60 text-sm md:text-base leading-relaxed font-medium">
                                                Connect brands with customers through scalable messaging across major channels and direct carrier networks.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Brand Licensing */}
                                    <div data-reveal data-stagger="2" className="relative overflow-hidden group p-8 md:p-10 rounded-[40px] border border-[#1F1F23]/5 bg-[#1F1F23]/[0.02] hover:bg-[#1F1F23]/[0.04] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col gap-4">
                                        <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-44 h-44 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -z-0 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                            <img src="/re/market_entry_3d.png" alt="" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="space-y-3 relative z-10">
                                            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#355BE5]">BRAND LICENSING</p>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F23] uppercase">MARKET ENTRY</h3>
                                            <p className="text-[#1F1F23]/60 text-sm md:text-base leading-relaxed font-medium">
                                                Expand U.S. brands into Korea through licensing, localization, and market-ready execution.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Unified Execution */}
                                    <div data-reveal data-stagger="3" className="relative overflow-hidden group p-8 md:p-10 rounded-[40px] border border-[#1F1F23]/5 bg-[#1F1F23]/[0.02] hover:bg-[#1F1F23]/[0.04] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col gap-4">
                                        <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-44 h-44 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -z-0 group-hover:rotate-180 transition-transform duration-1000 ease-in-out">
                                            <img src="/re/growth_engine_3d.png" alt="" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="space-y-3 relative z-10">
                                            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#355BE5]">UNIFIED EXECUTION</p>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F23] uppercase">1 Growth Engine</h3>
                                            <p className="text-[#1F1F23]/60 text-sm md:text-base leading-relaxed font-medium">
                                                Manage customer communication, brand expansion, and cross-border execution through one connected model.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN - Numbers (Sticky) */}
                                <div className="lg:sticky lg:top-32 flex flex-col gap-8 md:gap-12 items-center lg:items-end order-1 lg:order-2 lg:text-right">
                                    <div data-reveal data-stagger="4" className="flex flex-col items-center lg:items-end space-y-2">
                                        <span className="text-[42px] md:text-[54px] font-bold text-[#355BE5] leading-none tracking-tighter">
                                            <CountUp value={12.4} decimals={1} suffix="M+" />
                                        </span>
                                        <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-[#1F1F23]/60">Messages Delivered / Month</p>
                                    </div>
                                    <div data-reveal data-stagger="5" className="flex flex-col items-center lg:items-end space-y-2 border-t border-[#1F1F23]/5 pt-8 lg:border-none lg:pt-0 w-full lg:w-auto">
                                        <span className="text-[42px] md:text-[54px] font-bold text-[#355BE5] leading-none tracking-tighter">
                                            <CountUp value={1} />
                                        </span>
                                        <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-[#1F1F23]/60">Active Master License</p>
                                    </div>
                                    <div data-reveal data-stagger="6" className="flex flex-col items-center lg:items-end space-y-2 border-t border-[#1F1F23]/5 pt-8 lg:border-none lg:pt-0 w-full lg:w-auto">
                                        <span className="text-[42px] md:text-[54px] font-bold text-[#355BE5] leading-none tracking-tighter">
                                            <CountUp value={10} suffix="+ Years" />
                                        </span>
                                        <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-[#1F1F23]/60">Commerce Execution Experience</p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)", y: 20 }}
                                        whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                        className="w-[280px] md:w-[320px] pt-4 lg:pt-6"
                                    >
                                        <img src="/re/isometric_bars.png" alt="Growth Progress" className="w-full h-auto graph-floating" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 pointer-events-none" />
                </section>

                {/* --- TEAM SECTION (Integrated from /re) --- */}
                <section id="team" className="relative w-full pt-8 md:pt-12 pb-24 md:pb-32 flex flex-col items-center justify-center bg-white text-[#1F1F23]">
                    <div className="container max-w-[1200px] px-6">
                        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12 mb-20">
                            <h2 data-reveal className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tight text-[#1F1F23] leading-tight uppercase">OUR TEAM</h2>
                            <div className="space-y-6 md:space-y-8">
                                <div data-reveal className="text-base md:text-xl text-[#1F1F23]/70 leading-relaxed font-medium mx-auto max-w-3xl">
                                    <p>
                                        We connect businesses to customers through messaging and help brands enter Korea through licensing & distribution. One team, built to execute growth across communication and market expansion.
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                                    {["EXECUTION-FIRST", "MARKET ENTRY READY", "COMPLIANCE BY DEFAULT"].map((principle, idx) => (
                                        <div
                                            key={principle}
                                            data-reveal
                                            style={{ transitionDelay: `${70 * idx}ms` }}
                                            className="px-4 py-2 min-h-[44px] flex items-center border border-[#1F1F23]/10 rounded-full bg-[#1F1F23]/[0.02] text-[11px] font-bold tracking-widest uppercase text-[#1F1F23]/60 shadow-sm"
                                        >
                                            {principle}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* People Grid */}
                        <div className="max-w-5xl mx-auto mb-32">
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                                {teamMembers.map((member, i) => (
                                    <div
                                        key={member.name}
                                        data-reveal
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                        className="group relative"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1F1F23]/[0.04] border border-[#1F1F23]/10 flex items-center justify-center text-xl font-bold text-[#1F1F23] shrink-0 shadow-sm transition-transform group-hover:scale-105">
                                                {member.initials}
                                            </div>
                                            <div className="space-y-2 pt-1 md:pt-2">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#1F1F23] group-hover:underline underline-offset-4 decoration-[#1F1F23]/30">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-[14px] font-bold text-[#355BE5] mt-0.5 tracking-tight uppercase">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[13px] text-[#1F1F23]/50 leading-relaxed max-w-sm">
                                                        {member.focus}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Office Locations */}
                        <div className="pt-20 border-t border-[#1F1F23]/5">
                            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                                <h3 data-reveal className="text-xl md:text-2xl font-bold text-[#1F1F23] uppercase tracking-tight">Global Presence</h3>
                                <p data-reveal className="text-[#1F1F23]/60 text-sm md:text-base leading-relaxed font-medium">
                                    Operating from two core hubs to bridge the gap between U.S. innovation and Korean market execution.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                                <OfficeCard
                                    city="IRVINE"
                                    address="15375 Barranca Pkwy Ste B-203 Irvine CA 92618"
                                    image="/home/irvine_office.png"
                                />
                                <OfficeCard
                                    city="SEOUL"
                                    address="15F, 220 Dosan-Daero, Gangnam-gu, Seoul"
                                    image="/home/seoul_office.png"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* --- FINAL CTA SECTION --- */}
            <section className="-mx-6 sm:-mx-12 md:-mx-24 bg-[#1F1F23] text-white py-20 md:py-28 flex flex-col items-center justify-center text-center px-6">
                <div className="space-y-10 max-w-4xl mx-auto flex flex-col items-center">
                    <h2 data-reveal className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight leading-tight">
                        Connecting customers, markets, and growth—together.
                    </h2>

                    <Link
                        to="/contact"
                        data-reveal
                        style={{ transitionDelay: '120ms' }}
                        className="inline-flex items-center justify-center gap-2 h-14 min-w-[240px] px-10 rounded-full bg-white text-[#111111] text-sm font-bold tracking-widest uppercase hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                    >
                        <Send className="w-4 h-4" />
                        Let’s Build Together
                    </Link>
                </div>
            </section>

            <div className="-mx-6 sm:-mx-12 md:-mx-24">
                <Footer />
            </div>

            {/* Decorative background element (Optional, for that premium touch) */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.02]">
                    <div className="absolute top-[10%] left-[5%] text-[20rem] font-bold select-none rotate-[-5deg]">NIT</div>
                </div>
            </main>

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

    {/* Center Logo - Clickable to Home */ }
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
                </div >

        {/* Bottom Interactive Navigation Strips */ }
        < nav className = "flex flex-[1.2]" >
        {
            navItems.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1 + (index * 0.1),
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
            ))
        }
                </nav >
            </aside >

        {/* --- MOBILE NAVIGATION --- */ }
        < div className = "md:hidden fixed bottom-0 left-0 w-full h-20 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around px-2 z-50" >
        {
            navItems.map((item) => (
                <Link
                    key={item.id}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className="flex flex-col items-center gap-1 group"
                >
                    <div className={`w-8 h-1 rounded-full ${item.color} opacity-40 group-hover:opacity-100 transition-all`} />
                    <span className="text-[9px] font-black text-[#1F1F23] uppercase tracking-tighter">{item.name}</span>
                </Link>
            ))
        }
            </div >
        </div >
    );
}
