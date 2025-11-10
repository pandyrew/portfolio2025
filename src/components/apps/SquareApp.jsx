import { motion } from "framer-motion";

function SquareApp() {
  const techText =
    "Technologies used: Kotlin, Javascript, PHP, Go, Apache Kafka, AWS Kinesis, DynamoDB, OpenSearch, Elasticsearch, Datadog, ";

  return (
    <div
      className="relative overflow-hidden h-full flex flex-col bg-white/90"
      style={{ fontFamily: "Switzer, sans-serif" }}
    >
      <div className="p-8 max-w-4xl mx-auto relative overflow-hidden flex-1 flex flex-col w-full">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400  to-indigo-700 rounded-full blur-3xl opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        <div className="flex items-center gap-6 mb-8">
          <motion.img
            src="/desktop/square.svg"
            alt="Square"
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
                Square
              </motion.h1>
            </div>
            <motion.p
              className="mt-2 tracking-tight text-slate-800"
              style={{ fontFamily: "libre caslon display, serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              (Block, Inc.)
            </motion.p>
          </div>
        </div>

        <motion.div
          className="flex items-center gap-4 mb-8 justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="text-black tracking-tight">
            SOFTWARE <br /> ENGINEERING <br /> INTERN
          </span>
          <span className="text-black">
            SAN <br /> FRANCISCO, <br /> CA
          </span>
          <span className="text-black">
            JUN 2025 <br />
            TO <br /> SEP 2025
          </span>
        </motion.div>

        <motion.div
          className="h-px bg-black mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.65,
            ease: [0.33, 1, 0.68, 1],
          }}
          style={{ transformOrigin: "left" }}
        ></motion.div>

        <div className="flex flex-col flex-1 h-full">
          <motion.div
            className="flex-1 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <div className="flex gap-4">
              <span className="flex-shrink-0 text-blue-600">01</span>
              <p className="text-neutral-700 tracking-tight">
                Migrated from webhooks to Kafka
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <div className="flex gap-4">
              <span className="flex-shrink-0 text-blue-600">02</span>
              <p className="text-neutral-700 tracking-tight">Optimized APIs</p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-end"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.9,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <div className="flex gap-4">
              <span className="flex-shrink-0 text-blue-600">03</span>
              <p className="text-neutral-700 tracking-tight">
                Improved fullstack maintainability
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-blue-600 pb-1 text-white overflow-hidden whitespace-nowrap relatives">
        <div className="inline-block animate-scroll">
          <span className="inline-block text-xs pr-1">{techText}</span>
          <span className="inline-block text-xs pr-1">{techText}</span>
          <span className="inline-block text-xs pr-1">{techText}</span>
        </div>
      </div>
    </div>
  );
}

export default SquareApp;
