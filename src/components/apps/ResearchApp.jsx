function ResearchApp() {
  return (
    <div className="p-8">
      <h1
        className="text-4xl font-bold text-gray-900 mb-6"
        style={{ fontFamily: "Libre Caslon Display, serif" }}
      >
        Research
      </h1>
      <div className="max-w-md mx-auto">
        <div className="rounded-lg border border-gray-300 bg-yellow-50 px-6 py-8 text-center text-black">
          <div className="text-3xl mb-2">🚧</div>
          <h2
            className="text-2xl tracking-tight"
            style={{ fontFamily: "Libre Caslon Display, serif" }}
          >
            Under Construction
          </h2>
          <p
            className="text-sm text-gray-700 mt-2 tracking-tight"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            This section is being built. Please check back soon.
          </p>
        </div>
        <div className="mt-4 text-center">
          <span
            className="text-sm tracking-tight"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            For now check out my research paper:{" "}
            <a
              href="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.SpaceCHI.2025.25"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.SpaceCHI.2025.25
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResearchApp;
