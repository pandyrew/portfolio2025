import { useEffect, useMemo } from "react";
import { motion as Motion, useAnimation } from "framer-motion";

const DURATION = 5;
const END_DELAY_MS = 1000;

function StartupAnimation({ visible, onComplete }) {
  const wordsControls = useAnimation();
  const collapseControls = useAnimation();

  const WORDS = useMemo(
    () => [
      "Experience",
      "Design",
      "Interests",
      "Hobbies",
      "Projects",
      "Awards",
      "Publications",
      "Community",
      "MacOS",
      "Music",
      "Portfolio",
      "Experience",
      "Design",
      "Interests",
      "Hobbies",
      "Projects",
      "Awards",
      "Publications",
      "Community",
      "MacOS",
      "Music",
      "Portfolio",
      "Experience",
      "Design",
      "Interests",
      "Hobbies",
      "Projects",
      "Awards",
      "Publications",
      "Community",
      "MacOS",
      "Music",
      "Portfolio",
      "Experience",
      "Design",
      "Interests",
      "Hobbies",
      "Projects",
      "Awards",
      "Publications",
      "Community",
      "MacOS",
      "Music",
      "Portfolio",
    ],
    []
  );

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    async function run() {
      const wordsMove = wordsControls.start({
        y: "-80%",
        transition: { duration: DURATION, ease: [0.77, 0, 0.175, 1] },
      });
      await wordsMove;

      await new Promise((resolve) => setTimeout(resolve, END_DELAY_MS));
      await collapseControls.start({
        clipPath: "inset(50% 0 50% 0)",
        transition: { duration: 0.6, ease: "easeIn" },
      });
      if (!cancelled) onComplete?.();
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [collapseControls, onComplete, visible, wordsControls]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 overflow-hidden z-[2800]">
      <Motion.div
        initial={{ clipPath: "inset(0 0 0 0)" }}
        animate={collapseControls}
        className="relative h-full w-full flex items-center justify-center flex-col overflow-hidden z-20 will-change-[clip-path] font-light text-white bg-black"
      >
        <div className="relative overflow-hidden h-[32rem]">
          <Motion.div
            className="relative pl-[6px] sm:pl-2"
            animate={wordsControls}
            dir="ltr"
          >
            {WORDS.map((word, index) => (
              <span
                key={index}
                className="block text-[2rem] sm:text-[2rem] leading-tight -ml-[6px] sm:-ml-2"
                style={{ fontFamily: "Libre Caslon Display, serif" }}
              >
                {word}
              </span>
            ))}
          </Motion.div>
        </div>
      </Motion.div>
    </div>
  );
}

export default StartupAnimation;
