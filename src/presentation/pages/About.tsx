import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Python", "Django", "REST APIs", "GraphQL"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
    { category: "DevOps & Cloud", items: ["Docker", "AWS (EC2, S3)", "Vercel", "Netlify"] },
    { category: "Ferramentas", items: ["Git", "Jira", "VS Code", "Figma"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-32 px-6 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-display font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
      >
        Sobre Mim
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-display font-bold text-primary mb-4 flex items-center gap-3">
            <Briefcase size={32} /> Minha Jornada
          </h2>
          <p>
            Sou Marciano Matias, um desenvolvedor Full Stack com paixão por transformar ideias complexas em soluções digitais elegantes e eficientes. Minha jornada na programação começou com a curiosidade de entender como a tecnologia molda o mundo ao nosso redor, e desde então, tenho me dedicado a construir aplicações que não apenas funcionam, mas que também oferecem uma experiência de usuário excepcional.
          </p>
          <p>
            Com experiência em diversas tecnologias, desde o frontend interativo com React e Next.js até o backend robusto com Node.js e Python, busco constantemente aprender e aplicar as melhores práticas para entregar código limpo, escalável e de fácil manutenção.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <h2 className="text-3xl font-display font-bold text-primary mb-4 flex items-center gap-3">
            <Lightbulb size={32} /> Filosofia de Trabalho
          </h2>
          <p>
            Acredito que o bom software é construído com colaboração, atenção aos detalhes e um foco inabalável na resolução de problemas reais. Sou um defensor da arquitetura limpa e dos princípios SOLID, garantindo que cada projeto seja construído sobre uma base sólida que possa evoluir e crescer.
          </p>
          <p>
            Fora do código, sou um entusiasta de novas tecnologias, sempre buscando a próxima ferramenta ou paradigma que possa otimizar o processo de desenvolvimento e a qualidade do produto final.
          </p>
        </motion.div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-display font-bold text-center text-primary mb-10 flex items-center justify-center gap-3">
          <Code size={32} /> Minhas Habilidades
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillCategory, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="bg-surface/50 border border-white/10 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-4">{skillCategory.category}</h3>
              <ul className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 5, color: '#8b5cf6' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
