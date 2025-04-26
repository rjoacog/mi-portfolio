"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Studies } from "./components/Studies";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={`${
        theme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-gray-50 text-gray-800"
      } ${inter.className}`}
    >
      <AnimatedSection>
        <Hero theme={theme} />
      </AnimatedSection>

      <AnimatedSection>
        <Projects theme={theme} />
      </AnimatedSection>

      <AnimatedSection>
        <Studies theme={theme} />
      </AnimatedSection>

      <AnimatedSection>
        <About theme={theme}/>
      </AnimatedSection>

      <AnimatedSection>
        <Contact theme={theme} />
      </AnimatedSection>
    </main>
  );
}
