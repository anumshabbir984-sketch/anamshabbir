import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about Anam Shabbir - SEO Expert, Prompt Engineer, and Web Developer with a BS in English.',
};

export default function About() {
    const skills = {
        seo: [
            'Technical SEO',
            'On-Page Optimization',
            'Off-Page SEO',
            'Keyword Research',
            'Content Strategy',
            'SEO Analytics',
            'Local SEO',
            'Link Building',
        ],
        promptEngineering: [
            'ChatGPT Optimization',
            'AI Workflow Design',
            'Prompt Templates',
            'Content Generation',
            'AI Integration',
            'Model Fine-tuning',
        ],
        webDevelopment: [
            'Next.js',
            'React',
            'TypeScript',
            'WordPress',
            'PHP',
            'Tailwind CSS',
            'Responsive Design',
            'Performance Optimization',
        ],
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
                            About Me
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            Bridging the gap between compelling communication and technical excellence
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h2 className="text-4xl font-bold mb-6 gradient-text">
                                My Journey
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                <p>
                                    With a <strong className="text-primary-600 dark:text-primary-400">BS in English</strong>, I developed a deep understanding of communication, storytelling, and content creation. This foundation has proven invaluable in my technical career, allowing me to bridge the gap between complex technology and clear, compelling messaging.
                                </p>
                                <p>
                                    My journey into the digital world began with a fascination for how websites rank on search engines. This curiosity led me to master <strong className="text-primary-600 dark:text-primary-400">SEO</strong>, where I learned to optimize content and technical elements to drive organic traffic and improve online visibility.
                                </p>
                                <p>
                                    As AI technology emerged, I recognized the power of well-crafted prompts in unlocking the potential of language models. I became a <strong className="text-primary-600 dark:text-primary-400">Prompt Engineer</strong>, specializing in creating efficient workflows and generating high-quality AI-driven content.
                                </p>
                                <p>
                                    To bring my visions to life, I expanded into <strong className="text-primary-600 dark:text-primary-400">Web Development</strong>, mastering modern frameworks like Next.js, along with WordPress and PHP. This combination of skills allows me to create comprehensive digital solutions from concept to deployment.
                                </p>
                            </div>
                        </div>

                        <div className="animate-slide-in-right">
                            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong>Unique Perspective:</strong> English degree + technical skills = clear communication of complex ideas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong>Comprehensive Solutions:</strong> SEO, AI, and development expertise under one roof</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong>Results-Driven:</strong> Focus on measurable outcomes and ROI</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong>Always Learning:</strong> Staying updated with the latest trends and technologies</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Skills & Expertise
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A comprehensive toolkit for modern digital solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* SEO Skills */}
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg animate-fade-in">
                            <div className="w-16 h-16 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">SEO</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.seo.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Prompt Engineering Skills */}
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="w-16 h-16 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Prompt Engineering</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.promptEngineering.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Web Development Skills */}
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <div className="w-16 h-16 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Web Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.webDevelopment.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                Education
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border-l-4 border-primary-500">
                            <div className="flex items-start">
                                <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                                    BS
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                        Bachelor of Science in English
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Specialized in Communication, Literature, and Content Creation
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        This degree provided me with a strong foundation in effective communication, critical thinking, and content strategy—skills that are essential in today's digital landscape and complement my technical expertise perfectly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Ready to take your digital presence to the next level? I'm here to help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="secondary" size="lg">
                                Get in Touch
                            </Button>
                            <Button href="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                                View My Work
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
