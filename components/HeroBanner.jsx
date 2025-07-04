import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  const features = [
    {
      title: "🚄 Excellent Connectivity",
      desc: "Dholera Smart City offers unparalleled connectivity through the Delhi-Mumbai Industrial Corridor (DMIC), upcoming bullet train stations, 6-lane expressways, and a world-class international airport — ideal for residential and commercial plots in Gujarat.",
    },
    {
      title: "🏭 Industrial & Tech Zone",
      desc: "Pre-planned industrial zones in Dholera for aerospace, EVs, defense, semiconductors, and renewable technologies. Single-window clearances and plug-and-play plots make it perfect for industrial and tech-based investment.",
    },
    {
      title: "🌱 Eco-Smart Living",
      desc: "Experience future-ready eco-smart urban life in Dholera — 100% renewable energy, underground infrastructure, AI-driven utilities, and 30% green cover make it India's most sustainable city.",
    },
    {
      title: "💼 Investment Magnet",
      desc: "Recognized by NITI Aayog and GIDC, Dholera attracts global real estate investors with its integrated infrastructure, fiber connectivity, and zero-waterlogging zones. Invest in Dholera and benefit from long-term capital growth.",
    },
    {
      title: "🏙️ Smart Urban Planning",
      desc: "Dholera Smart City is divided into logically planned residential, industrial, and commercial zones with smart traffic systems, metro corridors, education parks, and hospitals — a city built to live and work.",
    },
    {
      title: "📈 High ROI Potential",
      desc: "Land appreciation in Dholera has grown sharply in recent years. With infrastructure nearing completion, property in Dholera promises exceptional ROI for early investors in plots and real estate.",
    },
  ];

  const galleryImages = [
    "/images/dholera1.webp",
    "/images/dholera2.webp",
    "/images/dholera3.webp",
    "/images/dholera4.webp",
    "/images/dholera5.webp",
    "/images/dholera6.webp",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/images/slider/dholerabg.webp"
          alt="Dholera Smart City - Invest in Gujarat's Future"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
          <div className="px-8 py-6 rounded-2xl text-center shadow-lg max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-3">
              Invest in Dholera Smart City
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed drop-shadow">
              Explore top plots and properties in India’s First Greenfield Smart City — a government-backed infrastructure marvel in Gujarat.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-white via-gray-100 to-white">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
          Why Invest in Dholera Smart City?
        </h3>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed text-gray-800">
          Dholera is India’s most futuristic smart city, located in Gujarat. Spanning over 920 sq. km, Dholera is a flagship project under the DMIC and is fully supported by the Government of India. 
          Designed with global infrastructure standards, smart governance, and green energy, Dholera offers unmatched{" "}
          <strong className="text-green-700">investment opportunities in plots, real estate, and industrial zones</strong>.
          Whether you are seeking residential land, commercial property, or industrial park investment, Dholera Smart City is the perfect destination.
        </p>
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            Invest Now – Secure Your Future
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-[#f4f8fb] py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-10 text-center">
            Key Highlights of Dholera – Built for the Future
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-700">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
            A Glimpse of Dholera – Vision to Reality
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Dholera Smart City real estate project image ${idx + 1}`}
                  width={400}
                  height={256}
                  loading="lazy"
                  className="w-full h-64 object-fit"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
            >
              Discover Investment Projects →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
