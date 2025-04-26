import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/code-svgrepo-com.svg', type: 'image/svg+xml' },
      { url: '/code-svgrepo-com.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/code-svgrepo-com.svg', type: 'image/svg+xml' },
    ],
  },
  title: "Joaquín González - Portfolio",
  description: "Portfolio de Joaquín González, Desarrollador Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
