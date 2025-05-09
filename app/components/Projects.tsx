import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiWeb3Dotjs,
  SiExpress,
  SiArduino,
  SiRedux,
} from "react-icons/si";

export function Projects({ theme }: { theme: "light" | "dark" }) {
  const projects = [
    {
      id: "sanatorio-app",
      title: "Sanatorio App",
      period: "Co-owner",
      description:
        "App para gestionar llamados desde habitaciones a enfermeros.",
      technologies: [
        { icon: <SiNextdotjs className="w-6 h-6" />, name: "Next.js" },
        { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
        { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind" },
        { icon: <SiPrisma className="w-6 h-6" />, name: "Prisma" },
        { icon: <SiArduino className="w-6 h-6" />, name: "Arduino" },
      ],
    },
    {
      id: "cryptotrunks",
      title: "Cryptotrunks",
      period: "2022 - Actualidad",
      description:
        "Frontend para un proyecto web3 con minting y gestión de NFTs.",
      technologies: [
        { icon: <SiReact className="w-6 h-6" />, name: "React" },
        { icon: <SiNextdotjs className="w-6 h-6" />, name: "Next.js" },
        { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
        { icon: <SiWeb3Dotjs className="w-6 h-6" />, name: "Web3.js" },
      ],
    },
    {
      id: "e-commerce",
      title: "E-commerce",
      period: "2022",
      description: "Como proyecto final durante mis estudios en el bootcamp.",
      technologies: [
        { icon: <SiReact className="w-6 h-6" />, name: "React" },
        { icon: <SiNodedotjs className="w-6 h-6" />, name: "Node.js" },
        { icon: <SiExpress className="w-6 h-6" />, name: "Express" },
      ],
    },
    {
      id: "spa-app",
      title: "SPA App",
      period: "2022",
      description:
        "Como proyecto individual durante mis estudios en el bootcamp.",
      technologies: [
        { icon: <SiReact className="w-6 h-6" />, name: "React" },
        { icon: <SiJavascript className="w-6 h-6" />, name: "JavaScript" },
        { icon: <SiRedux className="w-6 h-6 " />, name: "Redux" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">Proyectos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="block"
          >
            <div className="bg-slate-800 p-4 rounded-xl shadow-md hover:bg-slate-700 transition-colors">
              <h3
                className={`${
                  theme === "light" && "text-slate-200"
                } text-xl font-bold`}
              >
                {project.title}{" "}
                <span className="text-slate-300">({project.period})</span>
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-slate-700 p-2 rounded-full"
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
