import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants, useInView, animate } from "framer-motion";
import { Asterisk, ArrowRight, Smartphone, LayoutGrid, ShieldCheck, Code2, Store, Server, Globe, Check, MapPin, Send } from "lucide-react";
import { Link } from 'react-router-dom';
import GlobeEffect from "../Home2/components/GlobeEffect";
import LogoMarquee from "../Home2/components/LogoMarquee";
import TypingIndicator from "../Home/components/TypingIndicator";
import SEO from "@/components/SEO";
import { cn } from "@/lib/utils";

function CountUp({ value, duration = 2, decimals = 0, suffix = "" }: { value: number; duration?: number; decimals?: number; suffix?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(0, value, {
            duration,
            ease: [0.16, 1, 0.3, 1],
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

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
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
    const logoScale = useTransform(scrollY, [0, 250], isMobile ? [1, 0.75] : [1, 0.45]);
    const logoY = useTransform(scrollY, [0, 250], [0, 0]);
    const logoX = useTransform(scrollY, [0, 250], [0, 0]);



    const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const textY = useTransform(scrollY, [0, 200], [0, -50]);

    const headerHeight = useTransform(scrollY, [0, 250], ["64px", "64px"]);

    const orbOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    const globeOpacity = useTransform(scrollY, [0, 300], [0.3, 0]);

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
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
            <SEO
                title="NIT America | Advanced Infrastructure"
                description="Scaling messaging infrastructure and launching brands in Korea with precision."
            />

            {/* Floating Scalable Logo */}
            <motion.header
                style={{ height: headerHeight }}
                className="fixed top-[10px] left-0 w-full z-[51] pointer-events-none flex items-center"
            >
                <div className={cn(
                    "container mx-auto px-6 h-full flex justify-between",
                    isMobile ? "items-start pt-[20px]" : "items-center"
                )}>
                    <motion.div
                        style={{
                            scale: logoScale,
                            x: logoX,
                            y: logoY,
                            originX: 0,
                            originY: isMobile ? 0 : 0.5
                        }}
                        className="pointer-events-auto inline-block"
                    >
                        <Link to="/" className="relative flex flex-col items-start">
                            <div className="w-[150px] sm:w-[250px] md:w-[350px] lg:w-[450px] flex items-center justify-start">
                                <img
                                    src="/home/homebtn.png"
                                    alt="NIT America"
                                    className="max-w-full h-auto object-contain"
                                />
                            </div>
                            <motion.span
                                style={{ opacity: useTransform(scrollY, [0, 150], [1, 0]) }}
                                className="absolute left-2 sm:left-4 top-[110%] sm:top-full text-accent font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-sm whitespace-nowrap"
                            >
                                Nexus of Innovation & Trade
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </motion.header>

            {/* Hero Section Container */}
            <div className="relative">
                {/* Hero Section */}
                <section className="relative h-screen flex flex-col justify-end items-center md:items-end px-6 sm:px-8 md:px-24 pb-32 sm:pb-40 md:pb-32 overflow-hidden">
                    {/* Globe Background Animation */}
                    <motion.div
                        style={{ opacity: globeOpacity }}
                        className="absolute top-[45%] md:top-[50%] left-[8vw] md:left-[15vw] -translate-y-1/2 z-0 pointer-events-none"
                    >
                        <div className="w-[70vw] h-[70vw] md:w-[50vmin] md:h-[50vmin] lg:w-[55vmin] lg:h-[55vmin] relative transition-all duration-700">
                            <GlobeEffect dark={false} />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ opacity: textOpacity, y: textY }}
                        className="max-w-full text-center md:text-right"
                    >
                        <div className="overflow-hidden py-1 flex items-center justify-center md:justify-end gap-4 md:gap-6">
                            <motion.div variants={itemVariants}>
                                <TypingIndicator />
                            </motion.div>
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-[#1A1A1A] leading-[1.1]"
                            >
                                Reach More.
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-[#1A1A1A] leading-[1.1]"
                            >
                                Grow Faster.
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center justify-center md:justify-end gap-3 md:gap-6 text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-[#1A1A1A] leading-[1.1]"
                            >
                                <span>Expand</span>
                                <span className="inline-block w-12 h-6 md:w-32 md:h-16 bg-black rounded-full relative overflow-hidden" aria-hidden="true">
                                    <motion.span
                                        animate={{
                                            x: isMobile ? [-12, 12] : [-40, 40],
                                            rotate: [0, 360]
                                        }}
                                        transition={{
                                            duration: 3.2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Asterisk className="w-4 h-4 md:w-[42px] md:h-[42px] text-white" />
                                    </motion.span>
                                </span>
                                <span>Further.</span>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 sm:mt-12 flex justify-center md:justify-end"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-2xl md:text-[40px] font-bold uppercase tracking-tight text-[#1F1F23] hover:text-accent transition-all duration-300 group pointer-events-auto"
                            >
                                REQUEST CONSULTATION <ArrowRight className="w-4 h-4 sm:w-8 sm:h-8 md:w-[42px] md:h-[42px] group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Bottom-left Decorative Animation & Scroll Indicator */}
                    <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
                        <div className="container mx-auto relative h-[400px]">
                            <div className="absolute bottom-12 left-0 px-6 sm:px-8 md:px-24">
                                <motion.div
                                    style={{ opacity: orbOpacity }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 1 }}
                                    className="flex items-center gap-4 text-sm uppercase tracking-widest font-medium opacity-30"
                                >
                                    <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
                                        <motion.div
                                            animate={{ y: [0, 48, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-0 left-0 w-full h-1/3 bg-foreground"
                                        />
                                    </div>
                                    <span>Scroll to explore</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            {/* Why NIT AMERICA? Section */}
            <section className="section-padding bg-white relative z-10 border-b border-[#E2E8F0]">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-16 md:mb-24">
                        <h2 data-reveal className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tight text-[#1F1F23] leading-tight uppercase">
                            HOW WE DRIVE BRAND GROWTH
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {/* Messaging Channels */}
                        <div data-reveal data-stagger="1" className="group p-8 rounded-3xl border border-[#E2E8F0] bg-[#F7F9FD]/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-[#355BE5]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Smartphone className="w-6 h-6 text-[#355BE5]" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest uppercase text-[#355BE5]/60">Messaging Channels</p>
                                <h3 className="text-3xl md:text-3xl font-bold text-[#1F1F23]">SMS / RCS / WA</h3>
                                <p className="text-[#1F1F23]/60 leading-relaxed font-medium">
                                    Comprehensive coverage across all major global carriers with Tier-1 direct connections.
                                </p>
                            </div>
                        </div>

                        {/* Unified Platform */}
                        <div data-reveal data-stagger="2" className="group p-8 rounded-3xl border border-[#E2E8F0] bg-[#F7F9FD]/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-[#355BE5]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <LayoutGrid className="w-6 h-6 text-[#355BE5]" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest uppercase text-[#355BE5]/60">Unified Platform</p>
                                <h3 className="text-3xl md:text-3xl font-bold text-[#1F1F23]">1 Console</h3>
                                <p className="text-[#1F1F23]/60 leading-relaxed font-medium">
                                    Manage campaigns, licensing, and analytics from a single, intuitive dashboard.
                                </p>
                            </div>
                        </div>

                        {/* Security First */}
                        <div data-reveal data-stagger="3" className="group p-8 rounded-3xl border border-[#E2E8F0] bg-[#F7F9FD]/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-[#355BE5]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <ShieldCheck className="w-6 h-6 text-[#355BE5]" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest uppercase text-[#355BE5]/60">Security First</p>
                                <h3 className="text-3xl md:text-3xl font-bold text-[#1F1F23] uppercase">Compliance-first</h3>
                                <p className="text-[#1F1F23]/60 leading-relaxed font-medium">
                                    Fully GDPR, CCPA, and TCPA compliant infrastructure for peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PROOF STRIP - Reach/Scale Numbers */}
                    <div className="mt-12 md:mt-16 pt-12 border-t border-[#E2E8F0]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
                            {/* Metric 1 */}
                            <div data-reveal data-stagger="4" className="flex flex-col items-center md:items-start space-y-2 md:px-8">
                                <span className="text-[42px] md:text-[56px] font-bold text-[#355BE5] leading-none tracking-tight">
                                    <CountUp value={12.4} decimals={1} suffix="M+" />
                                </span>
                                <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#1F1F23]">Messages Delivered / Month</p>
                                <p className="text-[10px] md:text-[11px] text-[#1F1F23]/40 font-medium italic">Rolling 30 days · sample</p>
                            </div>

                            {/* Metric 2 */}
                            <div data-reveal data-stagger="5" className="flex flex-col items-center md:items-start space-y-2 md:px-12 md:border-l border-[#E2E8F0]">
                                <span className="text-[42px] md:text-[56px] font-bold text-[#355BE5] leading-none tracking-tight">
                                    <CountUp value={2250} />
                                </span>
                                <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#1F1F23]">msgs/sec Peak Throughput</p>
                                <p className="text-[10px] md:text-[11px] text-[#1F1F23]/40 font-medium italic">Observed peak · sample</p>
                            </div>

                            {/* Metric 3 */}
                            <div data-reveal data-stagger="6" className="flex flex-col items-center md:items-start space-y-2 md:px-12 md:border-l border-[#E2E8F0]">
                                <span className="text-[42px] md:text-[56px] font-bold text-[#355BE5] leading-none tracking-tight">
                                    <CountUp value={99.95} decimals={2} suffix="%" />
                                </span>
                                <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#1F1F23]">Delivery Success Rate</p>
                                <p className="text-[10px] md:text-[11px] text-[#1F1F23]/40 font-medium italic">Rolling 30 days · sample</p>
                            </div>
                        </div>
                    </div>

                    {/* Trusted By - Partners Logo Marquee */}
                    <div className="mt-12 md:mt-16 pt-12 border-t border-[#E2E8F0]">
                        <LogoMarquee dark={false} />
                    </div>
                </div>
            </section>

            {/* SECTION B - Our Core Services */}
            <section className="section-padding bg-[#F7F9FD] relative z-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-16 md:mb-24">
                        <h2 data-reveal className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tight text-[#1F1F23] leading-tight uppercase">
                            Our Core Services
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 pl-0">
                        {/* Messaging Infrastructure */}
                        <div data-reveal data-stagger="1" className="group relative p-8 md:p-12 rounded-[40px] border border-[#E2E8F0] bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 overflow-hidden min-h-[500px] flex flex-col justify-between">
                            {/* Background Motif */}
                            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
                                <Server className="w-64 h-64 text-[#1F1F23]" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#355BE5] flex items-center justify-center mb-10 shadow-lg shadow-blue-500/20">
                                    <Code2 className="w-7 h-7 text-white" />
                                </div>
                                <div className="space-y-6 max-w-lg">
                                    <h3 className="text-4xl font-bold text-[#1F1F23]">Messaging Infrastructure</h3>
                                    <p className="text-lg text-[#1F1F23]/60 font-medium leading-relaxed">
                                        High-throughput APIs designed for mission-critical notifications and marketing.
                                    </p>

                                    <ul className="space-y-4 pt-4">
                                        {[
                                            "Global SMS Gateway",
                                            "Verified RCS Business Messaging",
                                            "Two-Factor Authentication (2FA) SDKs"
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-[#1F1F23]/80 font-bold">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-blue-600 stroke-[3px]" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="relative z-10 pt-12">
                                <Link to="/messaging" className="inline-flex items-center gap-2 text-[#355BE5] font-bold hover:gap-4 transition-all duration-300">
                                    Learn more <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Brand Licensing */}
                        <div data-reveal data-stagger="2" className="group relative p-8 md:p-12 rounded-[40px] border border-[#E2E8F0] bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 overflow-hidden min-h-[500px] flex flex-col justify-between">
                            {/* Background Motif */}
                            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
                                <Globe className="w-64 h-64 text-[#1F1F23]" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#355BE5] flex items-center justify-center mb-10 shadow-lg shadow-blue-500/20">
                                    <Store className="w-7 h-7 text-white" />
                                </div>
                                <div className="space-y-6 max-w-lg">
                                    <h3 className="text-4xl font-bold text-[#1F1F23]">Brand Licensing</h3>
                                    <p className="text-lg text-[#1F1F23]/60 font-medium leading-relaxed">
                                        End-to-end solutions for entering and scaling within the Korean and US markets.
                                    </p>

                                    <ul className="space-y-4 pt-4">
                                        {[
                                            "Cross-border IP Licensing",
                                            "Local Market Localization",
                                            "Distribution Channel Management"
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-[#1F1F23]/80 font-bold">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-blue-600 stroke-[3px]" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="relative z-10 pt-12">
                                <Link to="/licensing" className="inline-flex items-center gap-2 text-[#355BE5] font-bold hover:gap-4 transition-all duration-300">
                                    Learn more <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION C - Our Team & People Preview */}
            <section className="section-padding bg-[#EBEFF7] relative z-10">
                <div className="container mx-auto max-w-5xl space-y-20">
                    {/* Brand Identity */}
                    <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
                        <h2 data-reveal className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tight text-[#1F1F23] leading-tight uppercase">OUR TEAM</h2>
                        <div className="space-y-6 md:space-y-8">
                            <div data-reveal className="text-base md:text-xl text-[#1F1F23]/80 leading-relaxed font-medium mx-auto max-w-none space-y-6">
                                <p>
                                    <span className="md:whitespace-nowrap">We help teams reach more customers and grow faster with managed enterprise messaging.</span><br />
                                    <span className="md:whitespace-nowrap">We combine compliance, deliverability, and reporting into one accountable service.</span><br />
                                    <span className="md:whitespace-nowrap">And we help brands expand into Korea through brand licensing.</span>
                                </p>

                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                                {["Execution-first", "Compliance by default", "Clear ownership"].map((principle, idx) => (
                                    <div
                                        key={principle}
                                        data-reveal
                                        style={{ transitionDelay: `${70 * idx}ms` }}
                                        className="px-4 py-2 min-h-[44px] flex items-center border border-[#CCD4E9] rounded-full bg-white/40 text-[11px] font-bold tracking-widest uppercase text-[#1F1F23]"
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
                            <p data-reveal data-stagger="1" className="text-[#1F1F23]/60 text-sm font-bold tracking-tight">
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
                                        name: "Vincent Rosso",
                                        role: "CTO",
                                        initials: "VR",
                                        focus: "Leads technological strategy and infrastructure development, ensuring scalable and secure systems to support messaging and distribution operations."
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
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-xl font-bold text-[#1F1F23] shrink-0 shadow-sm transition-transform group-hover:scale-105">
                                                {member.initials}
                                            </div>
                                            <div className="space-y-2 pt-1 md:pt-2">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#1F1F23] group-hover:underline underline-offset-4 decoration-[#CCD4E9]">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-[14px] font-bold text-[#3B82F6] mt-0.5 tracking-tight">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[13px] text-[#64748B] leading-relaxed max-w-sm">
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
                        <div className="pt-20 border-t border-[#CCD4E9]/50">
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
            </section >

            {/* SECTION E - Final CTA */}
            <section className="w-full bg-[#1F1F23] text-[#F7F9FD] py-16 md:py-24 relative z-10 flex flex-col items-center justify-center text-center px-6">
                <div className="space-y-10 max-w-7xl mx-auto flex flex-col items-center">
                    <h2 data-reveal className="text-[clamp(1.75rem,5vw,3.8rem)] font-bold tracking-tight leading-tight">
                        <span className="block md:whitespace-nowrap">Reach more, grow faster, expand further</span>
                        <span className="block">—together.</span>
                    </h2>

                    <Link
                        to="/contact"
                        data-reveal
                        style={{ transitionDelay: '120ms' }}
                        className="inline-flex items-center justify-center gap-2 h-12 min-w-[200px] px-8 rounded-[24px] bg-[#F7F9FD] text-[#1F1F23] text-sm font-bold tracking-wide hover:-translate-y-[1px] hover:bg-white transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                    >
                        <Send className="w-4 h-4" />
                        Request Consultation
                    </Link>
                </div>
            </section>

        </div >
    );
}
