import React from "react";

interface TechItemProps {
  name: string;
  icon: React.ReactNode; // Bắt buộc phải có icon
  color?: string; // Tùy chọn màu sắc riêng cho từng icon (ví dụ: React màu xanh, HTML màu cam)
}

const SkillCard = ({ name, icon, color }: TechItemProps) => {
  return (
    <div className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-lg shadow-sm border border-transparent hover:border-blue-500/50 hover:bg-[#253248] transition-all duration-300 group cursor-default">
      {/* Icon Area: Có hiệu ứng scale nhẹ khi hover */}
      <div className={`text-2xl transition-transform group-hover:scale-110 ${color ? color : "text-blue-400"}`}>
        {icon}
      </div>
      <span className="text-slate-200 font-medium text-sm md:text-base">{name}</span>
    </div>
  );
};

export default SkillCard;