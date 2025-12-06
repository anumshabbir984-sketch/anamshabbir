import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Explore my portfolio of SEO campaigns, AI projects, and web development work.',
};

export default function Portfolio() {
    const projects = [
        {
            title: 'E-Commerce SEO Transformation',
            description: 'Increased organic traffic by 250% and revenue by 180% through comprehensive SEO strategy, technical optimization, and content marketing for a leading e-commerce brand.',
            image: '/projects/project-1.jpg',
            technologies: ['Technical SEO', 'Content Strategy', 'Link Building', 'Analytics'],
            category: 'SEO',
            results: ['250% Traffic Increase', '180% Revenue Growth', '#1 Rankings for 50+ Keywords'],
        },
        {
            title: 'AI-Powered Content Platform',
            description: 'Developed an intelligent content generation platform using advanced prompt engineering, reducing content creation time by 70% while maintaining quality.',
            image: '/projects/project-2.jpg',
            technologies: ['ChatGPT API', 'Prompt Engineering', 'Next.js', 'TypeScript'],
            category: 'Prompt Engineering',
            results: ['70% Time Reduction', '1000+ Articles Generated', '95% Quality Score'],
        },
        {
            title: 'Corporate Website Redesign',
            description: 'Complete redesign and development of a corporate website using Next.js, achieving 95+ PageSpeed score and modern, responsive design.',
            image: '/projects/project-3.jpg',
            technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
            category: 'Web Development',
            results: ['95+ PageSpeed Score', '60% Faster Load Time', '40% More Conversions'],
        },
        {
            title: 'Local Business SEO Campaign',
            description: 'Helped a local business dominate local search results, achieving top 3 rankings for all target keywords and 5x increase in local leads.',
            image: '/projects/project-1.jpg',
            technologies: ['Local SEO', 'Google My Business', 'Citation Building', 'Reviews'],
            category: 'SEO',
            results: ['Top 3 Local Rankings', '5x Lead Increase', '500+ Positive Reviews'],
        },
        {
            title: 'AI Chatbot Integration',
            description: 'Integrated and customized an AI chatbot for customer support, reducing response time by 90% and improving customer satisfaction scores.',
            image: '/projects/project-2.jpg',
            technologies: ['ChatGPT', 'API Integration', 'Prompt Design', 'Automation'],
            category: 'Prompt Engineering',
            results: ['90% Faster Response', '85% Automation Rate', '4.8/5 Satisfaction'],
        },
        {
            title: 'WordPress E-Commerce Store',
            description: 'Built a custom WordPress e-commerce store with advanced features, payment integration, and inventory management system.',
            image: '/projects/project-3.jpg',
            technologies: ['WordPress', 'WooCommerce', 'PHP', 'Custom Plugins'],
            category: 'Web Development',
            results: ['$100K+ Monthly Sales', '99.9% Uptime', 'Seamless Checkout'],
        },
    ];

    const categories = ['All', 'SEO', 'Prompt Engineering', 'Web Development'];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
                            Portfolio
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            A showcase of successful projects and measurable results
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
                            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100%</div>
                            <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">250%</div>
                            <div className="text-gray-600 dark:text-gray-400">Avg. Traffic Growth</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5+</div>
                            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    {/* Category Filter - Commented out for now, can be made functional with state */}
                    {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium shadow-md"
              >
                {category}
              </button>
            ))}
          </div> */}

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                                    {/* Project Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-600 dark:text-primary-400">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Results */}
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                                            <ul className="space-y-1">
                                                {project.results.map((result, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Client Testimonials
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            What my clients say about working with me
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: 'Sarah Johnson',
                                role: 'CEO, TechStart Inc.',
                                content: 'Anam transformed our online presence completely. Our organic traffic increased by 300% in just 6 months. Highly recommended!',
                                rating: 5,
                            },
                            {
                                name: 'Michael Chen',
                                role: 'Marketing Director',
                                content: 'The AI solutions Anam implemented saved us countless hours. The prompt engineering work was exceptional and delivered beyond expectations.',
                                rating: 5,
                            },
                            {
                                name: 'Emily Rodriguez',
                                role: 'Business Owner',
                                content: 'Professional, responsive, and results-driven. The website Anam built for us is fast, beautiful, and converts visitors into customers.',
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Create Something Amazing
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Ready to see similar results for your business? Let's discuss your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="secondary" size="lg">
                                Start Your Project
                            </Button>
                            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                                View Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
