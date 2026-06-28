// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We deliver nothing short of the best. Every project is executed with precision, attention to detail, and a commitment to exceeding client expectations.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Transparency and honesty form the foundation of our relationships. We keep our promises and communicate openly with every client.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We embrace emerging technologies and creative thinking to solve complex problems and keep our clients ahead of the curve.',
  },
  {
    icon: '🌍',
    title: 'Impact',
    description: "Beyond profit, we aim to transform Zambia's digital landscape and empower local businesses through accessible technology.",
  },
];

const milestones = [
  { year: '2025', event: 'SmartCorp founded in Lusaka, Zambia' },
  { year: '2025', event: 'PACRA verified and ICTAZ registered' },
  { year: '2025', event: 'Delivered first enterprise cloud migration project' },
  { year: '2026', event: 'Expanded team to 4 expert engineers' },
  { year: '2026', event: 'Launched AI, ML & cybersecurity division' },
  { year: '2026', event: '10+ successful projects across Zambia' },
];

const techStack = [
  { category: 'Frontend', items: ['Next.js', 'React.js', 'TypeScript', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Django'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'Prisma ORM'] },
  { category: 'AI / ML', items: ['Machine Learning', 'Predictive Analytics', 'NLP'] },
  { category: 'Security', items: ['Penetration Testing', 'OWASP', 'Ethical Hacking'] },
  { category: 'Infrastructure', items: ['Networking', 'Cloud Architecture', 'DevOps'] },
];

const certifications = [
  { name: 'PACRA Verified', description: 'Patents and Companies Registration Agency' },
  { name: 'ICTAZ Registered', description: 'Information and Communications Technology Association of Zambia' },
  { name: 'ISO Compliant', description: 'Following international ICT standards and regulations' },
  { name: 'OWASP Aligned', description: 'Web application security best practices' },
  { name: 'Data Protection', description: 'Compliance with Zambian cyber laws and regulations' },
  { name: 'Global Standards', description: 'Compliance with world organizational bodies' },
];

const partners = [
  { name: 'Ministry of Education', logo: '/moe.jpg' },
  { name: 'Zambia Cyber Security Initiative Foundation', logo: '/cyber.png' },
  { name: 'ICTAZ', logo: '/ictaz.jpg' },
  { name: 'Zamtel', logo: '/zamtel.png' },
  { name: 'PACRA', logo: '/pacra.png' },
  { name: 'Bank of Zambia', logo: '/boz.png' },
  { name: 'MTN Zambia', logo: '/mtn.jpg' },
  { name: 'Airtel Zambia', logo: '/airtel.png' },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ba1.jpg"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-blue-400 font-semibold tracking-wider uppercase mb-4">About Us</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Zambia Through Technology
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              SmartCorp is a Zambian-owned ICT company founded in 2025, dedicated to delivering high-quality technology solutions that drive business growth and digital transformation across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/ai.jpg"
                  alt="SmartCorp team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Vision to Reality
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025 in Lusaka, Zambia, SmartCorp began with a simple mission: to bridge the technology gap for local businesses. We saw that many Zambian enterprises struggled with outdated systems, security vulnerabilities, and limited access to modern digital tools.
                </p>
                <p>
                  What started as a vision has quickly grown into a trusted ICT partner for businesses across Zambia. Today, our team of 4 expert engineers brings together diverse skills in full-stack development, AI/ML, cybersecurity, and cloud infrastructure — all backed by proper registration and compliance.
                </p>
                <p>
                  With over 10 successful projects delivered, PACRA verification, and ICTAZ registration, we have proven that world-class technology solutions can be built right here in Zambia, by Zambians, for Zambians — fully compliant with local laws and global standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver innovative, reliable, and affordable ICT solutions that empower Zambian businesses to compete globally, streamline operations, and achieve sustainable growth through technology — while maintaining full compliance with Zambian ICT laws and international regulations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Zambia's most trusted and compliant technology partner, driving digital transformation across all sectors while adhering to the highest standards of security, ethics, and regulatory compliance — positioning Zambian businesses at the forefront of Africa's digital economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Our Technology</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tech Stack</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage modern, industry-standard technologies to build scalable, secure, and high-performance solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-blue-500 mb-4 uppercase tracking-wide">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Trust & Compliance</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Registered & Certified</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We operate with full transparency, legal compliance, and adherence to international standards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-gray-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners & Affiliations - Infinite Sliding Marquee with Rounded Icons */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Our Network</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted Partners & Affiliations</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading institutions, regulators, and industry bodies to deliver compliant, world-class solutions.
            </p>
          </motion.div>
        </div>

        {/* Marquee Track */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear' as const,
              },
            }}
          >
            {/* Double the partners array for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden p-4"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">What Drives Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Milestones</h3>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-blue-500 font-bold text-lg">{milestone.year}</span>
                  <p className="text-gray-700 mt-1">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">The SmartCorp Difference</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'We understand the unique challenges of doing business in Zambia. Our solutions are tailored to local needs while meeting global standards.',
              },
              {
                title: 'Fully Compliant',
                description: 'PACRA verified, ICTAZ registered, and compliant with Zambian cyber laws and international regulations. Your data and operations are in safe hands.',
              },
              {
                title: 'Dedicated Team',
                description: 'Our 4 expert engineers are committed to your success. You get personalized attention and direct access to the people building your solutions.',
              },
              {
                title: 'Modern Tech Stack',
                description: 'We use industry-standard technologies like Next.js, React, Node.js, Python, PostgreSQL, and AI/ML to build future-ready solutions.',
              },
              {
                title: 'Security First',
                description: 'With expertise in penetration testing, OWASP standards, and ethical hacking, we ensure your systems are protected against modern threats.',
              },
              {
                title: 'End-to-End Service',
                description: 'From consultation to deployment and ongoing support, we handle everything. No need to juggle multiple vendors.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how SmartCorp can transform your business with innovative, compliant, and secure ICT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/service"
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}