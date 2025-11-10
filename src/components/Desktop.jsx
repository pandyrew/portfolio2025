import { apps } from "../data/apps.jsx";
import ClockCalendar from "./ClockCalendar";
import LiquidGlass from "./LiquidGlass";

function Desktop({ onAppOpen }) {
  const desktopApps = apps.filter((app) => app.showOnDesktop);

  const appPositions = {
    square: { x: -220, y: -120 },
    atoma: { x: 35, y: -95 },
    nasa: { x: -185, y: 45 },
    leadership: { x: 180, y: -135 },
    uci: { x: -65, y: 85 },
    research: { x: 215, y: 60 },
    projects: { x: 145, y: -30 },
    "about-me": { x: -90, y: -15 },
  };

  return (
    <div className="w-full h-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/background.JPG")' }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[4px] z-[1] transition-all duration-1000"
        style={{
          backgroundImage: 'url("/background.JPG")',
          mask: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMask:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          filter: "blur(4px) saturate(1.2) brightness(1.1)",
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/[0.02] z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.04) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute top-0 right-0 w-96 h-96 bg-cover bg-center bg-no-repeat blur-[2px] z-[3]"
        style={{
          backgroundImage: 'url("/background.JPG")',
          mask: "radial-gradient(ellipse at top right, black 30%, transparent 70%)",
          WebkitMask:
            "radial-gradient(ellipse at top right, black 30%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-16 right-8 text-white text-5xl drop-shadow-lg z-[30] select-none tracking-tight"
        style={{
          fontFamily: "Libre Caslon Display, serif",
          transform: "scaleY(1.3)",
        }}
      >
        Andrew Hwang
      </div>

      <div className="absolute top-1/2 left-1/2 z-[20]">
        {desktopApps.map((app) => {
          const position = appPositions[app.id];
          return (
            <div
              key={app.id}
              className="group cursor-pointer absolute"
              onClick={() => onAppOpen(app)}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                userSelect: "none",
                WebkitUserSelect: "none",
              }}
            >
              <div className="flex flex-col items-center gap-2 transition-all duration-200 active:scale-95 px-4 py-3 rounded-xl hover:bg-white/[0.08] hover:backdrop-blur-sm select-none">
                <div className="w-16 h-16 rounded-[14px] flex items-center justify-center overflow-hidden pointer-events-none">
                  {app.icon}
                </div>
                <span
                  className="text-white text-[11px] font-semibold select-none whitespace-nowrap"
                  style={{
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)",
                    fontFamily: "Switzer, sans-serif",
                  }}
                >
                  {app.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="absolute bottom-4 right-4 text-white/40 text-[9px] z-[30] select-none"
        style={{ fontFamily: "Switzer, sans-serif" }}
      >
        Inspired by macOS design and bychudy.com
      </div>
    </div>
  );
}

export default Desktop;
