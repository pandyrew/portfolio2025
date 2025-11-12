import { useState, useEffect } from "react";
import { Wifi, BatteryFull, ToggleLeft } from "lucide-react";

function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;

    return `${dayName} ${month} ${day}  ${displayHours}:${minutes} ${ampm}`;
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 h-7 z-50 flex items-center justify-between px-4"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.30)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="flex items-center gap-5">
        <img
          src="/happy-face.svg"
          alt="Happy Face"
          className="w-5 h-5 select-none"
        />
        <div
          className="flex items-center gap-4 text-black text-xs font-medium select-none"
          style={{ fontFamily: "Switzer, sans-serif" }}
        >
          <span>Portfolio</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Window</span>
          <span>Help</span>
        </div>
      </div>

      <div
        className="flex items-center gap-5 text-black text-xs select-none"
        style={{ fontFamily: "Switzer, sans-serif" }}
      >
        <Wifi size={18} />
        <BatteryFull size={18} />
        <ToggleLeft size={18} />
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

export default MenuBar;
