const Header = () => {
  const navLinks = [
    { name: "Giới thiệu", href: "#about" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "Liên Hệ", href: "#contact" },
  ];

  return (
    <header
      className="bg-[#0f172a] text-white px-6 py-4 flex items-center justify-between 
                 sticky top-0 z-50 border-b border-gray-800 shadow-lg shadow-black/20 relative"
    >
      {/* Left: Logo & Name */}
      <div className="flex items-center gap-3 cursor-pointer group md:ml-8">
        <a href="/" className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition-colors">
          Zoe Le
        </a>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-300 hover:text-cyan-400 transition-colors font-medium whitespace-nowrap"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Right: Button */}
      <div className="flex items-center md:mr-8">
        <a
          href="/resume.pdf"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg 
                     font-semibold transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
        >
            CV
        </a>
      </div>
    </header>
  );
};

export default Header;
