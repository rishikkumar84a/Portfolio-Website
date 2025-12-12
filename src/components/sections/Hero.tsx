"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaEye, FaDownload, FaFilePdf, FaFileWord } from "react-icons/fa";

export default function Hero() {
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900 pt-16">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
                <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[80px] animate-pulse-slow delay-2000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl text-accent font-medium mb-4">
                            Hi, I&apos;m Rishik Kumar Chaurasiya
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
                            <span className="text-slate-100">I am a </span>
                            <span className="text-gradient">
                                <TypeAnimation
                                    sequence={[
                                        "Full-Stack Developer",
                                        2000,
                                        "AI Enthusiast",
                                        2000,
                                        "Open Source Contributor",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                            Building scalable web applications and integrating cutting-edge AI solutions.
                            Based in IIT Patna, India.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center gap-2"
                        >
                            <FaEye /> View My Work
                        </Link>

                        <div className="relative">
                            <button
                                onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                                onBlur={() => setTimeout(() => setIsDownloadOpen(false), 200)}
                                className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                            >
                                <FaDownload /> Download <span className="text-xs">▼</span>
                            </button>

                            <AnimatePresence>
                                {isDownloadOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full mt-2 left-0 w-full bg-dark-800 border border-white/10 rounded-xl overflow-hidden shadow-xl flex flex-col z-50"
                                    >
                                        <a
                                            href="/assets/resume.pdf"
                                            download="Rishik_Resume.pdf"
                                            className="px-4 py-3 hover:bg-white/5 text-slate-300 flex items-center gap-2 text-sm transition-colors"
                                        >
                                            <FaFilePdf className="text-red-400" /> PDF Version
                                        </a>
                                        <a
                                            href="/assets/resume.docx"
                                            download="Rishik_Resume.docx"
                                            className="px-4 py-3 hover:bg-white/5 text-slate-300 flex items-center gap-2 text-sm transition-colors"
                                        >
                                            <FaFileWord className="text-blue-400" /> DOCX Version
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center justify-center lg:justify-start gap-6 text-2xl text-slate-400"
                    >
                        <a href="https://github.com/rishikkumar84a" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-1 transition-all"><FaGithub /></a>
                        <a href="https://linkedin.com/in/rishikkumar84ya" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] hover:-translate-y-1 transition-all"><FaLinkedin /></a>
                        <a href="https://twitter.com/rishikkumar84ya" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] hover:-translate-y-1 transition-all"><FaTwitter /></a>
                        <a href="mailto:rishikkumarchaurasiya@gmail.com" className="hover:text-red-500 hover:-translate-y-1 transition-all"><FaEnvelope /></a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[20px] animate-pulse-slow opacity-50" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/profile.jpg"
                                alt="Rishik Kumar Chaurasiya"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-10 glass px-4 py-2 rounded-xl border border-white/10 shadow-xl"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 bottom-10 glass px-4 py-2 rounded-xl border border-white/10 shadow-xl"
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
