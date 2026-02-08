import { Link } from "react-router-dom";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectCard = ({ id, title, description, imageUrl }: ProjectCardProps) => {
    return (
        <div className="bg-[#0f172a] rounded-lg overflow-hidden shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <Link 
                    to={`/project/${id}`} 
                    className="text-xl font-bold mb-2 text-blue-400 hover:underline block"
                >
                    {title}
                </Link>
                <p className="text-gray-300 line-clamp-3">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;