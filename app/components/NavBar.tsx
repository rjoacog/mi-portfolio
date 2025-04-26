"use client";

import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center ${
        theme === "dark" ? "bg-slate-800" : "bg-gray-100"
      } shadow-md`}
    >
      <Link href="/">
        <span
          className={`${
            theme === "light" ? "text-slate-800" : ""
          } text-xl font-bold`}
        >
          Ricardo Joaquín González
        </span>
      </Link>

      <div className="space-x-4 flex items-center">
        <Link href="/#projects" className="hover:underline">
          <span className={`${theme === "light" ? "text-slate-800" : ""}`}>
            {" "}
            Proyectos
          </span>
        </Link>
        <Link href="/#studies" className="hover:underline">
          <span className={`${theme === "light" ? "text-slate-800" : ""}`}>
            Estudios
          </span>
        </Link>

        <Link href="/#about" className="hover:underline">
          <span className={`${theme === "light" ? "text-slate-800" : ""}`}>
            Sobre mí
          </span>
        </Link>

        <Link href="/#contact" className="hover:underline">
          <span className={`${theme === "light" ? "text-slate-800" : ""}`}>
            Contacto
          </span>
        </Link>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 px-2 py-1 border rounded hover:bg-opacity-80"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
