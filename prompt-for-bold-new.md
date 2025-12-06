# Portfolio Website Prompt for Bold.new

## Project Overview
Create a fully responsive, modern, and SEO-optimized portfolio website for **Anam Shabbir** using Next.js 14 (App Router), Tailwind CSS, and TypeScript.

---

## Personal Information & Branding

**Name:** Anam Shabbir

**Professional Titles:**
- SEO Expert
- Prompt Engineer
- Web Developer (Next.js, WordPress, PHP)

**Education:** BS English

**Brand Identity:**
- Professional, modern, and clean design aesthetic
- Color scheme: Use a sophisticated palette with primary colors that convey professionalism and creativity (suggest: deep blues, purples, or teals with accent colors)
- Typography: Modern, readable fonts (e.g., Inter, Poppins, or Outfit for headings; Open Sans or Roboto for body text)

---

## Technical Requirements

### Framework & Technologies
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Responsive Design:** Mobile-first approach, fully responsive across all devices (mobile, tablet, desktop)
- **Performance:** Optimized for fast loading speeds, lazy loading images, code splitting
- **SEO:** Implement comprehensive SEO best practices

### SEO Implementation
1. **Meta Tags:** Proper title tags, meta descriptions, and Open Graph tags for all pages
2. **Structured Data:** JSON-LD schema markup for Person and Professional Service
3. **Semantic HTML:** Use proper heading hierarchy (h1, h2, h3, etc.)
4. **Alt Text:** All images must have descriptive alt text
5. **Sitemap:** Generate sitemap.xml
6. **Robots.txt:** Include robots.txt file
7. **Performance:** Optimize Core Web Vitals (LCP, FID, CLS)

---

## Website Structure & Pages

### 1. Home Page (/)
**Hero Section:**
- Large, eye-catching headline: "Hi, I'm Anam Shabbir"
- Subheadline highlighting the three main skills: "SEO Expert | Prompt Engineer | Web Developer"
- Brief introduction mentioning BS English background
- Call-to-action buttons: "View My Work" and "Contact Me"
- Professional photo or avatar (placeholder for now)
- Animated background or subtle gradient effects

**Services Overview Section:**
Display three main service cards:
1. **SEO Expertise**
   - Icon representing SEO
   - Brief description of SEO services
   - Key skills: Keyword research, on-page optimization, technical SEO, content strategy
   
2. **Prompt Engineering**
   - Icon representing AI/prompts
   - Brief description of prompt engineering services
   - Key skills: AI optimization, ChatGPT prompts, workflow automation
   
3. **Web Development**
   - Icon representing coding
   - Brief description of web development services
   - Technologies: Next.js, WordPress, PHP
   - Key skills: Custom websites, responsive design, performance optimization

**Featured Projects Section:**
- Showcase 3-6 best projects with thumbnails
- Each project card should include: image, title, brief description, technologies used, and "View Details" link
- Grid layout that's responsive

**Testimonials Section (Optional):**
- Space for client testimonials
- Carousel or grid layout
- Include client name, role, and testimonial text

**Call-to-Action Section:**
- Encouraging visitors to get in touch
- Button linking to contact page

### 2. About Page (/about)
**Personal Story:**
- Detailed introduction about Anam Shabbir
- Educational background: BS English
- Professional journey and how you got into SEO, prompt engineering, and web development
- Personal photo

**Skills & Expertise:**
Organized into categories:
- **SEO Skills:** Technical SEO, On-page SEO, Off-page SEO, Keyword Research, Content Strategy, Analytics
- **Prompt Engineering:** AI Model Optimization, ChatGPT Prompts, Workflow Automation, AI Content Creation
- **Web Development:** Next.js, React, WordPress, PHP, HTML/CSS, JavaScript, Responsive Design, Performance Optimization
- **Additional Skills:** Content Writing, Communication (leveraging English degree), Project Management

**Education:**
- BS English (with institution name placeholder)
- Any relevant certifications or courses

**Professional Values:**
- Brief section on work philosophy and approach

### 3. Services Page (/services)
Detailed breakdown of each service offering:

**SEO Services:**
- Comprehensive SEO audits
- Keyword research and strategy
- On-page optimization
- Technical SEO
- Content optimization
- Link building strategies
- Local SEO
- SEO reporting and analytics

**Prompt Engineering Services:**
- Custom AI prompt development
- ChatGPT workflow optimization
- AI content strategy
- Prompt templates and libraries
- AI tool integration
- Training and consultation

**Web Development Services:**
- Custom Next.js applications
- WordPress website development
- PHP web applications
- Responsive web design
- Website performance optimization
- E-commerce solutions
- Website maintenance and support

Each service should include:
- Icon or illustration
- Detailed description
- Benefits to clients
- Pricing structure (or "Contact for Quote")

### 4. Portfolio/Projects Page (/portfolio)
**Project Showcase:**
- Grid or masonry layout of projects
- Filter options by category: SEO Projects, Web Development, WordPress Sites, etc.
- Each project card includes:
  - Project thumbnail/screenshot
  - Project title
  - Client name (if applicable)
  - Brief description
  - Technologies/tools used
  - Link to case study or live site (if available)

**Case Studies:**
- Detailed case studies for 2-3 major projects
- Include: Challenge, Solution, Results, Technologies Used
- Before/after metrics for SEO projects

### 5. Blog Page (/blog)
**Blog Layout:**
- Grid of blog post cards
- Each card: featured image, title, excerpt, date, read time, category tags
- Categories: SEO Tips, Prompt Engineering, Web Development, Industry Insights
- Search functionality
- Pagination or infinite scroll

**Individual Blog Post Page (/blog/[slug]):**
- Full blog post with proper formatting
- Table of contents for longer posts
- Author bio section
- Related posts section
- Social sharing buttons
- Comment section (optional)

### 6. Contact Page (/contact)
**Contact Form:**
- Fields: Name, Email, Subject, Message
- Form validation
- Success/error messages
- Email integration (using services like Resend, SendGrid, or EmailJS)

**Contact Information:**
- Email address
- Social media links (LinkedIn, Twitter, GitHub, etc.)
- Location (if you want to share)

**Additional Elements:**
- Availability status
- Estimated response time
- Alternative contact methods

### 7. Custom 404 Page
- Friendly error message
- Navigation links back to home or main pages
- Search functionality
- Consistent with overall design

---

## Design Requirements

### Visual Design
1. **Modern & Professional:** Clean, minimalist design with strategic use of white space
2. **Color Palette:** 
   - Primary color (e.g., #3B82F6 - blue)
   - Secondary color (e.g., #8B5CF6 - purple)
   - Accent color (e.g., #10B981 - green)
   - Neutral colors for text and backgrounds
3. **Typography:**
   - Heading font: Modern sans-serif (e.g., Poppins, Inter)
   - Body font: Readable sans-serif (e.g., Open Sans, Roboto)
   - Proper font hierarchy
4. **Imagery:**
   - High-quality images
   - Consistent image treatment (filters, overlays)
   - Placeholder images where needed
5. **Icons:** Use a consistent icon library (e.g., Heroicons, Lucide, or Font Awesome)

### Interactive Elements
1. **Animations:**
   - Smooth page transitions
   - Scroll-triggered animations (fade-in, slide-in)
   - Hover effects on buttons and cards
   - Loading animations
2. **Navigation:**
   - Sticky header with smooth scroll
   - Mobile hamburger menu
   - Active page indicator
   - Smooth scroll to sections
3. **Micro-interactions:**
   - Button hover states
   - Form input focus states
   - Card hover effects
   - Smooth transitions

### Responsive Design
- **Mobile (320px - 767px):** Single column layout, hamburger menu, touch-friendly buttons
- **Tablet (768px - 1023px):** Two-column layouts where appropriate, optimized spacing
- **Desktop (1024px+):** Multi-column layouts, full navigation, optimal reading width

---

## Component Structure

### Reusable Components to Create:
1. **Header/Navigation:**
   - Logo
   - Navigation menu (desktop & mobile)
   - CTA button
   - Sticky behavior

2. **Footer:**
   - Quick links
   - Social media icons
   - Copyright information
   - Newsletter signup (optional)

3. **Button Component:**
   - Primary, secondary, and outline variants
   - Different sizes
   - Loading states

4. **Card Component:**
   - Service cards
   - Project cards
   - Blog post cards
   - Testimonial cards

5. **Section Container:**
   - Consistent padding and margins
   - Background variants

6. **Form Components:**
   - Input fields
   - Textarea
   - Submit button
   - Validation messages

7. **SEO Component:**
   - Reusable metadata component for all pages

---

## Content Guidelines

### Tone & Voice
- Professional yet approachable
- Clear and concise
- Highlighting expertise without being overly technical
- Leveraging English degree for excellent communication

### Key Messages
1. **Expertise:** Demonstrate deep knowledge in SEO, prompt engineering, and web development
2. **Results-Oriented:** Focus on outcomes and value delivered to clients
3. **Versatility:** Showcase the unique combination of technical skills and communication abilities (English degree)
4. **Innovation:** Highlight expertise in emerging fields like prompt engineering

---

## Performance Optimization

1. **Image Optimization:**
   - Use Next.js Image component
   - WebP format with fallbacks
   - Lazy loading
   - Proper sizing and responsive images

2. **Code Optimization:**
   - Code splitting
   - Tree shaking
   - Minification
   - Remove unused CSS

3. **Loading Performance:**
   - Optimize fonts (use next/font)
   - Minimize third-party scripts
   - Implement caching strategies
   - Use CDN for static assets

4. **Core Web Vitals:**
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

---

## Accessibility Requirements

1. **WCAG 2.1 AA Compliance:**
   - Proper color contrast ratios
   - Keyboard navigation support
   - Screen reader compatibility
   - Focus indicators
   - Alt text for all images
   - Semantic HTML
   - ARIA labels where needed

2. **Forms:**
   - Proper labels
   - Error messages
   - Required field indicators

---

## Additional Features

### Nice-to-Have Features:
1. **Dark Mode Toggle:** Allow users to switch between light and dark themes
2. **Newsletter Signup:** Integrate with email service (Mailchimp, ConvertKit)
3. **Analytics:** Google Analytics or Plausible integration
4. **Live Chat:** Optional chat widget
5. **Language Toggle:** If you want to offer content in multiple languages
6. **Downloadable Resume:** PDF download option
7. **Project Filters:** Filter portfolio by technology or service type
8. **Search Functionality:** Site-wide search

---

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx (root layout with metadata)
│   ├── page.tsx (home page)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── not-found.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   ├── ContactForm.tsx
│   └── SEO.tsx
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
└── data/
    ├── projects.ts
    ├── services.ts
    └── blog-posts.ts
```

---

## Deployment Considerations

- **Platform:** Vercel (recommended for Next.js) or Netlify
- **Domain:** Custom domain setup
- **Environment Variables:** For API keys, email services, etc.
- **Analytics:** Set up tracking
- **Monitoring:** Error tracking (Sentry)

---

## Success Criteria

The website should:
✅ Load in under 3 seconds on mobile
✅ Score 90+ on Google PageSpeed Insights
✅ Be fully responsive on all devices
✅ Have proper SEO implementation
✅ Include all specified pages and sections
✅ Have smooth animations and interactions
✅ Be accessible (WCAG 2.1 AA)
✅ Have clean, maintainable code
✅ Include TypeScript types for all components
✅ Have proper error handling
✅ Include form validation
✅ Have a professional, modern design

---

## Notes for Bold.new

- Use placeholder content where specific information is not provided
- Implement best practices for Next.js 14 App Router
- Use Tailwind CSS utility classes efficiently
- Create reusable components
- Implement proper TypeScript typing
- Add comments for complex logic
- Follow Next.js naming conventions
- Optimize for performance from the start
- Make the design visually impressive and professional
- Ensure the code is production-ready

---

## Example Content Snippets

### Hero Section Headline Options:
- "Transforming Digital Presence Through SEO, AI, and Code"
- "Where English Meets Engineering: SEO Expert, Prompt Engineer & Developer"
- "Crafting Digital Success Stories with SEO, AI & Web Development"

### About Page Introduction Example:
"With a BS in English and a passion for technology, I bridge the gap between compelling communication and technical excellence. My journey from literature to code has equipped me with a unique perspective: I don't just build websites and optimize search rankings—I craft digital experiences that tell stories and drive results."

---

**Remember:** This website should showcase Anam Shabbir as a versatile professional who combines technical expertise in SEO, prompt engineering, and web development with strong communication skills from an English background. The design should be modern, professional, and impressive enough to serve as a portfolio piece itself.
