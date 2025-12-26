"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
    {
        title: "The Future of SEO with AI Integration",
        excerpt: "How Artificial Intelligence is reshaping the landscape of Search Engine Optimization and what you need to know to stay ahead.",
        date: "Dec 15, 2024",
        category: "SEO",
        slug: "future-of-seo-ai",
    },
    {
        title: "Mastering Prompt Engineering for Content Creation",
        excerpt: "A comprehensive guide to writing effective prompts that generate high-quality, human-like content for your marketing campaigns.",
        date: "Nov 28, 2024",
        category: "AI",
        slug: "mastering-prompt-engineering",
    },
    {
        title: "Next.js 15: What's New and improved?",
        excerpt: "Deep dive into the latest features of Next.js 15, including Server Actions, Partial Prerendering, and improved caching mechanisms.",
        date: "Nov 10, 2024",
        category: "Development",
        slug: "nextjs-15-features",
    }
];

export default function BlogPreview() {
    return (
        <section className="section-padding bg-white dark:bg-gray-900">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Latest Insights
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Thoughts, tutorials, and trends in SEO, AI, and Web Development.
                        </p>
                    </div>
                    <Button variant="outline" asChild className="hidden md:flex">
                        <Link href="/blog">View All Articles <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 dark:bg-gray-800 flex flex-col h-full group bg-white">
                            <div className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-4xl font-bold opacity-20">{post.category}</span>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-semibold px-2 py-1 bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full border border-primary-100 dark:border-primary-800">{post.category}</span>
                                    <span className="text-xs text-gray-500 flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                </div>
                                <CardTitle className="line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    <Link href={`/blog`}>{post.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="p-0 h-auto text-primary-600 dark:text-primary-400" asChild>
                                    <Link href={`/blog`}>Read More <ArrowRight className="ml-1 w-3 h-3" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" asChild>
                        <Link href="/blog">View All Articles <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
