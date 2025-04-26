export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-end">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ricardo Joaquín González. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
