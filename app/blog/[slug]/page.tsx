import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogPost({ params }: { params: { slug: string } }) {
    // Mock data - in a real app this would fetch based on slug
    const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <article className="min-h-screen pt-24 pb-20 dark:bg-black">
            <div className="container-custom max-w-4xl">
                <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>
                </Button>

                <div className="space-y-4 text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Dec 15, 2024</span>
                        <span className="hidden md:inline">|</span>
                        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Anam Shabbir</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
                </div>

                <div className="prose prose-lg dark:prose-invert mx-auto">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <h2>Introduction</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <blockquote>
                        "Transformation through innovation is key to staying ahead in the digital landscape."
                    </blockquote>

                    <h2>Key Takeaways</h2>
                    <ul>
                        <li>Understanding the core principles of the topic.</li>
                        <li>Implementing best practices for optimal results.</li>
                        <li>Analyzing data to drive decision making.</li>
                        <li>Continuous learning and adaptation.</li>
                    </ul>

                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
        </article>
    );
}
