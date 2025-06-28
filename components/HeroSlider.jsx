'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/images/slider/slider1.webp',
    title: 'Real Estate that Reflects Your Vision',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Explore premium plots and properties in Dholera Smart City — crafted with care, delivered with precision.',
    alt: 'Aerial view of plots and properties in Dholera Smart City',
    blur: '/images/slider/blur/slider1-blur.jpg',
  },
  {
    image: '/images/slider/westwyngate.webp',
    title: 'Our Blueprint to Build Your Dream',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Buy residential and commercial plots in Westwyn Gate – inspiring investment in Dholera real estate.',
    alt: 'Clubhouse at Westwyn Gate, a real estate project in Dholera',
    blur: '/images/slider/blur/westwyngate-blur.jpg',
  },
  {
    image: '/images/slider/paradise2.webp',
    title: 'Driving the Growth of Dholera Smart City',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Discover Paradise 2 – one of the top Dholera real estate projects for smart investors.',
    alt: 'Paradise 2 gated entry – top smart city property in Dholera',
    blur: '/images/slider/blur/paradise2-blur.jpg',
  },
];

export default function HeroSlider() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      aria-label="Featured Dholera Real Estate Projects"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-screen">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={index === 0}
                placeholder="blur"
                blurDataURL={slide.blur}
                className="object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
                <article
                  className="text-white max-w-2xl text-center space-y-4 p-6 sm:p-8 rounded-xl"
                  aria-label={`Slide content: ${slide.title}`}
                >
                  <p className="text-base sm:text-lg tracking-wider uppercase">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="italic text-sm sm:text-base md:text-lg">
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
