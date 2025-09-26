// pages/blog/dholera-tokyo-electron.js
import BlogLayout from "@/components/BlogLayout";
import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DholeraTokyoElectron() {
  return (
    <BlogLayout
      title="Tokyo Electron Expanding Presence in Dholera Smart City"
      date="22 September 2025"
      description="Tokyo Electron, a global semiconductor equipment leader, is expanding its operations in Dholera Smart City, marking a major milestone in the city's industrial and technological growth."
      image="/images/blog/tokyo-electron.jpg"
      tags={["DholeraSmartCity", "TokyoElectron", "InvestmentInGujarat", "IndustrialGrowth", "IndiaTechHub"]}
    >
      {/* Introduction Card */}
      <section className="bg-green-50/50 border border-green-100 rounded-xl p-6 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Dholera Smart City, Gujarat is attracting global technology and industrial giants. <strong>Tokyo Electron</strong> has announced plans to expand its operations here, reinforcing Dholera’s position as a high-potential investment and industrial hub.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With world-class infrastructure, excellent connectivity, and pro-business policies, Dholera is the ideal location for this ambitious expansion. The city is set to attract investments, create jobs, and further strengthen India’s technological ecosystem.
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
                  Dholera’s location along the Delhi-Mumbai Industrial Corridor (DMIC) ensures seamless connectivity to ports, highways, and upcoming international airports. This makes logistics and supply chain management highly efficient for companies like Tokyo Electron.
                </p>
                <p>
                  Planned industrial zones, smart city infrastructure, and investor-friendly regulations make Dholera a perfect hub for high-tech manufacturing and industrial expansion.
                </p>
              </>
            ),
          },
          {
            title: "Project Highlights",
            icon: "🏗️",
            content: (
              <>
                <p className="mb-4">
                  Tokyo Electron’s expansion in Dholera will focus on:
                </p>
                <ul className="space-y-3 mb-4 list-disc pl-5">
                  {[
                    "State-of-the-art semiconductor manufacturing units",
                    "Research & Development centers to drive innovation",
                    "Collaboration with local suppliers and industrial partners",
                    "Sustainable operations with smart energy and water management",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>
                  This expansion will not only enhance India’s semiconductor ecosystem but also create numerous high-tech jobs in the region.
                </p>
              </>
            ),
          },
          {
            title: "Economic Impact on Dholera & India",
            icon: "💹",
            content: (
              <>
                <p className="mb-4">
                  Tokyo Electron’s presence is expected to transform Dholera’s economy and boost India’s industrial growth:
                </p>
                <ul className="space-y-3 mb-4 list-disc pl-5">
                  {[
                    "Attracting global industrial investors",
                    "Creating skilled employment opportunities",
                    "Fostering technology and industrial innovation hubs",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Government Support & Policies",
            icon: "📝",
            content: (
              <p>
                The Government of India and the Gujarat state fully support industrial expansion in Dholera, offering incentives, fast-track approvals, and modern infrastructure to facilitate global companies like Tokyo Electron.
              </p>
            ),
          },
          {
            title: "Future Outlook",
            icon: "🚀",
            content: (
              <p>
                With Tokyo Electron and other global players investing, Dholera is set to emerge as a world-class industrial and technological hub. Investors and businesses have a unique opportunity to be part of this transformative journey.
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
          Be Part of Dholera’s Industrial Growth
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Tokyo Electron’s expansion highlights Dholera Smart City as a prime destination for global investment and high-tech industry. Explore investment opportunities and premium plots to be part of this industrial revolution.
        </p>
        
      </section>
    </BlogLayout>
  );
}
