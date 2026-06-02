import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaCode, FaDatabase, FaRocket, FaMobileAlt } from "react-icons/fa";
import { SiExpo, SiReact } from "react-icons/si";
import ScrambleText from "../components/ScrambleText";
import styles from "../styles/Services.module.css";
import { processSteps } from "../data/siteContent";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const services = [
  {
    icon: FaCode,
    title: "Frontend Development (React)",
    desc: "Modern, pixel-perfect interfaces built with React, optimized for performance, accessibility, and great user experience on every device.",
    features: ["React + Vite builds", "Responsive CSS / Tailwind", "Framer Motion animations", "Component-based architecture"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps that feel truly native — built with React Native and Expo, ready for the App Store and Google Play.",
    features: ["React Native + Expo", "iOS & Android support", "Native device APIs", "App Store deployment"],
  },
  {
    icon: FaDatabase,
    title: "Backend Development (Node.js & APIs)",
    desc: "Scalable backend systems, REST APIs, secure authentication, and clean database architecture using Node.js, Express, and PostgreSQL.",
    features: ["REST API design & development", "JWT authentication & security", "PostgreSQL / MongoDB schemas", "Deployment & CI/CD"],
  },
  {
    icon: FaRocket,
    title: "Full-Stack Web Applications",
    desc: "End-to-end product development from idea to deployment, helping businesses launch reliable and maintainable web applications.",
    features: ["MERN / PERN stacks", "Admin dashboards", "E-commerce platforms", "SaaS products"],
  },
];

const whyFeatures = [
  { title: "Clean Code", desc: "Readable, scalable, well-structured code you can maintain and grow." },
  { title: "On-time Delivery", desc: "Clear milestones, honest communication, and no surprises." },
  { title: "SEO Optimized", desc: "Built with performance and search visibility from the ground up." },
  { title: "Mobile-First", desc: "Every interface designed and tested for mobile devices first." },
];

export default function Services() {
  return (
    <section className={styles.servicesPage}>
      <Helmet>
        <title>Services | Jerry Chinonso — Full-Stack &amp; Mobile Developer</title>
        <meta name="description" content="Frontend, backend, full-stack web, and React Native mobile development services." />
      </Helmet>

      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fade}
      >
        <ScrambleText as="p" className={styles.eyebrow} text="What I Offer" />
        <h1 className={styles.heroTitle}>
          Premium web &amp; mobile development services, built to <em>scale.</em>
        </h1>
        <p className={styles.heroPara}>
          From polished frontend interfaces to robust backend systems and cross-platform mobile apps,
          I build the right solution for your product, business, or startup.
        </p>
        <div className={styles.heroActions}>
          <NavLink to="/contact" className={styles.primaryBtn}>
            Start a Project <ArrowRight size={15} />
          </NavLink>
          <NavLink to="/portfolio" className={styles.secondaryBtn}>
            View My Work
          </NavLink>
        </div>
      </motion.div>

      {/* Core Services */}
      <section className={styles.coreSection}>
        <div className={styles.coreInner}>
          <div className={styles.sectionHead}>
            <ScrambleText as="p" className={styles.eyebrow} text="Core Services" />
            <h2 className={styles.sectionTitle}>Everything you need to ship a great product.</h2>
          </div>
          <div className={styles.coreGrid}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  className={`${styles.coreCard} ${i === 1 ? styles.mobileCard : ""}`}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                >
                  <span className={styles.cardNum}>0{i + 1}</span>
                  <div className={styles.cardIconWrap}><Icon /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className={styles.cardFeats}>
                    {s.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className={styles.sectionHead}>
          <ScrambleText as="p" className={styles.eyebrow} text="How I Work" />
          <h2 className={styles.sectionTitle}>A clear, focused process from start to ship.</h2>
        </div>
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className={styles.processStep}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <div className={styles.stepCircle}>{String(i + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why section */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <motion.div
            className={styles.whyContent}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ScrambleText as="p" className={styles.eyebrow} text="Why Work With Me" />
            <h2>Reliable development, clear communication, real results.</h2>
            <p>
              I understand that shipping a product is about more than writing code. It's
              about delivering something that works for real users, meets your business
              goals, and holds up over time — whether on web or mobile.
            </p>
            <p>
              Based in Abuja, Nigeria — available worldwide for remote collaboration.
            </p>
            <NavLink to="/contact" className={styles.primaryBtn} style={{ marginTop: "1.5rem" }}>
              Let's Talk <ArrowRight size={15} />
            </NavLink>
          </motion.div>

          <motion.div
            className={styles.whyFeatures}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                className={styles.whyFeat}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
