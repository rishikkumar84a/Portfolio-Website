import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 border-t border-white/5 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-heading font-bold mb-2">
                            Rishik Kumar Chaurasiya
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Full-Stack Developer | AI Enthusiast
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <SocialLink href="https://github.com/rishikkumar84a" icon={<FaGithub />} />
                        <SocialLink href="https://linkedin.com/in/rishikkumar84ya" icon={<FaLinkedin />} />
                        <SocialLink href="https://twitter.com/rishikkumar84ya" icon={<FaTwitter />} />
                        <SocialLink href="https://instagram.com/rishikkumar84ya" icon={<FaInstagram />} />
                    </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {currentYear} Rishik Kumar Chaurasiya. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <Link href="#hero" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary text-xl transition-colors transform hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}
