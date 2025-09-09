// pages/about.js
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapDirections from "@/components/MapDirections";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Dholera Smart City | Dholera Infratech</title>
        <meta
          name="description"
          content="Learn about Dholera Smart City, India’s first greenfield smart city in Gujarat. Explore real estate projects, investment opportunities, and smart infrastructure with Dholera Infratech."
        />
        <meta
          name="keywords"
          content="Dholera Smart City,about dholera smart city,about dholera,dholera smart city,Dholera SIR,Dholera Gujarat,Dholera real estate,smart city Gujarat,investment in Dholera,Dholera property,Dholera plots,Dholera commercial property,Dholera residential projects"
        />
        <meta name="author" content="Dholera Infratech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="About Dholera Smart City | Dholera Infratech"
        />
        <meta
          property="og:description"
          content="Explore Dholera Smart City and discover investment opportunities, smart infrastructure, and future-ready real estate developments in Gujarat."
        />
        <meta property="og:image" content="/images/dholera-og.webp" />
        <meta property="og:url" content="https://dholerainfratech.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://dholerainfratech.com/about" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "About Dholera Smart City",
              url: "https://dholerainfratech.com/about",
              description:
                "Dholera Infratech offers insights into India’s largest planned smart city - Dholera. Learn about real estate investments, infrastructure, and future growth opportunities.",
              publisher: {
                "@type": "Organization",
                name: "Dholera Infratech",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dholerainfratech.com/images/dholera_gujarat_logo.ico",
                },
              },
            }),
          }}
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-white text-gray-900" id='about'>
        {/* Hero Section */}
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[500px]">
          <Image
            src="/images/dholera-banner.webp"
            alt="Dholera Smart City Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center text-center backdrop-blur bg-black/30 px-4 py-10 sm:px-6 sm:py-12 rounded-xl">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-md leading-tight">
                Welcome to{" "}
                <span className="text-[#ffd200]">Dholera Infratech</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 leading-relaxed">
                Discover <strong>Dholera Smart City</strong> — India’s largest
                planned smart city in Gujarat. At{" "}
                <strong>Dholera Infratech</strong>, we offer reliable property
                listings, investment insights, infrastructure updates, and
                expert guidance to help you capitalize on Dholera SIR’s real
                estate and smart urban development boom.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dholera Infratech is your trusted partner for exploring the
              futuristic opportunities of{" "}
              <strong>Dholera Special Investment Region (SIR)</strong>. From
              industrial corridors and mega-infrastructure to smart homes and
              high-return plots, we provide data-driven insights and updates
              tailored for investors, NRIs, and developers.
            </p>
          </div>

          <Section title="🌐 Who We Are" color="text-red-600">
            <p className="text-lg leading-relaxed">
              We are a passionate team at{" "}
              <span className="font-semibold text-red-500">
                Dholera Infratech
              </span>{" "}
              — combining real estate expertise, digital strategy, and civic
              vision to empower all stakeholders in <strong>Dholera SIR</strong>
              . Our goal is to simplify your smart city journey.
            </p>
          </Section>

          <Section title="🔍 What We Do" color="text-blue-800">
            <p className="text-lg leading-relaxed text-gray-700">
              We curate verified listings of plots, commercial spaces, and
              industrial zones in Dholera. Our platform tracks real-time
              pricing, metro and airport progress, project launches, and legal
              compliance — making it the one-stop digital hub for Dholera
              investment intelligence.
            </p>
          </Section>

          <Section title="🎯 Our Mission" color="text-blue-700" bg="bg-white">
            <p className="text-lg text-gray-700">
              Our mission is to be the most insightful and trustworthy platform
              for <strong>Dholera Smart City investments</strong>. We offer
              expert-backed content, investor guidance, and a seamless user
              experience to empower strategic decisions.
            </p>
          </Section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              ✨ Special Features of Dholera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="World-Class Infrastructure"
                description="Smart roads, 5G-ready connectivity, solar grids, and intelligent systems make Dholera future-proof."
              />
              <FeatureCard
                title="Plug-and-Play Utilities"
                description="Automated sewage, power, and water systems with real-time monitoring and zero downtime."
              />
              <FeatureCard
                title="Eco-Friendly Design"
                description="Green zones, solar rooftops, electric transport, and sustainable urban planning."
              />
              <FeatureCard
                title="Strategic Location"
                description="Located between Ahmedabad and Bhavnagar with fast access to highways, ports, and Dholera Airport."
              />
            </div>
          </section>

          <Section
            title="✅ Why Choose Dholera Infratech?"
            color="text-red-700"
            bg="bg-gradient-to-r from-red-100 to-red-50"
          >
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
              <li>Real-time verified listings across all Dholera sectors</li>
              <li>
                Trusted investment advice from experts in Gujarat real estate
              </li>
              <li>In-depth reports on government-approved projects</li>
              <li>
                Legal consultation and personalized site visit arrangements
              </li>
              <li>Exclusive deals and early-access to premium developments</li>
            </ul>
          </Section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">
              🚧 Key Highlights of Dholera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <HighlightCard
                title="920 sq. km Area"
                description="Dholera SIR is twice the size of Delhi — ideal for scalable industrial, residential, and commercial expansion."
              />
              <HighlightCard
                title="Smart Governance"
                description="100% digitalized city operations — including transport, energy, civic services, and e-Governance."
              />
              <HighlightCard
                title="Investment Magnet"
                description="Dholera has attracted billions in FDI, with top brands like Tata, Adani, and Airbus joining the smart city revolution."
              />
            </div>
          </section>

          <Section
            title="💡 Tech & Innovation in Dholera"
            color="text-indigo-700"
            bg="bg-indigo-50"
          >
            <p className="text-lg text-gray-700 mb-4">
              Dholera Smart City incorporates cutting-edge technologies for
              smarter, safer living and business operations.
            </p>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>IoT-integrated city services</li>
              <li>AI-driven transport and smart lighting</li>
              <li>Blockchain-based land and legal systems</li>
              <li>Cloud-first infrastructure for seamless scalability</li>
            </ul>
          </Section>
          <Section
            title="🚉 Upcoming Mega Infrastructure in Dholera"
            color="text-blue-800"
            bg="bg-gradient-to-br from-blue-50 to-white"
          >
            <p className="text-lg text-gray-700 mb-4">
              Dholera is undergoing rapid transformation with major
              infrastructure projects backed by the Indian government and global
              partners. These developments make Dholera an unbeatable investment
              destination for the next decade.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
              <li>
                <strong>Dholera International Airport:</strong> Construction in
                full swing, with Phase 1 completion expected by 2025. It will
                reduce travel time to major metros significantly.
              </li>
              <li>
                <strong>Ahmedabad–Dholera Expressway:</strong> 109 km expressway
                connecting Dholera to Ahmedabad, under the Bharatmala Project.
                Enhances logistics and real estate prospects.
              </li>
              <li>
                <strong>Dholera Metro Rail:</strong> Planned metro line between
                Ahmedabad and Dholera with seamless urban connectivity.
              </li>
              <li>
                <strong>DMIC Corridor:</strong> Dholera is a central node on the
                Delhi-Mumbai Industrial Corridor, enabling global trade and
                logistics.
              </li>
            </ul>
          </Section>

          <Section
            title="📈 Property Value Trends & ROI Potential"
            color="text-purple-800"
            bg="bg-purple-50"
          >
            <p className="text-lg text-gray-700 mb-4">
              Property values in Dholera have shown consistent growth in recent
              years, driven by government investment and rising private
              interest.
            </p>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>
                Average land prices have increased by{" "}
                <strong>65% since 2020</strong>.
              </li>
              <li>
                Plots near the airport and expressway zone have witnessed{" "}
                <strong>2x appreciation</strong>.
              </li>
              <li>
                Return on Investment (ROI) projected at{" "}
                <strong>15–18% annually</strong> for early buyers.
              </li>
              <li>
                Demand is fueled by smart city initiatives, green tech, and
                industrial expansion.
              </li>
            </ul>
          </Section>
          <Section
            title="🌐 NRI Investment Support & Services"
            color="text-indigo-800"
            bg="bg-indigo-50"
          >
            <p className="text-lg text-gray-700 mb-4">
              Dholera Infratech offers a dedicated investment support desk for
              NRIs looking to invest in Dholera SIR real estate.
            </p>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Virtual site visits and real-time video walk-throughs</li>
              <li>Dedicated NRI documentation and legal guidance</li>
              <li>Secure payment options and agreement processing</li>
              <li>High-yield plots in approved zones for early NRIs</li>
            </ul>
          </Section>

          <Section title="🚀 Our Vision" color="text-indigo-700" bg="bg-white">
            <p className="text-lg leading-relaxed text-gray-700">
              We aim to be the go-to resource for all things Dholera — from
              investment strategy to urban living insights, with an unmatched
              digital experience.
            </p>
          </Section>

          <Section
            title="🌟 What People Are Saying"
            color="text-gray-800"
            bg="bg-gradient-to-br from-white to-indigo-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="Dholera's smart infrastructure has transformed how we envision urban development in India."
                author="Rajesh Patel, Urban Planner"
              />
              <TestimonialCard
                quote="Investing in Dholera was the best decision I've made in the past decade."
                author="Neha Mehta, Investor"
              />
            </div>
          </Section>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-4">
              Ready to secure your future in India’s most ambitious smart city?
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
            >
              Contact Us Now
            </a>
          </div>
        </section>
      </main>
      <FAQSection />
      <MapDirections />
      <Footer />
    </>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Section({
  title,
  children,
  color = "text-gray-800",
  bg = "bg-transparent",
}) {
  return (
    <section className={`mb-16 ${bg} p-8 rounded-xl shadow`}>
      <h2 className={`text-3xl font-bold ${color} mb-4`}>{title}</h2>
      {children}
    </section>
  );
}

function HighlightCard({ title, description }) {
  return (
    <div className="bg-purple-600 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <p className="text-gray-700 italic">“{quote}”</p>
      <p className="mt-4 font-semibold text-gray-800">— {author}</p>
    </div>
  );
}
