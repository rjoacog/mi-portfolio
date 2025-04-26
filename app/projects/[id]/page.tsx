"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "../../components/projectsMock";
import { useTheme } from "../../components/ThemeProvider";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiPrisma, SiWeb3Dotjs, SiExpress, SiArduino, SiRedux } from "react-icons/si";

export default function ProjectPage() {
  const params = useParams();
  const { theme } = useTheme();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const getTechIcon = (techName: string) => {
    const techIcons: Record<string, React.ReactNode> = {
      "React": <SiReact className="w-6 h-6" />,
      "Next.js": <SiNextdotjs className="w-6 h-6" />,
      "TypeScript": <SiTypescript className="w-6 h-6" />,
      "JavaScript": <SiJavascript className="w-6 h-6" />,
      "Tailwind": <SiTailwindcss className="w-6 h-6" />,
      "Node.js": <SiNodedotjs className="w-6 h-6" />,
      "Prisma": <SiPrisma className="w-6 h-6" />,
      "Web3.js": <SiWeb3Dotjs className="w-6 h-6" />,
      "Express": <SiExpress className="w-6 h-6" />,
      "Arduino IDE": <SiArduino className="w-6 h-6" />,
      "Redux": <SiRedux className="w-6 h-6" />,
      
    };
    return techIcons[techName] || null;
  };

  return (
    <div
      className={`min-h-screen w-full ${
        theme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p
          className={`text-xl ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          } mb-6`}
        >
          {project.period}
        </p>

        <div
          className={`${
            theme === "dark" ? "bg-slate-800" : "bg-white"
          } rounded-lg shadow-lg p-6 mb-8`}
        >
          <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
          <p
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            } mb-6`}
          >
            {" "}
            {project.description}{" "}
          </p>
          {typeof project.details === "string" ? (
            <p
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } mb-6`}
            >
              {project.details}
            </p>
          ) : (
            <ul
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              } mb-6 list-disc pl-5`}
            >
              {project?.details?.map((detail, index) => (
                <li key={index} className="mb-2">
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {project.imageProject && project.imageProject.length > 0 && (
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.imageProject.map((img, index) => (
                  <div
                    key={index}
                    className={`${
                      theme === "dark" ? "bg-slate-700" : "bg-gray-100"
                    } rounded-lg overflow-hidden flex flex-col h-[500px]`}
                  >
                    <div className="relative h-[420px] w-full">
                      <Image
                        src={img.image}
                        alt={
                          img.description || `Imagen ${index + 1} del proyecto`
                        }
                        className="object-cover"
                        fill
                      />
                    </div>
                    {img.description && (
                      <div className="p-4 flex-grow justify-self-center">
                        <p
                          className={`${
                            theme === "dark" ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {img.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-2 py-6">
            <h2 className="text-2xl font-semibold mb-4 w-full">
              Tecnologías utilizadas:
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    theme === "dark"
                      ? "bg-slate-700 text-slate-200"
                      : "bg-gray-100 text-gray-800"
                  } px-3 py-2 rounded-full`}
                >
                  {getTechIcon(tech)}
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
