import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects"; // Đảm bảo đường dẫn import đúng

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-white text-center pt-20">Project not found</div>;
  }

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-3 
                   bg-slate-900/80 backdrop-blur-md border border-slate-700 
                   rounded-full shadow-2xl text-blue-400 font-semibold 
                   hover:bg-blue-600 hover:text-white hover:border-blue-500 
                   transition-all duration-300 group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="M19 12H5"/>
          <path d="M12 19l-7-7 7-7"/>
        </svg>
        Quay lại trang chủ
      </Link>

      <div className="max-w-4xl mx-auto p-6 md:p-10 pt-28"> 
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            {project.title}
        </h1>
        
        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 mb-10">
            <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-cover max-h-[500px]" 
            />
        </div>
        
        <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
           <h3 className="text-2xl font-semibold mb-4 text-white">Mô tả chi tiết</h3>
           <p className="text-gray-300 leading-loose text-lg">
             {project.description}
           </p>
           
           {/* Phần công nghệ sử dụng (nếu có trong data) */}
           {/* <div className="mt-8 pt-8 border-t border-slate-700">
                <h4 className="text-lg font-medium text-blue-400 mb-4">Công nghệ sử dụng</h4>
                <div className="flex flex-wrap gap-3">
                    <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-600">React</span>
                    <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-600">Tailwind</span>
                </div>
           </div> 
           */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;