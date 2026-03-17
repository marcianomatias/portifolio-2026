import { motion } from "framer-motion";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2";
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses = "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.3)]";
      break;
    case "secondary":
      variantClasses = "bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)]";
      break;
    case "outline":
      variantClasses = "bg-transparent border border-primary text-primary hover:bg-primary/10";
      break;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
