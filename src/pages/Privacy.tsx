import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const Privacy = () => {
    return (
        <div className="relative min-h-screen bg-[#FDFDFD]">
            <SEO 
                title="Privacy Policy | NIT America"
                description="NIT AMERICA INC. Privacy Policy - Last Updated: March 2026"
                canonical="https://nitamerica.com/privacy"
            />
            
            <section className="container pt-32 pb-24 px-8">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 border-b border-gray-100 pb-12"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#355BE5]">LEGAL COMPLIANCE</span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111]">NIT AMERICA INC. — <br className="hidden md:block" /> PRIVACY POLICY</h1>
                        <div className="flex items-center gap-4 text-xs font-bold text-[#94A3B8] uppercase tracking-widest pt-2">
                            <span>Last Updated: March 2026</span>
                        </div>
                    </motion.div>

                    {/* Policy Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12 text-[#1F1F23]/90 leading-relaxed font-medium"
                    >
                        {/* Section 1 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                <span className="opacity-20">01</span> WHO WE ARE
                            </h2>
                            <p>
                                NIT America Inc. ("NIT America," "we," "us," or "our") is a subsidiary of NIT Soft Co., Ltd., headquartered in Irvine, California. We provide business messaging services that enable our clients ("Brands") to communicate with their customers via SMS, MMS, and other messaging channels.
                            </p>
                            <p>
                                This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you visit our website (nitamerica.com), use our services, or otherwise interact with us.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                <span className="opacity-20">02</span> INFORMATION WE COLLECT
                            </h2>
                            <p>We may collect the following categories of personal information:</p>
                            <ul className="space-y-6 pt-4">
                                <li>
                                    <strong className="block text-[#111111] mb-1">Contact Information:</strong>
                                    Name, email address, phone number, mailing address, and job title provided when you create an account, request information, or contact us.
                                </li>
                                <li>
                                    <strong className="block text-[#111111] mb-1">Business Information:</strong>
                                    Company name, EIN, industry, and billing details provided during client onboarding and service setup.
                                </li>
                                <li>
                                    <strong className="block text-[#111111] mb-1">Phone Numbers and Messaging Data:</strong>
                                    Mobile phone numbers submitted by our clients for the purpose of delivering SMS and MMS messages on their behalf. We process these numbers as a service provider to our clients. Message content, delivery status, opt-in records, and opt-out requests associated with messaging campaigns.
                                </li>
                                <li>
                                    <strong className="block text-[#111111] mb-1">Usage Data:</strong>
                                    IP address, browser type and version, pages visited, time and date of visit, time spent on pages, device identifiers, and other diagnostic data collected automatically when you visit our website.
                                </li>
                                <li>
                                    <strong className="block text-[#111111] mb-1">Cookies and Tracking Technologies:</strong>
                                    We use cookies and similar technologies to analyze website traffic and improve your experience. You may adjust cookie settings through your browser.
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                <span className="opacity-20">03</span> HOW WE USE YOUR INFORMATION
                            </h2>
                            <p>We use the personal information we collect for the following purposes:</p>
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 pt-2 text-sm list-disc pl-5">
                                <li>Provide, operate, and maintain messaging services</li>
                                <li>Process and deliver SMS/MMS messages on behalf of clients</li>
                                <li>Manage your account and provide support</li>
                                <li>Process payments and fulfill contractual obligations</li>
                                <li>Communicate about service updates and support</li>
                                <li>Comply with TCPA, CTIA, and FCC regulations</li>
                                <li>Monitor and enforce industry standards</li>
                                <li>Analyze usage and improve services</li>
                                <li>Detect and prevent fraud or technical issues</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                <span className="opacity-20">04</span> HOW WE SHARE YOUR INFORMATION
                            </h2>
                            <p>
                                We do not sell your personal information. We do not share your personal information with third parties for their own marketing purposes.
                            </p>
                            <div className="grid gap-6 pt-4">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <strong className="block text-[#111111] mb-2 uppercase text-xs tracking-widest">Service Providers</strong>
                                    <p className="text-sm">With trusted third-party vendors who assist in operating our services, including telecommunications carriers, cloud infrastructure providers, payment processors, and analytics services. These providers are contractually obligated to protect your information and use it only as directed by us.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <strong className="block text-[#111111] mb-2 uppercase text-xs tracking-widest">Telecommunications Partners</strong>
                                    <p className="text-sm">With upstream connectivity providers and mobile network operators as necessary to deliver SMS/MMS messages and comply with carrier requirements and 10DLC registration obligations.</p>
                                </div>
                            </div>
                            <p className="text-sm pt-4">Legal Compliance: When required by law or to protect the safety of NIT America and its clients.</p>
                            <p className="text-sm">Business Transfers: In connection with a merger or sale, your information may be transferred with prior notification.</p>
                        </div>

                        {/* Section 5 & 6 */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50">
                                    <span className="opacity-20 text-sm">05</span> DATA RETENTION
                                </h2>
                                <p className="text-sm">We retain personal information only as long as necessary to fulfill the purposes described, comply with TCPA requirements, and carrier guidelines. When no longer needed, we securely delete or anonymize it.</p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50">
                                    <span className="opacity-20 text-sm">06</span> DATA SECURITY
                                </h2>
                                <p className="text-sm">We implement encryption, access controls, and regular security assessments to protect your data. While we strive for absolute security, no internet transmission is 100% secure.</p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50 flex items-center gap-3">
                                <span className="opacity-20">07</span> YOUR RIGHTS AND CHOICES
                            </h2>
                            <ul className="grid gap-3 list-none pl-0">
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#355BE5] mt-1.5 shrink-0" /> <span><strong>Access/Correction:</strong> Request a copy or edit inaccurate data.</span></li>
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#355BE5] mt-1.5 shrink-0" /> <span><strong>Deletion:</strong> Request removal subject to legal retention.</span></li>
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#355BE5] mt-1.5 shrink-0" /> <span><strong>Opt-Out:</strong> Unsubscribe from emails or reply STOP to SMS.</span></li>
                            </ul>
                        </div>

                        {/* Section 8 */}
                        <div className="p-8 bg-[#111111] text-white rounded-[32px] space-y-6">
                            <h2 className="text-xl font-bold uppercase tracking-widest pb-2 border-b border-white/10">
                                <span className="opacity-40">08</span> CALIFORNIA PRIVACY RIGHTS
                            </h2>
                            <p className="text-white/70 text-sm">If you are a California resident, you have additional rights under the CCPA/CPRA, including the right to know, delete, correct, and opt-out of sharing (though we do not sell/share per policy).</p>
                            <p className="text-white/70 text-sm">To submit a request, contact us at <strong>privacy@nitamerica.com</strong>. We respond within 45 days.</p>
                        </div>

                        {/* Section 9 & 10 */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50">
                                    <span className="opacity-20 text-sm">09</span> CHILDREN'S PRIVACY
                                </h2>
                                <p className="text-sm">Our services are not directed to individuals under 13. We do not knowingly collect children's information and will delete it if discovered.</p>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-gray-50">
                                    <span className="opacity-20 text-sm">10</span> CONTACT US
                                </h2>
                                <div className="text-sm space-y-2">
                                    <p className="font-bold">NIT America Inc.</p>
                                    <p>15375 Barranca Pkwy Ste B-203 <br /> Irvine CA 92618</p>
                                    <p>Email: <a href="mailto:privacy@nitamerica.com" className="font-bold underline text-[#355BE5]">privacy@nitamerica.com</a></p>
                                </div>
                            </div>
                        </div>

                        {/* Section 11 */}
                        <div className="pt-12 border-t border-gray-100">
                             <p className="text-xs text-gray-400 font-medium leading-relaxed italic">
                                11. CHANGES TO THIS POLICY: We may update this Privacy Policy from time to time. Your continued use of our services constitutes acceptance of the updated policy.
                             </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
