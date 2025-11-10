import { useState } from "react";

function LiquidGlass({
  width = 600,
  height = 102,
  initialX = 0.3,
  initialY = 0.3,
  borderRadius = "9999px",
  textureUrl = "/liquid-glass-rectangle-better.png",
  scale = 1,
  zIndex = 25,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(() => ({
    x: window.innerWidth * initialX,
    y: window.innerHeight * initialY,
  }));

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        className="fixed bg-white/[0.08] shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_16px_32px_rgba(0,0,0,0.12)] cursor-pointer transition-transform active:scale-95"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: borderRadius,
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          backdropFilter: `url(#frosted-${width}-${height})`,
          WebkitBackdropFilter: `url(#frosted-${width}-${height})`,
          zIndex: zIndex,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="absolute inset-0 bg-white/[0.08] backdrop-blur-md"
          style={{ borderRadius: borderRadius }}
        />
      </div>

      <svg style={{ display: "none" }}>
        <filter
          id={`frosted-${width}-${height}`}
          primitiveUnits="objectBoundingBox"
        >
          <feImage
            href={textureUrl}
            x="0"
            y="0"
            width="1"
            height="1"
            preserveAspectRatio="none"
            result="map"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          ></feDisplacementMap>
        </filter>
      </svg>
    </>
  );
}

export default LiquidGlass;
