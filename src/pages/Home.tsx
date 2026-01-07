import { motion, type Variants } from 'framer-motion';

const Home = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // Thay min-h-screen bằng h-screen để cố định chiều cao đúng 1 trang
    // Giảm pt-28 xuống pt-16 hoặc pt-20 để cân đối hơn khi căn giữa
    <section className="bg-[#0f172a] text-white h-screen flex items-center px-6 md:px-20 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* Nội dung bên trái */}
        <div className="space-y-3 md:space-y-5 ml-0 md:ml-8">
          <motion.h1 variants={itemVariants} className="text-xl md:text-2xl font-bold leading-[1.2] tracking-tight">
            Xin chào, mình là <br/>
            <span className="text-cyan-400 text-3xl md:text-5xl lg:text-6xl">Lê Ngọc Bích Vy</span>.<br />
          </motion.h1>

          <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
            Inter Frontend Developer 
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-3 pt-1">
            <a
              href="https://github.com/VyLNB"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-bold text-xs md:text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              Xem GitHub
            </a>
            <button className="border border-slate-700 hover:bg-slate-800 px-5 py-2 rounded-lg font-bold text-xs md:text-sm transition-all active:scale-95">
              Xem CV
            </button>
          </motion.div>
        </div>

        {/* Hình ảnh bên phải - Khống chế kích thước để không chiếm quá nhiều diện tích dọc */}
        <motion.div 
          className="relative flex justify-center md:justify-end"
          variants={imageVariants}
        >
          <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-2xl blur-xl"></div>
            <div className="relative rounded-2xl border border-slate-700 overflow-hidden shadow-2xl group">
              <img 
                src="src/assets/images/me.png" 
                alt="Portrait" 
                className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Home;