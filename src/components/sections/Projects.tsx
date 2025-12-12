"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    return (
        <SectionWrapper id="projects" className="bg-dark-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Showcasing production-ready applications and innovative solutions.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group glass-card rounded-xl overflow-hidden flex flex-col h-full"
                    >
                        {/* Project Image Placeholder */}
                        <div className="h-48 bg-gradient-to-br from-dark-300 to-dark-100 relative group-hover:scale-105 transition-transform duration-500 overflow-hidden flex items-center justify-center">
                            <span className="text-4xl">💻</span>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex space-x-3 text-slate-400">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm mb-6 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.slice(0, 4).map((t) => (
                                    <span key={t} className="px-2 py-1 bg-white/5 text-xs text-secondary rounded-md border border-white/5">
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 4 && (
                                    <span className="px-2 py-1 bg-white/5 text-xs text-slate-500 rounded-md">
                                        +{project.tech.length - 4}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
