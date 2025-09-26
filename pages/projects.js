import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const projects = [
  {
    name: "Westwyn Estate",
    slug: "westwyn-estate",
    status: "Available",
    description:
      "Westwyn Estate is a premium residential project located in the heart of Dholera SIR, offering modern amenities and a sustainable lifestyle.",
    highlights: [
      "Located at Navda - Vadhela State Highway, Dholera",
      "0 KM from Dholera SIR Boundary",
      "EV Charging Stations & Smart Infrastructure",
      "Plot sizes from 177 to 300 sq. yd.",
      "Title Clear, NA/NOC Obtained AUDA Approved",
      "Zero Land Filling"
    ],
    image: "/images/westwyn-estate-banner.webp",
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
    image: "/images/paradise2-1.webp",
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
    image: "/images/orchid.webp",
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
    image: "/images/paradise1-1.webp",
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
    image: "/images/maple.webp",
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
    image: "/images/marina-bay.webp",
  },
];

export default function Projects() {
  const liveProjects = projects.filter(
    (p) => p.status.toLowerCase() === "available"
  );

  return (
    <>
      <Head>
        <title>
          Dholera Real Estate Projects | Plots in Dholera Smart City
        </title>

        <meta
          name="description"
          content="Explore top real estate projects in Dholera Smart City including residential plots, smart townships, and high-return investment opportunities."
        />

        <meta
          name="keywords"
          content="Dholera Projects, Dholera Smart City, Buy Plots Dholera, Residential Projects Dholera, WestWyn County, Paradise 2, Orchid Township, Maple, Marina Bay, Paradise, Dholera Investment ,Dholera Projects, Dholera Smart City, Buy Plots Dholera, Residential Projects Dholera, WestWyn County,
          Paradise 2 Dholera, Orchid Township, Maple Dholera, Marina Bay Dholera, Paradise Project Dholera,
          Dholera Real Estate, Dholera Property, Dholera Land for Sale, Dholera Investment, Dholera Plots for Sale,
          Affordable Plots Dholera, Dholera Commercial Plots, Dholera Residential Plots, Dholera Township Projects,
          Dholera Smart City Investment, Dholera Property Developer, Dholera Real Estate Projects 2025,
          Dholera New Projects, Buy Plot in Dholera Gujarat, Dholera SIR Projects, Dholera Land Price,
          Dholera Real Estate Market, Dholera Land Investment, Dholera Property Listings, Dholera Smart City Plots,
          Dholera Project Updates"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dholerainfratech.com/projects" />
        <meta name="author" content="Dholera Infratech" />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dholera Real Estate Projects" />
        <meta
          property="og:description"
          content="View our exclusive residential projects in Dholera Smart City including WestWyn County, Paradise, Orchid Township, Maple, Marina Bay, and more."
        />
        <meta
          property="og:image"
          content="https://dholerainfratech.com/images/westwyn-banner.webp"
        />
        <meta
          property="og:url"
          content="https://dholerainfratech.com/projects"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dholera Real Estate Projects" />
        <meta
          name="twitter:description"
          content="Explore premium residential projects in Dholera Smart City including WestWyn County, Paradise, Orchid Township, Maple, Marina Bay and more."
        />
        <meta
          name="twitter:image"
          content="https://dholerainfratech.com/images/westwyn-banner.webp"
        />

        {/* Structured Data: CollectionPage with all projects */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Dholera Real Estate Projects",
      "description": "Explore premium residential and commercial projects in Dholera Smart City including WestWyn County, Paradise, Orchid Township, Maple, Marina Bay, and more.",
      "url": "https://dholerainfratech.com/projects",
      "publisher": {
        "@type": "Organization",
        "name": "Dholera Infratech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dholerainfratech.com/images/dholera_gujarat_logo.ico"
        }
      },
      "mainEntity": [
        {
          "@type": "Project",
          "name": "Westwyn Estate",
          "url": "https://dholerainfratech.com/projects/westwyn-estate",
          "image": "https://dholerainfratech.com/images/westwyn-estate-banner.webp",
          "description": "Westwyn Estate is a premium residential project located in the heart of Dholera SIR, offering modern amenities and a sustainable lifestyle.",
          "status": "Available"
        },
        {
          "@type": "Project",
          "name": "WestWyn County",
          "url": "https://dholerainfratech.com/projects/westwyn-county",
          "image": "https://dholerainfratech.com/images/westwyn-banner.webp",
          "description": "WestWyn County is Dholera’s most promising smart investment opportunity with solar-ready plots, legal clearances, EV-ready infrastructure, and gated community features.",
          "status": "Available"
        },
        {
          "@type": "Project",
          "name": "Paradise 2",
          "url": "https://dholerainfratech.com/projects/paradise-2",
          "image": "https://dholerainfratech.com/images/paradise2-1.webp",
          "description": "Paradise 2 offers a unique blend of luxury and affordability, making it an ideal choice for smart investors.",
          "status": "sold-out"
        },
        {
          "@type": "Project",
          "name": "Orchid Township",
          "url": "https://dholerainfratech.com/projects/orchid-township",
          "image": "https://dholerainfratech.com/images/orchid.webp",
          "description": "Orchid Township is designed for modern living with eco-friendly features and smart city amenities.",
          "status": "sold-out"
        },
        {
          "@type": "Project",
          "name": "Paradise",
          "url": "https://dholerainfratech.com/projects/paradise",
          "image":"https://dholerainfratech.com/images/paradise1-1.webp",
          "description": "Paradise offers a serene living environment with state-of-the-art infrastructure and community facilities.",
          "status": "sold-out"
        },
        {
          "@type": "Project",
          "name": "Maple",
          "url": "https://dholerainfratech.com/projects/maple",
          "image": "https://dholerainfratech.com/images/maple.webp",
          "description": "Maple is a premium residential project offering spacious plots and modern amenities.",
          "status": "sold-out"
        },
        {
          "@type": "Project",
          "name": "Marina Bay",
          "url": "https://dholerainfratech.com/projects/marina-bay",
          "image": "https://dholerainfratech.com/images/marina-bay.webp",
          "description": "Marina Bay is a waterfront project designed for luxury living with stunning views and top-notch facilities.",
          "status": "sold-out"
        }
      ]
    }
    `}
        </script>
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
    🚀 Live Projects
  </h2>

  {/* Grid for multiple projects side by side */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {liveProjects.map((project, idx) => (
      <div
        key={idx}
        className="bg-white shadow-lg rounded-xl overflow-hidden"
      >
        {/* Image on top */}
        <div className="relative h-72 w-full">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover "
            priority
          />
          <span className="absolute top-4 left-4 bg-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            {project.status}
          </span>
        </div>

        {/* Details below image */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-900 mb-3">
            {project.name}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            {project.description}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-1 mb-4">
            {project.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2 rounded-lg shadow hover:shadow-lg transition"
          >
            View Project Details
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


          {/* All Projects */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-500 pb-2">
            🏡 All Our Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      project.status === "Available"
                        ? "text-green-700"
                        : "text-red-500"
                    } mb-2`}
                  >
                    {project.status}
                  </p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                    {project.description}
                  </p>
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
