// pages/blog/dholera-smart-city.js
import BlogLayout from "@/components/BlogLayout";
import Image from "next/image";
import { FiShare2, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DholeraSmartCity() {
  return (
    <BlogLayout
      title="Why Dholera is India's Smart City of the Future"
      date="June 10, 2025"
      description="Discover why Dholera is India's most promising smart city with futuristic infrastructure, booming industries, and high-return real estate investments."
      image="/images/blog/dholera smart city.webp"
      tags={["Smart City", "Investment", "Gujarat", "Real Estate", "Dholera"]}
    >
      {/* Share Button */}
      <div className="flex justify-end mb-4">
        <button className="text-blue-500 hover:text-blue-700 flex items-center">
          <FiShare2 className="mr-1" /> Share
        </button>
      </div>

      {/* Introduction Card */}
      <section className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Dholera, a greenfield smart city in Gujarat, is rapidly emerging as India's most ambitious urban development project. 
          Designed with cutting-edge technology, sustainable infrastructure, and world-class connectivity, Dholera is attracting 
          global investors, businesses, and homebuyers.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          But what makes Dholera stand out among India's 100+ smart city projects? Let's explore why this city is being called 
          the <span className="font-semibold text-blue-600">"Dubai of India"</span> and why it's the <span className="font-semibold">best investment opportunity in 2025</span>.
        </p>
      </section>

      {/* Content Sections */}
      <div className="space-y-16 mb-16">
        {[
          {
            title: "Strategic Location & Connectivity",
            icon: "📍",
            content: (
              <>
                <p className="mb-4">
                  Dholera is strategically positioned between <span className="font-semibold">Ahmedabad (110 km) and Bhavnagar (30 km)</span>, with seamless access to:
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    "Dholera International Airport (Operational by 2027)",
                    "Delhi-Mumbai Industrial Corridor (DMIC) – $100B project",
                    "Dedicated Freight Corridor (DFC)",
                    "Gulf of Khambhat coastal connectivity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="flex-shrink-0 mt-1 mr-2 text-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-blue-600 mb-1">Pro Tip:</p>
                  <p>The upcoming Dholera Airport will reduce travel time to Mumbai to just 45 minutes, boosting business connectivity.</p>
                </div>
              </>
            )
          },
          {
            title: "Smart Infrastructure & Futuristic Planning",
            icon: "🏗️",
            content: (
              <>
                <p className="mb-4">
                  Dholera is built from scratch with <span className="font-semibold">smart urban planning</span>, featuring:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Wide, automated roads with smart traffic management",
                    "Underground utility ducts (no overhead wires)",
                    "Solar-powered streetlights & renewable energy",
                    "IoT-enabled public services",
                    "30% green space allocation",
                    "Disaster-resilient infrastructure"
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 flex items-start">
                      <div className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                        <FiCheckCircle size={14} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )
          },
          {
            title: "Thriving Industrial & Economic Hub",
            icon: "🏭",
            content: (
              <>
                <p className="mb-4">
                  Dholera is not just a residential city—it's an <span className="font-semibold">industrial powerhouse</span> attracting:
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { name: "Electronics", color: "bg-purple-100 text-purple-800" },
                    { name: "EV Manufacturing", color: "bg-green-100 text-green-800" },
                    { name: "Semiconductors", color: "bg-blue-100 text-blue-800" },
                    { name: "Renewable Energy", color: "bg-yellow-100 text-yellow-800" },
                    { name: "Aerospace", color: "bg-red-100 text-red-800" },
                    { name: "Logistics", color: "bg-indigo-100 text-indigo-800" }
                  ].map((sector, i) => (
                    <span key={i} className={`px-3 py-1 text-sm rounded-full ${sector.color}`}>
                      {sector.name}
                    </span>
                  ))}
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="font-medium mb-2">Major Investors:</p>
                  <div className="flex flex-wrap items-center gap-4">
                    {["Tata Group", "Foxconn", "Tesla", "Adani", "Reliance"].map((company, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-medium">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )
          }
        ].map((section, index) => (
          <section key={index}>
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">{section.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {section.title}
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* Investment Potential Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Investment Potential</h2>
        <p className="text-blue-600 font-medium mb-6">Why investors are rushing to Dholera</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Real Estate Growth",
              value: "300%",
              description: "Expected appreciation in next decade"
            },
            {
              title: "Land Price (per sqyd)",
              value: "₹9,500",
              description: "Current rate (1/5th of Ahmedabad)"
            },
            {
              title: "Early Investor Returns",
              value: "5x-10x",
              description: "For 2015-2020 investors"
            }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to be part of India's future?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Dholera represents a unique opportunity to invest in India's most planned city at ground level.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
            <a href="/brochure/dholera-investment.pdf" download className="flex items-center gap-2">
              Download Investment Guide
            </a>
          </motion.div>
          {/* <a className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all" href="/contact">
            Contact Real Estate Expert
          </a> */}
        </div>
      </section>

      {/* Newsletter Subscription */}
      {/* <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated on Dholera Smart City</h3>
          <p className="text-gray-600 mb-6">
            Get monthly insights on urban development and investment opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors">
              Subscribe Now
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div> */}

      {/* Author Bio */}
      {/* <div className="flex items-center p-6 bg-gray-50 rounded-xl mb-16">
        <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden">
          <Image 
            src="/author-placeholder.webp" 
            width={64} 
            height={64} 
            alt="Author" 
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Written by Admin</h4>
          <p className="text-gray-600 text-sm">Urban Development Specialist</p>
          <p className="text-gray-500 text-sm mt-1">10+ years experience in smart city projects</p>
        </div>
      </div> */}
    </BlogLayout>
  );
}
