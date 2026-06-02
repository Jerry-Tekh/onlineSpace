import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import styles from "../styles/Footer.module.css";
import { personalInfo } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <span className={styles.bannerEyebrow}>
            Need a reliable full-stack developer?
          </span>
          <h2 className={styles.ctaTitle}>
            I build reliable web applications that users actually enjoy
          </h2>
          <p className={styles.ctaSubtext}>
            I help startups, businesses, and teams design and develop modern web
            applications using React, Node.js, and scalable backend systems.
            Available for remote and on-site roles.
          </p>
          <div className={styles.ctaActions}>
            <a
              href="https://wa.me/qr/QJPCJCHFBWF7G1"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaButton}
            >
              Chat on WhatsApp <ArrowUpRight size={16} />
            </a>
            <NavLink to="/contact" className={styles.ctaButtonAlt}>
              Send a Message
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.footerMain}>
        <div className={styles.logoCol}>
          {/*<div className={styles.logoBox}>J</div>*/}
          <p className={styles.logoName}>Jerry Chinonso</p>
          <p className={styles.logoBio}>
            Full-stack software developer based in Abuja, Nigeria. Building fast, scalable, and user-focused web products.
          </p>
          <div className={styles.footerSocials}>
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className={styles.footerSocialIcon}><Github size={15} /></a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className={styles.footerSocialIcon}><Linkedin size={15} /></a>
            <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className={styles.footerSocialIcon}><Twitter size={15} /></a>
            <a href={`mailto:${personalInfo.email}`} className={styles.footerSocialIcon}><Mail size={15} /></a>
          </div>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linkGroup}>
            <h3>Navigation</h3>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>Reach Out</h3>
            <ul>
              <li><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></li>
              <li>
                <span className={styles.locationText}>
                  {personalInfo.location}<br />
                  Available for remote work worldwide
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>Services</h3>
            <ul>
              <li><NavLink to="/services">Frontend Dev</NavLink></li>
              <li><NavLink to="/services">Backend APIs</NavLink></li>
              <li><NavLink to="/services">Full-Stack Apps</NavLink></li>
              <li><NavLink to="/services">Mobile App Dev</NavLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.bottomCopy}>
          © {new Date().getFullYear()} <span>Jerry Chinonso</span> · Full-Stack Developer, Nigeria
        </p>
        <p className={styles.bottomTagline}>
          Trusted by startups &amp; businesses for modern, scalable web applications.
        </p>
      </div>

      <p className={styles.hiddenSeoText}>
        Full-stack developer in Nigeria available for remote and on-site opportunities in React, Node.js, JavaScript, and modern web technologies.
      </p>
    </footer>
  );
}
