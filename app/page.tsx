import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import HomepageTimeline from '@/components/HomepageTimeline';
import TechStackMarquee from '@/components/TechStackMarquee';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO Expertise",
      description: "Boost your online visibility with comprehensive SEO strategies. From technical audits to content optimization, I help businesses rank higher and attract quality traffic.",
      skills: ["Technical SEO", "On-Page SEO", "Keyword Research", "Analytics", "Content Strategy"],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Prompt Engineering",
      description: "Harness the power of AI with expertly crafted prompts. I create custom solutions for ChatGPT, automation workflows, and AI-driven content strategies.",
      skills: ["ChatGPT Optimization", "AI Workflows", "Prompt Design", "Content Generation", "AI Integration"],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web Development",
      description: "Build modern, responsive websites that perform. Specializing in Next.js, WordPress, and PHP to create fast, scalable, and user-friendly web solutions.",
      skills: ["Next.js", "React", "WordPress", "PHP", "Responsive Design", "Performance"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce SEO Campaign",
      description: "Increased organic traffic by 250% through comprehensive SEO strategy and technical optimization.",
      image: "/projects/project-1.jpg",
      technologies: ["SEO", "Analytics", "Content Strategy"],
      category: "SEO",
      link: "/portfolio",
    },
    {
      title: "AI Content Platform",
      description: "Developed an AI-powered content generation platform using advanced prompt engineering techniques.",
      image: "/projects/project-2.jpg",
      technologies: ["ChatGPT", "API Integration", "Next.js"],
      category: "Prompt Engineering",
      link: "/portfolio",
    },
    {
      title: "Corporate Website Redesign",
      description: "Modern, responsive website built with Next.js featuring dynamic content and optimal performance.",
      image: "/projects/project-3.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "Web Development",
      link: "/portfolio",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Greeting */}
            <div className="inline-block mb-6 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg animate-fade-in">
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                👋 Welcome to my portfolio
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hi, I'm{' '}
              <span className="gradient-text">
                Anam Shabbir
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              SEO Expert | Prompt Engineer | Web Developer
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              With a BS in English and expertise in digital technologies, I bridge the gap between compelling communication and technical excellence. I craft SEO strategies, engineer AI prompts, and build modern web applications using Next.js, WordPress, and PHP.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button href="/portfolio" variant="primary" size="lg">
                View My Work
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <TechStackMarquee />

      {/* Services Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button href="/services" variant="primary" size="lg">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-black py-20 overflow-hidden">
        <div className="container-custom mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            How I bring projects from concept to reality
          </p>
        </div>
        <HomepageTimeline />
      </section>

      <Testimonials />

      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button href="/portfolio" variant="primary" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <BlogPreview />

      <ContactSection />
    </div>
  );
}

