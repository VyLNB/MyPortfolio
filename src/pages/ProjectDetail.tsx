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
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Quay lại trang chủ
      </Link>

      <div className="max-w-4xl mx-auto p-6 md:p-10 pt-28">

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          {project.title}
        </h1>

        {/* display link github */}
        {(
          <div className="mb-8 flex flex-wrap gap-6 items-center">
            {project.linkGithub && (
              <a
                href={project.linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub Repository
              </a>
            )}
            {project.linkDemo && (
              <a
                href={project.linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
            )}
          </div>
        )}

        <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
          {project.description && (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-white">Mô tả chi tiết</h3>
              <p className="text-gray-300 leading-loose text-lg whitespace-pre-line">
                {project.description}
              </p>
            </>
          )}

          {project.overview && (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-white">Tổng quan dự án</h3>
              <p className="text-gray-300 leading-loose text-lg whitespace-pre-line">
                {project.overview}
              </p>
            </>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Tính năng nổi bật</h3>
              <ul className="list-disc list-inside text-gray-300 leading-loose text-lg space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.myResponsibilities && project.myResponsibilities.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Trách nhiệm & Công việc</h3>
              <ul className="list-disc list-inside text-gray-300 leading-loose text-lg space-y-2">
                {project.myResponsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-slate-700">
            <h4 className="text-lg font-medium text-blue-400 mb-4">Công nghệ sử dụng</h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech) => (
                <span key={tech} className="bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-600">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;