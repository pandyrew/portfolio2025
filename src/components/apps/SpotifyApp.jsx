function SpotifyApp({ onClose, onDragStart }) {
  return (
    <div
      className="relative overflow-hidden h-full flex flex-col bg-white/90"
      style={{ fontFamily: "Switzer, sans-serif" }}
    >
      <div className="p-8 max-w-6xl mx-auto relative overflow-hidden flex-1 flex flex-col w-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full blur-3xl opacity-30"></div>
        <div className="flex items-center gap-6 mb-8">
          <img
            src="/nav-bar/spotfiy.svg"
            alt="Spotify"
            className="w-20 h-20 object-contain"
          />
          <div>
            <div className="overflow-hidden" style={{ transform: "scaleY(1.2)" }}>
              <h1
                className="text-5xl text-black tracking-tight"
                style={{
                  fontFamily: "Libre Caslon Display, serif",
                }}
              >
                Spotify
              </h1>
            </div>
            <p
              className="mt-2 tracking-tight text-slate-800"
              style={{ fontFamily: "Libre Caslon Display, serif" }}
            >
              My Music Taste
            </p>
          </div>
        </div>

        <div className="h-px bg-black mb-8"></div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <iframe
              style={{ border: "none" }}
              src="https://open.spotify.com/embed/playlist/5GK6A1vFAWQ1mT9gz1TNrC?si=0fd1c7f8a8864e8a"
              width="100%"
              height="420"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify playlist"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotifyApp;

