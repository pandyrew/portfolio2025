import { useState, useEffect } from "react";
import SquareApp from "./apps/SquareApp";
import AtomaApp from "./apps/AtomaApp";
import NasaApp from "./apps/NasaApp";
import LeadershipApp from "./apps/LeadershipApp";
import UciApp from "./apps/UciApp";
import ResearchApp from "./apps/ResearchApp";
import ProjectsApp from "./apps/ProjectsApp";
import AboutMeApp from "./apps/AboutMeApp";
import FinderApp from "./apps/FinderApp";
import SpotifyApp from "./apps/SpotifyApp";

const appComponents = {
  square: SquareApp,
  atoma: AtomaApp,
  nasa: NasaApp,
  leadership: LeadershipApp,
  uci: UciApp,
  research: ResearchApp,
  projects: ProjectsApp,
  "about-me": AboutMeApp,
  finder: FinderApp,
  spotify: SpotifyApp,
};

function BrowserContent({ app, onClose, onDragStart }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!app.tabs || app.tabs.length === 0) {
    const AppComponent = appComponents[app.id];

    if (AppComponent) {
      return (
        <div
          className={
            app.customWindow
              ? "h-full overflow-visible"
              : "h-full overflow-auto"
          }
        >
          <AppComponent onClose={onClose} onDragStart={onDragStart} />
        </div>
      );
    }

    return (
      <div className="p-6">
        <h1
          className="text-3xl font-semibold text-gray-900 mb-4"
          style={{ fontFamily: "Libre Caslon Display, serif" }}
        >
          {app.name}
        </h1>
        <p
          className="text-gray-600"
          style={{ fontFamily: "Switzer, sans-serif" }}
        >
          Content for {app.name} will be displayed here.
        </p>
      </div>
    );
  }

  if (app.tabs.length === 1) {
    const AppComponent = appComponents[app.id];

    if (AppComponent) {
      return (
        <div
          className={
            app.customWindow
              ? "h-full overflow-visible"
              : "h-full overflow-auto"
          }
        >
          <AppComponent onClose={onClose} onDragStart={onDragStart} />
        </div>
      );
    }

    return (
      <div className="p-6 h-full overflow-auto">
        <div className="max-w-full">{app.tabs[0].content}</div>
      </div>
    );
  }

  const AppComponent = appComponents[app.id];

  if (AppComponent) {
    if (
      app.id === "projects" ||
      app.id === "finder" ||
      app.id === "leadership"
    ) {
      return (
        <div className="h-full w-full overflow-hidden">
          <AppComponent onClose={onClose} onDragStart={onDragStart} />
        </div>
      );
    }

    return (
      <div className="flex h-full">
        <div
          className="h-12 flex items-center px-4 cursor-move border-b border-white/[0.2] absolute top-0 left-0 right-0 z-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
          onMouseDown={onDragStart}
        >
          <div className="flex gap-2">
            <div
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "0 2px 8px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
              onClick={onClose}
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
        </div>
        <div className="pt-12 h-full overflow-auto w-full">
          <AppComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <div
        className="w-56 border-r border-white/[0.3] flex flex-col"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        <div
          className="h-12 flex items-center px-4 cursor-move border-b border-white/[0.2]"
          onMouseDown={onDragStart}
        >
          <div className="flex gap-2">
            <div
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "0 2px 8px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
              onClick={onClose}
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
        </div>
        <div className="flex-1 flex flex-col py-4">
          {app.tabs.map((tab, index) => (
            <div
              key={index}
              className={`px-4 py-3 text-[13px] font-medium cursor-pointer transition-all duration-150 ${
                activeTab === index
                  ? "bg-white/[0.4] text-gray-900 border-r-2 border-blue-500"
                  : "text-gray-800 hover:bg-white/[0.25]"
              }`}
              onClick={() => setActiveTab(index)}
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto bg-white">
        <div className="max-w-full">{app.tabs[activeTab].content}</div>
      </div>
    </div>
  );
}

export default BrowserContent;
