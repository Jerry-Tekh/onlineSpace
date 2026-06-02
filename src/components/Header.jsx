import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MoonStar, SunMedium } from "lucide-react";
import styles from "../styles/Header.module.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClassName = ({ isActive }) => (isActive ? styles.active : styles.notActive);

  return (
    <header className={styles.header} data-scrolled={scrolled} data-header>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClassName} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
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
        </div>
        </nav>

      </div>
    </header>
  );
}
