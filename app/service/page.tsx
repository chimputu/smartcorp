// app/services/page.tsx
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

const services = [
  {
    icon: '☁️',
    title: 'Cloud Computing',
    description: 'AWS, Azure & Google Cloud migration, management, and optimization for scalable infrastructure.',
    features: ['Cloud Migration', 'Serverless Architecture', 'DevOps Integration', 'Cost Optimization'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    description: 'End-to-end security solutions including threat detection, compliance, and risk management.',
    features: ['Penetration Testing', 'Security Audits', 'Incident Response', 'Compliance Consulting'],
    color: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: '💻',
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise applications built with modern technologies.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Enterprise Systems'],
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    icon: '📡',
    title: 'Network Solutions',
    description: 'Reliable network design, installation, and management for seamless connectivity.',
    features: ['Network Design', 'WiFi Solutions', 'Fiber Optics', 'Network Security'],
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Intelligent automation and machine learning solutions to streamline operations.',
    features: ['Machine Learning', 'Predictive Analytics', 'Process Automation', 'Chatbots'],
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    features: ['Business Intelligence', 'Data Visualization', 'Big Data', 'Reporting'],
    color: 'bg-teal-50',
    iconColor: 'text-teal-500',
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We analyze your needs, goals, and existing infrastructure to define the scope.' },
  { step: '02', title: 'Strategy', description: 'Our team designs a tailored solution roadmap aligned with your business objectives.' },
  { step: '03', title: 'Development', description: 'We build your solution using agile methodologies and modern tech stacks.' },
  { step: '04', title: 'Deployment', description: 'Seamless launch with full testing, training, and ongoing support.' },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 min-h-[60vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/back2.jpg"
            alt="Services Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-blue-400 font-semibold tracking-wider uppercase mb-4">What We Do</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From cloud infrastructure to AI-powered solutions, we deliver end-to-end ICT services that drive digital transformation for Zambian businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology services designed to scale your business and secure your digital assets.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">How We Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Process</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures every project is delivered on time, on budget, and above expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <span className="text-5xl font-bold text-blue-100 block mb-4">{item.step}</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index !== process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">The Difference</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h3>
              <div className="space-y-6">
                {[
                  { title: 'Zambian Expertise', desc: 'Local team that understands the unique challenges of doing business in Zambia.' },
                  { title: 'End-to-End Delivery', desc: 'From strategy to deployment and support — we handle everything in-house.' },
                  { title: 'Future-Ready Tech', desc: 'We build with scalable, modern technologies that grow with your business.' },
                  { title: 'Security First', desc: 'Every solution is designed with security and compliance at its core.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] bg-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src="/person.jpg"
                alt="Our team working"
                fill
                className="object-cover"
              />
            </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors duration-300"
              >
                Get a Quote
              </a>
              <a
                href="/about"
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}