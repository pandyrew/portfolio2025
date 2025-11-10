import React from "react";
import { motion } from "framer-motion";
import { AtomSVG } from "../AtomaSVG";

function AtomaApp() {
  const [isHovered, setIsHovered] = React.useState(false);
  const techText =
    "Technologies used: Python, TypeScript, FastAPI, Next.js, Prisma ORM, AWS, OpenAI API, GitHub OAuth, Google OAuth, ";

  return (
    <div
      className="relative overflow-hidden h-full flex flex-col bg-white/90"
      style={{ fontFamily: "Switzer, sans-serif" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pb-1 text-white overflow-hidden whitespace-nowrap relatives"
        style={{ backgroundColor: "#3254D9" }}
      >
        <div className="inline-block animate-scroll">
          <span className="inline-block text-xs pr-1">{techText}</span>
          <span className="inline-block text-xs pr-1">{techText}</span>
          <span className="inline-block text-xs pr-1">{techText}</span>
        </div>
      </div>
      <motion.div
        className="absolute top-1/2 -right-[200px] w-[600px] h-[600px] pointer-events-none -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.3,
        }}
        transition={{ duration: 0.3 }}
      >
        <AtomSVG isColored={true} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-[100px] w-[600px] h-[600px] pointer-events-none -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: isHovered ? 0.3 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      <div className="p-8 max-w-6xl mx-auto relative overflow-hidden flex-1 flex flex-col w-full z-10">
        <div className="flex items-center gap-6 mb-8">
          <motion.img
            src="/desktop/atoma.svg"
            alt="Atoma"
            className="w-20 h-20 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          />
          <div>
            <div
              className="overflow-hidden"
              style={{ transform: "scaleY(1.2)" }}
            >
              <motion.h1
                className="text-5xl text-black tracking-tight"
                style={{
                  fontFamily: "Libre Caslon Display, serif",
                }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                Atoma
              </motion.h1>
            </div>
            <motion.p
              className="mt-2 tracking-tight text-slate-800"
              style={{ fontFamily: "Libre Caslon Display, serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              (Financial News Startup)
            </motion.p>
          </div>
        </div>

        <div className="flex flex-1 gap-8">
          <div className="flex flex-col justify-center" style={{ flex: "2" }}>
            <motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <span className="flex-shrink-0" style={{ color: "#3254D9" }}>
                01
              </span>
              <p className="text-black tracking-tight">
                Led team of 3 interns building full-stack application
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <span className="flex-shrink-0" style={{ color: "#3254D9" }}>
                02
              </span>
              <p className="text-black tracking-tight">
                Implemented AI features with OpenAI API
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <span className="flex-shrink-0" style={{ color: "#3254D9" }}>
                03
              </span>
              <p className="text-black tracking-tight">
                Secured authentication for 20+ VCs
              </p>
            </motion.div>
          </div>

          <motion.div
            className="w-px bg-black self-stretch"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.55,
              ease: [0.33, 1, 0.68, 1],
            }}
            style={{ transformOrigin: "top" }}
          ></motion.div>

          <motion.div
            className="flex flex-col justify-between"
            style={{
              flex: "1",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="text-black tracking-tight">
              SOFTWARE <br /> ENGINEERING <br /> INTERN
            </span>
            <span className="text-black">
              IRVINE, <br /> CA
            </span>
            <span className="text-black">
              JUN 2024 <br />
              TO <br /> SEP 2024
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AtomaApp;
