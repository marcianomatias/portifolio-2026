import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "../../domain/entities/Project";
import { MockProjectRepository } from "../../infra/repositories/MockProjectRepository";
import { GetProjectsUseCase } from "../../application/useCases/GetProjects";
import { ProjectCard } from "../components/ui/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const repository = new MockProjectRepository();
        const getProjectsUseCase = new GetProjectsUseCase(repository);
        const fetchedProjects = await getProjectsUseCase.execute();
        setProjects(fetchedProjects);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Não foi possível carregar os projetos. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 text-primary text-xl">
        Carregando projetos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-display font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
      >
        Meus Projetos
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {projects.length === 0 && !loading && !error && (
        <div className="text-center text-gray-400 text-lg mt-20">
          Nenhum projeto encontrado.
        </div>
      )}
    </div>
  );
}
