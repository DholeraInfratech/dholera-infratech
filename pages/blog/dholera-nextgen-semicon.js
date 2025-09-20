// pages/blog/nextgen-semiconductor-city.js
import BlogLayout from "@/components/BlogLayout";
import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function NextgenSemiconductorCity() {
  return (
    <BlogLayout
      title="Nextgen Semiconductors to Build India’s First Silicon Semiconductor City in Dholera, Gujarat"
      date="September 17, 2025"
      description="Nextgen Semiconductors is set to develop India’s first dedicated Silicon Semiconductor City in Dholera, Gujarat, transforming the city into a global hub for semiconductor manufacturing and tech innovation."
      image="/images/blog/nextgen-semicon.jpg"
      tags={["DholeraSmartCity", "DholeraInfratech", "Semiconductors", "InvestmentInGujarat", "IndiaTechHub"]}
    >     

      {/* Introduction Card */}
      <section className="bg-green-50/50 border border-green-100 rounded-xl p-6 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Dholera, Gujarat is gearing up to become India’s next tech powerhouse. <strong>Nextgen Semiconductors</strong> has announced plans to build the country’s first <strong>Silicon Semiconductor City</strong> right here in Dholera, marking a major milestone for both the region and India’s technology sector.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With world-class infrastructure, excellent connectivity, and investor-friendly policies, Dholera is the ideal location for this ambitious project. The city is poised to attract innovation, high-tech jobs, and global attention.
        </p>
      </section>

      {/* Content Sections */}
      <div className="space-y-16 mb-16">
        {[
          {
            title: "Why Dholera is the Ideal Destination",
            icon: "📍",
            content: (
              <>
                <p className="mb-4">
                  Dholera is one of India’s most promising <strong>greenfield smart cities</strong>. Strategically located with seamless access to highways, ports, and the upcoming Dholera International Airport, the city offers unmatched connectivity and industrial-friendly infrastructure.
                </p>
                <p>
                  Its planned industrial zones, smart city facilities, and pro-business policies make Dholera a perfect hub for semiconductor manufacturing and high-tech innovation.
                </p>
              </>
            )
          },
          {
            title: "Project Highlights",
            icon: "🏗️",
            content: (
              <>
                <p className="mb-4">
                  The <strong>Silicon Semiconductor City</strong> will include:
                </p>
                <ul className="space-y-3 mb-4 list-disc pl-5">
                  {[
                    "Advanced fabrication units for silicon chip production",
                    "R&D and innovation centers to drive next-generation technology",
                    "Training institutes to nurture a skilled semiconductor workforce",
                    "Sustainable industrial zones powered by renewable energy and smart water management"
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>
                  This landmark project will reduce India’s reliance on imported semiconductors while creating thousands of high-tech jobs in Dholera.
                </p>
              </>
            )
          },
          {
            title: "Economic Impact on Dholera & India",
            icon: "💹",
            content: (
              <>
                <p className="mb-4">
                  The Silicon Semiconductor City is expected to transform Dholera’s economy and strengthen India’s technology ecosystem:
                </p>
                <ul className="space-y-3 mb-4 list-disc pl-5">
                  {[
                    "Attracting global tech investors and boosting Make in India initiatives",
                    "Enhancing India’s competitiveness in AI, 5G, and IoT technologies",
                    "Fostering startups and innovation hubs within Dholera"
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )
          },
          {
            title: "Government Support & Policies",
            icon: "📝",
            content: (
              <p>
                Both the Government of India and Gujarat state are fully supporting this project. Incentives include fast-track approvals, modern infrastructure support, and high-tech industrial policies to ensure the success of the Silicon Semiconductor City in Dholera.
              </p>
            )
          },
          {
            title: "The Future Outlook",
            icon: "🚀",
            content: (
              <p>
                Once completed, Dholera will emerge as a global hub for semiconductor manufacturing and innovation. This is a unique opportunity for investors, tech leaders, and innovators to participate in India’s journey towards a high-tech, self-reliant future.
              </p>
            )
          }
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Be Part of Dholera’s High-Tech Future</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Nextgen Semiconductors’ landmark project is transforming Dholera into India’s first Silicon Semiconductor hub. Don’t miss the chance to invest and contribute to India’s technology revolution.
        </p>
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
            <a href="/contact" className="flex items-center gap-2">
              Contact Investment Team
            </a>
          </motion.div>
          <motion.div className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow-md">
            <a href="/brochure/nextgen-semiconductor-dholera.pdf" download className="flex items-center gap-2">
              Download Project Brochure
            </a>
          </motion.div>
        </div> */}
      </section>
    </BlogLayout>
  );
}
