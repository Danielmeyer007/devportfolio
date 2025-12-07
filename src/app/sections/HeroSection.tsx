import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Rápido y estable",
    copy: "Arquitecturas ligeras con mediciones claras: tiempo al primer byte, CLS y conversiones.",
  },
  {
    title: "Web, AI y Web3",
    copy: "Automatizaciones útiles y conectores seguros cuando realmente aportan valor al negocio.",
  },
  {
    title: "Socio de founders",
    copy: "Cadencias ágiles, comunicación clara y entregas visibles cada semana.",
  },
];

const stats = [
  { value: "40+", label: "Proyectos lanzados" },
  { value: "2-4 sem", label: "Tiempo típico" },
  { value: "24/7", label: "Soporte activo" },
];

const workflow = ["Brief en 48h", "UX/UI interactivo", "Dev paralelo", "QA + Launch"];

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center py-24 px-4 sm:px-8">
      <div
        className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-purple-700/25 via-fuchsia-500/10 to-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-10 rounded-[32px] bg-white/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-6xl bg-black/55 border border-white/10 backdrop-blur-xl rounded-[32px] px-6 sm:px-10 py-14 shadow-[0_20px_90px_rgba(0,0,0,0.55)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-500/10" />
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-cyan-400/25 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-[13px] uppercase tracking-[0.14em] text-white/70">
              <span className="rounded-full border border-white/20 px-4 py-2 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                Disponible para freelance
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 bg-gradient-to-r from-purple-500/25 to-blue-500/20 text-white shadow-[0_10px_40px_rgba(109,40,217,0.35)]">
                Web · AI · Web3 · UX/UI
              </span>
            </div>

            <div className="mt-8 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
              >
                Experiencias digitales nítidas, rápidas y listas para crecer.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 max-w-3xl"
              >
                Diseño y desarrollo productos que cargan veloz, explican claro y
                convierten mejor, combinando frontend moderno con automatizaciones y
                Web3 donde realmente suman.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-[0_10px_45px_rgba(109,40,217,0.45)] hover:translate-y-[-1px] transition-transform"
                  >
                    Iniciar proyecto
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/projectsamples"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold border border-white/30 text-white/90 hover:text-white hover:border-white/50 transition"
                  >
                    Ver proyectos en vivo
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white/70 hover:text-white"
                  >
                    Servicios y precios →
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 + index * 0.06 }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 text-center"
                >
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl border border-white/12 bg-white/5 p-6 shadow-[0_10px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-purple-300">★ Diferenciales</p>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                  Calidad + Velocidad
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-white/10 bg-black/40 p-4"
                  >
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.copy}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-2xl border border-white/12 bg-white/5 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-blue-300">Ruta de entrega</p>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Transparente
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-5/6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
