import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Project } from "../../domain/entities/Project";
import { MockProjectRepository } from "../../infra/repositories/MockProjectRepository";
import { GetProjectsUseCase } from "../../application/useCases/GetProjects";
import { Button } from "../components/ui/Button";
import { ProjectCard } from "../components/ui/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Instanciando dependências (Poderia ser feito via Injeção de Dependência)
    const repository = new MockProjectRepository();
    const getProjectsUseCase = new GetProjectsUseCase(repository);
    
    getProjectsUseCase.execute().then(setProjects);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pt-32 px-6">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-6"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4"
        >
          Disponível para novas oportunidades
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Olá, eu sou <span className="text-primary">Marciano</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Full Stack Developer apaixonado por criar experiências digitais escaláveis, 
          performáticas e com design excepcional.
        </p>

        <div className="flex items-center justify-center gap-4 pt-8">
          <Button onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Projetos <ArrowRight size={18} />
          </Button>
          
          <div className="flex gap-4 ml-4">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-gray-300 hover:text-primary transition-all"
                href="#" // Substituir por links reais
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Seção de Projetos */}
      <section id="projetos" className="w-full max-w-6xl mt-40">
        <h2 className="text-3xl font-display font-bold mb-10 text-center">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
