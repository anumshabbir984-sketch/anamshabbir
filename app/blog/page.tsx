import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read articles about SEO, Prompt Engineering, Web Development, and digital marketing.',
};

export default function Blog() {
    const blogPosts = [
        {
            title: '10 Essential SEO Strategies for 2024',
            excerpt: 'Discover the latest SEO techniques that will help your website rank higher in search results and drive more organic traffic.',
            date: 'December 1, 2024',
            category: 'SEO',
            readTime: '8 min read',
            slug: 'seo-strategies-2024',
        },
        {
            title: 'Mastering ChatGPT: A Prompt Engineering Guide',
            excerpt: 'Learn how to craft effective prompts that unlock the full potential of ChatGPT and other AI language models.',
            date: 'November 28, 2024',
            category: 'Prompt Engineering',
            readTime: '12 min read',
            slug: 'chatgpt-prompt-guide',
        },
        {
            title: 'Next.js 14: What's New and Why It Matters',
      excerpt: 'Explore the latest features in Next.js 14 and how they can improve your web development workflow.',
            date: 'November 25, 2024',
            category: 'Web Development',
            readTime: '10 min read',
            slug: 'nextjs-14-features',
        },
        {
            title: 'Technical SEO Checklist for Modern Websites',
            excerpt: 'A comprehensive checklist to ensure your website is technically optimized for search engines.',
            date: 'November 20, 2024',
            category: 'SEO',
            readTime: '15 min read',
            slug: 'technical-seo-checklist',
        },
        {
            title: 'AI-Powered Content Creation: Best Practices',
            excerpt: 'How to use AI tools effectively while maintaining quality and authenticity in your content.',
            date: 'November 15, 2024',
            category: 'Prompt Engineering',
            readTime: '9 min read',
            slug: 'ai-content-best-practices',
        },
        {
            title: 'Building Performant React Applications',
            excerpt: 'Tips and techniques for optimizing React applications for better performance and user experience.',
            date: 'November 10, 2024',
            category: 'Web Development',
            readTime: '11 min read',
            slug: 'performant-react-apps',
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
                            Blog
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            Insights on SEO, AI, and web development
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    {/* Category Filter - Can be made functional with state */}
                    {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div> */}

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogPosts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Category Badge */}
                                <div className="p-6 pb-0">
                                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 pt-2">
                                    <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    {/* Read More Link */}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all duration-300"
                                    >
                                        Read More
                                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button - Placeholder */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Subscribe to My Newsletter
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Get the latest articles, tips, and insights delivered directly to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 rounded-full bg-white text-primary-600 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
