import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MoonStar, SunMedium } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Header.module.css";
import logo from "../assets/resume/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -16,
    scaleY: 0.92,
    transformOrigin: "top center",
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transformOrigin: "top center",
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scaleY: 0.95,
    transformOrigin: "top center",
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -4 },
};

export default function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest("[data-header]")) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const linkClassName = ({ isActive }) =>
    isActive ? styles.active : styles.notActive;

  return (
    <>
      {/* Backdrop blur overlay when menu is open on mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <header className={styles.header} data-scrolled={scrolled} data-header>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
            <img src={logo} alt="Jerry logo" className={styles.logoImage} />
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClassName}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <MoonStar size={15} /> : <SunMedium size={15} />}
              <span>{theme === "light" ? "Dark" : "Light"}</span>
            </button>

            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
            >
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <FaTimes /> : <FaBars />}
              </motion.span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown — drops from under the header */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-label="Mobile navigation"
              data-header
            >
              <div className={styles.mobileMenuInner}>
                {navItems.map((item) => (
                  <motion.div key={item.to} variants={itemVariants}>
                    <NavLink
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={linkClassName}
                      end={item.to === "/"}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className={styles.mobileDivider} />

                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className={styles.mobileCtaBtn}
                  >
                    Start a Project →
                  </NavLink>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
