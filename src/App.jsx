import { useEffect, useState } from "react";
import DesktopApp from "./DesktopApp";
import SimplePortfolio from "./components/SimplePortfolio";

const DEFAULT_MODE = "simple";

function readMode() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("mode") === "os") return "os";
  if (params.get("mode") === "simple") return "simple";
  return DEFAULT_MODE;
}

function App() {
  const [mode, setMode] = useState(readMode);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (mode === "os") {
      url.searchParams.set("mode", "os");
    } else {
      url.searchParams.delete("mode");
    }
    window.history.replaceState({}, "", url);
    document.documentElement.classList.toggle("desktop-mode", mode === "os");
  }, [mode]);

  if (mode === "os") {
    return <DesktopApp />;
  }

  return <SimplePortfolio />;
}

export default App;
