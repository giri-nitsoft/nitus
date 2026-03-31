import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const Navbar = ({ dark = false }: { dark?: boolean }) => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const navLinks = [
        { name: 'Messaging Services', path: '/messaging', shortName: 'Messaging Services' },
        { name: 'Brand Licensing', path: '/licensing', shortName: 'Licensing' },
        ...(location.pathname === '/re' ? [
            { name: 'About', path: '#about' },
            { name: 'Team', path: '#team' },
        ] : [])
    ];

    const [isOpen, setIsOpen] = useState(false);

    const isDark = dark || location.pathname === '/home3';

    const content = (
        <div className="container mx-auto px-6 h-full flex items-center justify-between transition-all duration-500">
            <div className="flex items-center shrink-0">
                <Link to="/" className="flex items-center">
                    {!isActive('/') && (
                        <img
                            src="/home/homebtn.png"
                            alt="NIT America"
                            className={cn(
                                "h-6 md:h-8 w-auto transition-all",
                                isDark ? "brightness-0 invert opacity-100" : "opacity-100"
                            )}
                        />
                    )}
                </Link>
            </div>

            {/* Navigation Wrapper */}
            <motion.div
                className={cn(
                    "hidden md:flex items-center transition-all duration-500 ml-auto px-6 py-2 border",
                    (isDark && isScrolled)
                        ? "bg-white/10 backdrop-blur-xl border-white/20 rounded-full shadow-2xl space-x-[30px]"
                        : "space-x-[30px] border-transparent"
                )}
            >
                {[...navLinks, { name: 'Contact', path: '/contact' }].map((link) => {
                    const isContact = link.path === '/contact';
                    const isContactInPill = isContact && isDark && isScrolled;
                    const isHashLink = link.path.startsWith('#');

                    const handleClick = (e: React.MouseEvent) => {
                        if (isHashLink && location.pathname === '/re') {
                            e.preventDefault();
                            const id = link.path.replace('#', '');
                            const element = document.getElementById(id);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    };

                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={handleClick}
                            className={cn(
                                "relative text-[13px] font-bold tracking-widest uppercase transition-all px-6 py-2",
                                isContactInPill
                                    ? "bg-white text-[#111111] rounded-full hover:bg-white/90"
                                    : (isDark
                                        ? (isActive(link.path) ? "text-white" : "text-[rgb(255_255_255_/_0.66)] hover:text-white")
                                        : (isActive(link.path) ? "text-[#1F1F23]" : "text-[#1F1F23]/40 hover:text-[#1F1F23]"))
                            )}
                        >
                            {link.name}
                            {isActive(link.path) && !isScrolled && (
                                <motion.div
                                    layoutId="nav-active"
                                    className={cn("absolute -bottom-1 left-0 right-0 h-0.5", isDark ? "bg-white" : "bg-[#1F1F23]")}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </motion.div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2">

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "h-11 w-11 flex items-center justify-center rounded-full focus-ring",
                                isDark ? "hover:bg-white/10" : "hover:bg-slate-100"
                            )}
                            aria-label="Open navigation menu"
                        >
                            <Menu className={cn("h-5 w-5", isDark ? "text-white" : "text-[#1F1F23]")} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[100vw] sm:w-[400px] border-l-[#CCD4E9] bg-white p-0">
                        <div className="flex flex-col h-full">
                            <div className="p-6 flex items-center justify-between border-b border-[#CCD4E9]/30">
                                <Link
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold tracking-tighter text-[#1F1F23]"
                                >
                                    NIT America
                                </Link>
                                {/* Sheet close is handled by the component automatically, but we ensure the header is clean */}
                            </div>
                            <nav className="flex flex-col p-8 space-y-8">
                                {navLinks.map((link) => {
                                    const isHashLink = link.path.startsWith('#');
                                    const handleMobileClick = (e: React.MouseEvent) => {
                                        if (isHashLink && location.pathname === '/re') {
                                            e.preventDefault();
                                            const id = link.path.replace('#', '');
                                            const element = document.getElementById(id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                            setIsOpen(false);
                                        } else {
                                            setIsOpen(false);
                                        }
                                    };

                                    return (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={handleMobileClick}
                                            className={cn(
                                                "text-4xl font-bold tracking-tight transition-all",
                                                isActive(link.path) ? "text-[#1F1F23]" : "text-[#1F1F23]/30 hover:text-[#1F1F23]"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-4xl font-bold tracking-tight transition-all",
                                        isActive('/contact')
                                            ? (isDark ? "text-white" : "text-[#1F1F23]")
                                            : (isDark ? "text-white/80 hover:text-white" : "text-[#1F1F23]/30 hover:text-[#1F1F23]")
                                    )}
                                >
                                    Contact
                                </Link>

                                <div className="pt-12">
                                    <Button asChild className="w-full h-20 rounded-2xl bg-[#1F1F23] text-[#F7F9FD] text-xl font-bold shadow-lg shadow-[#1F1F23]/10">
                                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                                    </Button>
                                </div>
                            </nav>
                            <div className="mt-auto p-8 border-t border-[#CCD4E9]/30 bg-[#F7F9FD]">
                                <p className="text-[10px] font-bold tracking-[0.2em] text-[#1F1F23]/40 uppercase">Nexus of Innovation & Trade</p>
                                <div className="mt-4 flex gap-4 text-[#1F1F23]/60 text-xs font-semibold">
                                    <Link to="/messaging" onClick={() => setIsOpen(false)} className="hover:text-[#1F1F23]">US</Link>
                                    <span className="text-[#CCD4E9]">/</span>
                                    <Link to="/licensing" onClick={() => setIsOpen(false)} className="hover:text-[#1F1F23]">KOREA</Link>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );

    const headerHeight = useTransform(scrollY, [0, 250], isDark ? ["64px", "64px"] : ["64px", "64px"]);

    return (
        <motion.nav
            style={{ height: headerHeight }}
            className={cn(
                "fixed top-[10px] left-0 z-50 w-full transition-all duration-500 px-6 flex items-center",
                isScrolled
                    ? (isDark
                        ? "bg-transparent font-bold"
                        : "border-b border-[#CCD4E9]/30 bg-white/90 backdrop-blur-md shadow-sm rounded-full")
                    : "border-transparent bg-transparent"
            )}
        >
            {content}
        </motion.nav>
    );
}

export default Navbar
