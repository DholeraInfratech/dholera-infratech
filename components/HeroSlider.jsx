"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/slider/abcd.jpg",
    title: "Dholera’s Biggest Investment Opportunity",
    subtitle: "Welcome to Dholera Infratech",
    text: "Own premium residential and commercial plots in India’s first Greenfield Smart City — Dholera SIR.",
  },
  {
    image: "/images/slider/dholera8.jpg",
    title: "Building the Future of Gujarat",
    subtitle: "Explore Dholera Smart City",
    text: "Your smart investment begins here — strategically located plots near Dholera SIR boundary.",
  },
  {
    image: "/images/slider/dholera3.webp",
    title: "Registry Ready Plots Available",
    subtitle: "Invest In India's First Greenfield Smart City",
    text: "Invest in growth — plots under ₹10 Lakhs with clear titles and prime connectivity.",
  },
];

export default function HeroSlider() {
  return (
    <section
      id="hero-slider"
      className="relative w-full min-h-[90vh] bg-white overflow-hidden"
      aria-label="Featured Dholera Projects"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[90vh] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-fit brightness-[1.05] contrast-[1.1] saturate-[1.15]"
                />
                {/* Smaller overlay to keep image visible */}
                <div className="absolute right-0 top-0 h-full w-[35%] bg-gradient-to-l"></div>
              </div>

              {/* Right Side Content */}
              <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 flex justify-end">
                <article className="max-w-xs sm:max-w-sm bg-white backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                  <p className="text-yellow-600 uppercase tracking-wide font-semibold text-xs sm:text-sm mb-1">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-snug">
                    {slide.title}
                  </h1>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3">
                    {slide.text}
                  </p>
                </article>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
