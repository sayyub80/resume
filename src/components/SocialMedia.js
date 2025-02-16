import React from 'react';
import { Github,Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialMedia = () => {
    return (
        <div className="social-media  ">
            <div className="flex  py-8 gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
                <Facebook size={22}  />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="">
                <Twitter  size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="">
                <Instagram  size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="">
            <Linkedin size={22} />
            </a>
           <a  href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <Github size={22}  />
            </a> 
        </div>
        </div>
        
    );
};

export default SocialMedia;
