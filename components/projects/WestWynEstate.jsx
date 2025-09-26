"use client";

import { useState } from "react";
import Image from "next/image";
import westwynEstateBanner from "@/public/images/westwyn-estate-banner.webp";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CostsheetEstates from "../costsheetestates";

export default function WestWynEstate() {
  const project = {
    name: "Westwyn Estate",
    slug: "westwyn-estate",
    status: "Available",
    description:
      "Westwyn Estate is a premium residential project located in the heart of Dholera SIR, offering modern amenities and a sustainable lifestyle.",
  };

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    // Trigger instant download
    const brochureFile =
      project.slug === "westwyn-estate"
        ? "/brochure/westwyn-estate-brochure.pdf"
        : "/brochure/westwyn-county-brochure.pdf";

    const link = document.createElement("a");
    link.href = brochureFile;
    link.download = brochureFile.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Send form data to API asynchronously (don't wait for it)
    fetch("/api/send-brochure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, project: project.slug }),
    }).catch((err) => console.error("Email API error:", err));

    // Show instant success and close modal
    setSuccessMsg("Your brochure is downloading!");
    setFormData({ name: "", email: "", phone: "" });
    setTimeout(() => setModalOpen(false), 2000);
    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 px-6 sm:px-10 lg:px-20 py-12">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-64 sm:h-80 md:h-[420px] lg:h-[540px]">
            <Image
              src={westwynEstateBanner}
              alt="Westwyn Estate Banner"
              className="object-cover"
              priority
              placeholder="blur"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute left-6 bottom-6 sm:left-1 sm:bottom-1 backdrop-blur-md rounded-xl px-6 py-4 max-w-3xl">
              <h2 className="text-white sm:text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                Westwyn Estate – Premium Residential Plots
              </h2>
            </div>
          </div>
        </section>

        {/* Intro Description */}
        <section className="max-w-7xl mx-auto mt-14 bg-white rounded-3xl shadow-lg p-10 sm:p-14">
          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto font-serif">
            Welcome to <strong>Westwyn Estate</strong>, a premium plotted
            development in
            <strong> Dholera Smart City</strong>. Strategically designed for
            families and investors, this project offers eco-friendly layouts,
            modern infrastructure, and hassle-free documentation. Build your
            dream home or invest smartly in one of India’s fastest-growing smart
            cities.
          </p>
          <div className="mt-8 text-center">
            <button
              download
              onClick={() => setModalOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-sm"
            >
              📄 Download Brochure
            </button>
          </div>
        </section>

        {/* Highlights & Amenities */}
        <section className="max-w-7xl mx-auto mt-14 grid gap-10 grid-cols-1 md:grid-cols-2">
          {/* Project Highlights */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2">
              Project Highlights
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>📍 Location: Navda - Vadhela State Highway, Dholera</li>
              <li>📍 0 KM from Dholera SIR Boundary</li>
              <li>🏠 Total Units - 200</li>
              <li>📏 Plot Sizes: 177 – 300 sq. yd.</li>
              <li>📝 Title Clear, NA/NOC Obtained AUDA Approved</li>
              <li>🏠 Eco-friendly and Sustainable Community Design</li>
              <li>📝 Transparent Documentation & Legal Clearances</li>
              <li>💰 High Investment Potential & Price Appreciation</li>
            </ul>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2">
              Project Essentials & Amenities
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Gated Community with Street Lights & Internal Roads</li>
              <li>🔑 24x7 Security with Gated Access</li>
              <li>Internal Roads 12 Meters & 9 Meters Wide</li>
              <li>Kids’ Play Area & Senior Citizen Zone</li>
              <li>Yoga Deck, and Indoor Games</li>
              <li>EV Charging Stations & Smart Infrastructure</li>
              <li>App-Based Society Management & 24/7 CCTV Surveillance</li>
            </ul>
          </div>

          {/* Strategic Advantages */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2">
              Strategic Advantages
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Minutes from Dholera Expressway & Proposed Metro Corridor</li>
              <li>Prime Growth Belt with Easy State Highway Access</li>
              <li>Close to Schools, Hospitals, and Commercial Hubs</li>
              <li>Near TP 5 & Dholera International Airport</li>
              <li>Proximity to Industrial & IT Parks for Long-Term Growth</li>
            </ul>
          </div>

          {/* Why Choose Westwyn Estate */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2">
              Why Choose Westwyn Estate?
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Trusted developer with zero false promises</li>
              <li>High price appreciation & exit clarity within 5 years</li>
              <li>Affordable residential plots with flexible sizes</li>
              <li>Peaceful environment away from city congestion</li>
              <li>Growing infrastructure and development in the region</li>
              <li>Legacy investment for future generations</li>
            </ul>
          </div>

          {/* Investment Benefits */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2">
              Dholera Investment Benefits
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>
                High growth potential with India’s first planned smart city
              </li>
              <li>
                Early mover advantage in rapidly developing real estate market
              </li>
              <li>Opportunities for both residential and rental income</li>
              <li>
                Government-backed mega infrastructure projects (Expressway,
                Metro, Airport)
              </li>
              <li>
                Industrial & commercial expansion attracting global companies
              </li>
              <li>
                Smart connectivity with Ahmedabad, Bhavnagar & future DMIC
                corridor
              </li>
            </ul>
          </div>
        </section>

        {/* Site Locations */}
        <section className="max-w-7xl mx-auto mt-14 bg-white rounded-3xl shadow-lg p-10 sm:p-14">
          <h2 className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2">
            Site Locations
          </h2>
          <address className="not-italic space-y-3 text-gray-700 text-base">
            <p>
              <strong>🏬 Head Office:</strong> 620, 6th Floor, JMD Megapolis,
              Sector 48, Gurugram, Haryana 122001
            </p>
            <p>
              <strong>🏢 Branch Office:</strong> H-119, Sector-63, Noida, Uttar
              Pradesh
            </p>
          </address>
        </section>

        {/* Cost Sheet */}
        <section className="max-w-7xl mx-auto mt-14">
          <CostsheetEstates />
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto mt-14 text-center px-4">
          <div className="bg-gradient-to-br from-green-200 via-blue-300 to-green-100 rounded-2xl shadow-xl py-12 px-6 sm:px-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
              Book Your Plot Now
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Prefer a quick chat? Reach out instantly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <a
                href="tel:+919540561820"
                className="bg-white border border-green-700 text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition duration-300 shadow-sm"
              >
                📞 Call Us on +91 95405 61820
              </a>
              <a
                href="https://wa.me/919540561820"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-sm"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-black hover:text-black font-bold text-lg"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Download Brochure
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
              >
                {loading ? "Sending..." : "Download"}
              </button>
            </form>

            {/* {successMsg && <p className="text-green-600 mt-2">{successMsg}</p>} */}
            {/* {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>} */}
          </div>
        </div>
      )}
    </>
  );
}
