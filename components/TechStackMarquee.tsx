"use client";

const technologies = [
    { name: "Next.js", color: "text-black dark:text-white" },
    { name: "React", color: "text-blue-500" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "Tailwind CSS", color: "text-cyan-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "WordPress", color: "text-blue-700" },
    { name: "PHP", color: "text-indigo-500" },
    { name: "OpenAI API", color: "text-green-600" },
    { name: "SEO Optimization", color: "text-orange-500" },
    { name: "Prompt Engineering", color: "text-purple-500" },
    { name: "Google Analytics", color: "text-yellow-600" },
    { name: "Vercel", color: "text-black dark:text-white" },
];

export default function TechStackMarquee() {
    return (
        <div className="w-full bg-white/50 dark:bg-black/50 py-12 overflow-hidden border-y border-gray-100 dark:border-gray-800 backdrop-blur-sm">
            <div className="container-custom mx-auto mb-8 text-center">
                <p className="text-sm font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">
                    Powering Digital Experiences With
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`text-2xl md:text-3xl font-bold ${tech.color} opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-default inline-block`}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16 px-8">
                    {technologies.map((tech, index) => (
                        <span
                            key={`duplicate-${index}`}
                            className={`text-2xl md:text-3xl font-bold ${tech.color} opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-default inline-block`}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
