// pages/blog/inox-air-dholera.js
import BlogLayout from "@/components/BlogLayout";
import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function InoxAirDholera() {
  return (
    <BlogLayout
      title="Inox Air Starts Specialty Gas Hub Construction in Dholera"
      date="3 October 2025"
      description="Inox Air Products has begun construction of a state-of-the-art specialty gas hub in Dholera Smart City, boosting industrial growth and supporting India’s semiconductor and high-tech industries."
      image="/images/blog/dholera-inox-air.jpg"
      tags={[
        "DholeraSmartCity",
        "InoxAirProducts",
        "SpecialtyGasHub",
        "IndustrialGrowth",
        "SemiconductorEcosystem",
      ]}
    >
      {/* Introduction Card */}
      <section className="bg-green-50/50 border border-green-100 rounded-xl p-6 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In a landmark development, <strong>Inox Air Products</strong> has started the construction of a
          <strong> specialty gas hub</strong> in <strong>Dholera Special Investment Region (DSIR)</strong>. 
          This facility will play a pivotal role in supporting India’s fast-growing semiconductor, electronics, and renewable energy sectors.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The project reaffirms Dholera’s position as a world-class investment destination and strengthens the city’s ecosystem for high-tech industries.
        </p>
      </section>

      {/* Content Sections */}
      <div className="space-y-16 mb-16">
        {[
          {
            title: "Why Dholera for Inox Air?",
            icon: "📍",
            content: (
              <>
                <p className="mb-4">
                  Dholera’s strategic location, cutting-edge infrastructure, and government incentives make it an ideal base for advanced manufacturing facilities. 
                </p>
                <p>
                  With integrated logistics, renewable energy, and large-scale industrial planning, DSIR offers Inox Air the perfect platform to establish India’s most advanced specialty gas hub.
                </p>
              </>
            ),
          },
          {
            title: "Boost to Semiconductor & High-Tech Ecosystem",
            icon: "💡",
            content: (
              <>
                <p className="mb-4">
                  Specialty gases are critical for <strong>semiconductor fabs, electronics manufacturing, and pharma industries</strong>. 
                </p>
                <p>
                  The new hub will ensure a reliable domestic supply, reducing import dependence and accelerating India’s self-reliance in high-value technologies.
                </p>
              </>
            ),
          },
          {
            title: "Employment & Economic Opportunities",
            icon: "👷‍♂️",
            content: (
              <>
                <p className="mb-4">
                  The project is set to generate both direct and indirect jobs, supporting skilled professionals and local businesses. 
                </p>
                <p>
                  Beyond construction, long-term operations will create steady employment, further boosting the economic prospects of Dholera and surrounding regions.
                </p>
              </>
            ),
          },
          {
            title: "Strengthening Dholera’s Growth Story",
            icon: "🚀",
            content: (
              <p>
                Inox Air’s investment is another strong signal of global confidence in Dholera. 
                With multiple international companies setting up operations, Dholera is evolving into a smart city that balances industrial growth, sustainability, and liveability.
              </p>
            ),
          },
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

      {/* Call to Action Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Dholera – India’s Next Industrial Growth Hub
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          The construction of Inox Air’s specialty gas hub marks another milestone in Dholera’s journey as India’s first greenfield smart city. 
          From industrial land to residential plots, Dholera Infratech helps you explore investment opportunities in this booming region.
        </p>
      </section>
    </BlogLayout>
  );
}
