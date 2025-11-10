import Window from "./Window";
import Windows95Browser from "./Windows95Browser";

function WindowManager({ windows, activeWindow, onClose, onFocus, onUpdate }) {
  return (
    <>
      {windows.map((window) => {
        if (window.id === "about-me") {
          return (
            <Windows95Browser
              key={window.id}
              window={window}
              isActive={activeWindow === window.id}
              onClose={onClose}
              onFocus={onFocus}
              onUpdate={onUpdate}
            />
          );
        }
        return (
          <Window
            key={window.id}
            window={window}
            isActive={activeWindow === window.id}
            onClose={onClose}
            onFocus={onFocus}
            onUpdate={onUpdate}
          />
        );
      })}
    </>
  );
}

export default WindowManager;
