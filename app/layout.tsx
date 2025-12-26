import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anam Shabbir - SEO Expert, Prompt Engineer & Web Developer",
    template: "%s | Anam Shabbir",
  },
  description: "Professional SEO Expert, Prompt Engineer, and Web Developer specializing in Next.js, WordPress, and PHP. BS English graduate offering comprehensive digital solutions.",
  keywords: [
    "SEO Expert",
    "Prompt Engineer",
    "Web Developer",
    "Next.js Developer",
    "WordPress Developer",
    "PHP Developer",
    "Digital Marketing",
    "AI Prompts",
    "ChatGPT",
    "Technical SEO",
    "Web Development Services",
  ],
  authors: [{ name: "Anam Shabbir" }],
  creator: "Anam Shabbir",
  publisher: "Anam Shabbir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://anamshabbir.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anamshabbir.com",
    title: "Anam Shabbir - SEO Expert, Prompt Engineer & Web Developer",
    description: "Professional SEO Expert, Prompt Engineer, and Web Developer specializing in Next.js, WordPress, and PHP.",
    siteName: "Anam Shabbir Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anam Shabbir - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anam Shabbir - SEO Expert, Prompt Engineer & Web Developer",
    description: "Professional SEO Expert, Prompt Engineer, and Web Developer specializing in Next.js, WordPress, and PHP.",
    images: ["/og-image.jpg"],
    creator: "@anamshabbir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

