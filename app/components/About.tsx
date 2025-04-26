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
        creando soluciones reales desde cero.
      </p>
    </section>
  );
}
