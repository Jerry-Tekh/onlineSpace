import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "../styles/Portfolio.module.css";
import { processSteps, projectsData, skills } from "../data/siteContent";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import ScrambleText from "../components/ScrambleText";

const categories = ["All", "Frontend", "Backend", "Fullstack", "Mobile"];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: {
    opacity: 0, scale: 0.95, y: 16,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className={styles.portfolioSection}>
      <Helmet>
        <title>Portfolio | Jerry Chinonso — Full-Stack &amp; Mobile Developer</title>
        <meta name="description" content="Selected web and mobile projects showcasing clean code and user-friendly design." />
      </Helmet>

      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fade}
      >
        <ScrambleText as="p" className={styles.eyebrow} text="Portfolio" />
        <h1>Selected projects — web &amp; mobile</h1>
        <p className={styles.lead}>
          These projects show how I approach product structure, interaction, and
          delivery. Each one is shaped to feel useful, responsive, and alive as
          users move through the experience.
        </p>
      </motion.div>

      {/* Filter Pills */}
      <div className={styles.filterWrap}>
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
              {cat !== "All" && (
                <span className={styles.filterCount}>
                  {cat === "All"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.gridWrap}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              custom={i}
            >
              {/* Image */}
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />

                {/* Overlay on hover */}
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayLinks}>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className={styles.overlayBtn}>
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className={styles.overlayBtn}>
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                <span className={styles.cardNum}>{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.cardType}>{project.type || "Web"}</span>
                </div>

                <h3>{project.title}</h3>
                <p className={styles.summary}>{project.summary}</p>

                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>

                <div className={styles.outcomeBox}>
                  <p>{project.outcome}</p>
                </div>

                <div className={styles.cardFooter}>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.p
            className={styles.emptyState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects in this category yet — check back soon.
          </motion.p>
        )}
      </div>


        
        {/* ── SKILLS DISPLAY — editorial scattered layout ── */}
      <section className={styles.skillsSection}>
        <div className={styles.skillsInner}>
          <div className={styles.skillsHeader}>
            <ScrambleText as="p" className={styles.eyebrow} text="Tech Stack" />
            <h2>Tools &amp; technologies I work with.</h2>
          </div>

          <div className={styles.skillsScatter}>
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={i * 0.05}
                  style={{ "--delay": `${i * 0.04}s` }}
                >
                  <Icon className={styles.skillIcon} />
                  <span className={styles.skillLabel}>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Process */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeading}>
          <ScrambleText as="p" className={styles.eyebrow} text="Process" />
          <h2>How I move a project from idea to launch</h2>
        </div>
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <motion.article
              key={step.title}
              className={styles.processCard}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              custom={i}
            >
              <span>0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className={styles.ctaSection}
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <h2>Need a site, app, or mobile product that feels polished and alive?</h2>
        <p>I can help shape the experience, improve the structure, and build it into something strong enough to launch with confidence.</p>
        <NavLink to="/contact" className={styles.ctaButton}>
          Let's work together <ArrowRight size={15} />
        </NavLink>
      </motion.section>
    </section>
  );
}
