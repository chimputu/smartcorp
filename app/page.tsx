// app/page.tsx
'use client';


import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Footer from './components/Footer';

// ─── TYPES ──────────────────────────────────────────────

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface Appreciation {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

interface Stat {
  value: string;
  label: string;
  numericValue: number;
  suffix: string;
}

interface Developer {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  experience: string;
}

// ─── DATA ───────────────────────────────────────────────

const slides: Slide[] = [
  {
    id: 1,
    image: '/ai1.jpg',
    title: 'Innovative ICT Solutions',
    subtitle: 'Transforming Zambian businesses through cutting-edge technology',
  },
  {
    id: 2,
    image: '/ai.jpg',
    title: 'Cloud & Infrastructure',
    subtitle: 'Scalable, secure, and reliable systems for your enterprise',
  },
  {
    id: 3,
    image: '/maback.jpg',
    title: 'Cybersecurity Excellence',
    subtitle: 'Protecting your digital assets with advanced security',
  },
];

const services: Service[] = [
  {
    icon: '☁️',
    title: 'Cloud Computing',
    description: 'AWS, Azure & Google Cloud migration, management, and optimization for scalable infrastructure.',
    features: ['Cloud Migration', 'Serverless Architecture', 'DevOps Integration'],
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    description: 'End-to-end security solutions including threat detection, compliance, and risk management.',
    features: ['Penetration Testing', 'Security Audits', 'Incident Response'],
  },
  {
    icon: '💻',
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise applications built with modern technologies.',
    features: ['Web Applications', 'Mobile Apps', 'API Development'],
  },
  {
    icon: '📡',
    title: 'Network Solutions',
    description: 'Design, implementation, and management of robust enterprise network infrastructures.',
    features: ['Network Design', 'Wi-Fi Solutions', 'SD-WAN Implementation'],
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Intelligent automation and machine learning solutions to optimize business processes.',
    features: ['Process Automation', 'Predictive Analytics', 'Chatbot Development'],
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    features: ['Business Intelligence', 'Data Warehousing', 'Real-time Dashboards'],
  },
];

const appreciations: Appreciation[] = [
  {
    name: 'Dr Muanei. S',
    role: 'CTO, TechVentures Inc.',
    image: '/client-1.jpg',
    text: 'Their cloud migration strategy reduced our infrastructure costs by 40% while improving performance. Exceptional team!',
    rating: 5,
  },
  {
    name: 'Mr Bwalya M',
    role: 'IT Director, GlobalFinance',
    image: '/client-2.jpg',
    text: 'The cybersecurity audit they conducted revealed critical vulnerabilities we never knew existed. Highly professional service.',
    rating: 5,
  },
  {
    name: 'Ngosa Nawakwi',
    role: 'CEO, StartupHub',
    image: '/client-3.jpg',
    text: 'From concept to deployment, their software development team delivered beyond expectations. Our app has 100K+ downloads!',
    rating: 5,
  },
  {
    name: 'Musonda Chola',
    role: 'Operations Manager, RetailMax',
    image: '/client-4.jpg',
    text: 'Their AI automation solution streamlined our inventory management, saving us 200+ hours monthly. Incredible ROI.',
    rating: 5,
  },
];

const stats: Stat[] = [
  { value: '10+', label: 'Projects Delivered', numericValue: 10, suffix: '+' },
  { value: '50+', label: 'Enterprise Clients', numericValue: 50, suffix: '+' },
  { value: '4', label: 'Expert Engineers', numericValue: 4, suffix: '' },
  { value: '99.9%', label: 'Uptime Guaranteed', numericValue: 99.9, suffix: '%' },
];

const developers: Developer[] = [
  {
    name: 'Kafiswe Chimputu',
    role: 'Lead Full-Stack Developer',
    image: '/dev-1.jpg',
    bio: '4+ years building scalable web applications with React, Node.js, and cloud architecture.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    experience: '4 years',
  },
  {
    name: 'Adon Chinyamuka',
    role: 'AI & ML Engineer',
    image: '/dev-2.jpg',
    bio: '4+ years specializing in machine learning pipelines, NLP, and predictive analytics for enterprise solutions.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
    experience: '4 years',
  },
  {
    name: 'Israel Bopili',
    role: 'Cybersecurity Architect',
    image: '/dev-3.jpg',
    bio: '4+ years as a certified ethical hacker with expertise in network security, compliance, and threat intelligence.',
    skills: ['PenTesting', 'SIEM', 'Zero Trust', 'ISO 27001'],
    experience: '4 years',
  },
  {
    name: 'Lloyd Bullya',
    role: 'Cloud Infrastructure Lead',
    image: '/dev-4.jpg',
    bio: '4+ years designing resilient multi-cloud architectures and leading DevOps transformations for enterprise clients.',
    skills: ['Kubernetes', 'Terraform', 'Azure', 'CI/CD'],
    experience: '4 years',
  },
];

// ─── ANIMATION VARIANTS ─────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// ─── COMPONENTS ─────────────────────────────────────────

function HeroCarousel() {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const nextSlide = useCallback((): void => {
    setDirection(1);
    setCurrent((prev: number) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback((): void => {
    setDirection(-1);
    setCurrent((prev: number) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect((): (() => void) => {
    const timer = setInterval(nextSlide, 6000);
    return (): void => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-100">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' as const }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl"
            >
              <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {slides[current].title}
              </motion.h1>
              <motion.p className="text-xl md:text-2xl text-gray-200 mb-8">
                {slides[current].subtitle}
              </motion.p>
              <motion.div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_: Slide, index: number) => (
          <button
            key={index}
            onClick={(): void => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === current ? 'w-8 bg-blue-500' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 right-8 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef<boolean>(false);

  useEffect((): void => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const startTime = performance.now();
      const startValue = 0;
      const endValue = stat.numericValue;

      const animate = (currentTime: number): void => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        
        setCount(Number(currentValue.toFixed(1)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, stat.numericValue]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center"
    >
      <motion.h3
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 }}
        className="text-4xl md:text-5xl font-bold text-blue-500 mb-2"
      >
        {count}{stat.suffix}
      </motion.h3>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat: Stat, index: number) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our ICT Services</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward in the digital age.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service: Service, index: number) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-200"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-5xl mb-6 inline-block"
              >
                {service.icon}
              </motion.div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature: string, fIndex: number) => (
                  <motion.li
                    key={fIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fIndex * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DevelopersSection() {
  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet the Engineers</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four talented Zambian engineers with 4+ years of experience delivering world-class ICT solutions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {developers.map((dev: Developer, index: number) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    {dev.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-500 shadow-sm border border-gray-200">
                  {dev.experience}
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-500 transition-colors duration-300">
                  {dev.name}
                </h4>
                <p className="text-blue-500 font-medium text-sm mb-2">{dev.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {dev.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {dev.skills.map((skill: string, sIndex: number) => (
                    <span
                      key={sIndex}
                      className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AppreciationsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect((): (() => void) => {
    const timer = setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % appreciations.length);
    }, 5000);
    return (): void => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Appreciations</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(appreciations[activeIndex].rating)].map((_: unknown, i: number) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-6 h-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed"
                >
                  &ldquo;{appreciations[activeIndex].text}&rdquo;
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-2xl font-bold text-white">
                    {appreciations[activeIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="text-gray-900 font-semibold text-lg">{appreciations[activeIndex].name}</h4>
                    <p className="text-blue-500">{appreciations[activeIndex].role}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {appreciations.map((_: Appreciation, index: number) => (
              <button
                key={index}
                onClick={(): void => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === activeIndex ? 'w-8 bg-blue-500' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Image
        src="/imaback.jpg"
        alt="CTA background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/80" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Let&apos;s discuss how our ICT solutions can drive innovation and growth for your organization.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors duration-300"
          >
            Schedule Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <StatsSection />
      <ServicesSection />
      <DevelopersSection />
      <AppreciationsSection />
      <CtaSection />
      
    </main>
  );
}