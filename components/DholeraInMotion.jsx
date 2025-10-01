"use client";
import { useState } from "react";

// Paste your full YouTube links here
const videos = [
  {
    url: "https://youtube.com/shorts/CEaJmsRJAHw?si=SBQ1OdklkLhYMCzh",
    title: "Investment Opportunities in Dholera",
  },
  {
    url: "https://youtube.com/shorts/SY2KAXZU2GA?si=PlaFDsPZE_uhGTMD",
    title: "Why Invest in Dholera?",
  },
  {
    url: "https://youtube.com/shorts/8onz2mMeUus?si=Lj6xNcT2tg9fjY34",
    title: "Smart Investment in Dholera",
  },
];

// Extract YouTube video ID from any YouTube/Shorts link
function getYoutubeId(url) {
  const regExp =
    /(?:youtube\.com\/(?:.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/ ]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export default function DholeraInMotion() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700">
        Dholera in Motion 🎥
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
        {videos.map((video, index) => {
          const videoId = getYoutubeId(video.url);
          return (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-gray-200 transition transform "
            >
              {activeVideo === videoId ? (
                <iframe
                  className="w-full h-96 md:h-[28rem] lg:h-[24rem]" // Increased height
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setActiveVideo(videoId)}
                  className="cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-96 md:h-[28rem] lg:h-[24rem] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay with Play button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <svg
                      className="w-16 h-16 text-white drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              {/* Title */}
              <div className="p-4">
                <p className="text-center text-gray-800 font-semibold text-lg line-clamp-2">
                  {video.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
