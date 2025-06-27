// components/DholeraInfoSections.jsx

const DholeraInfoSections = () => {
  return (
    <>
      {/* About Dholera - Detailed Version */}
      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#004d40] mb-6">
            About Dholera Smart City
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-4">
            Dholera Smart City, Gujarat's crown jewel, is India’s first planned
            greenfield smart city under the Delhi-Mumbai Industrial Corridor
            (DMIC). Spread across 920 sq. km, it offers futuristic
            infrastructure, smart governance, and seamless connectivity —
            including the under-construction Dholera International Airport and
            Ahmedabad–Dholera Expressway.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-4">
            With dedicated industrial, residential, and commercial zones,
            Dholera provides massive investment potential. Government-backed
            development and ongoing infrastructure expansion make it a top
            destination for smart investors and forward-looking buyers.
          </p>
        </div>
      </section>

      {/* Latest News & Insights Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#00796b] mb-10">
            📢 Latest News & Market Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dholera Land Price Trends 2025",
                excerpt:
                  "Explore forecasted land appreciation, demand spikes, and why early investment gives strategic benefits.",
                link: "/blog/dholera-land-price-trends-2025",
              },
              {
                title: "Airport Phase 1 Nears Completion",
                excerpt:
                  "Boosting connectivity and investor confidence with Dholera International Airport’s upcoming Phase 1 launch.",
                link: "/blog/dholera-airport-phase1",
              },
              {
                title: "₹3,000 Cr Boost for Dholera Infra Projects",
                excerpt:
                  "Government allocates ₹3,000 crore to fast-track roads, utilities, and smart infrastructure in Dholera SIR.",
                link: "/blog/dholera-infra-investment-2025",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#00796b] mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-sm text-[#00796b] font-medium hover:underline"
                >
                  Read Full Article →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline Section */}
      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#004d40] mb-10">
            🚀 Dholera Growth Timeline (2025–2028+)
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              {
                year: "2025",
                event:
                  "Dholera International Airport Phase 1 Completion (Expected)",
              },
              {
                year: "2026",
                event: "Ahmedabad–Dholera Expressway Completion",
              },
              {
                year: "2027",
                event: "Smart Utilities & Water Grid Expansion",
              },
              {
                year: "2028+",
                event:
                  "Commercial, Logistic & Infrastructure Growth Continuation",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f9f9f9] p-6 rounded-xl border-l-4 border-[#00796b] shadow-sm hover:shadow-md"
              >
                <p className="text-sm text-gray-500 font-medium">{item.year}</p>
                <h3 className="text-lg font-semibold text-[#00796b] mt-2">
                  {item.event}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Buying Journey Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#004d40] mb-10">
            🧭 Your Smart Plot Buying Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              {
                step: "Step 1: Explore Projects",
                desc: "Browse high-potential investment plots and evaluate connectivity, zone, and location development.",
              },
              {
                step: "Step 2: Schedule Site Visit",
                desc: "Visit plots with our team to assess surrounding infrastructure, roads, and development activity.",
              },
              {
                step: "Step 3: Document Verification",
                desc: "We assist with document checks such as title, 7/12 extract, and encumbrance certificates.",
              },
              {
                step: "Step 4: Booking & Handover",
                desc: "Proceed with booking and secure ownership with help on registration, sale deed & more.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-[#00796b] mb-2">
                  {item.step}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited-Time Offer Section */}
      {/* <section className="bg-gradient-to-r from-[#d1d4d4] to-[#779a94] text-white py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-3">🎉 Limited-Time Offer</h2>
        <p className="text-lg mb-5">
          Book your plot before <strong>30th June</strong> and receive a FREE
          site visit to Dholera + discounts on documentation and registry
          charges.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#00796b] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Claim This Offer Now →
        </a>
      </section> */}
    </>
  );
};

export default DholeraInfoSections;
