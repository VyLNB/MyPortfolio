import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {

    return (
        <section id="projects" className="bg-[#020617] text-white min-h-screen py-20 px-6 md:px-20 flex justify-center items-center">
            <div className="max-w-6xl w-full">
                <div className="flex items-center mb-12">
                    <div className="h-8 w-1 bg-blue-500 mr-4 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Dự án
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <ProjectCard
                                    id={project.id}
                                    title={project.title}
                                    type={project.type || "Unknown"}
                                    summary={project.summary}
                                    techStack={project.techStack || []}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;