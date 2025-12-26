"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc",
        content: "Anam transformed our digital presence completely. The SEO strategy she implemented increased our organic traffic by 300% in just 6 months. Her technical skills are unmatched.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Marketing Director, GrowthFlow",
        content: "Working with Anam on our AI prompt engineering project was a game changer. She understood our needs instantly and delivered a solution that automated 40% of our content workflow.",
        rating: 5,
    },
    {
        name: "Emily Davis",
        role: "Founder, Creative Studio",
        content: "The website Anam built for us is not just beautiful but incredibly fast. Her attention to detail and commitment to performance is what sets her apart from other developers.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-white dark:bg-gray-800/50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        Client Testimonials
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what clients say about my work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
                            <CardContent className="pt-6">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
