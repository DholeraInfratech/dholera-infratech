// HeroSlider.jsx
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    img: '/images/slider/slider1.png',
    title: 'Real Estate that Reflects Your Vision',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Explore premium plots and properties in Dholera Smart City — crafted with care, delivered with precision.',
    alt: 'Plots and properties in Dholera Smart City aerial view',
  },
  {
    img: '/images/slider/westwyngate.png',
    title: 'Our Blueprint to Build Your Dream',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Buy residential and commercial plots in Westwyn Gate – inspiring investment in Dholera real estate.',
    alt: 'Clubhouse of Westwyn Gate, a property investment in Dholera',
  },
  {
    img: '/images/slider/paradise2.png',
    title: 'Driving the Growth of Dholera Smart City',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Discover Paradise 2 – one of the top Dholera real estate projects for smart investors.',
    alt: 'Paradise 2 project – gated entry of smart city property in Dholera',
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Featured Dholera Projects">
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
            <div className="relative w-full h-screen">
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold px-4">
                <div className="p-8 rounded-xl max-w-2xl text-center space-y-4">
                  <div className="text-lg tracking-wider uppercase">{slide.subtitle}</div>
                  <h2 className="text-3xl font-bold">{slide.title}</h2>
                  <p className="italic text-lg">{slide.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
