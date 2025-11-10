import { useState, useEffect } from "react";

function ClockCalendar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

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

  const dayOfWeek = days[time.getDay()];
  const month = months[time.getMonth()];
  const date = time.getDate();
  const year = time.getFullYear();

  const getWeekOfYear = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const weekNumber = getWeekOfYear(time);
  const dayOfYear = getDayOfYear(time);

  const FlipBox = ({ value, color }) => (
    <div className="relative w-24 h-20 mx-1">
      <div
        className="absolute inset-0 rounded-lg flex items-center justify-center"
        style={{
          background: "#2a2a2a",
        }}
      >
        <span
          className="text-4xl font-semibold select-none"
          style={{
            color: color,
            fontFamily: "Switzer, sans-serif",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col items-center select-none"
      style={{ fontFamily: "Switzer, sans-serif" }}
    >
      <div className="flex items-center justify-between w-full mb-3 px-2">
        <div className="text-white text-base text-semibold">{dayOfWeek}</div>
        <div className="text-white text-base text-semibold">
          {month} {date} {year}
        </div>
      </div>

      <div className="flex items-center mb-3">
        <FlipBox value={hours} color="#ffffff" />
        <FlipBox value={minutes} color="#ffffff" />
        <FlipBox value={seconds} color="#ffffff" />
      </div>

      <div className="text-white text-base text-semibold  ">
        Week {weekNumber}, Day {dayOfYear}
      </div>
    </div>
  );
}

export default ClockCalendar;
