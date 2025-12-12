"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { certifications } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Certifications() {
    return (
        <SectionWrapper id="certifications" className="bg-dark-900">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center"
            >
                Certifications & Achievements
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden glass-card border-none"
                    >
                        <Image
                            src={`/assets/certificates/${cert}`}
                            alt={cert.replace(".png", "").replace(".jpg", "")}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white text-sm font-medium truncate w-full shadow-sm">
                                {cert.replace(".png", "").replace(".jpg", "").replace(" - ", " ")}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
