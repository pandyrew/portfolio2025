import { useState, useEffect, useCallback } from "react";
import Desktop from "./components/Desktop";
import Dock from "./components/Dock";
import WindowManager from "./components/WindowManager";
import MenuBar from "./components/MenuBar";
import Lanyard from "./components/Lanyard";

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [showLanyard, setShowLanyard] = useState(false);

  const openApp = useCallback((app) => {
    if (app.id === "uci") {
      setShowLanyard(true);
      return;
    }

    setOpenWindows((prevWindows) => {
      if (!prevWindows.find((w) => w.id === app.id)) {
        const newWindow = {
          ...app,
          x: Math.random() * 200 + 100,
          y: Math.random() * 100 + 100,
          width: app.width || 800,
          height: app.height || 600,
          minimized: false,
        };
        setActiveWindow(newWindow.id);
        return [...prevWindows, newWindow];
      } else {
        setActiveWindow(app.id);
        return prevWindows;
      }
    });
  }, []);

  const closeLanyard = () => {
    setShowLanyard(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showLanyard) {
        setShowLanyard(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLanyard]);

  useEffect(() => {
    const handleOpenApp = (e) => {
      openApp(e.detail);
    };

    window.addEventListener("openApp", handleOpenApp);
    return () => {
      window.removeEventListener("openApp", handleOpenApp);
    };
  }, [openApp]);

  const closeWindow = (windowId) => {
    setOpenWindows(openWindows.filter((w) => w.id !== windowId));
    if (activeWindow === windowId) {
      const remaining = openWindows.filter((w) => w.id !== windowId);
      setActiveWindow(
        remaining.length > 0 ? remaining[remaining.length - 1].id : null
      );
    }
  };

  const focusWindow = (windowId) => {
    setActiveWindow(windowId);
  };

  const updateWindow = (windowId, updates) => {
    setOpenWindows(
      openWindows.map((w) => (w.id === windowId ? { ...w, ...updates } : w))
    );
  };

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      <MenuBar />
      <Desktop onAppOpen={openApp} />
      <WindowManager
        windows={openWindows}
        activeWindow={activeWindow}
        onClose={closeWindow}
        onFocus={focusWindow}
        onUpdate={updateWindow}
      />
      <Dock onAppOpen={openApp} />

      {showLanyard && (
        <div className="fixed inset-0 z-[2000] overflow-visible">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeLanyard}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
            <div className="relative pointer-events-auto overflow-visible w-full">
              <button
                onClick={closeLanyard}
                className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
