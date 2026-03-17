import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/Button";

// Esquema de validação com Zod
const contactFormSchema = z.object({
  name: z.string().min(3, "Nome é obrigatório e deve ter pelo menos 3 caracteres."),
  email: z.string().email("E-mail inválido."),
  message: z.string().min(10, "A mensagem é obrigatória e deve ter pelo menos 10 caracteres."),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    console.log("Dados do formulário:", data);
    // Simula o envio de um formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Mensagem enviada com sucesso! (Simulado)");
    reset(); // Limpa o formulário após o envio
  };

  const contactInfo = [
    { icon: Mail, text: "marciano.matias@example.com", link: "mailto:marciano.matias@example.com" },
    { icon: Phone, text: "+55 (XX) 9XXXX-XXXX", link: "tel:+55XX9XXXXXXXX" },
    { icon: MapPin, text: "São Paulo, Brasil", link: "https://maps.google.com/?q=São+Paulo" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/seu-usuario", name: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/seu-usuario", name: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/seu-usuario", name: "Twitter" },
  ];

  return (
    <div className="min-h-screen pt-32 px-6 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-display font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
      >
        Entre em Contato
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface/50 border border-white/10 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Fale Comigo</h2>
          <p className="text-gray-300 mb-8">
            Estou sempre aberto a novas oportunidades, colaborações ou apenas para um bate-papo sobre tecnologia. Sinta-se à vontade para me contatar!
          </p>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <info.icon size={24} className="mr-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg">{info.text}</span>
              </motion.a>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-white mb-4">Minhas Redes Sociais</h3>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-gray-300 hover:text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon size={24} title={social.name} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Formulário de Contato */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-surface/50 border border-white/10 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full p-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white"
                placeholder="Seu nome completo"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full p-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white"
                placeholder="seu.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Mensagem</label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full p-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white resize-y"
                placeholder="Sua mensagem..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
