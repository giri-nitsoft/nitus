import { motion } from "framer-motion";
import { CheckCircle2, CheckSquare, Sparkles, MessageSquare, AlertCircle, Clock, ShieldCheck, Check, MessageCircle, Image as ImageIcon, TrendingUp, AlertTriangle, UserMinus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";

const METRICS_DATA = {
    SMS: {
        deliveryRate: "98.4%",
        deliveryWidth: "98.4%",
        failReason1: { label: "Invalid number", value: "45%" },
        failReason2: { label: "Carrier block", value: "32%" },
        optOutRate: "0.3%",
        latency: "120ms"
    },
    RCS: {
        deliveryRate: "96.7%",
        deliveryWidth: "96.7%",
        failReason1: { label: "RCS unavailable", value: "52%" },
        failReason2: { label: "Timeout", value: "28%" },
        optOutRate: "0.2%",
        latency: "180ms"
    },
    WhatsApp: {
        deliveryRate: "99.1%",
        deliveryWidth: "99.1%",
        failReason1: { label: "Template rejected", value: "38%" },
        failReason2: { label: "User blocked", value: "35%" },
        optOutRate: "0.4%",
        latency: "95ms"
    }
};

const Messaging = () => {
    const [activeTab, setActiveTab] = useState('SMS');

    useEffect(() => {
        const tabs = ['SMS', 'RCS', 'WhatsApp'];
        const interval = setInterval(() => {
            setActiveTab(prev => {
                const currentIndex = tabs.indexOf(prev);
                return tabs[(currentIndex + 1) % tabs.length];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const customerWorkflows = [
        {
            title: "Account verification",
            desc: "Secure authentication with fast, reliable OTP delivery.",
            icon: <ShieldCheck className="w-5 h-5 text-accent" />,
            bubble: "Your verification code is 1618. It expires in 10 minutes."
        },
        {
            title: "Appointment reminders",
            desc: "Reduce no-shows with automated reminders.",
            icon: <Clock className="w-5 h-5 text-accent" />,
            bubble: "Reminder: Your appointment is tomorrow at 1:00 PM."
        },
        {
            title: "Service updates",
            desc: "Keep users informed with proactive notifications.",
            icon: <AlertCircle className="w-5 h-5 text-accent" />,
            bubble: "Status update: The issue has been resolved."
        },
        {
            title: "Two-way support",
            desc: "Enable quick responses through interactive messages.",
            icon: <MessageSquare className="w-5 h-5 text-accent" />,
            bubble: "Reply 1 for Support, 2 for Billing."
        },
        {
            title: "Consent confirmations",
            desc: "Manage opt-in workflows and consent proof.",
            icon: <CheckSquare className="w-5 h-5 text-accent" />,
            bubble: "Reply YES to confirm. Reply STOP to opt out."
        },
        {
            title: "Onboarding nudges",
            desc: "Re-engage users at critical touchpoints.",
            icon: <Sparkles className="w-5 h-5 text-accent" />,
            bubble: "Complete your profile to get started."
        }
    ];

    return (
        <div className="relative min-h-screen bg-white font-sans overflow-x-hidden">
            <SEO
                title="Multi-Channel Messaging | NIT America"
                description="Compliance-first workflows across SMS, RCS, and WhatsApp—built for real-world delivery."
                canonical="https://nitamerica.com/messaging"
            />

            {/* Hero Section */}
            <section className="w-full pt-4 pb-20 md:pt-12 md:pb-32 xl:pt-16 xl:pb-40 bg-[#FBFBFB]">
                <div className="container mx-auto px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 lg:col-span-7"
                        >
                            {/* Removed Pills */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold tracking-tight text-[#1F1F23] leading-[1.1] max-w-2xl">
                                Multi-Channel Messaging Across SMS, RCS, and WhatsApp
                            </h1>
                            <p className="text-lg text-[#64748B] leading-relaxed max-w-xl font-medium pt-2">
                                Connect with your customers on the channels they use every day.
                            </p>

                            <div className="pt-4 pb-2">
                                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1F1F23] text-white rounded-full font-medium hover:bg-[#111113] transition-colors shadow-sm">
                                    Request Consultation
                                </Link>
                            </div>

                            <div className="pt-4">
                                <div className="flex flex-col gap-3.5 text-left">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
                                            <Check className="w-3 h-3 text-[#64748B] stroke-[2.5]" />
                                        </div>
                                        <span className="text-[13px] text-[#64748B] font-medium tracking-tight">Validation before every send</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
                                            <Check className="w-3 h-3 text-[#64748B] stroke-[2.5]" />
                                        </div>
                                        <span className="text-[13px] text-[#64748B] font-medium tracking-tight">Smart routing & fallback</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
                                            <Check className="w-3 h-3 text-[#64748B] stroke-[2.5]" />
                                        </div>
                                        <span className="text-[13px] text-[#64748B] font-medium tracking-tight">Compliance & opt-out ready</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex justify-center lg:justify-end lg:col-span-5"
                        >
                            {/* System Health Dashboard Card */}
                            <div className="w-full max-w-[460px] bg-[#F4F6F9] rounded-[24px] p-6 lg:p-8 border border-[#E2E8F0] shadow-sm relative z-10 space-y-6 mx-auto">
                                <div className="space-y-1">
                                    <h3 className="text-[16px] font-bold text-[#1F1F23]">System Health</h3>
                                    <p className="text-[11px] text-[#94A3B8] font-medium">Example metrics for illustration.</p>
                                </div>

                                {/* Tabs */}
                                <div className="flex bg-white rounded-full p-1 shadow-sm border border-[#E2E8F0] text-[11px] font-medium">
                                    {['SMS', 'RCS', 'WhatsApp'].map(tab => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-1 py-1.5 rounded-full transition-all ${activeTab === tab ? 'bg-[#1F1F23] text-white shadow-md' : 'text-[#94A3B8] hover:text-[#1F1F23]'}`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Delivery rate */}
                                <div className="bg-white rounded-[16px] p-6 border border-[#E2E8F0] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] relative">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-7 h-7 rounded-sm bg-[#F8FAFC] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                                            <TrendingUp className="w-3.5 h-3.5 text-[#1F1F23]" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-medium text-[#94A3B8] mb-0.5">Delivery rate</div>
                                            <div className="text-[24px] font-bold text-[#1F1F23] leading-none tracking-tight">{METRICS_DATA[activeTab as keyof typeof METRICS_DATA].deliveryRate}</div>
                                        </div>
                                    </div>
                                    <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1F1F23] rounded-full transition-all duration-500 ease-out" style={{ width: METRICS_DATA[activeTab as keyof typeof METRICS_DATA].deliveryWidth }} />
                                    </div>
                                </div>

                                {/* Top fail reasons */}
                                <div className="bg-white rounded-[16px] p-5 border border-[#E2E8F0] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] space-y-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <AlertTriangle className="w-3.5 h-3.5 text-[#64748B]" />
                                        <span className="text-[11px] font-medium text-[#64748B]">Top fail reasons</span>
                                    </div>

                                    <div className="space-y-3.5">
                                        <div>
                                            <div className="flex justify-between items-center text-[10px] font-medium mb-1.5">
                                                <span className="text-[#1F1F23]">{METRICS_DATA[activeTab as keyof typeof METRICS_DATA].failReason1.label}</span>
                                                <span className="text-[#1F1F23] font-bold">{METRICS_DATA[activeTab as keyof typeof METRICS_DATA].failReason1.value}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#94A3B8] rounded-full transition-all duration-500 ease-out" style={{ width: METRICS_DATA[activeTab as keyof typeof METRICS_DATA].failReason1.value }} />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center text-[10px] font-medium mb-1.5">
                                                <span className="text-[#1F1F23]">{METRICS_DATA[activeTab as keyof typeof METRICS_DATA].failReason2.label}</span>
                                                <span className="text-[#1F1F23] font-bold">{METRICS_DATA[activeTab as keyof typeof METRICS_DATA].failReason2.value}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#94A3B8] rounded-full transition-all duration-500 ease-out" style={{ width: METRICS_DATA[activeTab as keyof typeof METRICS_DATA].failReason2.value }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Two Metrics */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-[16px] p-4 lg:p-5 border border-[#E2E8F0] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                                        <div className="w-6 h-6 rounded-sm bg-[#F8FAFC] flex items-center justify-center shrink-0 border border-[#E2E8F0] mb-3">
                                            <UserMinus className="w-3 h-3 text-[#1F1F23]" />
                                        </div>
                                        <div className="text-[10px] font-medium text-[#94A3B8] mb-1">Opt-out rate</div>
                                        <div className="text-[18px] font-bold text-[#1F1F23]">{METRICS_DATA[activeTab as keyof typeof METRICS_DATA].optOutRate}</div>
                                    </div>

                                    <div className="bg-white rounded-[16px] p-4 lg:p-5 border border-[#E2E8F0] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                                        <div className="w-6 h-6 rounded-sm bg-[#F8FAFC] flex items-center justify-center shrink-0 border border-[#E2E8F0] mb-3">
                                            <Clock className="w-3 h-3 text-[#1F1F23]" />
                                        </div>
                                        <div className="text-[10px] font-medium text-[#94A3B8] mb-1">Queue latency</div>
                                        <div className="text-[18px] font-bold text-[#1F1F23]">{METRICS_DATA[activeTab as keyof typeof METRICS_DATA].latency}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#EBEFF7] opacity-60 blur-[100px] rounded-full pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="bg-[#FFFFFF] py-16 border-t border-[#CCD4E9]">
                <div className="container mx-auto px-8 text-center space-y-8">
                    <div className="space-y-2">
                        <p className="text-[14px] font-medium text-[#1F1F23]/70">
                            Trusted by teams using our messaging infrastructure
                        </p>
                    </div>

                    <div className="overflow-hidden relative w-full pt-8 pb-4">
                        {/* Semi-transparent gradient overlays for smooth edge fading */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

                        <motion.div
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                            className="flex w-max shrink-0"
                        >
                            {[...Array(2)].map((_, idx) => (
                                <div key={idx} className="flex items-center justify-center gap-x-24 px-12 shrink-0">
                                    <img src="/logo/cjlogo.png" alt="CJ" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/Kraftonlogo.png" alt="Krafton" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/northfacelogo.png" alt="North Face" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/skecherslogo.png" alt="Skechers" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/timberlandlogo.png" alt="Timberland" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/vanslogo.png" alt="Vans" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/andarlogo.png" alt="Andar" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/xexymixlogo.png" alt="Xexymix" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/osstemlogo.png" alt="Osstem" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/kluglogo.png" alt="Klug" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/mongzelogo.png" alt="Mongze" className="h-[65px] md:h-[80px] object-contain" />
                                    <img src="/logo/egnislogo.png" alt="Egnis" className="h-[65px] md:h-[80px] object-contain" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Engineering Layout Section */}
            <section className="bg-[#F4F6F9] py-32 border-y border-slate-200">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Left Content */}
                        <div className="space-y-10 pr-4">
                            <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-[#1F1F23]">
                                Messaging that's <br />
                                engineered, not <br />
                                improvised.
                            </h2>
                            <p className="text-xl text-[#475569] leading-relaxed font-medium">
                                One workflow across SMS, RCS, and WhatsApp—built with validation, routing, and compliance at the core.
                            </p>

                            <p className="text-sm text-[#64748B] leading-relaxed max-w-md pt-2">
                                Send once, route intelligently. The platform handles validation, compliance checks, and channel fallback automatically.
                            </p>
                        </div>

                        {/* Right Content (3 Cards + Connectors) */}
                        <div className="flex flex-col relative w-full">
                            {/* Card 1: Code Block */}
                            <div className="bg-[#F7F9FD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                                    </div>
                                    <span className="text-[10px] font-mono font-medium text-[#94A3B8]">messaging_flow.ts</span>
                                </div>
                                <div className="bg-[#EBEFF7] rounded-2xl p-6 font-mono text-sm space-y-1 overflow-x-auto text-[#475569]">
                                    <p><span className="text-[#64748B]">nit</span>.send(&#123;</p>
                                    <p className="ml-4">message: <span className="text-[#334155]">"Your code is 1618"</span>,</p>
                                    <p className="ml-4">channels: [<span className="text-[#334155]">"SMS"</span>, <span className="text-[#334155]">"RCS"</span>, <span className="text-[#334155]">"WhatsApp"</span>],</p>
                                    <p className="ml-4">fallback: true</p>
                                    <p>&#125;);</p>
                                </div>
                            </div>

                            {/* Connector 1: Code to Core */}
                            <div className="h-10 w-full relative z-0">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="absolute left-1/2 top-0 w-[2px] bg-[#CCD4E9] opacity-75 origin-top -translate-x-1/2 rounded-full"
                                />
                            </div>

                            {/* Card 2: NIT Messaging Core */}
                            <div className="bg-[#F7F9FD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-[#94A3B8]" />
                                    <span className="text-[14px] font-bold text-[#1F1F23]">NIT Messaging Core</span>
                                </div>
                                <div className="divide-y divide-[#E2E8F0] text-[13px] font-medium text-[#475569]">
                                    {[
                                        { label: "Validation", badge: "Validated" },
                                        { label: "Routing Logic", badge: "Smart Routing" },
                                        { label: "Compliance", badge: "Opt-out Ready" },
                                        { label: "Monitoring", badge: "Observed" }
                                    ].map((item, idx) => (
                                        <div key={item.label} className={`flex justify-between items-center ${idx === 0 ? 'pb-3.5' : idx === 3 ? 'pt-3.5 pb-1' : 'py-3.5'}`}>
                                            <span>{item.label}</span>
                                            <motion.span
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.7 + idx * 0.12 }}
                                                className="px-3 py-1 bg-[#EBEFF7] text-[#475569] text-[10px] font-bold tracking-wider rounded-lg uppercase"
                                            >
                                                {item.badge}
                                            </motion.span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Connector System 2: Core to Channels */}
                            <div className="relative h-14 w-full z-0">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "50%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.2, delay: 1.2, ease: "linear" }}
                                    className="absolute left-1/2 top-0 w-[2px] bg-[#CCD4E9] opacity-75 origin-top -translate-x-1/2 rounded-full"
                                />
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.4, ease: "easeInOut" }}
                                    className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-[#CCD4E9] opacity-75 origin-center -translate-y-1/2 rounded-full"
                                />
                                {[12.5, 37.5, 62.5, 87.5].map((leftPos, i) => (
                                    <motion.div
                                        key={`drop-${i}`}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "50%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.2, delay: 1.8, ease: "linear" }}
                                        className="absolute top-1/2 w-[2px] bg-[#CCD4E9] opacity-75 origin-top rounded-full"
                                        style={{ left: `${leftPos}%`, transform: "translateX(-50%)" }}
                                    />
                                ))}
                            </div>

                            {/* Card 3: Channels Grid */}
                            <div className="grid grid-cols-4 relative z-10">
                                {[
                                    { name: "SMS", icon: <MessageSquare className="w-5 h-5 text-[#475569]" /> },
                                    { name: "WhatsApp", icon: <MessageCircle className="w-5 h-5 text-[#475569]" /> },
                                    { name: "RCS", icon: <CheckCircle2 className="w-5 h-5 text-[#475569]" /> },
                                    { name: "MMS", icon: <ImageIcon className="w-5 h-5 text-[#475569]" /> }
                                ].map((ch, idx) => (
                                    <div key={ch.name} className="px-2">
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            whileInView={{ scale: [1, 1.02, 1] }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 2.9 + idx * 0.4 }}
                                            className="flex flex-col items-center justify-center bg-[#F7F9FD] rounded-2xl p-4 border border-[#E2E8F0] shadow-sm gap-2 h-full relative z-10"
                                        >
                                            {ch.icon}
                                            <span className="text-[10px] font-bold text-[#1F1F23]">{ch.name}</span>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Workflows Grid */}
            <section className="py-32 bg-[#FBFBFB]">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight">Built for customer workflows</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Operational messaging across the customer lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {customerWorkflows.map((flow, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-200/50 space-y-8 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                    {flow.icon}
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold">{flow.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{flow.desc}</p>
                                </div>
                                <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-slate-100">
                                    <p className="text-[12px] italic text-slate-500 font-medium">"{flow.bubble}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance & Deliverability */}
            <section className="py-32 bg-[#F4F6F9]">
                <div className="container mx-auto px-8">
                    <div className="max-w-5xl mx-auto space-y-12">
                        {/* Header */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1F1F23]">
                                Compliance & Deliverability
                            </h2>
                            <p className="text-lg text-[#64748B] font-medium">
                                Built-in controls to protect trust and performance.
                            </p>
                        </div>

                        {/* White Checklist Panel */}
                        <div className="bg-white rounded-[24px] p-10 md:p-14 border border-[#E2E8F0] shadow-sm">
                            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                {[
                                    "Consent & opt-in management",
                                    "STOP/HELP opt-out handling",
                                    "Registration support (where applicable)",
                                    "Template-based messaging support (WhatsApp)",
                                    "Throttling & rate limits",
                                    "Quiet hours & frequency controls"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F1F5F9] shrink-0 border border-[#CBD5E1]">
                                            <Check className="w-3 h-3 text-[#1F1F23] stroke-[2.5]" />
                                        </div>
                                        <span className="text-[14px] font-medium text-[#475569]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3 Metric Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-[20px] p-8 text-center border border-[#E2E8F0] shadow-sm flex flex-col justify-center space-y-2 h-[120px]">
                                <div className="text-3xl font-bold text-[#1F1F23]">98.4%</div>
                                <div className="text-[12px] font-medium text-[#94A3B8]">Delivery rate</div>
                            </div>
                            <div className="bg-white rounded-[20px] p-8 text-center border border-[#E2E8F0] shadow-sm flex flex-col justify-center space-y-2 h-[120px]">
                                <div className="text-3xl font-bold text-[#1F1F23]">Tracked</div>
                                <div className="text-[12px] font-medium text-[#94A3B8]">Fail reasons</div>
                            </div>
                            <div className="bg-white rounded-[20px] p-8 text-center border border-[#E2E8F0] shadow-sm flex flex-col justify-center space-y-2 h-[120px]">
                                <div className="text-3xl font-bold text-[#1F1F23]">0.3%</div>
                                <div className="text-[12px] font-medium text-[#94A3B8]">Opt-out rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 md:py-48 bg-[#111111] relative overflow-hidden text-center text-white px-6">
                <div className="absolute inset-0 z-0 opacity-20" />

                <div className="container mx-auto relative z-10 max-w-4xl space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight px-2">
                            Tell us your use case. We'll propose the right channel mix.
                        </h2>
                        <p className="text-base md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto px-4">
                            Share your goals and timeline—get a rollout plan built around compliance and performance.
                        </p>
                    </div>
                    <div className="pt-4">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 bg-white text-[#111111] rounded-full text-sm md:text-base font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
                            Request Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Messaging;
