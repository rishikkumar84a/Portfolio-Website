"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <SectionWrapper id="experience" className="bg-dark-900">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center"
                >
                    Professional Experience
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 ml-[-1px]" />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } md:items-center pl-12 md:pl-0`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-900 z-10 -translate-x-1/2" />

                            {/* Content Wrapper */}
                            <div className={`flex-1 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-right"}`}>
                                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform">
                                    <div className="flex flex-col md:block">
                                        <span className="text-secondary text-sm font-bold mb-1 block">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                        <h4 className="text-slate-400 font-medium mb-4">{exp.company} • {exp.type}</h4>
                                        <ul className={`text-slate-400 text-sm space-y-2 list-disc inline-block text-left pl-4 ${index % 2 !== 0 ? "md:text-right md:list-none md:pl-0" : ""}`}>
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
