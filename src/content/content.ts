export const content = {
  brand: {
    name: "El Karateka Programador",
    logoSrc: "/branding/logo.png",
  },
  nav: [
    { id: "servicios" as const, label: "Servicios" },
    { id: "stack" as const, label: "Stack" },
    { id: "industrias" as const, label: "Industrias" },
    { id: "clases" as const, label: "Clases" },
    { id: "contacto" as const, label: "Contacto" },
  ],
  hero: {
    headline:
      "Apps móviles en Flutter con disciplina de karate y calidad de software profesional.",
    subheadline:
      "Fullstack con foco en Flutter. Experiencia real publicando en Play Store y App Store. Construyo productos listos para producción: arquitectura, performance, integraciones y delivery.",
    ctas: [
      { label: "Cotizar app", href: "#contacto", variant: "primary" as const },
      { label: "Ver clases / mentorías", href: "#clases", variant: "secondary" as const },
    ],
    highlights: [
      "Flutter (Mobile) como especialidad principal",
      "Fullstack para integraciones end-to-end",
      "Experiencia en fintech, pagos, seguros y ecommerce",
      "Entrega con estándares: testing, CI/CD y publicación",
    ],
  },

  // ... services, stack, industries (igual que antes)

  teaching: {
    title: "Clases y mentorías",
    subtitle:
      "Formación para principiantes, intermedios y avanzados. Método karateka: técnica (Kihon), repetición inteligente (Kata) y combate real (Kumite) con proyectos.",
    tracks: [
      {
        level: "Principiantes",
        title: "Fundamentos y bases sólidas",
        desc: "Ideal si estás empezando o vienes con huecos en fundamentos.",
        bullets: [
          "Lógica, Git, buenas prácticas y mentalidad de producto",
          "Dart desde cero y bases de Flutter",
          "UI básica, navegación y consumo simple de APIs",
          "Mini-proyectos guiados para construir confianza",
        ],
      },
      {
        level: "Intermedios",
        title: "De proyectos a producción",
        desc: "Para quien ya hace apps pero quiere estructura, calidad y velocidad.",
        bullets: [
          "Arquitectura (capas), modularidad y patrones frecuentes",
          "Estado (según enfoque), rutas, manejo de errores y loading",
          "Testing (unit/widget) y refactor con criterio",
          "Proyecto completo con checklist de release",
        ],
      },
      {
        level: "Avanzados",
        title: "Nivel profesional: performance, escalabilidad y delivery",
        desc: "Para desarrolladores con experiencia que quieren dominar Flutter como herramienta profesional.",
        bullets: [
          "Performance profiling, optimización y estabilidad",
          "Integraciones: auth, notificaciones, analítica, pagos (según caso)",
          "CI/CD, entornos, versionado y publicación en tiendas",
          "Revisión de código/arquitectura como en equipos reales",
        ],
      },
    ],
    note:
      "Si tu objetivo es fullstack, podemos complementar con backend (Spring Boot/Laravel/Node) y SQL (PostgreSQL/MySQL/Oracle/SQLServer).",
  },

  contact: {
    title: "Contacto",
    subtitle:
      "Si necesitas una app Flutter o quieres mentoría, escríbeme con tu objetivo y tu contexto. Te respondo con próximos pasos y una propuesta clara.",
    channels: [
      {
        label: "Email",
        value: "elkaratekaprogramador@gmail.com",
        href: "mailto:elkaratekaprogramador@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "Emmanuel Ortega",
        href: "https://www.linkedin.com/in/emmanuel-ortega-a82b45153",
      },
      {
        label: "Instagram",
        value: "@karatekaprogramador",
        href: "https://www.instagram.com/karatekaprogramador?igsh=MWhocTk2a3ZvMTM0ZQ%3D%3D&utm_source=qr",
      },
    ],
  },
};