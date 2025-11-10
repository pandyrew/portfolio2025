export const apps = [
  {
    id: "square",
    name: "Square",
    icon: (
      <img
        src="/desktop/square.svg"
        alt="Square"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "10%",
    y: "15%",
    tabs: [
      {
        title: "Square Experience",
        content: (
          <div>
            <h1>Software Engineer Intern</h1>
            <div className="resume-section">
              <div className="resume-item">
                <div className="company">
                  Square (Block, Inc.) - San Francisco, CA
                </div>
                <div className="date">Jun 2025 – Sep 2025</div>
                <ul>
                  <li>
                    Led migration from webhook architecture to Kafka, handling
                    3M+ requests/day, reducing latency by 50%
                  </li>
                  <li>
                    Optimized high-traffic APIs by eliminating redundant calls,
                    improving response latency by 30% in Kotlin and SQL
                  </li>
                  <li>
                    Extended scheduling functionality in Kotlin, enhancing
                    scalability and maintainability for 1.6M+ Merchants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "atoma",
    name: "Atoma",
    icon: (
      <img
        src="/desktop/atoma.svg"
        alt="Atoma"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "25%",
    y: "15%",
    tabs: [
      {
        title: "Atoma Experience",
        content: (
          <div>
            <h1>Software Engineer Intern</h1>
            <div className="resume-section">
              <div className="resume-item">
                <div className="company">Atoma - Irvine, CA</div>
                <div className="date">Jun 2024 - Sep 2024</div>
                <ul>
                  <li>
                    Led team of 3 interns to develop full-stack web application
                    with FastAPI, NextJS, Prisma ORM, and AWS
                  </li>
                  <li>
                    Implemented AI features using OpenAI API, resulting in 7X
                    active user counts
                  </li>
                  <li>
                    Ensured security for 20+ VCs through advanced authentication
                    with Github and Google integrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "nasa",
    name: "NASA SUITS",
    icon: (
      <img
        src="/desktop/nasa.svg"
        alt="NASA"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "40%",
    y: "15%",
    tabs: [
      {
        title: "NASA SUITS",
        content: (
          <div>
            <h1>Student Researcher</h1>
            <div className="resume-section">
              <div className="resume-item">
                <div className="company">NASA SUITS - Houston, TX</div>
                <div className="date">Jul 2024 - Mar 2025</div>
                <ul>
                  <li>
                    Developed EVA branch Spacesuits Technology with $15k in
                    research funding, tested with astronauts
                  </li>
                  <li>
                    Co-Authored accepted paper in machine learning for SpaceCHI
                    research conference in Germany
                  </li>
                  <li>
                    Implemented backend with Bun, Hono, and TypeScript for
                    real-time communication using Unity/C#
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: (
      <img
        src="/desktop/leadership.svg"
        alt="Leadership"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "10%",
    y: "40%",
    tabs: [
      {
        title: "Data at UCI",
        content: (
          <div>
            <h1>Data at UCI</h1>
            <div className="resume-section">
              <div className="resume-item">
                <h3>Director of Marketing</h3>
                <div className="date">May 2024 - Present</div>
                <ul>
                  <li>
                    Re-implementing dataatuci.com using React, NextJS,
                    AceternityUI, hosted on Vercel for 400+ members
                  </li>
                  <li>
                    Tracking 300+ students and faculty for Datathon through
                    TypeScript, Supabase, and Clerk authentication
                  </li>
                  <li>
                    Increased student and faculty sign-ups for annual Datathon
                    by 50%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Hack at UCI",
        content: (
          <div>
            <h1>Hack at UCI</h1>
            <div className="resume-section">
              <div className="resume-item">
                <h3>Web Developer</h3>
                <div className="date">May 2024 - Apr 2025</div>
                <ul>
                  <li>
                    Integrated MongoDB, GoogleDrive API, SendGrid, and UCI's
                    Shibboleth (SSO) for 1600+ applicants
                  </li>
                  <li>
                    Maintained and redesigned ZotHacks 2024 and IrvineHacks
                    2024/2025 event websites
                  </li>
                  <li>
                    Developed club website in React and NextJS for
                    organizational information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "SPACE at UCI",
        content: (
          <div>
            <h1>SPACE at UCI</h1>
            <div className="resume-section">
              <div className="resume-item">
                <h3>Co-Founder</h3>
                <div className="date">2024 - Present</div>
                <ul>
                  <li>
                    Co-founded SPACE (Student Programs for Aerospace and
                    Computing Education)
                  </li>
                  <li>
                    Building community for students interested in aerospace
                    technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "uci",
    name: "Education",
    icon: (
      <img
        src="/desktop/uci.svg"
        alt="UCI"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "25%",
    y: "40%",
    customWindow: true,
    width: 600,
    height: 380,
  },
  {
    id: "research",
    name: "Research",
    icon: (
      <img
        src="/desktop/research.svg"
        alt="Research"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "40%",
    y: "40%",
    tabs: [
      {
        title: "Research",
        content: (
          <div>
            <h1>Research & Publications</h1>
            <div className="resume-section">
              <div className="resume-item">
                <h3>SpaceCHI Conference Paper</h3>
                <div className="company">NASA SUITS Project</div>
                <div className="date">2025</div>
                <ul>
                  <li>
                    Co-authored accepted paper in machine learning for SpaceCHI
                    research conference in Germany
                  </li>
                  <li>
                    Research focused on human-computer interaction in space
                    environments
                  </li>
                  <li>
                    Applied machine learning techniques to astronaut spacesuit
                    technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    icon: (
      <img
        src="/desktop/projects.svg"
        alt="Projects"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "10%",
    y: "65%",
    tabs: [
      {
        title: "All Projects",
        content: (
          <div>
            <h1>My Projects</h1>
            <div className="project-grid">
              <div className="project-card">
                <div className="project-title">CleanASF</div>
                <div className="project-description">
                  'Best Use of Neurelo' by SF Hacks - Gamified garbage pickup
                  mobile app with React Native to solve SF's unclean streets
                  challenge.
                </div>
                <div className="project-tech">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Neurelo</span>
                  <span className="tech-tag">YoloV8</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">S3</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-title">EasyPC</div>
                <div className="project-description">
                  'Best Use of MindsDB' by Calhacks - PC building web app with
                  fine-tuned LLaMA 7B LLM and data on 600+ PC parts.
                </div>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">React-Three-Fiber</span>
                  <span className="tech-tag">Selenium</span>
                  <span className="tech-tag">LLaMA 7B</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-title">Sonder</div>
                <div className="project-description">
                  'Best Blockchain Hack' by IrvineHacks - Blockchain-powered web
                  application built with Vite React and Firebase backend.
                </div>
                <div className="project-tech">
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Tailwind</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Metamask</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Web Development",
        content: (
          <div>
            <h1>Web Development Projects</h1>
            <p>
              Specialized web applications and websites I've built using modern
              frameworks and technologies.
            </p>
          </div>
        ),
      },
      {
        title: "Mobile Apps",
        content: (
          <div>
            <h1>Mobile Applications</h1>
            <p>
              Cross-platform and native mobile applications for iOS and Android.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "about-me",
    name: "About Me",
    icon: (
      <img
        src="/desktop/about-me.svg"
        alt="About Me"
        className="w-full h-full object-contain"
      />
    ),
    showOnDesktop: true,
    x: "25%",
    y: "65%",
    tabs: [
      {
        title: "About Me",
        content: (
          <div>
            <h1>Andrew Hwang</h1>
            <p
              style={{
                fontSize: "16px",
                color: "#6c757d",
                marginBottom: "32px",
              }}
            >
              Data Science Student | Software Engineer | NASA Researcher
            </p>
            <div className="resume-section">
              <h2>Hi! 👋</h2>
              <p>
                I'm Andrew, a Data Science student at UC Irvine with a passion
                for building impactful technology. I've had the privilege of
                working at amazing companies like Square and contributing to
                NASA's spacesuit technology research.
              </p>
              <p>
                When I'm not coding, I'm organizing hackathons, leading
                technical projects, or exploring new technologies. I love
                bringing together my interests in machine learning, full-stack
                development, and human-computer interaction.
              </p>
              <h2>Contact</h2>
              <p>Email: hi@andyrew.dev</p>
              <p>Location: Irvine, CA</p>
            </div>
          </div>
        ),
      },
      {
        title: "Hobbies & Interests",
        content: (
          <div>
            <h1>When I'm Not Coding...</h1>
            <div className="resume-section">
              <p>
                I believe in a balanced life. Outside of tech, I enjoy exploring
                different interests and staying curious about the world.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
];

export const dockApps = [
  {
    id: "finder",
    name: "Finder",
    icon: (
      <img
        src="/nav-bar/finder.svg"
        alt="Finder"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    id: "mail",
    name: "Mail",
    icon: (
      <img
        src="/nav-bar/mail.svg"
        alt="Mail"
        className="w-full h-full object-contain"
      />
    ),
    external: true,
    url: "mailto:hi@andyrew.dev",
  },
  { id: "divider-1", isDivider: true },
  {
    id: "instagram",
    name: "Instagram",
    icon: (
      <img
        src="/nav-bar/instagram.svg"
        alt="Instagram"
        className="w-full h-full object-contain"
      />
    ),
    external: true,
    url: "https://www.instagram.com/andyrew_hwagn/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: (
      <img
        src="/nav-bar/linkedin.svg"
        alt="LinkedIn"
        className="w-full h-full object-contain"
      />
    ),
    external: true,
    url: "https://www.linkedin.com/in/andrew-hwang-78b375258/",
  },
  {
    id: "github",
    name: "GitHub",
    icon: (
      <img
        src="/nav-bar/github.svg"
        alt="GitHub"
        className="w-full h-full object-contain"
      />
    ),
    external: true,
    url: "https://github.com/pandyrew",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: (
      <img
        src="/nav-bar/spotfiy.svg"
        alt="Spotify"
        className="w-full h-full object-contain"
      />
    ),
    tabs: [
      {
        title: "Music Taste",
        content: (
          <div>
            <h1>My Music</h1>
            <div className="resume-section">
              <p>Here's what I'm listening to...</p>
              <iframe
                style={{ borderRadius: "12px", marginTop: "16px" }}
                src="https://open.spotify.com/embed/playlist/5GK6A1vFAWQ1mT9gz1TNrC?si=0fd1c7f8a8864e8a"
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ),
      },
    ],
  },
];
