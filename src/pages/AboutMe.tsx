const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#020617] text-white min-h-screen flex items-center px-6 md:px-20 pt-28"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
          Về bản thân
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Mình là sinh viên năm 3 chuyên ngành <span className="text-white font-medium">
            Mạng máy tính và Truyền thông dữ liệu</span> tại
            <span className="text-white font-medium"> Đại học Tôn Đức Thắng (TDTU)</span>.
            Mình đam mê phát triển Frontend và luôn khao khát học hỏi những công nghệ mới
            để nâng cao kỹ năng của bản thân.
            <br /><br />
            Thông qua các dự án cá nhân và quá trình học tập, mình đã rèn luyện được
            tư duy logic, khả năng tự học và tinh thần trách nhiệm trong công việc.
            Mình luôn sẵn sàng tiếp thu kiến thức mới và thích nghi với những thử thách
            trong lĩnh vực phát triển web.
            <br /><br />
            Mình định hướng học hỏi thêm về Backend để trở thành một
            <span className="text-white font-medium"> Fullstack Developer</span> trong tương lai.
        </p>

      </div>
    </section>
  );
};

export default AboutMe;
