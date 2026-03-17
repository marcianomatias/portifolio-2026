import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../../../domain/entities/Project";
import { Button } from "./Button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="bg-surface/50 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
              <Github size={18} /> GitHub
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="primary" onClick={() => window.open(project.demoUrl, '_blank')}>
              <ExternalLink size={18} /> Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
