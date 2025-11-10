import { useState, useEffect } from "react";
import { apps } from "../../data/apps";

function FinderApp({ onClose, onDragStart }) {
  const allApps = apps.filter((app) => app.showOnDesktop !== false);
  const [currentView, setCurrentView] = useState("Applications");
  const [navigationHistory, setNavigationHistory] = useState(["Applications"]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [recentApps, setRecentApps] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const appEndDates = {
    square: new Date(2025, 8, 5),
    atoma: new Date(2024, 8, 1),
    nasa: new Date(2025, 5, 1),
    leadership: null,
    uci: null,
    research: new Date(2025, 5, 20),
    projects: null,
    "about-me": null,
  };

  const getAppDate = (app) => {
    if (app.openedAt) {
      return app.openedAt;
    }
    const endDate = appEndDates[app.id];
    if (endDate === null) {
      return null;
    }
    return endDate;
  };

  const formatDate = (date) => {
    const dateToFormat = date || new Date();
    const now = new Date();
    const diffTime = now.getTime() - dateToFormat.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);

    if (diffDays < 0) {
      return dateToFormat.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      });
    }

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "1 day ago";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffWeeks === 1) {
      return "1 week ago";
    } else if (diffWeeks < 4) {
      return `${diffWeeks} weeks ago`;
    } else if (diffMonths === 1) {
      return "1 month ago";
    } else if (diffMonths < 3) {
      return `${diffMonths} months ago`;
    } else {
      return dateToFormat.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      });
    }
  };

  useEffect(() => {
    const handleAppOpen = (e) => {
      const app = e.detail;
      setRecentApps((prev) => {
        const filtered = prev.filter((a) => a.id !== app.id);
        return [{ ...app, openedAt: new Date() }, ...filtered].slice(0, 10);
      });
    };

    window.addEventListener("openApp", handleAppOpen);
    return () => window.removeEventListener("openApp", handleAppOpen);
  }, []);

  const handleAppClick = (app) => {
    const event = new CustomEvent("openApp", { detail: app });
    window.dispatchEvent(event);
  };

  const navigateTo = (view) => {
    const newHistory = navigationHistory.slice(0, historyIndex + 1);
    newHistory.push(view);
    setNavigationHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setCurrentView(view);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentView(navigationHistory[newIndex]);
    }
  };

  const goForward = () => {
    if (historyIndex < navigationHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentView(navigationHistory[newIndex]);
    }
  };

  const canGoBack = historyIndex > 0;
  const canGoForward = historyIndex < navigationHistory.length - 1;

  const getDisplayItems = () => {
    let items = [];
    if (currentView === "Applications") {
      items = allApps;
    } else if (currentView === "Recents") {
      items = recentApps;
    } else if (currentView === "Desktop") {
      items = allApps;
    }

    const sorted = [...items].sort((a, b) => {
      if (sortBy === "name") {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (sortOrder === "asc") {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      } else if (sortBy === "date") {
        const dateA = getAppDate(a) || new Date();
        const dateB = getAppDate(b) || new Date();
        if (sortOrder === "asc") {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      }
      return 0;
    });

    return sorted;
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  return (
    <div
      className="flex h-full w-full absolute inset-0"
      style={{ fontFamily: "Switzer, sans-serif" }}
    >
      <div
        className="w-auto min-w-[180px] border-r border-gray-200 flex flex-col bg-white/40 h-full"
        style={{
          backdropFilter: "url(#frosted)",
          WebkitBackdropFilter: "url(#frosted)",
        }}
      >
        <div
          className="p-3 border-b border-gray-200/50"
          onMouseDown={onDragStart}
        >
          <div className="flex gap-2 mb-2 cursor-move">
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

        <div className="flex-1 overflow-y-auto">
          <div className="px-3 py-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Favourites
            </div>
            <div className="space-y-1 mb-6">
              <button
                onClick={() => navigateTo("Applications")}
                className={`w-full px-2 py-1.5 text-sm rounded text-left whitespace-nowrap ${
                  currentView === "Applications"
                    ? "bg-white/70 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-white/50"
                }`}
              >
                Applications
              </button>
            </div>

            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Locations
            </div>
            <div className="space-y-1 mb-6">
              <button
                onClick={() => navigateTo("Desktop")}
                className={`w-full px-2 py-1.5 text-sm rounded text-left whitespace-nowrap ${
                  currentView === "Desktop"
                    ? "bg-white/70 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-white/50"
                }`}
              >
                Desktop
              </button>
            </div>

            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Recents
            </div>
            <div className="space-y-1">
              <button
                onClick={() => navigateTo("Recents")}
                className={`w-full px-2 py-1.5 text-sm rounded text-left whitespace-nowrap ${
                  currentView === "Recents"
                    ? "bg-white/70 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-white/50"
                }`}
              >
                Recents
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white overflow-y-auto h-full">
        <div className="border-b border-gray-200 flex items-center justify-between gap-2 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <button
                onClick={goBack}
                disabled={!canGoBack}
                className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                  canGoBack
                    ? "text-gray-700"
                    : "text-gray-300 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goForward}
                disabled={!canGoForward}
                className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                  canGoForward
                    ? "text-gray-700"
                    : "text-gray-300 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {currentView}
            </div>
          </div>
          <button className="p-1 rounded hover:bg-gray-100 transition-colors text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="border-b border-gray-200">
          <div className="grid grid-cols-[1fr_200px] px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <button
              onClick={() => handleSort("name")}
              className="text-left hover:text-gray-700 flex items-center gap-1"
            >
              Name
              {sortBy === "name" && (
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {sortOrder === "asc" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  )}
                </svg>
              )}
            </button>
            <button
              onClick={() => handleSort("date")}
              className="text-left hover:text-gray-700 flex items-center gap-1"
            >
              Date Modified
              {sortBy === "date" && (
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {sortOrder === "asc" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          {getDisplayItems().map((app) => (
            <button
              key={app.id}
              onClick={() => handleAppClick(app)}
              className="w-full grid grid-cols-[1fr_200px] px-4 py-2 hover:bg-gray-50 border-b border-gray-100 transition-colors text-left items-center"
            >
              <div className="text-sm text-gray-900">{app.name}</div>
              <div className="text-xs text-gray-500">
                {formatDate(getAppDate(app))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FinderApp;
