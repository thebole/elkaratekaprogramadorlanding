import { Code2, GraduationCap, Smartphone, Database, Globe, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Backend",
    description: "APIs robustas y escalables con Java, Laravel, NodeJS. Arquitecturas sólidas para tu negocio.",
  },
  {
    icon: Globe,
    title: "Desarrollo Frontend",
    description: "Interfaces modernas y responsivas con Angular, React. Experiencias de usuario excepcionales.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas con Flutter. Rendimiento óptimo en iOS y Android.",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Diseño y optimización de bases SQL y NoSQL. MySQL, PostgreSQL, MongoDB, Firebase.",
  },
  {
    icon: GraduationCap,
    title: "Clases de Programación",
    description: "Formación personalizada en desarrollo web, móvil y bases de datos. Aprende haciendo.",
  },
  {
    icon: Users,
    title: "Mentoría Tech",
    description: "Acompañamiento en tu carrera como desarrollador. Desde junior hasta senior.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones de desarrollo y formación adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
