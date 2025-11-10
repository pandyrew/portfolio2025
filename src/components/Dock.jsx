import { dockApps } from "../data/apps.jsx";
import { useState, useRef } from "react";
import { scaleValue } from "../utils/scale";

const maxAdditionalSize = 5;
const baseSize = 56;
const hoverSize = 80;
const neighbor1Size = 72;
const neighbor2Size = 64;

function Dock({ onAppOpen }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetRight, setOffsetRight] = useState(0);
  const dockRef = useRef(null);
  const iconRefs = useRef([]);

  const handleMouseMove = (e, iconIndex) => {
    if (!dockRef.current) return;

    setHoveredIndex(iconIndex);

    const mousePosition = e.clientX;
    const iconPositionLeft = e.currentTarget.getBoundingClientRect().left;
    const iconWidth = e.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    setOffsetLeft(offsetPixels);
    setOffsetRight(offsetPixels);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setOffsetLeft(0);
    setOffsetRight(0);
  };

  const getIconSize = (iconIndex) => {
    if (hoveredIndex === null) return baseSize;

    const distance = Math.abs(iconIndex - hoveredIndex);

    if (distance === 0) {
      return hoverSize;
    } else if (distance === 1) {
      const isLeft = iconIndex < hoveredIndex;
      const offset = isLeft ? offsetLeft * -1 : offsetRight;
      return neighbor1Size + offset;
    } else if (distance === 2) {
      const isLeft = iconIndex < hoveredIndex;
      const offset = isLeft ? offsetLeft * -1 : offsetRight;
      return neighbor2Size + offset;
    }

    return baseSize;
  };

  const getIconMarginTop = (iconIndex) => {
    if (hoveredIndex === null) return 0;

    const distance = Math.abs(iconIndex - hoveredIndex);

    if (distance === 0) {
      return -24;
    } else if (distance === 1) {
      const isLeft = iconIndex < hoveredIndex;
      const offset = isLeft ? offsetLeft * -1 : offsetRight;
      return -16 + offset * -1;
    } else if (distance === 2) {
      const isLeft = iconIndex < hoveredIndex;
      const offset = isLeft ? offsetLeft * -1 : offsetRight;
      return -8 + offset * -1;
    }

    return 0;
  };

  return (
    <div
      ref={dockRef}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/[0.08] backdrop-blur-[40px] border border-white/[0.12] rounded-[20px] flex items-end gap-3 z-[1000] transition-all duration-300 ease-out hover:bg-white/[0.12] hover:backdrop-blur-[60px] hover:border-white/[0.18]"
      style={{
        padding: "12px",
        boxShadow:
          "0 16px 64px rgba(0,0,0,0.25), 0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      {(() => {
        let iconIndex = 0;
        return dockApps.map((app) => {
          if (app.isDivider) {
            return (
              <div
                key={app.id}
                className="w-px h-10 bg-white/[0.15] mx-2 rounded-full"
              />
            );
          }

          const currentIconIndex = iconIndex;
          iconIndex++;

          if (app.external) {
            const size = getIconSize(currentIconIndex);
            const marginTop = getIconMarginTop(currentIconIndex);

            return (
              <a
                key={app.id}
                ref={(el) => (iconRefs.current[currentIconIndex] = el)}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={(e) => handleMouseMove(e, currentIconIndex)}
                className="dock-icon group rounded-[16px] bg-white/[0.06] backdrop-blur-sm flex items-center justify-center cursor-pointer text-white relative hover:bg-white/[0.15] hover:backdrop-blur-md hover:shadow-2xl flex-shrink-0"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  marginTop: `${marginTop}px`,
                  transition:
                    "width 0.1s cubic-bezier(0.25, 1, 0.5, 1), height 0.1s cubic-bezier(0.25, 1, 0.5, 1), margin-top 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="w-full h-full text-white overflow-hidden rounded-[16px]">
                  {app.icon}
                </div>
                <div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/[0.5] backdrop-blur-[20px] border border-white/[0.08] text-white px-3 py-2 rounded-[10px] text-xs font-medium whitespace-nowrap opacity-0 invisible transition-all duration-300 pointer-events-none z-[1002] group-hover:opacity-100 group-hover:visible group-hover:transition-none shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.5) 100%)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                    fontFamily: "Switzer, sans-serif",
                  }}
                >
                  {app.name}
                </div>
              </a>
            );
          }

          const size = getIconSize(currentIconIndex);
          const marginTop = getIconMarginTop(currentIconIndex);

          return (
            <div
              key={app.id}
              ref={(el) => (iconRefs.current[currentIconIndex] = el)}
              onMouseMove={(e) => handleMouseMove(e, currentIconIndex)}
              className="dock-icon group rounded-[16px] bg-white/[0.06] backdrop-blur-sm flex items-center justify-center cursor-pointer text-white relative hover:bg-white/[0.15] hover:backdrop-blur-md hover:shadow-2xl flex-shrink-0"
              onClick={() => onAppOpen(app)}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                marginTop: `${marginTop}px`,
                transition:
                  "width 0.1s cubic-bezier(0.25, 1, 0.5, 1), height 0.1s cubic-bezier(0.25, 1, 0.5, 1), margin-top 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
                boxShadow:
                  "0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div className="w-full h-full text-white overflow-hidden rounded-[16px]">
                {app.icon}
              </div>
              <div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/[0.5] backdrop-blur-[20px] border border-white/[0.08] text-white px-3 py-2 rounded-[10px] text-xs font-medium whitespace-nowrap opacity-0 invisible transition-all duration-300 pointer-events-none z-[1002] group-hover:opacity-100 group-hover:visible group-hover:transition-none shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.5) 100%)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                  fontFamily: "Switzer, sans-serif",
                }}
              >
                {app.name}
              </div>
            </div>
          );
        });
      })()}
    </div>
  );
}

export default Dock;
