"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function SocialSticky() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const socials = [
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://linkedin.com",
            label: "LinkedIn",
            color: "hover:bg-[#0077b5]",
        },
        {
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com",
            label: "GitHub",
            color: "hover:bg-[#333]",
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            href: "https://twitter.com",
            label: "Twitter",
            color: "hover:bg-[#1da1f2]",
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:hello@anamshabbir.com",
            label: "Email",
            color: "hover:bg-primary-600",
        },
    ];

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`
                        flex items-center gap-3 p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
                        border border-l-0 border-gray-200 dark:border-gray-800 rounded-r-xl
                        transition-all duration-300 transform -translate-x-[70%] hover:translate-x-0
                        text-gray-700 dark:text-gray-300 hover:text-white group
                        shadow-lg ${social.color}
                    `}
                >
                    <span className="flex-shrink-0">{social.icon}</span>
                    <span className="font-medium text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {social.label}
                    </span>
                </a>
            ))}
        </div>
    );
}
