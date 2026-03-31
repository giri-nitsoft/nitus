import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, FileText, Server, TrendingUp, Globe, Zap } from "lucide-react";
import SEO from "@/components/SEO";

const Licensing = () => {
    const navigate = useNavigate();

    const hubs = [
        {
            title: "NIT AMERICA",
            location: "IRVINE, CA",
            role: "Strategic Hub",
            focus: "US Operations",
            items: ["Brand discovery & trend sourcing", "Strategic networking", "Agreement & negotiation"],
            color: "text-accent",
            bg: "bg-white",
            border: "border-border"
        },
        {
            title: "NITSOFT",
            location: "SEOUL, KOREA",
            role: "Execution Hub",
            focus: "Korea Operations",
            items: ["Localized commerce IT infra", "Channel-driven distribution", "Operations & management"],
            color: "text-accent",
            bg: "bg-white",
            border: "border-border"
        }
    ];

    const processSteps = [
        {
            id: "01",
            step: "DISCOVERY",
            title: "Trend Sourcing",
            desc: "Data-driven discovery of trendy US brands through our strategic network in Irvine.",
            icon: Search
        },
        {
            id: "02",
            step: "LICENSING",
            title: "License Agreement",
            desc: "Optimized contract structures and legal review to secure sustainable market rights.",
            icon: FileText
        },
        {
            id: "03",
            step: "INFRA",
            title: "Full Operation",
            desc: "Deployment of distribution IT infrastructure, logistics, and supply chain management.",
            icon: Server
        },
        {
            id: "04",
            step: "EXPANSION",
            title: "Localization",
            desc: "Multi-channel expansion and localized branding to dominate the Korean market.",
            icon: TrendingUp
        }
    ];

    return (
        <div className="relative min-h-screen bg-white">
            <SEO
                title="Brand Licensing"
                description="The bridge between US trends and Korea. We secure premium US brand licenses and deploy them through specialized execution hubs in Korea."
                keywords="Brand Licensing, US Brands in Korea, Global Distribution, MAUI & SONS, LA GEAR, Market Expansion Korea"
                canonical="https://nitamerica.com/licensing"
            />
            {/* Background elements removed */}

            {/* Hero Section */}
            <section className="container pt-12 pb-24 border-b border-border/50 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl relative z-10"
                    >
                        <span className="text-overline inline-flex items-center gap-2">
                            <Globe className="h-3 w-3" /> GLOBAL VISION, LOCAL ACTION
                        </span>
                        <h1 className="text-hero mb-8">Bringing New US Fashions To Korea</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We don't just broker deals; we build the entire pathway. NIT America operates as a strategic gateway,
                            securing premium US brand licenses and deploying them through our specialized execution hub in Korea.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:absolute lg:right-0 lg:top-32 w-full max-w-[440px] h-[400px] mt-12 lg:mt-0"
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <video
                                src="/us_korea_trimmed.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hubs Section */}
            <section className="container py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-2xl md:text-3xl font-medium text-black">
                        We operate on both sides of the Pacific every day.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-12">
                    {hubs.map((hub, i) => (
                        <motion.div
                            key={hub.title}
                            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`p-10 border ${hub.border} ${hub.bg} relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap className={`h-24 w-24 ${hub.color}`} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <span className={`text-[10px] font-medium tracking-[0.2em] ${hub.color}`}>{hub.role}</span>
                                        <h2 className="text-3xl font-semibold mt-2">{hub.title}</h2>
                                    </div>
                                    <span className="text-xs font-medium font-mono py-1 px-2 border border-current opacity-50">{hub.location}</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Core focus: {hub.focus}</p>
                                    <ul className="space-y-3">
                                        {hub.items.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm">
                                                <div className={`h-1 w-1 rounded-full ${hub.color.replace('text', 'bg')}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground italic">"Beyond brokerage — an integrated one-stop solution from discovery to full market expansion."</p>
                </div>
            </section>

            {/* OUR BRANDS Section */}
            <section className="container py-32 border-t border-border/50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-xs font-medium text-accent tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-6">Our Brands</h2>
                    <div className="h-1.5 w-24 bg-black mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        { name: "MAUI & SONS", image: "/mauiand.jpg", isComingSoon: false },
                        { name: "NEW BRAND", isComingSoon: true }
                    ].map((brand, i) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[400px] aspect-square mx-auto overflow-hidden group cursor-pointer border border-border/50 bg-slate-50"
                        >
                            {!brand.isComingSoon ? (
                                <>
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-3xl md:text-4xl font-semibold italic text-white uppercase tracking-tight drop-shadow-xl">
                                            {brand.name}
                                        </h3>
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-100">
                                    <span className="text-xs font-medium text-accent tracking-[0.3em] uppercase mb-4">Coming Soon</span>
                                    <h3 className="text-3xl md:text-4xl font-semibold italic text-slate-300 uppercase tracking-tight">
                                        New Brand
                                    </h3>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="border-y border-border/50 py-32">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <span className="text-overline uppercase tracking-[0.3em]">Operational Flow</span>
                        <h2 className="text-title">Comprehensive Market Entry Solutions</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-6 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                                        <step.icon className="h-5 w-5" />
                                    </div>
                                    <div className="h-px flex-grow bg-border" />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs font-medium text-accent font-mono block mb-1">STEP {step.id} — {step.step}</span>
                                        <h3 className="text-xl font-semibold font-sans uppercase tracking-tight">{step.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-32 md:py-48 bg-[#FBFBFB] border-t border-border/50 text-center px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1F1F23] leading-tight">
                        Build your bridge to the Korean market <br className="hidden md:block" />
                        with a certain outcome.
                    </h2>
                    <Button 
                        size="lg" 
                        className="w-full md:w-auto h-16 px-12 rounded-full bg-[#111111] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#333333] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" 
                        onClick={() => navigate('/contact')}
                    >
                        Start a Partnership
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default Licensing;
