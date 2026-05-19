import React from 'react';
import './SocialMediaIcons.css';
import { Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SocialMediaIcons = () => {
  return (
    <div className="orbit-container">
      <div className="center-dot"></div>
      
      {/* WhatsApp Orbit */}
      <div className="orbit orbit-1">
        <div className="icon-container">
          <a className="icon-link" href="https://chat.whatsapp.com/LckHfebnlPxEvDqqsbGX06" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp color="#FFFFFF" size={48} />
          </a>          
        </div>
      </div>

      {/* Instagram Orbit */}
      <div className="orbit orbit-2">
        <div className="icon-container">
          <a className="icon-link" href="https://www.instagram.com/ahduni_programmingclub?igsh=MWZjaDh4aGVxM3M4bA==" target="_blank" rel="noopener noreferrer">
            <Instagram color="#FFFFFF" size={48} />
          </a>
        </div>
      </div>

      {/* Third Orbit with Two Icons */}
      <div className="orbit orbit-3">
        {/* Email Icon */}
        <div className="icon-container top">
          <a className="icon-link" href="mailto:programming.club@ahduni.edu.in" target="_blank" rel="noopener noreferrer">
            <IoMdMail color="#FFFFFF" size={48} />
          </a>
        </div>
        {/* LinkedIn Icon */}
        <div className="icon-container bottom">
          <a className="icon-link" href="https://www.linkedin.com/company/programming-club-ahmedabad-university/" target="_blank" rel="noopener noreferrer">
            <Linkedin color="#FFFFFF" size={48} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;