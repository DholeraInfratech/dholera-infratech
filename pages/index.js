"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MainSection from "@/components/MainSection";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import MapDirections from "@/components/MapDirections";
import AuthModal from "@/components/AuthModal";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import InvestorCompanies from "@/components/InvestorCompanies";
import HeroSlider from "@/components/HeroSlider";
import DholeraInfoSections from "@/components/DholeraInfoSections";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Dholera Gujarat | Plots, Properties & Investment Opportunities in
          Dholera Smart City
        </title>
        <meta
          name="description"
          content="Explore residential and commercial plots in Dholera Smart City. DholeraGujarat.in is your trusted source for real estate projects, property listings, investment insights, and Dholera development news."
        />
        <meta
          name="keywords"
          content="Dholera, Dholera Smart City, Plots in Dholera, Properties in Dholera, Dholera Real Estate, Dholera Investment, Dholera Projects, Dholera Gujarat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Dholera Gujarat - Plots & Properties in Dholera Smart City"
        />
        <meta
          property="og:description"
          content="Find the best residential and commercial plots in Dholera. Invest in India's first smart city today!"
        />
        <meta
          property="og:image"
          content="https://dholeragujarat.in/images/dholera-projects-image.jpg"
        />
        <meta property="og:url" content="https://dholeragujarat.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="./images/dholera_gujarat_logo.ico" />
        <link rel="canonical" href="https://dholeragujarat.in/" />
      </Head>
      <Navbar onLoginClick={() => setShowModal(true)} userName={userName} />
      <HeroSlider />

      <MainSection />
      <HeroBanner />
      <InvestorCompanies />
      <Testimonial />
      <DholeraInfoSections />

      <AnimatePresence>
        {showModal && (
          <AuthModal
            onClose={() => setShowModal(false)}
            onLoginSuccess={(name) => {
              setUserName(name);
              localStorage.setItem("userName", name); // persist name
              setShowModal(false);
            }}
          />
        )}
      </AnimatePresence>

      <MapDirections />
      <Footer />
    </>
  );
}
