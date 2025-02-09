import React from 'react';
import { Github,Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialMedia = () => {
    return (
        <div className="social-media  ">
            <div className="flex  py-8 gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
                <Facebook  />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="">
                <Twitter  />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="">
                <Instagram  />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="">
            <Linkedin />
            </a>
           <a  href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <Github />
            </a> 
        </div>
        </div>
        
    );
};

export default SocialMedia;
