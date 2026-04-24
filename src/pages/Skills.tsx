import SkillCard from "../components/SkillCard";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostman, SiExpress, SiJira } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi"; 

const Skills = () => {
  // Cấu trúc dữ liệu kèm Icon và màu đặc trưng (Brand Colors)
  const skillCategories = [
    {
      title: "FRONTEND",
      items: [
        { name: "HTML5 & CSS3", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "JavaScript (ES6+)", icon: <FaJs />, color: "text-yellow-400" },
        { name: "ReactJS & Vite", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
        { name: "Bootstrap", icon: <FaCss3Alt />, color: "text-purple-600" },
      ],
    },
    {
      title: "BACKEND & DATA",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
        { name: "SQL Server", icon: <BiNetworkChart />, color: "text-blue-600" },
      ],
    },
    {
      title: "TOOLS",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-red-500" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
        { name: "Jira", icon: <SiJira />, color: "text-blue-700" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0f172a] text-white min-h-screen py-20 px-6 md:px-20 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        
        {/* Header Section */}
        <div className="flex items-center mb-12">
          <div className="h-8 w-1 bg-blue-500 mr-4 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
          <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
        </div>

        {/* Grid 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col gap-6">
              
              {/* Category Title */}
              <h3 className="text-gray-400 font-bold tracking-widest uppercase text-xs border-b border-gray-700 pb-2">
                {category.title}
              </h3>

              {/* Items List */}
              <div className="flex flex-col gap-4">
                {category.items.map((skill, idx) => (
                  <SkillCard 
                    key={idx} 
                    name={skill.name} 
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;