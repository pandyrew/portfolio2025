import { useState, useRef, useEffect, useCallback } from "react";
import AboutMeApp from "./apps/AboutMeApp";

const appComponents = {
  "about-me": AboutMeApp,
};

function Windows95Browser({ window, isActive, onClose, onFocus, onUpdate }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isOpening, setIsOpening] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const windowRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpening(false);
    });
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(window.id);
    }, 200);
  }, [onClose, window.id]);

  const handleMouseDown = (e) => {
    if (e.target.closest(".window-control")) return;
    if (e.target.closest(".toolbar")) return;
    if (e.target.closest(".menu-bar")) return;

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    globalThis.window.addEventListener("keydown", handleKeyDown);
    return () =>
      globalThis.window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  const AppComponent = appComponents[window.id];

  return (
    <div
      ref={windowRef}
      className={`absolute ${isDragging ? "" : "transition-all duration-300"} ${
        isActive ? "z-[1100]" : "z-[1050]"
      }`}
      style={{
        left: window.x,
        top: window.y,
        width: window.width,
        height: window.height,
        backgroundColor: "#C0C0C0",
        border: "2px outset #C0C0C0",
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
      }}
      onClick={() => onFocus(window.id)}
    >
      <div
        className="h-6 flex items-center px-1 cursor-move"
        style={{
          backgroundColor: "#008080",
          borderBottom: "1px solid #000000",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2)",
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            marginRight: "4px",
            background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            borderRadius: "2px",
            border: "1px solid #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#000",
            flexShrink: 0,
          }}
        >
          N
        </div>
        <div
          className="flex-1 px-2 text-white"
          style={{
            fontFamily: "MS Sans Serif, sans-serif",
            fontSize: "11px",
            textShadow: "1px 1px 0px rgba(0,0,0,0.5)",
          }}
        >
          {window.name} - Netscape
        </div>
        <div className="flex gap-0" style={{ marginLeft: "auto" }}>
          <button
            className="window-control"
            style={{
              width: "20px",
              height: "18px",
              backgroundColor: "#C0C0C0",
              border: "2px outset #C0C0C0",
              borderRight: "1px solid #808080",
              cursor: "pointer",
              fontSize: "11px",
              color: "#000",
              fontFamily: "MS Sans Serif, sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              lineHeight: "1",
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.currentTarget.style.border = "2px inset #C0C0C0";
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
              e.currentTarget.style.borderRight = "1px solid #808080";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px inset #C0C0C0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
              e.currentTarget.style.borderRight = "1px solid #808080";
            }}
          >
            <span style={{ marginTop: "-2px" }}>_</span>
          </button>
          <button
            className="window-control"
            style={{
              width: "20px",
              height: "18px",
              backgroundColor: "#C0C0C0",
              border: "2px outset #C0C0C0",
              borderRight: "1px solid #808080",
              cursor: "pointer",
              fontSize: "9px",
              color: "#000",
              fontFamily: "MS Sans Serif, sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              lineHeight: "1",
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.currentTarget.style.border = "2px inset #C0C0C0";
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
              e.currentTarget.style.borderRight = "1px solid #808080";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px inset #C0C0C0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
              e.currentTarget.style.borderRight = "1px solid #808080";
            }}
          >
            <span style={{ marginTop: "1px" }}>□</span>
          </button>
          <button
            className="window-control"
            style={{
              width: "20px",
              height: "18px",
              backgroundColor: "#C0C0C0",
              border: "2px outset #C0C0C0",
              cursor: "pointer",
              fontSize: "11px",
              color: "#000",
              fontFamily: "MS Sans Serif, sans-serif",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              lineHeight: "1",
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.currentTarget.style.border = "2px inset #C0C0C0";
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px inset #C0C0C0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
            }}
          >
            <span style={{ marginTop: "-1px" }}>×</span>
          </button>
        </div>
      </div>

      <div
        className="menu-bar"
        style={{
          height: "20px",
          backgroundColor: "#C0C0C0",
          borderBottom: "1px solid #808080",
          display: "flex",
          alignItems: "center",
          paddingLeft: "4px",
          fontFamily: "MS Sans Serif, sans-serif",
          fontSize: "11px",
        }}
      >
        <span style={{ padding: "0 8px", cursor: "pointer" }}>F</span>
        <span style={{ padding: "0 8px", cursor: "pointer" }}>E</span>
        <span style={{ padding: "0 8px", cursor: "pointer" }}>V</span>
        <span style={{ padding: "0 8px", cursor: "pointer" }}>G</span>
        <span style={{ padding: "0 8px", cursor: "pointer" }}>C</span>
        <span style={{ padding: "0 8px", cursor: "pointer" }}>H</span>
      </div>

      <div
        className="toolbar"
        style={{
          backgroundColor: "#C0C0C0",
          borderBottom: "1px solid #808080",
          padding: "4px",
          display: "flex",
          gap: "2px",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            ),
            label: "Back",
            active: true,
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#808080"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            ),
            label: "Forward",
            active: false,
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2L8 6M8 10L8 14M2 8L6 8M10 8L14 8"
                  stroke="#0000FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="3"
                  stroke="#0000FF"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            ),
            label: "Reload",
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2L4 6H6V12H10V6H12L8 2Z"
                  fill="#000"
                  stroke="#000"
                  strokeWidth="0.5"
                />
                <path d="M2 14H14" stroke="#000" strokeWidth="1" />
              </svg>
            ),
            label: "Home",
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="3"
                  stroke="#FFD700"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M10 10L13 13"
                  stroke="#FFD700"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
            label: "Search",
          },
          {
            icon: (
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    "linear-gradient(135deg, #0000FF 0%, #0080FF 100%)",
                  borderRadius: "2px",
                  border: "1px solid #000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "8px",
                  fontWeight: "bold",
                  color: "#FFF",
                }}
              >
                My
              </div>
            ),
            label: "Netscape",
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="12"
                  height="10"
                  stroke="#808080"
                  strokeWidth="1"
                  fill="none"
                />
                <path d="M2 7H14" stroke="#808080" strokeWidth="1" />
                <circle cx="5" cy="9.5" r="1" fill="#808080" />
                <circle cx="8" cy="9.5" r="1" fill="#808080" />
                <circle cx="11" cy="9.5" r="1" fill="#808080" />
              </svg>
            ),
            label: "Print",
            active: false,
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                  x="3"
                  y="6"
                  width="10"
                  height="8"
                  stroke="#000"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M5 6V4C5 3 6 2 8 2C10 2 11 3 11 4V6"
                  stroke="#000"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M6 9L7 10L10 7"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            label: "Security",
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="12"
                  height="12"
                  stroke="#000"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="8" cy="5" r="1" fill="#FF0000" />
                <circle cx="8" cy="8" r="1" fill="#FFFF00" />
                <circle cx="8" cy="11" r="1" fill="#00FF00" />
              </svg>
            ),
            label: "Stop",
          },
        ].map((btn, idx) => (
          <button
            key={idx}
            style={{
              minWidth: "60px",
              height: "50px",
              backgroundColor: btn.active ? "#C0C0C0" : "#C0C0C0",
              border: "2px outset #C0C0C0",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              fontSize: "10px",
              fontFamily: "MS Sans Serif, sans-serif",
              padding: "4px 2px",
              opacity: btn.active === false ? 0.5 : 1,
            }}
            onMouseEnter={(e) => {
              if (btn.active !== false) {
                e.currentTarget.style.border = "2px inset #C0C0C0";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
            }}
            onMouseDown={(e) => {
              if (btn.active !== false) {
                e.currentTarget.style.border = "2px inset #C0C0C0";
              }
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.border = "2px outset #C0C0C0";
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {btn.icon}
            </span>
            <span style={{ fontSize: "9px" }}>{btn.label}</span>
          </button>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#C0C0C0",
          borderBottom: "1px solid #808080",
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontFamily: "MS Sans Serif, sans-serif",
          fontSize: "11px",
        }}
      >
        <span>Bookmarks</span>
        <span style={{ marginLeft: "8px" }}>Location:</span>
        <input
          type="text"
          value="http://www.geocities.com/AndrewVille/"
          readOnly
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "1px inset #808080",
            padding: "2px 4px",
            fontFamily: "MS Sans Serif, sans-serif",
            fontSize: "11px",
          }}
        />
      </div>

      <div
        style={{
          height: `calc(100% - ${6 + 20 + 58 + 24}px)`,
          overflow: "auto",
          backgroundColor: "#FFFFFF",
        }}
      >
        {AppComponent && <AppComponent />}
      </div>
    </div>
  );
}

export default Windows95Browser;
