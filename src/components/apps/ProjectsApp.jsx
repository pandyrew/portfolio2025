import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "CleanASF",
    color: "bg-green-400",
    pinned: true,
    time: "APR 2024",
    award: "Best Use of Neurelo - SF Hacks",
    preview: "Best Use of Neurelo by SF Hacks...",
    description: "Gamified mobile app solving SF's unclean streets challenge.",
    tech: "React Native, Neurelo, YoloV8, MongoDB, S3, Axios",
    image: "/desktop/desktop-apps/cleanasf.png",
    bullets: [
      "Implemented YoloV8 computer vision for real-time garbage detection and classification",
      "Integrated MongoDB and Neurelo for seamless database management and API generation",
      "Designed gamification system with points, leaderboards, and social features",
    ],
  },
  {
    id: 2,
    name: "EasyPC",
    color: "bg-blue-400",
    pinned: true,
    time: "OCT 2023",
    award: "Best Use of MindsDB - Calhacks",
    preview: "Best Use of MindsDB by Calhacks...",
    description:
      "AI-powered PC building assistant with fine-tuned recommendations.",
    tech: "Python, Next.js, React-Three-Fiber, Selenium, LLaMA 7B, Convex",
    image: "/desktop/desktop-apps/easypc.png",
    bullets: [
      "Fine-tuned LLaMA 7B model on 600+ PC components for accurate recommendations",
      "Built custom Selenium scraper to aggregate real-time pricing and availability data",
      "Created 3D visualization with React-Three-Fiber for interactive PC builds",
    ],
  },
  {
    id: 3,
    name: "Sonder",
    color: "bg-purple-400",
    pinned: true,
    time: "JAN 2024",
    award: "Best Blockchain Hack - IrvineHacks",
    preview: "Best Blockchain Hack by IrvineHacks...",
    description:
      "Blockchain platform for beginner developers with real-time collaboration.",
    tech: "Vite, React, Tailwind, Firebase, Metamask",
    image: "/desktop/desktop-apps/sonder.png",
    bullets: [
      "Integrated Metamask wallet for secure blockchain authentication and transactions",
      "Architected Firebase real-time database for instant data synchronization",
      "Led team of beginner developers through modern web development best practices",
    ],
  },
  {
    id: 4,
    name: "DataAtUCI",
    color: "bg-orange-400",
    pinned: false,
    time: "APRIL 2025",
    award: "Official UCI Application System",
    preview: "Application system for datathon...",
    description:
      "Official UCI datathon application system managing 500+ participants.",
    tech: "TypeScript, Supabase, Clerk, Next.js",
    image: "/desktop/desktop-apps/dataatuci.png",
    bullets: [
      "Managed authentication for 500+ participants using Clerk with role-based access control",
      "Implemented automated team formation and matching system with Supabase",
      "Built admin dashboard for real-time event monitoring and participant management",
    ],
  },
  {
    id: 5,
    name: "Laila",
    color: "bg-pink-400",
    pinned: false,
    time: "OCT 2024",
    award: "Calhacks 2024",
    preview: "Autonomous web crawler - Calhacks 2024...",
    description:
      "Autonomous AI web crawler automating repetitive browser tasks.",
    tech: "Selenium, Gemini AI, Apache Kafka",
    image: "/desktop/desktop-apps/ucb.svg",
    bullets: [
      "Developed AI-powered decision engine using Gemini AI for autonomous navigation",
      "Implemented Apache Kafka for distributed task queue and parallel execution",
      "Created intelligent form-filling system with context-aware field detection",
    ],
  },
  {
    id: 6,
    name: "Nasa Suits Project",
    color: "bg-indigo-400",
    pinned: false,
    time: "MAY 2025",
    award: "Tested by NASA Astronauts",
    preview:
      "HUD & mission control for lunar EVA, tested on real astronauts...",
    description:
      "Astronaut-tested HUD and mission control, connected with WebSockets.",
    tech: "Unity, C#, WebSockets, TypeScript, Bun, Hono",
    image: "/desktop/desktop-apps/nasasuits.png",
    bullets: [
      "Created a real-time HUD in Unity, validated during astronaut field tests for lunar operations (not a simulation)",
      "Developed a mission control center app interconnected live with astronaut HUDs using WebSocket event streams",
      "Unified mission systems with Bun & Hono backend in TypeScript, enabling rapid event synchronization and operational monitoring",
    ],
  },
];

function ProjectsApp({ onClose, onDragStart }) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedProjects = filteredProjects.filter((p) => p.pinned);
  const regularProjects = filteredProjects.filter((p) => !p.pinned);

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
            Projects
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
            {pinnedProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:bg-white/50 ${
                  selectedProject.id === project.id
                    ? "bg-blue-100/60 ring-2 ring-blue-400"
                    : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-contain rounded-full"
                />
                <span className="text-xs text-gray-700 truncate w-full text-center">
                  {project.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {regularProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`w-full px-5 py-4 flex items-start gap-4 hover:bg-gray-100 transition-colors ${
                selectedProject.id === project.id ? "bg-blue-50/60" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-12 h-12 object-contain flex-shrink-0 rounded-full"
              />
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-gray-900 text-sm">{project.name}</span>
                  <span className="text-xs text-gray-500 ml-3">
                    {project.time}
                  </span>
                </div>
                <p className="text-xs text-gray-600 truncate">
                  {project.preview}
                </p>
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
              src={selectedProject.image}
              alt={selectedProject.name}
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
                {selectedProject.name}
              </h1>
              <p className="mt-1 tracking-tight text-sm">
                {selectedProject.award.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8 justify-between relative">
            <span className="text-black tracking-tight text-sm">
              {selectedProject.time}
            </span>
          </div>

          <div className="h-px bg-black mb-8 relative"></div>

          <div className="mb-8 relative">
            <p className="tracking-tight leading-relaxed">
              {selectedProject.description}
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
              Key Features
            </h2>
            <div className="space-y-4">
              {selectedProject.bullets.map((bullet, index) => (
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
            <p className="tracking-tight">{selectedProject.tech}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsApp;
