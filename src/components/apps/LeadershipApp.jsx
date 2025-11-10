import { useState } from "react";

const clubs = [
  {
    id: 1,
    name: "Data at UCI",
    color: "bg-orange-400",
    pinned: true,
    time: "MAY 2024 - PRESENT",
    award: "Director of Marketing",
    preview: "Director of Marketing • Irvine, CA",
    description:
      "Re-implementing the club website for 400+ members with a modern stack and contributing to marketing campaigns to grow membership and event engagement.",
    tech: "React, Next.js, AceternityUI, Vercel, TypeScript, Supabase, Clerk",
    image: "/desktop/desktop-apps/dataatuci.png",
    bullets: [
      "Re-implementing dataatuci.com using React, Next.js, and AceternityUI, hosted on Vercel for 400+ members",
      "Tracking 300+ students and faculty for the Datathon via TypeScript, Supabase, and Clerk authentication",
      "Contributing to marketing campaigns, increasing Datathon sign-ups by 50%",
    ],
  },
  {
    id: 2,
    name: "Hack at UCI",
    color: "bg-blue-400",
    pinned: true,
    time: "MAY 2024 - APR 2025",
    award: "Web Developer",
    preview: "Hackathon organization • Irvine, CA",
    description:
      "Maintained and redesigned club and event websites, integrating systems to handle applications and communications at scale.",
    tech: "React, Next.js, MongoDB, Google Drive API, SendGrid, Shibboleth SSO",
    image: "/desktop/desktop-apps/hackuci.jpg",
    bullets: [
      "Integrated MongoDB, Google Drive API, SendGrid, and UCI Shibboleth SSO for 1600+ applicants",
      "Maintained the club website and redesigned ZotHacks 2024 and IrvineHacks 2024/2025 event sites",
      "Continually developed the club website in React and Next.js to present organizational information",
    ],
  },
  {
    id: 3,
    name: "SPACE at UCI",
    color: "bg-indigo-400",
    pinned: false,
    time: "JUL 2024 - MAR 2025",
    award: "Co-Founder",
    preview: "Student organization • Irvine, CA",
    description:
      "Student organization formed to support astronaut-operations research, secure campus funding, and coordinate teams building real-time HUDs and mission control systems.",
    tech: "Unity, C#, WebSockets, TypeScript, Bun, Hono",
    image: "/desktop/desktop-apps/spaceuci.jpg",
    bullets: [
      "Created a real-time HUD in Unity, validated during astronaut field tests for lunar operations",
      "Developed a mission control center app interconnected live with HUDs using WebSocket event streams",
      "Unified mission systems with a Bun & Hono backend in TypeScript for rapid event synchronization",
    ],
  },
];

function LeadershipApp({ onClose, onDragStart }) {
  const [selectedClub, setSelectedClub] = useState(clubs[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClubs = clubs.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedClubs = filteredClubs.filter((c) => c.pinned);
  const regularClubs = filteredClubs.filter((c) => !c.pinned);

  return (
    <div className="flex h-full" style={{ fontFamily: "Switzer, sans-serif" }}>
      <div
        className="w-80 border-r border-gray-200 flex flex-col bg-white/40"
        style={{
          backdropFilter: "url(#frosted)",
          WebkitBackdropFilter: "url(#frosted)",
        }}
      >
        <div
          className="p-4 border-b border-gray-200/50"
          onMouseDown={onDragStart}
        >
          <div className="flex gap-2 mb-3 cursor-move">
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
          <h2
            className="text-3xl text-gray-900 mb-3 text-center w-full tracking-tight font-light"
            style={{
              fontFamily: "Libre Caslon Display, serif",
              transform: "scaleY(1.2)",
            }}
          >
            Leadership
          </h2>
          <div
            className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg backdrop-blur-sm"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <svg
              className="w-3.5 h-3.5 text-gray-500"
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
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-xs text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            {pinnedClubs.map((club) => (
              <button
                key={club.id}
                onClick={() => setSelectedClub(club)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:bg-white/50 ${
                  selectedClub.id === club.id
                    ? "bg-blue-100/60 ring-2 ring-blue-400"
                    : ""
                }`}
              >
                <img
                  src={club.image}
                  alt={club.name}
                  className="object-contain rounded-full"
                />
                <span className="text-xs text-gray-700 truncate w-full text-center">
                  {club.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {regularClubs.map((club) => (
            <button
              key={club.id}
              onClick={() => setSelectedClub(club)}
              className={`w-full px-5 py-4 flex items-start gap-4 hover:bg-gray-100 transition-colors ${
                selectedClub.id === club.id ? "bg-blue-50/60" : ""
              }`}
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-12 h-12 object-contain flex-shrink-0 rounded-full"
              />
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-gray-900 text-sm">{club.name}</span>
                  <span className="text-xs text-gray-500 ml-3">
                    {club.time}
                  </span>
                </div>
                <p className="text-xs text-gray-600 truncate">{club.preview}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white overflow-y-auto">
        <div className="p-8 max-w-4xl mx-auto w-full relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30"></div>
          <div className="flex items-center gap-6 mb-8 relative">
            <img
              src={selectedClub.image}
              alt={selectedClub.name}
              className="w-20 h-20 object-contain"
            />
            <div>
              <h1
                className="text-5xl text-black tracking-tight"
                style={{
                  fontFamily: "Libre Caslon Display, serif",
                  transform: "scaleY(1.2)",
                }}
              >
                {selectedClub.name}
              </h1>
              <p className="mt-1 tracking-tight text-sm">
                {selectedClub.award.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8 justify-between relative">
            <span className="text-black tracking-tight text-sm">
              {selectedClub.time}
            </span>
          </div>

          <div className="h-px bg-black mb-8 relative"></div>

          <div className="mb-8 relative">
            <p className="tracking-tight leading-relaxed">
              {selectedClub.description}
            </p>
          </div>

          <div className="mb-8 relative">
            <h2
              className="text-2xl text-black tracking-tight mb-6"
              style={{
                fontFamily: "Libre Caslon Display, serif",
                transform: "scaleY(1.2)",
              }}
            >
              Key Contributions
            </h2>
            <div className="space-y-4">
              {selectedClub.bullets.map((bullet, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="text-neutral-400 font-medium text-sm min-w-[2rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="tracking-tight leading-relaxed flex-1"
                    style={{
                      fontFamily: "Switzer, sans-serif",
                    }}
                  >
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 relative">
            <h2
              className="text-2xl text-black tracking-tight mb-4"
              style={{
                fontFamily: "Libre Caslon Display, serif",
                transform: "scaleY(1.2)",
              }}
            >
              Technologies
            </h2>
            <p className="tracking-tight">{selectedClub.tech}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipApp;
