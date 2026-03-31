import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const Terms = () => {
    return (
        <div className="relative min-h-screen bg-[#FDFDFD]">
            <SEO 
                title="SMS Terms of Service | NIT America"
                description="NIT AMERICA INC. SMS Terms of Service & Messaging Disclosure - Last Updated: March 2026"
                canonical="https://nitamerica.com/terms"
            />
            
            <section className="container pt-32 pb-24 px-8">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 border-b border-gray-100 pb-12"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#355BE5]">MESSAGING COMPLIANCE</span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111]">NIT AMERICA INC. — <br className="hidden md:block" /> SMS TERMS & DISCLOSURE</h1>
                        <div className="flex items-center gap-4 text-xs font-bold text-[#94A3B8] uppercase tracking-widest pt-2">
                            <span>Last Updated: March 2026</span>
                        </div>
                    </motion.div>

                    {/* Terms Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12 text-[#1F1F23]/90 leading-relaxed font-medium"
                    >
                        {/* Section 1 & 2 */}
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                    <span className="opacity-20 text-sm font-sans">01</span> OVERVIEW
                                </h2>
                                <p className="text-sm">
                                    NIT America Inc. ("NIT America," "we," "us," or "our") provides business messaging services that enable our clients ("Brands") to send SMS and MMS messages to their customers and end users ("Recipients"). This page describes the terms and conditions governing our messaging services, your rights as a message recipient, and how to manage your messaging preferences.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                    <span className="opacity-20 text-sm font-sans">02</span> CONSENT & OPT-IN
                                </h2>
                                <p className="text-sm">
                                    We require all Brands using our platform to obtain proper consent before sending messages. Consent may be collected through web forms, written agreements, keyword opt-in, or verbal consent. Consent to receive text messages is not required as a condition of purchasing any goods or services.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 & 4 */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                <span className="opacity-20">03</span> FREQUENCY & CONTENT
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 pt-2">
                                <ul className="space-y-3 text-sm list-disc pl-5">
                                    <li>Transactional notifications</li>
                                    <li>Customer service communications</li>
                                    <li>Marketing & promotional messages</li>
                                </ul>
                                <ul className="space-y-3 text-sm list-disc pl-5">
                                    <li>Two-factor authentication</li>
                                    <li>Security codes & alerts</li>
                                    <li>Informational updates</li>
                                </ul>
                            </div>
                            <p className="text-sm pt-4 italic border-t border-gray-50">
                                <strong>04. Rates:</strong> Message and data rates may apply. Contact your wireless carrier for details about your text messaging plan and any applicable fees.
                            </p>
                        </div>

                        {/* Section 5 & 6 - OPT OUT & HELP (Crucial) */}
                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                            <div className="p-8 bg-[#111111] text-white rounded-[32px] space-y-4 relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                <h3 className="text-lg font-bold uppercase tracking-wider flex items-center gap-3">
                                    <span className="text-[#355BE5]">05</span> HOW TO OPT OUT
                                </h3>
                                <p className="text-white/70 text-sm">You can opt out of receiving text messages at any time by replying:</p>
                                <div className="inline-block px-4 py-2 bg-white/10 rounded-xl font-mono text-xl font-bold tracking-[0.2em] mb-2">STOP</div>
                                <p className="text-white/60 text-xs leading-relaxed">After opting out, you will receive a single confirmation message and will no longer receive text messages from that Brand's campaign.</p>
                            </div>
                            <div className="p-8 bg-gray-50 border border-gray-100 rounded-[32px] space-y-4 relative overflow-hidden group">
                                <h3 className="text-lg font-bold uppercase tracking-wider flex items-center gap-3 text-[#111111]">
                                    <span className="text-[#355BE5]">06</span> HOW TO GET HELP
                                </h3>
                                <p className="text-[#1F1F23]/60 text-sm">For help or questions about text messages you have received, reply:</p>
                                <div className="inline-block px-4 py-2 bg-[#111111]/5 rounded-xl font-mono text-xl font-bold tracking-[0.2em] mb-2 text-[#111111]">HELP</div>
                                <div className="text-xs text-[#1F1F23]/60 space-y-1">
                                    <p>Email: <strong>support@nitamerica.com</strong></p>
                                    <p>Phone: <strong>949-418-7156</strong></p>
                                </div>
                            </div>
                        </div>

                        {/* Section 7 & 8 */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50">
                                    <span className="opacity-20 text-sm">07</span> SUPPORTED CARRIERS
                                </h2>
                                <p className="text-sm">Delivered via major US mobile carriers, including AT&T, T-Mobile, Verizon, and US Cellular. Carriers are not liable for delayed or undelivered messages.</p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 text-[#355BE5]">
                                    <span className="opacity-20 text-sm text-[#111111]">08</span> PRIVACY
                                </h2>
                                <p className="text-sm">Your privacy is important to us. Phone numbers are handled in accordance with our <a href="/privacy" className="underline font-bold">Privacy Policy</a>. We do not sell or share your number with third parties for marketing.</p>
                            </div>
                        </div>

                        {/* Section 9 & 10 */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                    <span className="opacity-20">09</span> BRAND RESPONSIBILITIES
                                </h2>
                                <p className="text-sm">All Brands using the NIT America messaging platform are required to obtain proper consent, identify themselves, honor opt-outs immediately, and comply with TCPA, FCC, and CTIA regulations.</p>
                            </div>
                            <div className="p-8 border border-[#355BE5]/20 bg-[#355BE5]/[0.02] rounded-[32px] space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#355BE5] pb-2 border-b border-[#355BE5]/10">
                                    <span className="opacity-40 text-[#111111]">10</span> COMPLIANCE
                                </h2>
                                <p className="text-sm">NIT America operates as a registered Campaign Service Provider (CSP) with TCR. All campaigns are registered and vetted in accordance with 10DLC requirements, TCPA, and FCC regulations.</p>
                            </div>
                        </div>

                        {/* Section 11 & 12 */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50">
                                    <span className="opacity-20 text-sm">11</span> DISCLAIMERS
                                </h2>
                                <p className="text-xs text-[#94A3B8]">NIT America provides messaging infrastructure services. We are not responsible for the content sent by Brands. Message delivery is subject to carrier network availability and may be delayed or fail.</p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50">
                                    <span className="opacity-20 text-sm">12</span> CHANGES TO TERMS
                                </h2>
                                <p className="text-xs text-[#94A3B8]">We may update these terms. Changes will be posted on this page with an updated "Last Updated" date. Continued receipt of messages constitutes acceptance.</p>
                            </div>
                        </div>

                        {/* Section 13 */}
                        <div className="pt-12 border-t border-gray-100 grid md:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold uppercase text-[#111111]">HEADQUARTERS</h4>
                                <p className="text-xs text-[#64748B]">
                                    NIT America Inc.<br />
                                    15375 Barranca Pkwy Ste B-203<br />
                                    Irvine CA 92618
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold uppercase text-[#111111]">SUPPORT</h4>
                                <p className="text-xs text-[#64748B]">
                                    Email: <a href="mailto:support@nitamerica.com" className="underline font-bold">support@nitamerica.com</a><br />
                                    Phone: 949-418-7156
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold uppercase text-[#111111]">QUICK ACTIONS</h4>
                                <div className="space-y-1">
                                    <p className="text-xs text-[#64748B]">To stop: Reply <strong>STOP</strong></p>
                                    <p className="text-xs text-[#64748B]">To help: Reply <strong>HELP</strong></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
