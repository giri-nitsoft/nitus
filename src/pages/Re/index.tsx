import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants, useInView, animate, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, MapPin, Send } from "lucide-react";
import { Link } from 'react-router-dom';
import Home3Canvas from "../Home2/components/Home3Canvas";
import LogoMarquee from "../Home2/components/LogoMarquee";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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

function OfficeCard({ city, address, image }: { city: string; address: string; image: string }) {
    return (
        <div data-reveal className="group h-[160px] md:h-[220px] [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-[24px] overflow-hidden">
                    <img src={image} alt={`${city} Office`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
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

export default function Re() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ["/home/licensing_card.jpg", "/home/licensing_card_2.jpg", "/home/licensing_card_3.jpg"];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000); // 2초 노출 + 2초 여유 (페이드 포함)
        return () => clearInterval(timer);
    }, []);
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


    const { scrollY } = useScroll();



    const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const textY = useTransform(scrollY, [0, 200], [0, -50]);




    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <div className="min-h-[200vh] bg-[#111111] text-white font-sans selection:bg-accent selection:text-accent-foreground">
            <SEO
                title="NIT America | Advanced Infrastructure"
                description="Scaling messaging infrastructure and launching brands in Korea with precision."
            />

            <Navbar dark={true} />


            {/* Hero Section Container */}
            <div className="relative">
                {/* Hero Section */}
                <section className="relative min-h-screen py-24 md:py-32 flex flex-col justify-center items-center px-6 sm:px-8 md:px-24 overflow-hidden">
                    {/* Canvas Background */}
                    <Home3Canvas />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ opacity: textOpacity, y: textY }}
                        className="w-full max-w-[1400px] px-4 text-center relative z-10 flex flex-col items-center gap-8 md:gap-12"
                    >
                        <motion.div variants={itemVariants}>
                            <p className="text-[#355BE5] text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
                                Growth Infrastructure
                            </p>
                            <h1 className="text-[1.8rem] sm:text-[2.43rem] md:text-[3.03rem] lg:text-[3.6rem] xl:text-[4.05rem] font-bold tracking-tight text-white leading-[1.1]">
                                Connecting Businesses to Customers <br />
                                and Brands to New Markets
                            </h1>
                            <p className="mt-8 text-white/50 text-[12.6px] sm:text-[14.4px] md:text-[16.2px] font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
                                NIT AMERICA helps businesses grow by connecting them to customers through messaging and to new markets through brand licensing.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="pt-2 sm:pt-4"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-[7px] sm:gap-[11px] text-[12.6px] sm:text-[14.4px] md:text-[16.2px] font-bold uppercase tracking-wider text-white hover:text-[#355BE5] transition-all duration-300 group px-7 sm:px-9 py-[14px] sm:py-[18px] border border-white/20 rounded-full hover:border-[#355BE5]/50 bg-white/5 hover:bg-white/10 backdrop-blur-md"
                            >
                                REQUEST CONSULTATION <ArrowRight className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </div>

            {/* Showcase Cards - Overlapping the Hero Section */}
            <section className="w-full relative z-20 pb-16 md:pb-24 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 flex flex-wrap xl:flex-nowrap justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-24 px-4 pointer-events-none">
                {/* Left Card: Messaging Services */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#18181A] hover:bg-[#222225] p-4 sm:p-5 md:p-6 lg:p-8 rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 w-full max-w-[340px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[700px] transform -rotate-[4deg] origin-bottom hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 ease-out pointer-events-auto"
                >
                    <div className="bg-[#050505] w-full aspect-[2/1] rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                        <video
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            onTimeUpdate={(e) => {
                                const video = e.currentTarget;
                                // Increase the threshold even further to ensure no black frames are seen at the loop point
                                if (video.currentTime >= video.duration - 0.7) {
                                    video.currentTime = 0.1; // Skip the very beginning on reset too
                                    video.play();
                                }
                            }}
                            onEnded={(e) => {
                                e.currentTarget.currentTime = 0.1;
                                e.currentTarget.play();
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out bg-transparent"
                        >
                            <source src="/home/message%20video.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                    </div>
                    <div className="pt-4 pb-2 px-2 sm:pt-6 sm:pb-3 sm:px-3 lg:pt-8 lg:pb-4 lg:px-4 text-left space-y-4 md:space-y-6">
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-[#E2E2E2] text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight">
                                Messaging Infrastructure
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-[90%]">
                                High-throughput APIs designed for mission-critical notifications and marketing.
                            </p>
                        </div>

                        <ul className="space-y-2 md:space-y-3 pt-2">
                            {[
                                "Global SMS Gateway",
                                "Verified RCS Business Messaging",
                                "Two-Factor Authentication (2FA) SDKs"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80 text-xs sm:text-sm md:text-base font-bold">
                                    <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#355BE5]/20 flex items-center justify-center">
                                        <Check className="w-[10px] h-[10px] md:w-3 md:h-3 text-[#355BE5] stroke-[3px]" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4 md:pt-6">
                            <Link to="/messaging" className="inline-flex items-center gap-2 text-[#355BE5] text-sm md:text-base font-bold hover:gap-4 transition-all duration-300">
                                Learn more <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right Card: Brand Licensing */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#18181A] hover:bg-[#222225] p-4 sm:p-5 md:p-6 lg:p-8 rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 w-full max-w-[340px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[700px] transform rotate-[4deg] origin-bottom hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 ease-out pointer-events-auto"
                >
                    <div className="bg-[#050505] w-full aspect-[2/1] rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={images[currentImage]}
                                src={images[currentImage]}
                                alt="Brand Licensing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
                    </div>
                    <div className="pt-4 pb-2 px-2 sm:pt-6 sm:pb-3 sm:px-3 lg:pt-8 lg:pb-4 lg:px-4 text-left space-y-4 md:space-y-6">
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-[#E2E2E2] text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight">
                                Brand Licensing
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-[90%]">
                                End-to-end solutions for entering and scaling within the Korean and US markets.
                            </p>
                        </div>

                        <ul className="space-y-2 md:space-y-3 pt-2">
                            {[
                                "Cross-border IP Licensing",
                                "Local Market Localization",
                                "Distribution Channel Management"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80 text-xs sm:text-sm md:text-base font-bold">
                                    <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#355BE5]/20 flex items-center justify-center">
                                        <Check className="w-[10px] h-[10px] md:w-3 md:h-3 text-[#355BE5] stroke-[3px]" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4 md:pt-6">
                            <Link to="/licensing" className="inline-flex items-center gap-2 text-[#355BE5] text-sm md:text-base font-bold hover:gap-4 transition-all duration-300">
                                Learn more <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>




            {/* Logo Marquee Section */}
            <LogoMarquee />

            {/* SECTION B - Original Growth Infrastructure */}
            <section id="infrastructure" className="section-padding bg-[#1A1A1A] relative z-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-16 md:mb-24 text-center">
                        <h2 data-reveal className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tight text-white leading-tight uppercase">
                            HOW WE BUILD GROWTH INFRASTRUCTURE
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-24 items-start">
                        {/* LEFT COLUMN - Cards */}
                        <div className="flex flex-col gap-8 md:gap-10 order-2 lg:order-1">
                            {/* Messaging Channels */}
                            <div data-reveal data-stagger="1" className="relative overflow-hidden group p-8 md:p-10 rounded-[40px] border border-white/5 bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col gap-4">
                                {/* Background 3D Bubble Icon */}
                                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-0 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <img 
                                        src="/re/message_bubble_3d.png" 
                                        alt="" 
                                        className="w-full h-full object-contain" 
                                    />
                                </div>
                                
                                <div className="space-y-3 relative z-10">
                                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#355BE5]">MESSAGING CHANNELS</p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">SMS / RCS / WA</h3>
                                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
                                        Connect brands with customers through scalable messaging across major channels and direct carrier networks.
                                    </p>
                                </div>
                            </div>

                            {/* Brand Licensing */}
                            <div data-reveal data-stagger="2" className="relative overflow-hidden group p-8 md:p-10 rounded-[40px] border border-white/5 bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col gap-4">
                                {/* Background 3D Entry Icon */}
                                <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-44 h-44 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-0 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <img 
                                        src="/re/market_entry_3d.png" 
                                        alt="" 
                                        className="w-full h-full object-contain" 
                                    />
                                </div>
                                
                                <div className="space-y-3 relative z-10">
                                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#355BE5]">BRAND LICENSING</p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">MARKET ENTRY</h3>
                                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
                                        Expand U.S. brands into Korea through licensing, localization, and market-ready execution.
                                    </p>
                                </div>
                            </div>

                            {/* Unified Execution */}
                            <div data-reveal data-stagger="3" className="relative overflow-hidden group p-8 md:p-10 rounded-[40px] border border-white/5 bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col gap-4">
                                {/* Background 3D Engine Icon */}
                                <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-44 h-44 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-0 group-hover:rotate-180 transition-transform duration-1000 ease-in-out">
                                    <img 
                                        src="/re/growth_engine_3d.png" 
                                        alt="" 
                                        className="w-full h-full object-contain" 
                                    />
                                </div>
                                
                                <div className="space-y-3 relative z-10">
                                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#355BE5]">UNIFIED EXECUTION</p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">1 Growth Engine</h3>
                                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
                                        Manage customer communication, brand expansion, and cross-border execution through one connected model.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Numbers (Sticky) */}
                        <div className="lg:sticky lg:top-32 flex flex-col gap-8 md:gap-12 items-center lg:items-end order-1 lg:order-2 lg:text-right">
                            {/* Metric 1 */}
                            <div data-reveal data-stagger="4" className="flex flex-col items-center lg:items-end space-y-2">
                                <span className="text-[42px] md:text-[54px] font-bold text-[#355BE5] leading-none tracking-tighter">
                                    <CountUp value={12.4} decimals={1} suffix="M+" />
                                </span>
                                <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-white/90">Messages Delivered / Month</p>
                            </div>

                            {/* Metric 2 */}
                            <div data-reveal data-stagger="5" className="flex flex-col items-center lg:items-end space-y-2 border-t border-white/5 pt-8 lg:border-none lg:pt-0 w-full lg:w-auto">
                                <span className="text-[42px] md:text-[54px] font-bold text-[#355BE5] leading-none tracking-tighter">
                                    <CountUp value={1} />
                                </span>
                                <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-white/90">Active Master License</p>
                            </div>

                            {/* Metric 3 */}
                            <div data-reveal data-stagger="6" className="flex flex-col items-center lg:items-end space-y-2 border-t border-white/5 pt-8 lg:border-none lg:pt-0 w-full lg:w-auto">
                                <span className="text-[42px] md:text-[54px] font-bold text-[#355BE5] leading-none tracking-tighter">
                                    <CountUp value={10} suffix="+ Years" />
                                </span>
                                <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-white/90">Commerce Execution Experience</p>
                            </div>

                            {/* Animated Isometric Chart */}
                            <motion.div
                                initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)", y: 20 }}
                                whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                className="w-[280px] md:w-[320px] pt-4 lg:pt-6"
                            >
                                <img 
                                    src="/re/isometric_bars.png" 
                                    alt="Growth Progress" 
                                    className="w-full h-auto graph-floating"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION D - Our Team & People Preview */}
            <section id="team" className="section-padding bg-[#1A1A1A] relative z-10">
                <div className="container mx-auto max-w-5xl space-y-20">
                    {/* Brand Identity */}
                    <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
                        <h2 data-reveal className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tight text-white leading-tight uppercase">OUR TEAM</h2>
                        <div className="space-y-6 md:space-y-8">
                            <div data-reveal className="text-base md:text-xl text-white/80 leading-relaxed font-medium mx-auto max-w-none">
                                <p>
                                    We connect businesses to customers through messaging and help brands enter Korea through brand licensing. One team, built to execute growth across communication and market expansion.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                                {["EXECUTION-FIRST", "MARKET ENTRY READY", "COMPLIANCE BY DEFAULT"].map((principle, idx) => (
                                    <div
                                        key={principle}
                                        data-reveal
                                        style={{ transitionDelay: `${70 * idx}ms` }}
                                        className="px-4 py-2 min-h-[44px] flex items-center border border-white/20 rounded-full bg-white/5 text-[11px] font-bold tracking-widest uppercase text-white"
                                    >
                                        {principle}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* People Preview - Unified List (Synced with /team) */}
                    <div className="space-y-12">
                        <div className="space-y-1 text-center">
                            <p data-reveal data-stagger="1" className="text-white/60 text-sm font-bold tracking-tight">
                                Meet the team behind the execution.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                                {[
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
                                        name: "Chae-woon Park (Ray)",
                                        role: "Managing Director",
                                        initials: "CP",
                                        focus: "Leads strategic business development by sourcing and securing high-potential brands. Drives market analysis and partnership execution to expand business opportunities."
                                    },
                                    {
                                        name: "Tyler Xu",
                                        role: "Operations Lead",
                                        initials: "TX",
                                        focus: "Oversee day-to-day operations, lead hiring and office infrastructure development, and act as a key liaison between the CEO and internal team to ensure efficient execution of company initiatives."
                                    }
                                ].map((member, i) => (
                                    <div
                                        key={member.name}
                                        data-reveal
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                        className="group relative"
                                    >
                                        <div className="flex items-start gap-6">
                                            {/* Avatar placeholder with initials */}
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-sm transition-transform group-hover:scale-105">
                                                {member.initials}
                                            </div>
                                            <div className="space-y-2 pt-1 md:pt-2">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:underline underline-offset-4 decoration-white/30">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-[14px] font-bold text-[#3B82F6] mt-0.5 tracking-tight">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[13px] text-white/50 leading-relaxed max-w-sm">
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
                        <div id="about" className="pt-20 border-t border-white/10">
                            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                                <h3 data-reveal className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">About NIT AMERICA</h3>
                                <p data-reveal className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
                                    NIT AMERICA is a U.S.-based growth infrastructure company built on NITSOFT’s proven messaging foundation. We connect businesses to customers through messaging and help brands expand into new markets through brand licensing.
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
                </div>
            </section>

            {/* SECTION E - Final CTA */}
            < section className="w-full bg-[#1F1F23] text-[#F7F9FD] py-20 md:py-32 relative z-10 flex flex-col items-center justify-center text-center px-6" >
                <div className="space-y-10 max-w-7xl mx-auto flex flex-col items-center">
                    <h2 data-reveal className="text-[clamp(1.4175rem,4.05vw,3.078rem)] font-bold tracking-tight leading-tight">
                        Connecting customers, markets, and growth—together.
                    </h2>

                    <Link
                        to="/contact"
                        data-reveal
                        style={{ transitionDelay: '120ms' }}
                        className="inline-flex items-center justify-center gap-2 h-12 min-w-[200px] px-8 rounded-[24px] bg-[#F7F9FD] text-[#1F1F23] text-sm font-bold tracking-wide hover:-translate-y-[1px] hover:bg-white transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                    >
                        <Send className="w-4 h-4" />
                        Let’s Build Together
                    </Link>
                </div>
            </section >

            <Footer />
        </div >
    );
}
