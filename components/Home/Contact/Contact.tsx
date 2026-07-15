"use client";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone, BiCopy, BiCheck } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  // Clipboard states
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Form states
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
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");
    // Mocking API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-20 border-b border-white/5 relative"
      data-aos="fade-up"
      data-aos-delay="100"
      aria-label="Contact Section"
    >
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto max-w-7xl">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Touch</span>
        </h2>
        <p className="text-slate-400 text-center mt-4 text-base sm:text-lg max-w-2xl mx-auto mb-16">
          Feel free to reach out for project inquiries, collaborations, or remote software engineering opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              Contact Information
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              If you have any questions or just want to say hi, feel free to contact me through my email, phone, or by filling out the contact form. I will do my best to get back to you as soon as possible.
            </p>

            {/* Email Card */}
            <div className="bg-[#14134145] backdrop-blur-sm border border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <BiEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block">Email</span>
                  <a
                    href="mailto:contact.wildansilki@gmail.com"
                    className="text-white hover:text-cyan-300 transition-colors text-sm sm:text-base font-bold break-all"
                  >
                    contact.wildansilki@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("contact.wildansilki@gmail.com", "email")}
                className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedText === "email" ? (
                  <BiCheck className="w-5 h-5 text-green-400" />
                ) : (
                  <BiCopy className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-[#14134145] backdrop-blur-sm border border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <BiPhone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block">Phone</span>
                  <a
                    href="tel:+6281232522276"
                    className="text-white hover:text-cyan-300 transition-colors text-sm sm:text-base font-bold"
                  >
                    +62 812-3252-2276
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("+6281232522276", "phone")}
                className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="Copy phone number to clipboard"
                aria-label="Copy phone number"
              >
                {copiedText === "phone" ? (
                  <BiCheck className="w-5 h-5 text-green-400" />
                ) : (
                  <BiCopy className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-[#14134145] backdrop-blur-sm border border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <BiMap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block">Location</span>
                  <span className="text-white text-sm sm:text-base font-bold">
                    Tulungagung, East Java, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="text-slate-300 font-bold uppercase text-xs tracking-wider mb-4">
                Find Me On
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/wildansilki_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#14134145] hover:bg-pink-600 border border-white/5 hover:border-pink-500 hover:scale-105 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                  aria-label="Follow me on Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/silki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#14134145] hover:bg-blue-600 border border-white/5 hover:border-blue-500 hover:scale-105 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                  aria-label="Connect with me on LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/silkiy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#14134145] hover:bg-slate-700 border border-white/5 hover:border-slate-500 hover:scale-105 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                  aria-label="View my GitHub profile"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-[#14134145] backdrop-blur-sm border border-white/5 p-8 rounded-2xl">
              {status === "success" ? (
                <div className="text-center py-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center text-green-400 mb-6 animate-bounce">
                    <BiCheck className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed mb-6 font-medium">
                    Thank you! Your message has been sent successfully. I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-wide transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                    Send a Message
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`bg-[#0d0d1f]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all
                          ${errors.name ? "border-red-500" : "border-white/10"}`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-red-400 text-xs mt-0.5">{errors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-[#0d0d1f]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all
                          ${errors.email ? "border-red-500" : "border-white/10"}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-red-400 text-xs mt-0.5">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="subject" className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`bg-[#0d0d1f]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all
                        ${errors.subject ? "border-red-500" : "border-white/10"}`}
                      placeholder="Collaborative Project Inquiry"
                    />
                    {errors.subject && (
                      <span className="text-red-400 text-xs mt-0.5">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`bg-[#0d0d1f]/60 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none
                        ${errors.message ? "border-red-500" : "border-white/10"}`}
                      placeholder="Write your message details here..."
                    />
                    {errors.message && (
                      <span className="text-red-400 text-xs mt-0.5">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0d0d1f] shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;