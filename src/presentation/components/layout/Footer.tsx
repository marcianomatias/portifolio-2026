export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 text-center text-gray-400 border-t border-white/10 mt-20 backdrop-blur-sm bg-surface/30">
      <p className="font-sans text-sm">
        &copy; {year} Marciano Matias. Todos os direitos reservados.
      </p>
    </footer>
  );
};
