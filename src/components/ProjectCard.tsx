import Image from "next/image";
import Link from "next/link";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-high border border-white/10 relative">
        <Image
          alt={project.title}
          src={project.image}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="space-y-3 flex-1 flex flex-col pt-6">
        <h3 className="text-xl font-bold text-on-surface">{project.title}</h3>
        <p className="text-base text-outline leading-snug line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="tag-pill px-6 py-2 rounded-full text-white text-sm font-medium hover:brightness-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            View Details
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
