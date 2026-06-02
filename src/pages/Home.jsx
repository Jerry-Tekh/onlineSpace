import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ScrambleText from "../components/ScrambleText";
import styles from "../styles/Home.module.css";
import {
  personalInfo,
  highlightStats,
  projectsData,
  serviceCards,
  skills,
  timeline,
  valueCards,
} from "../data/siteContent";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const marqueeSkills = [...skills, ...skills];

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <Helmet>
        <title>
          Full-Stack & Mobile Developer | React & React Native | Jerry Chinonso
        </title>
        <meta
          name="description"
          content="I build scalable web and mobile applications using React, React Native, Node.js, and modern technologies. Available for freelance and full-time roles."
        />
      </Helmet>

      {/* ── HERO ── */}
      <div className={styles.heroWrap}>
        <motion.aside
          className={styles.profileCard}
          initial="hidden"
          animate="visible"
          variants={slideLeft}
        >
         {/* <div className={styles.profileImageWrap}>
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className={styles.profileImage}
            />*
          </div>*/}

          <span className={styles.profileTag}>
            <span className={styles.tagDot} />
            Available for work
          </span>

          <h2>{personalInfo.name}</h2>
          <p className={styles.profileRole}>{personalInfo.title}</p>
          <p className={styles.profileBio}>{personalInfo.shortBio}</p>

          <div className={styles.profileMeta}>
            <MapPin size={13} />
            <span>{personalInfo.location}</span>
          </div>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
            className={styles.cvButton}
          >
            Download Resume <ArrowRight size={15} />
          </a>
        </motion.aside>

        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroCard}
            initial="hidden"
            animate="visible"
            variants={slideRight}
            custom={1}
          >
            <div>
              <ScrambleText
                as="p"
                className={styles.eyebrow}
                text="Full-Stack & Mobile Developer"
              />
              <h1 className={styles.heroTitle}>
                I design &amp; build modern web &amp; mobile experiences with{" "}
                <em>confidence.</em>
              </h1>
              <p className={styles.heroSubtitle}>{personalInfo.tagline}</p>

              <div className={styles.heroActions}>
                <NavLink to="/portfolio" className={styles.primaryBtn}>
                  Explore Projects <ArrowRight size={15} />
                </NavLink>
                <NavLink to="/contact" className={styles.secondaryBtn}>
                  Start a Conversation
                </NavLink>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <Twitter size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.socialLink}
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          <div className={styles.statsRow}>
            {highlightStats.map((item, i) => (
              <motion.article
                key={item.label}
                className={styles.statCard}
                variants={fade}
                initial="hidden"
                animate="visible"
                custom={i + 2}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS MARQUEE ── */}
      <div className={styles.marqueeSection}>
        <p className={styles.marqueeLabel}>Tech Stack &amp; Tools</p>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((n) => (
            <div
              key={n}
              className={`${styles.marqueeInner} ${n === 1 ? styles.marqueeInner2 : ""}`}
            >
              {marqueeSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={`${skill.name}-${i}`}
                    className={styles.marqueeItem}
                  >
                    <Icon />
                    {skill.name}
                    <span className={styles.marqueeDivider}>·</span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHead}>
          <ScrambleText
            as="p"
            className={styles.sectionEyebrow}
            text="What I Do"
          />
          <h2 className={styles.sectionTitle}>
            Design · Develop · <em>Deploy</em>
          </h2>
        </div>
        <div className={styles.servicesGrid}>
          {serviceCards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className={styles.serviceCard}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <div className={styles.serviceNumGrid}>
                  <div className={styles.serviceIconWrap}>
                    <Icon />
                  </div>
                  <span className={styles.serviceNum}>0{i + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── EXPERIENCE / STORY ── */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceInner}>
          <motion.div
            className={styles.storyBlock}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ScrambleText
              as="p"
              className={styles.sectionEyebrow}
              text="What you can expect"
            />
            <h2>Calm collaboration with premium execution.</h2>
            <ul className={styles.checkList}>
              <li>
                Responsive web pages that work smoothly across all screen sizes
              </li>
              <li>
                Cross-platform mobile apps for iOS &amp; Android with React
                Native
              </li>
              <li>Frontend polish without losing backend reliability</li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.timelineStack}>
              {timeline.map((item) => (
                <div key={item.title} className={styles.timelineItem}>
                  <div className={styles.timelineLine}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineConnector} />
                  </div>
                  <div className={styles.timelineBody}>
                    <p className={styles.timelinePeriod}>{item.period}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRINCIPLES + SKILLS ── */}
      <section className={styles.principlesSection}>
        <div className={styles.principlesGrid}>
          <div>
            <ScrambleText
              as="p"
              className={styles.sectionEyebrow}
              text="Work Style"
            />
            <h2 className={styles.sectionTitle}>
              The principles
              <br />
              behind everything I build.
            </h2>
            {/* <div className={styles.valuesGrid}>
              {valueCards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className={styles.valueCard}
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={i}
                  >
                    <div className={styles.valueIconWrap}><Icon /></div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>*/}
          </div>
          <div className={styles.valuesGrid}>
            {valueCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className={styles.valueCard}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                >
                  <div className={styles.valueIconWrap}>
                    <Icon />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* <motion.article
            className={styles.skillsPanel}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className={styles.sectionEyebrow}>Toolkit</p>
            <h3>Web &amp; mobile technologies I use to ship modern products.</h3>
            <div className={styles.skillsGrid}>
              {skills.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    className={styles.skillChip}
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    custom={i * 0.06}
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.article>*/}
        </div>
      </section>

      {/* ── FEATURED WORK — BENTO GRID ── */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredInner}>
          <div className={styles.featuredHead}>
            <div>
              <ScrambleText
                as="p"
                className={styles.sectionEyebrow}
                text="Featured Work"
              />
              <h2 className={styles.sectionTitle}>
                A quick look at products
                <br />
                I've helped shape.
              </h2>
            </div>
            <NavLink to="/portfolio" className={styles.viewAllLink}>
              Full Portfolio <ArrowRight size={14} />
            </NavLink>
          </div>

          <div className={styles.bentoGrid}>
            {projectsData.map((project, i) => (
              <motion.article
                key={project.id}
                className={styles.bentoCard}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={i * 0.1}
              >
                <div className={styles.bentoImgWrap}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  {/*<span className={styles.bentoNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.bentoType}>{project.type || "Web"}</span>*/}
                </div>

                <div className={styles.bentoBody}>
                  <span className={styles.bentoCat}>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>

                  <div className={styles.bentoTechRow}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.bentoTech}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.bentoLinks}>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.bentoLinkBtn}
                      >
                        Live <ExternalLink size={11} />
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.bentoLinkBtn}
                      >
                        GitHub <FaGithub size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <p className={styles.hiddenSeoText}>
        Jerry Chinonso is a full-stack and mobile software developer based in
        Abuja, Nigeria, specializing in React, React Native, Expo, Node.js,
        JavaScript, MongoDB, and PostgreSQL. Available for freelance, remote,
        and full-time software development roles.
      </p>
    </section>
  );
}
