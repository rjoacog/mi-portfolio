export function Studies({ theme }: { theme: "light" | "dark" }) {
  return (
    <section id="studies" className="py-16 px-6 bg-slate-800">
      <h2
        className={` ${
          theme === "light" && "text-slate-200"
        } text-3xl font-semibold mb-8 text-center`}
      >
        Estudios
      </h2>
      <ul className="space-y-4 text-slate-300">
        <li>🎓 Tecnicatura Universitaria en Programación (en curso)</li>
        <li>🎓 Ingeniería Industrial (cursado finalizado, 75% completada)</li>
        <li>👨‍💻 Bootcamp Full Stack (Henry)</li>
      </ul>
    </section>
  );
}
