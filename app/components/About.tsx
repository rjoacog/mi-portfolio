export function About({ theme }: { theme: "light" | "dark" }) {
  return (
    <section id="about" className="py-16 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">Sobre mí</h2>
      <p
        className={`${
          theme === "light" ? "text-slate-400" : "text-slate-300"
        } max-w-3xl mx-auto text-center`}
      >
        Me gusta resolver problemas con código y aprender nuevas tecnologías.
        Disfruto trabajar tanto en frontend como backend, y tengo experiencia
        creando soluciones reales desde cero. Actualmente trabajo como Frontend
        Developer en un proyecto Web3 especializado en la gestión y minting de
        NFTs. También lideré el desarrollo completo de un sistema de llamado de
        enfermería, desde la fabricación de dispositivos físicos con placas
        Arduino hasta la creación de la plataforma web de gestión en tiempo
        real. Cuento además con formación en Ingeniería Industrial, lo que me
        permite abordar los proyectos con una visión orientada a la eficiencia,
        la optimización de procesos y la gestión estratégica de soluciones
        tecnológicas
      </p>
    </section>
  );
}
