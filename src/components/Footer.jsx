import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-900">
      <div className="container px-6 mx-auto md:px-12">
        {/* Footer Top - Logo and Navigation */}
        <div className="flex flex-col items-center justify-between mb-6 lg:flex-row">
          {/* Logo or Brand Name */}
          <div className="mb-4 text-xl font-semibold text-cyan-100 lg:mb-0">
            <span>Novasite</span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col text-center lg:flex-row lg:text-left">
            <a
              href="/privacy-policy"
              className="mx-4 mb-4 text-sm transition duration-300 text-cyan-100 hover:text-cyan-300 lg:mb-0"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="mx-4 text-sm transition duration-300 text-cyan-100 hover:text-cyan-300"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Footer Bottom - Social Icons and Copyright */}
        <div className="flex flex-col items-center justify-between lg:items-start lg:flex-row">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-4 lg:justify-start lg:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition duration-300 text-cyan-100 hover:text-cyan-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="transition duration-300 text-cyan-100 hover:text-cyan-300"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition duration-300 text-cyan-100 hover:text-cyan-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition duration-300 text-cyan-100 hover:text-cyan-300"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-center text-gray-400 lg:text-left">
            <p>© {new Date().getFullYear()} Novasite. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
