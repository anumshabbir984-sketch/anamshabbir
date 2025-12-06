import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 404 Number */}
                    <div className="mb-8 animate-fade-in">
                        <h1 className="text-9xl md:text-[200px] font-bold gradient-text leading-none">
                            404
                        </h1>
                    </div>

                    {/* Error Message */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Page Not Found
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <Button href="/" variant="primary" size="lg">
                            Go Home
                        </Button>
                        <Button href="/contact" variant="outline" size="lg">
                            Contact Me
                        </Button>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Here are some helpful links instead:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/about" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                                About
                            </Link>
                            <Link href="/services" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                                Services
                            </Link>
                            <Link href="/portfolio" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                                Portfolio
                            </Link>
                            <Link href="/blog" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
