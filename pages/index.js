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
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
          content="Dholera,Dholera SIR,dholera sir,dholera sir gujarat,dholera,Dholera Smart City,Plots in Dholera,Properties in Dholera,Dholera Real Estate,Dholera Investment,Dholera Projects,Dholera Gujarat,dholera plots,plots in dholera,dholera properties,dholera smart city,dholera real estate,dholera investment,dholera projects,dholera gujarat,dholera real estate projects,dholera smart city projects,dholera residential plots,dholera commercial plots,dholera property listings,dholeragujarat,best property dealer in dholera,best real estate agent in dholera,dholera best properties,dholera smart city property,dholera smart city plots,best plots in dholera,best properties in dholera,dholera smart city investment,dholera smart city news,dholera development news,dholera smart city updates,dholera smart city plot price"
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
          content="https://dholeragujarat.in/images/dholera-og.webp"
        />
        <meta property="og:url" content="https://dholeragujarat.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />
        <link rel="canonical" href="https://dholeragujarat.in/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DholeraGujarat.in" />

        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Dholera Smart City Real Estate",
          "url": "https://dholeragujarat.in/",
          "description": "Explore Dholera Smart City plots and real estate investment opportunities in Gujarat. Government-approved residential and commercial properties with high ROI potential.",
          "publisher": {
            "@type": "Organization",
            "name": "DholeraGujarat.in"
          }
        }
        `}
        </script>
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
