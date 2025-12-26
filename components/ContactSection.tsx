"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="section-padding relative overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-100/50 dark:from-primary-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary-100/50 dark:from-secondary-900/20 to-transparent pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="animate-slide-in-left">
                        <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase mb-2 block">Available for Hire</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Extraordinary</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
                            I'm currently available for freelance projects and open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Email Me</h4>
                                    <a href="mailto:hello@anamshabbir.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors">hello@anamshabbir.com</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Remote / Worldwide</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl animate-slide-in-right">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input type="text" id="name" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors text-gray-900 dark:text-white" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input type="email" id="email" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors text-gray-900 dark:text-white" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                <select id="subject" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors text-gray-600 dark:text-gray-400">
                                    <option value="">Select a topic</option>
                                    <option value="seo">SEO Optimization</option>
                                    <option value="web">Web Development</option>
                                    <option value="ai">AI / Prompt Engineering</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors text-gray-900 dark:text-white" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <Button size="lg" className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
