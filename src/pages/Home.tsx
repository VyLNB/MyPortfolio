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
    <section className="bg-[#0f172a] text-white h-screen flex items-center px-6 md:px-20 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative flex justify-center md:justify-center"
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

        <div className="space-y-3 md:space-y-5 ml-0 md:ml-8">
          <motion.h1 variants={itemVariants} className="text-xl md:text-2xl font-bold leading-[1.2] tracking-tight">
            Xin chào, mình là <br />
            <span className="text-cyan-400 text-3xl md:text-5xl lg:text-6xl">Lê Ngọc Bích Vy</span>.<br />
          </motion.h1>

          <motion.div variants={itemVariants} className="text-slate-300 text-sm md:text-base max-w-lg flex flex-col gap-4 mt-2 mb-6">
            <p className="text-slate-400 mb-1">
              Định hướng chuyên môn và kỹ năng:
            </p>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-cyan-500/10 border border-cyan-500/20 p-1.5 rounded-lg text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <div>
                <strong className="text-cyan-300">Frontend:</strong> <span className="text-slate-400">Xây dựng giao diện mượt mà với ReactJS, Tailwind CSS, tối ưu UI/UX.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-500/10 border border-emerald-500/20 p-1.5 rounded-lg text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div>
                <strong className="text-emerald-300">Backend:</strong> <span className="text-slate-400">Phát triển RESTful API, xử lý dữ liệu với Node.js, SQL Server, MongoDB.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-500/10 border border-purple-500/20 p-1.5 rounded-lg text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <div>
                <strong className="text-purple-300">Full-stack:</strong> <span className="text-slate-400">Tích hợp hệ thống, xây dựng Real-time Chat (TCP/UDP, Socket.io), mã hóa AES.</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-3 pt-1">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-bold text-xs md:text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              Xem Projects
            </a>
            <button className="border border-slate-700 hover:bg-slate-800 px-5 py-2 rounded-lg font-bold text-xs md:text-sm transition-all active:scale-95">
              Xem CV
            </button>
          </motion.div>
        </div>




      </motion.div>
    </section>
  );
};

export default Home;