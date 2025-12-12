"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaRobot } from "react-icons/fa";

const stats = [
    { label: "GitHub Repos", value: "67+" },
    { label: "Internships", value: "4" },
    { label: "Projects", value: "10+" },
    { label: "CGPA", value: "8.41/10" },
];

const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
    Backend: ["Node.js", "Express.js", "FastAPI", "Flask", "Django"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite"],
    "AI & ML": ["TensorFlow", "Scikit-learn", "OpenAI API", "YOLOv8"],
    "DevOps & Tools": ["Docker", "Kubernetes", "Git", "AWS", "GCP", "Vercel"]
};

export default function About() {
    return (
        <SectionWrapper id="about" className="bg-dark-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 relative inline-block">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full" />
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I&apos;m a Full-Stack Developer currently pursuing B.Sc. in Computer Science at IIT Patna.
                            With hands-on experience from multiple internships, I specialize in building scalable web applications
                            using the MERN stack and integrating AI capabilities.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            I&apos;m passionate about open source and leveraging modern technologies like Next.js,
                            Node.js, and TensorFlow to solve real-world problems.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-4 rounded-xl text-center"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold font-heading mb-8">Technical Skills</h3>
                    <div className="space-y-6">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h4 className="text-slate-300 font-medium mb-3 flex items-center gap-2">
                                    {category === "Frontend" && <FaCode className="text-accent" />}
                                    {category === "Backend" && <FaServer className="text-secondary" />}
                                    {category === "Databases" && <FaDatabase className="text-primary" />}
                                    {category === "AI & ML" && <FaRobot className="text-pink-500" />}
                                    <span className="text-sm uppercase tracking-wider">{category}</span>
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400 hover:border-primary/50 hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
