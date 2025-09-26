// pages/blog/dholera-pm-inaugrated.js
import BlogLayout from "@/components/BlogLayout";
import { motion } from "framer-motion";

export default function PMModiGujaratProjects() {
  return (
    <BlogLayout
      title="PM Modi Inaugurates ₹26,354 Crore Projects in Gujarat Including Major Solar Initiatives"
      date="23 September 2025"
      description="Prime Minister Narendra Modi inaugurated projects worth ₹26,354 crore in Gujarat, focusing on renewable energy, infrastructure, and industrial growth, creating new opportunities for investors and residents."
      image="/images/blog/pm-modi-inaugrates.jpg"
      tags={["GujaratProjects", "SolarEnergy", "PMModi", "InvestmentInGujarat", "DholeraSmartCity"]}
    >
      {/* Hero / Highlight Card */}
      <section className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Prime Minister <strong>Narendra Modi</strong> recently inaugurated projects worth <strong>₹26,354 crore</strong> across Gujarat. These initiatives include solar energy plants, infrastructure development, and industrial expansion aimed at transforming Gujarat into a sustainable and high-growth state.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          These projects signal India’s push toward renewable energy adoption and enhanced industrial growth, offering long-term opportunities for investors, entrepreneurs, and residents alike.
        </p>
      </section>

      {/* Content Sections */}
      <div className="space-y-16 mb-16">
        {[
          {
            title: "Solar Projects Leading the Green Revolution",
            icon: "🌞",
            content: (
              <>
                <p className="mb-4">
                  Gujarat’s focus on solar energy continues to strengthen with large-scale solar plants coming online. These projects are part of India’s commitment to sustainable growth and reducing carbon emissions.
                </p>
                <ul className="space-y-3 mb-4 list-disc pl-5">
                  {[
                    "New solar power plants generating clean energy for industries and cities",
                    "Integration of solar energy into smart city and industrial infrastructure",
                    "Employment opportunities in green energy and renewable technologies",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Infrastructure Upgrades Across Gujarat",
            icon: "🛣️",
            content: (
              <>
                <p className="mb-4">
                  Alongside solar initiatives, significant infrastructure projects were inaugurated to improve connectivity, logistics, and industrial zones across the state.
                </p>
                <p>
                  These projects enhance highways, industrial corridors, bridges, and transportation networks, creating a strong foundation for industrial growth and investment opportunities.
                </p>
              </>
            ),
          },
          {
            title: "Economic & Industrial Benefits",
            icon: "💼",
            content: (
              <>
                <p className="mb-4">
                  The combined impact of renewable energy and infrastructure projects is set to transform Gujarat’s economy:
                </p>
                <ul className="space-y-3 mb-4 list-disc pl-5">
                  {[
                    "Creation of thousands of new jobs in multiple sectors",
                    "Boost to manufacturing, technology, and industrial output",
                    "Increased investor confidence in Gujarat as a strategic hub",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Government Policies Driving Growth",
            icon: "🏛️",
            content: (
              <p>
                The central and state governments continue to provide strong support with investor-friendly policies, fast-track approvals, and incentives for renewable energy and infrastructure projects. This ensures sustained industrial and economic growth in Gujarat.
              </p>
            ),
          },
          {
            title: "Looking Ahead",
            icon: "🚀",
            content: (
              <p>
                Gujarat is positioned to become a global leader in renewable energy and industrial development. These projects are paving the way for sustainable growth, technological advancement, and investment opportunities for both domestic and international stakeholders.
              </p>
            ),
          },
        ].map((section, index) => (
          <section key={index}>
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">{section.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{section.title}</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">{section.content}</div>
          </section>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Discover Investment Opportunities in Gujarat
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Gujarat’s renewable energy and industrial growth present unparalleled opportunities for investors and developers. Be part of India’s sustainable growth story by exploring projects in Dholera and other strategic locations.
        </p>
        
      </section>
    </BlogLayout>
  );
}
