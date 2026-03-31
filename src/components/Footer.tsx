import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-border/50 pt-8 pb-32 md:pb-8 px-8 sm:px-16 md:px-28 bg-background text-[#1F1F23]">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-8 text-left">
                    <div className="max-w-xs space-y-6">
                        <Link to="/" className="inline-block">
                            <img
                                src="/home/homebtn.png"
                                alt="NIT America"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-sm font-medium tracking-wider text-foreground">
                            Nexus of Innovation & Trade
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1F1F23]/40">
                            A partner company
                        </h5>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://www.nitsoft.co.kr/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#1F1F23]/80 hover:text-accent transition-colors tracking-tight">
                                    NITSOFT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4 border-t border-border/50">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between w-full">
                        <p className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold order-2 md:order-1">
                            &copy; {new Date().getFullYear()} NIT America. All rights reserved.
                        </p>
                        <div className="flex gap-8 order-1 md:order-2">
                            <Link to="/privacy" className="text-[10px] text-muted-foreground/50 hover:text-[#111111] uppercase tracking-[0.2em] font-black transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-[10px] text-muted-foreground/50 hover:text-[#111111] uppercase tracking-[0.2em] font-black transition-colors">
                                SMS Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
