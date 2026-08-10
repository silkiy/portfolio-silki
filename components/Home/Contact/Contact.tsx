"use client";

import React, { useState } from "react";
import { BiCopy, BiCheck } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "REQUIRED";
    if (!formData.email.trim()) {
      tempErrors.email = "REQUIRED";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "INVALID";
    }
    if (!formData.subject.trim()) tempErrors.subject = "REQUIRED";
    if (!formData.message.trim()) tempErrors.message = "REQUIRED";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error(result.message);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50 relative bg-background"
      aria-label="Contact Section"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 border-b border-border/50 pb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-foreground tracking-tighter uppercase">
            Initialize Connection
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-2 tracking-widest uppercase">
            SYS.LOG // CONTACT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4 md:space-y-6"
          >
            <p className="font-mono text-xs md:text-sm text-foreground/70 uppercase leading-relaxed mb-6 md:mb-8">
              Available for remote software engineering contracts and Web3 architecture consultations. Ping me directly or use the secure form.
            </p>

            <div className="border border-border/50 bg-background/50 p-4 md:p-6 flex items-center justify-between group transition-colors hover:border-foreground/50">
              <div className="overflow-hidden mr-4">
                <span className="font-mono text-[10px] md:text-xs text-foreground/50 uppercase tracking-widest block mb-1">E-Mail</span>
                <a
                  href="mailto:contact.wildansilki@gmail.com"
                  className="font-mono text-xs sm:text-sm md:text-base font-bold text-foreground hover:underline break-words"
                >
                  contact.wildansilki@gmail.com
                </a>
              </div>
              <button
                onClick={() => handleCopy("contact.wildansilki@gmail.com", "email")}
                className="p-2 border border-transparent hover:border-border transition-colors text-foreground focus:outline-none"
                aria-label="Copy email"
              >
                {copiedText === "email" ? <BiCheck className="w-5 h-5 text-foreground" /> : <BiCopy className="w-5 h-5" />}
              </button>
            </div>

            <div className="border border-border/50 bg-background/50 p-4 md:p-6 flex items-center justify-between group transition-colors hover:border-foreground/50">
              <div>
                <span className="font-mono text-[10px] md:text-xs text-foreground/50 uppercase tracking-widest block mb-1">Phone</span>
                <a
                  href="tel:+6281232522276"
                  className="font-mono text-xs sm:text-sm md:text-base font-bold text-foreground hover:underline"
                >
                  +62 812-3252-2276
                </a>
              </div>
              <button
                onClick={() => handleCopy("+6281232522276", "phone")}
                className="p-2 border border-transparent hover:border-border transition-colors text-foreground focus:outline-none"
                aria-label="Copy phone"
              >
                {copiedText === "phone" ? <BiCheck className="w-5 h-5 text-foreground" /> : <BiCopy className="w-5 h-5" />}
              </button>
            </div>

            <div className="pt-8">
              <h4 className="font-mono text-xs text-foreground/50 uppercase tracking-widest mb-4">
                Network Links
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/silkiy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border/50 hover:bg-foreground hover:text-background transition-colors text-foreground"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/silki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border/50 hover:bg-foreground hover:text-background transition-colors text-foreground"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/wildansilki_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border/50 hover:bg-foreground hover:text-background transition-colors text-foreground"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 mt-8 lg:mt-0"
          >
            <div className="border border-border/50 bg-background/50 p-6 md:p-8">
              {status === "success" ? (
                <div className="text-center py-16 flex flex-col items-center">
                  <div className="w-16 h-16 border border-foreground flex items-center justify-center text-foreground mb-6">
                    <BiCheck className="w-8 h-8" />
                  </div>
                  <h4 className="font-mono text-2xl font-bold text-foreground mb-4 uppercase tracking-widest">TRANSMISSION SECURED</h4>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-6 py-3 border border-border/50 bg-transparent hover:bg-foreground hover:text-background text-foreground font-mono text-xs uppercase tracking-widest transition-colors"
                  >
                    SEND ANOTHER PING
                  </button>
                </div>
              ) : status === "error" ? (
                <div className="text-center py-16 flex flex-col items-center">
                  <div className="w-16 h-16 border border-destructive flex items-center justify-center text-destructive mb-6">
                    <span className="font-mono text-2xl font-bold">X</span>
                  </div>
                  <h4 className="font-mono text-2xl font-bold text-destructive mb-4 uppercase tracking-widest">TRANSMISSION FAILED</h4>
                  <p className="font-mono text-sm text-foreground/70 mb-8">Please check your Access Key or network connection.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 border border-destructive/50 bg-transparent hover:bg-destructive hover:text-white text-destructive font-mono text-xs uppercase tracking-widest transition-colors"
                  >
                    RETRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-name" className="font-mono text-xs text-foreground/50 uppercase tracking-widest flex justify-between">
                        <span>Name</span>
                        {errors.name && <span className="text-destructive">{errors.name}</span>}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        aria-invalid={!!errors.name}
                        onChange={handleInputChange}
                        className={`bg-transparent border-b ${errors.name ? 'border-destructive' : 'border-border/50'} focus:border-foreground py-2 text-foreground font-mono text-sm focus:outline-none transition-colors rounded-none`}
                        placeholder="IDENTIFIER"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-email" className="font-mono text-xs text-foreground/50 uppercase tracking-widest flex justify-between">
                        <span>Email</span>
                        {errors.email && <span className="text-destructive">{errors.email}</span>}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        aria-invalid={!!errors.email}
                        onChange={handleInputChange}
                        className={`bg-transparent border-b ${errors.email ? 'border-destructive' : 'border-border/50'} focus:border-foreground py-2 text-foreground font-mono text-sm focus:outline-none transition-colors rounded-none`}
                        placeholder="ADDRESS@DOMAIN"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="contact-subject" className="font-mono text-xs text-foreground/50 uppercase tracking-widest flex justify-between">
                      <span>Subject</span>
                      {errors.subject && <span className="text-destructive">{errors.subject}</span>}
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      aria-invalid={!!errors.subject}
                      onChange={handleInputChange}
                      className={`bg-transparent border-b ${errors.subject ? 'border-destructive' : 'border-border/50'} focus:border-foreground py-2 text-foreground font-mono text-sm focus:outline-none transition-colors rounded-none`}
                      placeholder="TOPIC"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="contact-message" className="font-mono text-xs text-foreground/50 uppercase tracking-widest flex justify-between">
                      <span>Message</span>
                      {errors.message && <span className="text-destructive">{errors.message}</span>}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      aria-invalid={!!errors.message}
                      onChange={handleInputChange}
                      className={`bg-transparent border ${errors.message ? 'border-destructive' : 'border-border/50'} focus:border-foreground p-4 text-foreground font-mono text-sm focus:outline-none transition-colors resize-none rounded-none`}
                      placeholder="PAYLOAD..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground font-mono font-bold tracking-widest uppercase transition-colors duration-300 disabled:opacity-50 cursor-crosshair"
                  >
                    {status === "sending" ? "TRANSMITTING..." : "EXECUTE"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;