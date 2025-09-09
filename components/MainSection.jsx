"use client";

import Image from "next/image";
import React from "react";

const MainSection = () => {
  const features = [
    {
      title: "Smart Infrastructure in Dholera",
      text: "Dholera Smart City offers cutting-edge real estate with AI-powered utilities, wide roads, fiber connectivity, and advanced zoning for commercial and residential plots.",
      img: "/images/smart-infra.webp",
      color: "from-[#00796b] to-[#26a69a]",
      alt: "Smart infrastructure for properties in Dholera Smart City",
    },
    {
      title: "Dholera – Investment Hotspot",
      text: "With support from the Indian government and DMIC, Dholera is the most promising hub for real estate investment, industrial growth, and property development in Gujarat.",
      img: "/images/investment.webp",
      color: "from-[#5d1049] to-[#ab47bc]",
      alt: "Best plots and investment properties in Dholera",
    },
    {
      title: "Sustainable Living Spaces",
      text: "Live in an eco-friendly environment with solar grids, water recycling, and smart waste systems — perfect for residential plots and smart property development.",
      img: "/images/sustainability.webp",
      color: "from-[#33691e] to-[#8bc34a]",
      alt: "Eco-friendly living and smart plots in Dholera Gujarat",
    },
  ];

  return (
    <main className="relative bg-gradient-to-br from-[#e1e3dbcc] via-[#d0d8c5] to-[#8e8f88] py-10 px-6 overflow-hidden transition-colors duration-700 ease-in-out" id="main-section">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight transition-all duration-700 ease-in-out">
          Discover Plots, Properties & Investment Opportunities in Dholera Smart
          City
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#1a535c] max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-700 ease-in-out">
          Welcome to{" "}
          <strong className="font-semibold text-[#ff8800]">
            Dholera Infratech
          </strong>
          — your trusted platform for exploring premium{" "}
          <strong className="text-[#00796b]">plots in Dholera</strong>, top{" "}
          <strong className="text-[#00796b]">real estate opportunities</strong>,
          and future-ready{" "}
          <strong className="text-[#00796b]">
            properties in Dholera Smart City
          </strong>
          . As India's first greenfield smart city, Dholera is designed with
          innovation, sustainability, and global investment at its core.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {features.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105 shadow-xl bg-gradient-to-br ${card.color} text-white`}
            >
              <div className="relative w-full h-48">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 ease-in-out"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 transition-all duration-700 ease-in-out">
                  {card.title}
                </h2>
                <p className="text-sm opacity-90 transition-all duration-700 ease-in-out">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto shadow-2xl transition-transform duration-700 ease-in-out hover:scale-105">
          <Image
            src="/images/dholera_cityscape.webp"
            alt="Aerial view of plots, properties, and infrastructure in Dholera Smart City"
            width={1600}
            height={600}
            sizes="100vw"
            className="rounded-3xl w-full h-auto object-cover transition-all duration-700 ease-in-out"
            priority
          />

          <div className="absolute inset-0 bg-opacity-30 flex items-end justify-start p-6 md:p-10 transition-all duration-700 ease-in-out">
            <div className="text-left">
              <h2 className="text-white text-2xl md:text-3xl font-bold transition-all duration-700 ease-in-out">
                Build Your Future in Dholera
              </h2>
              <p className="text-white text-sm md:text-base mt-2 opacity-90 transition-all duration-700 ease-in-out">
                Buy residential and commercial plots in Gujarat’s most ambitious
                smart city project — Dholera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
