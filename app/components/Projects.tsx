import Link from "next/link";

export function Projects({ theme }: { theme: "light" | "dark" }) {
  const projects = [
    {
      id: "sanatorio-app",
      title: "Sanatorio App",
      period: "Co-owner",
      description:
        "App para gestionar llamados desde habitaciones a enfermeros.",
    },
    {
      id: "cryptotrunks",
      title: "Cryptotrunks",
      period: "2022 - Actualidad",
      description:
        "Frontend para un proyecto web3 con minting y gestión de NFTs.",
    },
    {
      id: "e-commerce",
      title: "E-commerce",
      period: "2022",
      description: "Como proyecto final durante mis estudios en el bootcamp.",
    },
    {
      id: "spa-app",
      title: "SPA App",
      period: "2022",
      description:
        "Como proyecto individual durante mis estudios en el bootcamp.",
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
              <p className="text-slate-300">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
