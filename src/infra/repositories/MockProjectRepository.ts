import { Project } from "../../domain/entities/Project";
import { IProjectRepository } from "../../domain/repositories/IProjectRepository";

export class MockProjectRepository implements IProjectRepository {
  async getProjects(): Promise<Project[]> {
    // Simulando um delay de API para testar o carregamento
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            title: "Sistema SaaS Financeiro",
            description: "Plataforma completa para gestão financeira empresarial com dashboards interativos.",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            technologies: ["React", "TypeScript", "Node.js", "Tailwind"],
            githubUrl: "https://github.com",
            demoUrl: "https://demo.com"
          },
          {
            id: "2",
            title: "E-commerce Moderno",
            description: "Loja virtual de alta performance com carrinho otimizado e painel administrativo.",
            imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            technologies: ["Next.js", "Prisma", "Stripe", "Framer Motion"],
            githubUrl: "https://github.com"
          },
          {
            id: "3",
            title: "Blog Pessoal com CMS",
            description: "Blog dinâmico com integração a um CMS headless para gerenciamento de conteúdo.",
            imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b31?auto=format&fit=crop&q=80&w=800",
            technologies: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
            githubUrl: "https://github.com",
            demoUrl: "https://demo.com"
          },
          {
            id: "4",
            title: "Aplicativo de Tarefas Mobile",
            description: "Aplicativo móvel para organização de tarefas diárias com sincronização em nuvem.",
            imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
            technologies: ["React Native", "Firebase", "Redux"],
            githubUrl: "https://github.com"
          }
        ]);
      }, 800);
    });
  }
}
