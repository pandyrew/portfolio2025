import React from "react";
import { motion } from "framer-motion";

function NasaApp() {
  const [isHovered, setIsHovered] = React.useState(false);
  const techText =
    "Technologies used: Unity, C#, TypeScript, Bun, Hono, WebSockets, Machine Learning, ";

  return (
    <div
      className="relative overflow-hidden h-full flex flex-col bg-white/90"
      style={{ fontFamily: "Switzer, sans-serif" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.7) 0%, transparent 100%)
          `,
          filter: "blur(100px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/desktop/desktop-apps/nasaSwoosh.png')",
          backgroundSize: "70% auto",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
          pointerEvents: "none",
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
      />
      <div
        className="pb-1 text-white overflow-hidden whitespace-nowrap relatives"
        style={{ backgroundColor: "#0B3D91" }}
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
          opacity: 0.2,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11, 61, 145, 0.3) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-[100px] w-[600px] h-[600px] pointer-events-none -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0.1 }}
        animate={{
          opacity: isHovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11, 61, 145, 0.2) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div
        className="p-8 max-w-6xl mx-auto relative overflow-hidden flex-1 flex flex-col w-full z-10"
        style={{ zIndex: 1 }}
      >
        <div className="flex items-center gap-6 mb-8">
          <motion.img
            src="/desktop/nasa.svg"
            alt="NASA"
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
                NASA SUITS
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
              (EVA Branch Spacesuits Technology)
            </motion.p>
          </div>
        </div>

        <div className="flex flex-1 gap-8 ">
          <motion.div
            className="flex flex-col justify-between w-fit"
            // style={{
            //   flex: "1",
            // }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="text-black tracking-tight">
              STUDENT <br /> RESEARCHER
            </span>
            <span className="text-black tracking-tight">
              HOUSTON, <br /> TX
            </span>
            <span className="text-black tracking-tight">
              JUL 2024 <br />
              TO <br /> MAR 2025
            </span>
          </motion.div>

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

          <div
            className="flex flex-col justify-center w-full"
            style={{ flex: "2" }}
          >
            <motion.div
              className="flex gap-4 mb-8 w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <span className="flex-shrink-0" style={{ color: "#0B3D91" }}>
                01
              </span>
              <p className="text-black tracking-tight">
                Developed Spacesuits Technology tested with astronauts
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <span className="flex-shrink-0" style={{ color: "#0B3D91" }}>
                02
              </span>
              <p className="text-black tracking-tight">
                Co-Authored machine learning paper for conference
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <span className="flex-shrink-0" style={{ color: "#0B3D91" }}>
                03
              </span>
              <p className="text-black tracking-tight">
                Built backend with Bun, Hono, TypeScript, and Unity
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NasaApp;
