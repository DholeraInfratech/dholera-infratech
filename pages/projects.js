import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const projects = [
  {
    name: "Paradise 2",
    slug: "paradise-2",
    status: "Sold Out",
    description:
      "Paradise 2 offers modern residential plots strategically located in the heart of Dholera SIR. Designed for families and investors seeking futuristic infrastructure and premium location advantages.",
    highlights: [
      "Prime Location within Dholera SIR",
      "Varied Plot Sizes",
      "Well-Planned Infrastructure",
    ],
    image: "/images/paradise2-1.png",
  },
  {
    name: "Orchid Township",
    slug: "orchid-township",
    status: "Sold Out",
    description:
      "Orchid Township is a thoughtfully planned residential development offering a peaceful lifestyle within Dholera SIR’s rapidly growing ecosystem.",
    highlights: [
      "Green & Sustainable Layout",
      "Close to Educational & Commercial Hubs",
      "Smart Infrastructure",
    ],
    image: "/images/orchid.png",
  },
  {
    name: "Paradise",
    slug: "paradise",
    status: "Sold Out",
    description:
      "Paradise features residential plots within Dholera SIR, ideal for long-term investment and future-ready living spaces.",
    highlights: [
      "Strategic Location",
      "Modern Amenities",
      "High Investment Potential",
    ],
    image: "/images/paradise.png",
  },
  {
    name: "Maple",
    slug: "maple",
    status: "Sold Out",
    description:
      "Maple offers a perfect blend of nature and urban planning with plot options suited for every buyer profile.",
    highlights: [
      "High Return Potential",
      "Proximity to Industrial Zone",
      "Green Boulevard Design",
    ],
    image: "/images/maple.png",
  },
  {
    name: "Marina Bay",
    slug: "marina-bay",
    status: "Sold Out",
    description:
      "Marina Bay is a premium plotted project within Dholera, offering future-ready infrastructure and a high-quality lifestyle.",
    highlights: [
      "Close to Activation Zone",
      "Modern Drainage & Electricity",
      "Future-Forward Design",
    ],
    image: "/images/marina-bay.png",
  },
  {
    name: "WestWyn County",
    slug: "westwyn-county",
    status: "Available",
    description:
      "WestWyn County is Dholera’s most promising smart investment opportunity with solar-ready plots, legal clearances, EV-ready infrastructure, and gated community features.",
    highlights: [
      "Located at Fedra–Pipli Highway, Dholera",
      "Plot sizes from 150 to 325 sq. yd.",
      "Immediate possession with legal clearances",
      "EV charging points and solar-ready design",
      "24x7 gated security and smart app-based management",
    ],
    image: "/images/westwyn-banner.jpg",
  },
];

export default function Projects() {
  const liveProject = projects.find((p) => p.name === "WestWyn County");

  return (
    <>
      <Head>
        <title>Dholera Real Estate Projects | Plots in Dholera Smart City</title>
        <meta
          name="description"
          content="Explore top real estate projects in Dholera Smart City including residential plots, smart townships, and high-return investment opportunities."
        />
        <meta name="keywords" content="Dholera Projects, Dholera Smart City, Buy Plots Dholera, Residential Projects Dholera, WestWyn County, Dholera Investment" />
        <meta property="og:title" content="Dholera Real Estate Projects" />
        <meta
          property="og:description"
          content="View our exclusive residential projects in Dholera Smart City including WestWyn County, Paradise, Orchid Township, and more."
        />
        <meta property="og:image" content="/images/westwyn-banner.jpg" />
        <meta property="og:url" content="https://yourdomain.com/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <section className="min-h-screen bg-gray-100 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
            Explore Our Dholera Projects
          </h1>

          {/* Live Project */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2 mb-6">
              🚀 Live Project: {liveProject.name}
            </h2>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2 gap-6">
              <div className="relative h-72 sm:h-full w-full">
                <Image
                  src={liveProject.image}
                  alt={liveProject.name}
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-4 left-4 bg-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {liveProject.status}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold text-green-900 mb-4">
                  {liveProject.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">{liveProject.description}</p>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-1 mb-6">
                  {liveProject.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${liveProject.slug}`}
                  className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded-lg shadow hover:shadow-lg transition"
                >
                  View Project Details
                </Link>
              </div>
            </div>
          </div>

          {/* All Projects */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-500 pb-2">
            🏡 All Our Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <p className={`text-sm font-medium ${project.status === "Available" ? "text-green-700" : "text-red-500"} mb-2`}>
                    {project.status}
                  </p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-3">{project.description}</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mb-4 space-y-1">
                    {project.highlights.slice(0, 3).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
