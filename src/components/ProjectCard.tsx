import { Link } from "react-router-dom";
import { HiOutlineChip } from "react-icons/hi";

interface ProjectCardProps {
    id: string;
    title: string;
    type: string;
    description: string;
    techStack: string[];
}

const ProjectCard = ({ id, title, type, description, techStack }: ProjectCardProps) => {
    return (
        <div className="bg-[#0f172a] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
                <Link 
                    to={`/project/${id}`} 
                    className="text-xl font-bold mb-2 text-blue-400 hover:underline block"
                >
                    {title}
                </Link>

                <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
                    <HiOutlineChip className="text-gray-500" />
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-gray-800 px-2 py-0.5 rounded border border-gray-700/50">
                        {type}
                    </span>
                </div>

                <p className="text-gray-300 line-clamp-3 whitespace-pre-line">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {techStack.map((tech) => (
                        <span key={tech} className="bg-blue-400 text-white px-2 py-1 rounded-lg text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;