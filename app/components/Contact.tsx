export function Contact({ theme }: { theme: "light" | "dark" }) {
  return (
    <section id="contact" className="py-16 px-6 bg-slate-800">
      <h2
        className={`${
          theme === "light" && "text-slate-200"
        } text-3xl font-semibold mb-8 text-center`}
      >
        Contacto
      </h2>
      <div className="text-center space-y-2 text-slate-300">
        <p>Email: rjoacog@gmail.com</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/rjoacog" className="underline">
            https://github.com/rjoacog
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ricardo-joaquin-gonzalez-588a1a1a7/"
            className="underline"
          >
            Joaquin Gonzalez
          </a>
        </p>
      </div>
    </section>
  );
}
