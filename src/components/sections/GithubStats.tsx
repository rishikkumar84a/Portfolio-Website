"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

export default function GithubStats() {
    return (
        <SectionWrapper className="bg-dark-900">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl font-bold font-heading mb-8">GitHub Contributions</h2>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 overflow-x-auto px-4 pb-4">
                <motion.img
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src="https://github-readme-stats.vercel.app/api?username=rishikkumar84a&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a0a0a"
                    alt="GitHub Stats"
                    className="h-44 md:h-48"
                />
                <motion.img
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src="https://github-readme-streak-stats.herokuapp.com/?user=rishikkumar84a&theme=tokyonight&hide_border=true&background=0a0a0a"
                    alt="GitHub Streak"
                    className="h-44 md:h-48"
                />
            </div>
            <div className="flex justify-center mt-4">
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=rishikkumar84a&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a0a0a"
                    alt="Top Languages"
                    className="h-44 md:h-48"
                />
            </div>
        </SectionWrapper>
    );
}
