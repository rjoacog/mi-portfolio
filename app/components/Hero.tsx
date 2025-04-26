import Image from "next/image";
import { SiReact, SiNextdotjs, SiHtml5, SiCss3, SiPostgresql, SiNodedotjs, SiRedux, SiTypescript, SiJavascript, SiTailwindcss, SiPrisma } from "react-icons/si";

export function Hero({ theme }: { theme: "light" | "dark" }) {
  const skills = [
    { icon: <SiReact className="w-8 h-8" />, name: "React" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript" },
    { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript" },
    { icon: <SiHtml5 className="w-8 h-8" />, name: "HTML5" },
    { icon: <SiCss3 className="w-8 h-8" />, name: "CSS3" },
    { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind" },
    { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.js" },
    { icon: <SiPostgresql className="w-8 h-8" />, name: "PostgreSQL" },
    { icon: <SiRedux className="w-8 h-8" />, name: "Redux" },
    { icon: <SiPrisma className="w-8 h-8" />, name: "Prisma" },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center p-10 gap-8">
      <div className="flex-1 flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hola, soy Joaquín 👋
        </h1>
        <p
          className={`text-lg md:text-xl ${
            theme === "light" ? "text-slate-400" : "text-slate-300"
          } max-w-xl mb-8`}
        >
          Desarrollador Full Stack con experiencia en proyectos web3 y
          soluciones digitales para salud y otros sectores.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1"
              title={skill.name}
            >
              {skill.icon}
              <span className="text-xs text-slate-500">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/code-illustration.svg"
          alt="Ilustración de desarrollo web"
          className="w-full max-w-lg"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
