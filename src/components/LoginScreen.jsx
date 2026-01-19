import { useMemo, useState, useEffect } from "react";
import {
  Wifi,
  BatteryCharging,
  ToggleLeft,
  Power,
  RotateCcw,
  Moon,
} from "lucide-react";

function LoginScreen({ visible, onSelectUser }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatClock = (date) => {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes}`;
  };

  const formatPrettyDate = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}`;
  };

  const users = useMemo(() => {
    return [{ id: "visitor", name: "Visitor", avatar: "/happy-face.svg" }];
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[3000]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/background.JPG")' }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center blur-[6px]"
        style={{
          backgroundImage: 'url("/background.JPG")',
          mask: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          WebkitMask:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          filter: "blur(6px) saturate(1.15) brightness(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-0 left-0 right-0 h-7 flex items-center justify-end px-4">
        <div
          className="flex items-center gap-5 text-white text-xs select-none"
          style={{ fontFamily: "Switzer, sans-serif" }}
        >
          <Wifi size={19} strokeWidth={2} />
          <BatteryCharging size={19} strokeWidth={2} />
          <ToggleLeft size={19} strokeWidth={2} />
        </div>
      </div>
      <div className="absolute top-12 left-0 right-0 flex justify-center pointer-events-none">
        <div className="text-white text-center">
          <div
            className="text-sm sm:text-sm opacity-90"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            {formatPrettyDate(time)}
          </div>
          <div
            className="relative inline-block"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            <span className="block text-6xl sm:text-7xl font-semibold tracking-tight text-gray-200/90">
              {formatClock(time)}
            </span>
          </div>
          <div
            className="mt-12 text-6xl text-white/90 tracking-tight"
            style={{
              fontFamily: "Libre Caslon Display, serif",
              transform: "scaleY(1.2)",
            }}
          >
            Andrew H. Portfolio
          </div>
        </div>
      </div>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center gap-8 flex-col justify-start">
            {users.map((u) => (
              <button
                key={u.id}
                onClick={() => onSelectUser?.(u)}
                className="group relative isolate flex flex-col items-center gap-3 focus:outline-none"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 rounded-2xl bg-white/10 backdrop-blur-md  opacity-0 transition-opacity duration-200 group-hover:opacity-100 -z-10"
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/70 shadow-xl transition-transform duration-150 group-active:scale-95 bg-white">
                    <img
                      src={u.avatar}
                      alt={u.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="text-white text-xl tracking-wide drop-shadow-md text-white/80"
                    style={{ fontFamily: "Switzer, sans-serif" }}
                  >
                    {u.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-12 text-white/90">
          <button
            className="flex flex-col items-center gap-2 text-xs"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30">
              <Power size={18} strokeWidth={2} />
            </div>
            <span>Shut Down</span>
          </button>
          <button
            className="flex flex-col items-center gap-2 text-xs"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30">
              <RotateCcw size={18} strokeWidth={2} />
            </div>
            <span>Restart</span>
          </button>
          <button
            className="flex flex-col items-center gap-2 text-xs"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30">
              <Moon size={18} strokeWidth={2} />
            </div>
            <span>Sleep</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
