import logoGreen from "@/assets/logo-green.png";
import { Code, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Disponible para proyectos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Desarrollo de Software
              <br />
              <span className="gradient-text">& Formación Tech</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              Desarrollador Full Stack con experiencia en múltiples tecnologías. 
              Ofrezco servicios de desarrollo y clases personalizadas de programación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Code className="w-5 h-5" />
                Ver Servicios
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-muted text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-border hover:border-primary/50"
              >
                <GraduationCap className="w-5 h-5" />
                Sobre Mí
              </a>
            </div>
          </div>
          
          {/* Logo animation */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              <img
                src={logoGreen}
                alt="Emmanuel - Karateka Programador"
                className="w-72 md:w-96 lg:w-[450px] h-auto relative z-10 animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
