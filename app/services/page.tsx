import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Professional SEO, Prompt Engineering, and Web Development services by Anam Shabbir.',
};

export default function Services() {
    const services = [
        {
            id: 'seo',
            title: 'SEO Services',
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            description: 'Comprehensive SEO solutions to boost your online visibility and drive organic traffic.',
            offerings: [
                {
                    name: 'Technical SEO Audit',
                    description: 'In-depth analysis of your website\'s technical health, identifying and fixing issues that impact search rankings.',
                },
                {
                    name: 'Keyword Research & Strategy',
                    description: 'Data-driven keyword research to target the right audience and maximize ROI.',
                },
                {
                    name: 'On-Page Optimization',
                    description: 'Optimize content, meta tags, headers, and internal linking for better search visibility.',
                },
                {
                    name: 'Content Strategy',
                    description: 'Create SEO-friendly content that ranks well and engages your target audience.',
                },
                {
                    name: 'Link Building',
                    description: 'Ethical white-hat link building strategies to improve domain authority.',
                },
                {
                    name: 'Local SEO',
                    description: 'Optimize your business for local search results and Google My Business.',
                },
            ],
        },
        {
            id: 'prompt-engineering',
            title: 'Prompt Engineering',
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            description: 'Harness the power of AI with expertly crafted prompts and automation workflows.',
            offerings: [
                {
                    name: 'Custom Prompt Development',
                    description: 'Create tailored prompts for ChatGPT and other AI models to meet your specific needs.',
                },
                {
                    name: 'AI Workflow Automation',
                    description: 'Design and implement automated workflows using AI to streamline your processes.',
                },
                {
                    name: 'Content Generation Systems',
                    description: 'Build AI-powered content generation systems for blogs, social media, and marketing.',
                },
                {
                    name: 'Prompt Templates Library',
                    description: 'Develop reusable prompt templates for consistent, high-quality AI outputs.',
                },
                {
                    name: 'AI Tool Integration',
                    description: 'Integrate AI tools into your existing systems and workflows.',
                },
                {
                    name: 'Training & Consultation',
                    description: 'Teach your team how to effectively use AI tools and create powerful prompts.',
                },
            ],
        },
        {
            id: 'web-development',
            title: 'Web Development',
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance.',
            offerings: [
                {
                    name: 'Next.js Applications',
                    description: 'Build fast, SEO-friendly web applications using Next.js and React.',
                },
                {
                    name: 'WordPress Development',
                    description: 'Custom WordPress themes and plugins tailored to your business needs.',
                },
                {
                    name: 'PHP Web Applications',
                    description: 'Robust backend solutions and custom web applications using PHP.',
                },
                {
                    name: 'Responsive Design',
                    description: 'Mobile-first, responsive designs that work perfectly on all devices.',
                },
                {
                    name: 'Performance Optimization',
                    description: 'Speed optimization, code splitting, and caching for lightning-fast websites.',
                },
                {
                    name: 'E-Commerce Solutions',
                    description: 'Complete e-commerce platforms with payment integration and inventory management.',
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
                            Services
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            Comprehensive digital solutions to grow your business and online presence
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Sections */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`section-padding ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                        }`}
                >
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            {/* Service Header */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6">
                                    {service.icon}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    {service.title}
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                    {service.description}
                                </p>
                            </div>

                            {/* Service Offerings */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.offerings.map((offering, offeringIndex) => (
                                    <div
                                        key={offeringIndex}
                                        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                                    >
                                        <div className="flex items-start mb-4">
                                            <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                                                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                {offering.name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {offering.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Pricing Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Flexible Pricing
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Every project is unique. I offer customized pricing based on your specific needs and goals.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold mb-2">Hourly</h3>
                                <p className="opacity-90">Perfect for small tasks and consultations</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold mb-2">Project-Based</h3>
                                <p className="opacity-90">Fixed price for defined scope projects</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold mb-2">Retainer</h3>
                                <p className="opacity-90">Ongoing support and maintenance</p>
                            </div>
                        </div>
                        <Button href="/contact" variant="secondary" size="lg">
                            Get a Custom Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                How I Work
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                A streamlined process to deliver exceptional results
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                {
                                    step: '01',
                                    title: 'Discovery & Consultation',
                                    description: 'We discuss your goals, challenges, and requirements to understand your vision.',
                                },
                                {
                                    step: '02',
                                    title: 'Strategy & Planning',
                                    description: 'I create a detailed plan and strategy tailored to your specific needs.',
                                },
                                {
                                    step: '03',
                                    title: 'Implementation',
                                    description: 'Execute the plan with regular updates and transparent communication.',
                                },
                                {
                                    step: '04',
                                    title: 'Testing & Optimization',
                                    description: 'Thorough testing and optimization to ensure everything works perfectly.',
                                },
                                {
                                    step: '05',
                                    title: 'Launch & Support',
                                    description: 'Successful launch with ongoing support and maintenance as needed.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                            Let's discuss your project and how I can help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="primary" size="lg">
                                Contact Me
                            </Button>
                            <Button href="/portfolio" variant="outline" size="lg">
                                View Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
