import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-[#0f172a] border-t border-slate-800 py-8 mt-auto z-50 relative">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <div className="text-slate-400 text-sm">
                    © {currentYear} <span className="text-cyan-400 font-semibold">Lê Ngọc Bích Vy</span>. All rights reserved.
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a 
                        href="https://github.com/VyLNB" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        title="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/vy-le-a450a5362/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#0a66c2] transition-colors duration-300 transform hover:scale-110"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a 
                        href="mailto:vylengocbich.205@gmail.com" 
                        className="text-slate-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                        title="Email"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;