import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function UciApp({ onClose, onDragStart }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const dragStartPos = useRef(null);
  const hasDragged = useRef(false);

  const handleCardClick = (e) => {
    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }
    if (!e.target.closest(".traffic-lights")) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleDragStart = (e) => {
    e.stopPropagation();
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    hasDragged.current = false;
    onDragStart?.(e);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragStartPos.current) {
        const dx = Math.abs(e.clientX - dragStartPos.current.x);
        const dy = Math.abs(e.clientY - dragStartPos.current.y);
        if (dx > 5 || dy > 5) {
          hasDragged.current = true;
        }
      }
    };

    const handleMouseUp = () => {
      dragStartPos.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full"
      style={{
        fontFamily: "Switzer, sans-serif",
        perspective: "1000px",
        overflow: "visible",
      }}
    >
      <div
        className="absolute -top-10 left-0 z-[2000] flex gap-2 traffic-lights px-3 py-2 rounded-lg backdrop-blur-md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(40px) saturate(130%)",
          WebkitBackdropFilter: "blur(40px) saturate(130%)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
        }}
        onMouseDown={handleDragStart}
      >
        <div
          className="w-3 h-3 rounded-full bg-red-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
          style={{
            boxShadow:
              "0 2px 8px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />
        <div
          className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
          style={{
            boxShadow:
              "0 2px 8px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
          onClick={(e) => e.stopPropagation()}
        />
        <div
          className="w-3 h-3 rounded-full bg-green-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
          style={{
            boxShadow:
              "0 2px 8px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        onClick={handleCardClick}
      >
        <div
          className="absolute w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
          onMouseDown={handleDragStart}
        >
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-600 to-blue-800"></div>

          <div className="relative p-8 flex gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-lg shadow-lg overflow-hidden border-4 border-white">
                <img
                  src="/desktop/desktop-apps/AndyPhoto.png"
                  alt="Andrew Hwang"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 pt-2">
              <div>
                <img
                  src="/desktop/uci.svg"
                  alt="UCI"
                  className="h-12 mb-4 opacity-90"
                />
                <h2
                  className="text-3xl text-gray-900 mb-1 tracking-tight"
                  style={{ fontFamily: "Libre Caslon Display, serif" }}
                >
                  Andrew Hwang
                </h2>
                <p className="text-sm text-gray-600 mb-4">Student</p>
              </div>
            </div>
          </div>

          <div className="px-8 pb-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Major
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  Data Science
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Minor
                </p>
                <p className="text-lg text-gray-900 font-medium">Philosophy</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  GPA
                </p>
                <p className="text-lg text-blue-600 font-semibold">3.85</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Class Year
                </p>
                <p className="text-lg text-gray-900 font-medium">2023 - 2027</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 - (283 * 2) / 4 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-900">
                      2/4
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Progress
                  </p>
                  <p className="text-sm text-gray-900 font-medium">
                    Sophomore Year
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Student ID
                </p>
                <p className="text-sm font-mono text-gray-700">12345678</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
          onMouseDown={handleDragStart}
        >
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>

          <div className="relative p-8 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <img
                src="/desktop/uci.svg"
                alt="UCI"
                className="h-12 opacity-90"
              />
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                University of California, Irvine
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  School
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  Donald Bren School of Information & Computer Sciences
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Expected Graduation
                </p>
                <p className="text-lg text-gray-900 font-medium">June 2027</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Status
                </p>
                <p className="text-lg text-gray-900 font-medium">Active</p>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Issued
                  </p>
                  <p className="text-sm text-gray-700">September 2023</p>
                </div>
                <div className="text-right">
                  <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 100 100">
                      <rect x="10" y="10" width="15" height="15" fill="#000" />
                      <rect x="35" y="10" width="15" height="15" fill="#000" />
                      <rect x="75" y="10" width="15" height="15" fill="#000" />
                      <rect x="10" y="35" width="15" height="15" fill="#000" />
                      <rect x="60" y="35" width="15" height="15" fill="#000" />
                      <rect x="10" y="75" width="15" height="15" fill="#000" />
                      <rect x="35" y="75" width="15" height="15" fill="#000" />
                      <rect x="75" y="75" width="15" height="15" fill="#000" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default UciApp;
