import { ExternalLink, Github, Calendar, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Empresa Tech ABC",
    role: "Desarrollador Full Stack Senior",
    period: "2022 - Presente",
    description: "Desarrollo de aplicaciones web empresariales y liderazgo técnico de equipo.",
    technologies: ["Java", "Angular", "PostgreSQL", "Docker"],
  },
  {
    company: "Startup XYZ",
    role: "Desarrollador Backend",
    period: "2020 - 2022",
    description: "Diseño e implementación de APIs REST y microservicios escalables.",
    technologies: ["NodeJS", "Laravel", "MongoDB", "AWS"],
  },
  {
    company: "Consultora Digital",
    role: "Desarrollador Mobile",
    period: "2018 - 2020",
    description: "Desarrollo de aplicaciones móviles multiplataforma para clientes corporativos.",
    technologies: ["Flutter", "Dart", "Firebase", "MySQL"],
  },
];

const projects = [
  {
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma integral para gestión de inventario, ventas y reportes en tiempo real.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Java", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "App de Delivery",
    description: "Aplicación móvil para pedidos a domicilio con tracking en tiempo real y pasarela de pagos.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "NodeJS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce B2B",
    description: "Marketplace para comercio mayorista con gestión de catálogos y facturación electrónica.",
    image: "/placeholder.svg",
    technologies: ["React", "Laravel", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control con visualización de datos y reportes personalizables para toma de decisiones.",
    image: "/placeholder.svg",
    technologies: ["Angular", "NodeJS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mi <span className="gradient-text">Portafolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trayectoria profesional y proyectos destacados en producción
          </p>
        </div>

        {/* Experiencia Laboral */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-primary" />
            Experiencia Laboral
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proyectos */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Github className="w-6 h-6 text-primary" />
            Proyectos en Producción
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver proyecto
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
