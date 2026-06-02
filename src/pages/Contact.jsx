import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaSpinner } from "react-icons/fa";
import styles from "../styles/Contact.module.css";
import { contactReasons, personalInfo } from "../data/siteContent";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import ScrambleText from "../components/ScrambleText";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const validateForm = (formData) => {
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
    if (name.length < 3) return "Name must be at least 3 characters long.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid email address.";
    if (message.length < 5) return "Message must be at least 5 characters long.";
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const validationError = validateForm(formData);
    if (validationError) {
      setPopup({ show: true, type: "error", message: validationError });
      return;
    }
    setLoading(true);
    formData.append("subject", "New Client Contact Message");
    formData.append("from_name", "Portfolio Contact Form");
    try {
      setPopup({ show: true, type: "success", message: "Message sent successfully!" });
      event.target.reset();
    } catch (error) {
      setPopup({ show: true, type: "error", message: "Unable to send right now. Please try again shortly." });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup({ show: false, type: "", message: "" }), 3000);
    }
  };

  return (
    <section className={styles.contactSection}>
      <Helmet>
        <title>Contact | Jerry Chinonso — Full-Stack Developer</title>
        <meta name="description" content="Get in touch to start your project. Available for freelance and full-time roles." />
      </Helmet>

      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fade}
      >
        <ScrambleText as="p" className={styles.eyebrow} text="Contact" />
        <h1>Ready to start your project?<br />Let's build something impactful.</h1>
        <p className={styles.lead}>
          If you have a project idea, want to refresh your website, or need a
          dependable developer to help bring structure to your product, I'd be
          glad to hear from you.
        </p>
      </motion.div>

      {/* Main layout */}
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          <motion.article
            className={styles.infoCard}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Get in touch</h2>
            <p>I enjoy working on products that need both thoughtful design energy and solid technical execution.</p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.iconCircle}>
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3>Location</h3>
                  <p>{personalInfo.location}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={`${styles.iconCircle} ${styles.emailCircle}`}>
                  <FaEnvelope />
                </span>
                <div>
                  <h3>Email</h3>
                  <p>{personalInfo.email}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={`${styles.iconCircle} ${styles.phoneCircle}`}>
                  <FaPhoneAlt />
                </span>
                <div>
                  <h3>Phone</h3>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            className={styles.reasonCard}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <h2>You can reach out if you…</h2>
            <ul>
              {contactReasons.map((reason, i) => (
                <motion.li
                  key={reason}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  custom={i * 0.1}
                >
                  {reason}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* Form */}
        <motion.form
          className={styles.contactForm}
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
        >
          <h2>Send a message</h2>
          <p className={styles.formIntro}>Share a few details and I'll get back to you as soon as I can.</p>

          <input type="checkbox" name="botcheck" className={styles.hiddenField} tabIndex="-1" autoComplete="off" />

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Your name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Your email" required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" placeholder="Phone number" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="Project subject" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell me a little about the project, goal, or support you need..."
              rows="6"
              required
            />
          </div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={!loading ? { y: -2 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            disabled={loading}
          >
            {loading ? (
              <span className={styles.spinnerWrapper}>
                <FaSpinner className={styles.spinner} /> Sending…
              </span>
            ) : (
              <>Send Message <ArrowRight size={15} /></>
            )}
          </motion.button>
        </motion.form>
      </div>

      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className={`${styles.popup} ${popup.type === "success" ? styles.success : styles.error}`}
          >
            {popup.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
