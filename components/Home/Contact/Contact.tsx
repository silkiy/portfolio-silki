import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-16 pb-16 flex justify-center">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 leading-snug">
          Schedule a call with me to see if I can help
        </h1>
        <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
          Reach out to me today and let’s discuss how I can help you achieve
          your goals.
        </p>

        {/* Contact Info */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-center items-center space-x-3">
            <BiEnvelope className="w-7 h-7 text-cyan-300" />
            <p className="text-base sm:text-lg font-medium text-gray-300">
              contact.wildansilki@gmail.com
            </p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <BiPhone className="w-7 h-7 text-cyan-300" />
            <p className="text-base sm:text-lg font-medium text-gray-300">
              +62 812-3252-2276
            </p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <BiMap className="w-7 h-7 text-cyan-300" />
            <p className="text-base sm:text-lg font-medium text-gray-300">
              Tulungagung, East Java, Indonesia
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center mt-8 space-x-4">
          <a
            href="https://www.instagram.com/wildansilki_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
          >
            <FaInstagram className="text-white h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/silki/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
          >
            <FaLinkedin className="text-white h-5 w-5" />
          </a>
          <a
            href="https://github.com/silkiy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300"
          >
            <FaGithub className="text-white h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;