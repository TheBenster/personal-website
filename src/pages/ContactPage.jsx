import React, { useState } from "react";
import "../styles/contact-page.css";

const Icon = ({ name, className = "" }) => {
  const icons = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    mapPin: (
      <>
        <path d="M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4 20-7Z" />
        <path d="M22 2 11 13" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={`contact-icon ${className}`}
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
    >
      {icons[name]}
    </svg>
  );
};

const ContactPage =
  () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        // This is a placeholder for your actual form submission logic
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log({ email, message });
        setSubmitStatus("success");
        // Reset form
        setEmail("");
        setMessage("");
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      }
    };

    // Social media links
    const socialLinks = [
      {
        name: "GitHub",
        icon: "/img/socials/instagram.png",
        url: "https://www.instagram.com/bdvdbvr",
      },
      // {
      //   name: "LinkedIn",
      //   icon: "fab fa-linkedin",
      //   url: "https://linkedin.com/in/yourusername",
      // },
      // {
      //   name: "Twitter",
      //   icon: "fab fa-twitter",
      //   url: "https://twitter.com/yourusername",
      // },
      // {
      //   name: "Instagram",
      //   icon: "fab fa-instagram",
      //   url: "https://instagram.com/yourusername",
      // },
    ];

    return (
      <section id="contact">
        <div className="contact-page">
          <div className="contact-wrapper">
            <div className="contact-left">
              <h2 className="contact-heading">Let's Connect</h2>
              <p className="contact-intro">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>

              <div className="contact-info">
                <div className="contact-info-item">
                  <Icon name="mail" />
                  <span>bbeaver@gmail.com</span>
                </div>
                <div className="contact-info-item">
                  <Icon name="mapPin" />
                  <span>Asheville, NC</span>
                </div>
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.name}
                  >
                    <img src={link.icon} alt="" />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="Your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="How can I help you?"
                    rows={5}
                  />
                </div>

                <div className="submit">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    <Icon name="send" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>

                {submitStatus === "success" && (
                  <div className="success-message">
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="error-message">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default ContactPage;
