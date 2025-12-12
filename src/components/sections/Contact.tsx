"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { useState } from "react";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <SectionWrapper id="contact" className="bg-dark-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Let&apos;s Connect</h2>
                    <p className="text-slate-400">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                            <p className="text-slate-400">IIT Patna, Bihar, India</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <a href="mailto:rishikkumarchaurasiya@gmail.com" className="text-primary hover:underline">
                                rishikkumarchaurasiya@gmail.com
                            </a>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                            <p className="text-slate-400">+91 8987149472</p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <input
                                    {...register("name", { required: true })}
                                    placeholder="Your Name"
                                    className="w-full bg-dark-200/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                            </div>

                            <div>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="Your Email"
                                    className="w-full bg-dark-200/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                            </div>

                            <div>
                                <input
                                    {...register("subject", { required: true })}
                                    placeholder="Subject"
                                    className="w-full bg-dark-200/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                                {errors.subject && <span className="text-red-500 text-sm">Subject is required</span>}
                            </div>

                            <div>
                                <textarea
                                    {...register("message", { required: true })}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full bg-dark-200/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                />
                                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="animate-spin" /> Sending...
                                    </>
                                ) : isSuccess ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
