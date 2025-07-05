// pages/gallery.js
"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const projects = [
  {
    name: "Paradise 2",
    slug: "paradise-2",
    images: ["/images/paradise2-1.webp", "/images/paradise2-2.webp"],
  },
  {
    name: "Orchid Township",
    slug: "orchid-township",
    images: ["/images/orchid.webp", "/images/orchid2.webp"],
  },
  {
    name: "Paradise",
    slug: "paradise",
    images: ["/images/paradise.png", "/images/paradise2.png"],
  },
  {
    name: "Maple",
    slug: "maple",
    images: ["/images/maple.webp", "/images/maple2.webp"],
  },
  {
    name: "Marina Bay",
    slug: "marina-bay",
    images: ["/images/marina-bay.webp", "/images/marina-bay2.webp"],
  },
  {
    name: "WestWyn County",
    slug: "westwyn-county",
    images: [
      "/images/westwyn-banner.webp",
      "/images/westwyngate.webp",
      "/images/westwynmap.webp",
    ],
  },
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Head>
        <title>
          Dholera Project Gallery | Smart City Images & Investment Plots in
          Gujarat
        </title>

        <meta
          name="description"
          content="Explore high-resolution images of Dholera Smart City projects, including premium plots, township layouts, and infrastructure developments. See why Dholera SIR is Gujarat's top real estate investment zone."
        />
        <meta
          name="keywords"
          content="Dholera images, Dholera project photos, Dholera Smart City gallery, Dholera SIR images, investment plots in Dholera, Dholera real estate pictures, Dholera infrastructure, Gujarat smart city plots, dholera images, dholera photos , dholera smart city photos, dholera project images, dholera sir photos, dholera real estate images, dholera investment plots, dholera smart city infrastructure, dholera smart city projects, dholera smart city gallery, dholera sir images, dholera sir photos, dholera sir projects, dholera sir gallery"
        />
        <meta name="author" content="DholeraGujarat.in" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dholeragujarat.in/gallery" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Dholera Real Estate Gallery | Project Photos & Plot Visuals"
        />
        <meta
          property="og:description"
          content="Discover Dholera Smart City through detailed project images, plot maps, and township visuals. Perfect for real estate investors and smart city enthusiasts."
        />
        <meta
          property="og:image"
          content="https://dholeragujarat.in/images/dholera-projects-image.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dholeragujarat.in/gallery" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dholera Project Gallery | Smart City Investment Visuals"
        />
        <meta
          name="twitter:description"
          content="See plot layouts, location maps, and smart infrastructure photos from Dholera SIR’s premium real estate projects."
        />
        <meta
          name="twitter:image"
          content="https://dholeragujarat.in/images/dholera-projects-image.webp"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />
      </Head>

      <Navbar />

      <main className="bg-gray-200 min-h-screen px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-[#004d40] mb-6">
          📸 Dholera Smart City Projects Gallery
        </h1>

        <section className="max-w-4xl mx-auto text-center mb-12 text-gray-700">
          <p className="text-lg leading-relaxed">
            Discover top residential and commercial plot developments in Dholera
            SIR. With strategic infrastructure, airport connectivity, and rising
            land value, these projects offer smart investment opportunities for
            early movers.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden bg-white cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.images[0]}
                  alt={`Image of ${project.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-[#00796b]">
                  {project.name}
                </h3>
                <a
                  href={`/projects/${project.slug}`}
                  className="text-sm text-[#00796b] underline block mt-1"
                >
                  View Project Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for image carousel */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white w-full max-w-3xl rounded-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-[#004d40]">
                  {selectedProject?.name}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full h-[400px]"
              >
                {selectedProject?.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`Slide ${idx} of ${selectedProject?.name}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Dialog.Panel>
          </div>
        </Dialog>
      </main>

      <Footer />
    </>
  );
}
