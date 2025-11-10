import { useState, useRef, useEffect, useCallback } from "react";
import BrowserContent from "./BrowserContent";

function Window({ window, isActive, onClose, onFocus, onUpdate }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isOpening, setIsOpening] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const windowRef = useRef(null);
  const hasMultipleTabs = window.tabs && window.tabs.length > 1;

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpening(false);
    });
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(window.id);
    }, 200);
  };

  const handleMouseDown = (e) => {
    if (e.target.closest(".window-control")) return;

    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    onFocus(window.id);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      onUpdate(window.id, {
        x: Math.max(
          0,
          Math.min(newX, window.innerWidth - window.width || newX)
        ),
        y: Math.max(
          0,
          Math.min(newY, window.innerHeight - window.height || newY)
        ),
      });
    },
    [
      isDragging,
      dragOffset.x,
      dragOffset.y,
      onUpdate,
      window.id,
      window.innerWidth,
      window.width,
      window.innerHeight,
      window.height,
    ]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, handleMouseMove, handleMouseUp]);

  const isCustomWindow = window.customWindow;
  const shouldHideTopBar =
    isCustomWindow || window.id === "finder" || window.id === "projects";

  return (
    <div
      ref={windowRef}
      className={`absolute ${
        !isCustomWindow ? "rounded-[16px] border border-white/[0.3]" : ""
      } ${isCustomWindow ? "overflow-visible" : "overflow-hidden"} ${
        !isCustomWindow ? "min-w-96 min-h-72" : ""
      } ${isDragging ? "" : "transition-all duration-300"} ${
        isActive ? "z-[1100] shadow-2xl" : "z-[1050] shadow-xl"
      }`}
      style={{
        left: window.x,
        top: window.y,
        width: window.width,
        height: window.height,
        backgroundColor: isCustomWindow
          ? "transparent"
          : "rgba(255, 255, 255, 0.25)",
        backdropFilter: isCustomWindow ? "none" : "blur(40px) saturate(130%)",
        WebkitBackdropFilter: isCustomWindow
          ? "none"
          : "blur(40px) saturate(130%)",
        willChange: isDragging ? "transform" : "auto",
        transform: isClosing
          ? "scale(0.85)"
          : isOpening
          ? "scale(0.9)"
          : "scale(1)",
        opacity: isClosing ? 0 : isOpening ? 0 : 1,
        transition: isClosing
          ? "opacity 0.2s ease-out, transform 0.2s ease-out"
          : isOpening
          ? "opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          : isDragging
          ? "none"
          : "all 0.3s",
        boxShadow: isCustomWindow
          ? "none"
          : isActive
          ? "0 32px 128px rgba(0,0,0,0.3), 0 16px 64px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)"
          : "0 16px 64px rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
      onClick={() => onFocus(window.id)}
    >
      {!hasMultipleTabs && !shouldHideTopBar && (
        <div
          className="h-12 border-b border-white/[0.2] flex items-center px-4 cursor-move hover:bg-white/[0.1]"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.05)",
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="flex gap-2 mr-4">
            <div
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "0 2px 8px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
              onClick={handleClose}
            />
            <div
              className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "0 2px 8px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            />
            <div
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "0 2px 8px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            />
          </div>
          <div
            className="text-[13px] font-medium text-gray-800"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            {window.name}
          </div>
        </div>
      )}
      <div
        className={
          hasMultipleTabs || isCustomWindow || shouldHideTopBar
            ? isCustomWindow
              ? "h-full overflow-visible"
              : "h-full overflow-hidden"
            : "h-[calc(100%-3rem)] overflow-hidden"
        }
      >
        <BrowserContent
          app={window}
          onClose={handleClose}
          onDragStart={handleMouseDown}
        />
      </div>
    </div>
  );
}

export default Window;
