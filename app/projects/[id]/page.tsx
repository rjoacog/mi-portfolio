"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "../../components/projectsMock";
import { useTheme } from "../../components/ThemeProvider";

export default function ProjectPage() {
  const params = useParams();
  const { theme } = useTheme();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

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
          <div className="flex flex-wrap gap-2 py-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">
              Tecnologías utilizadas:
            </h2>
            <div className="flex justify-start">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`${
                    theme === "dark"
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  } px-3 py-1 m-1 rounded-full text-sm flex items-center`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
