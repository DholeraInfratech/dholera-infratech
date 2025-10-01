// pages/blog/dholera-fujifilm-chc.js
import BlogLayout from "@/components/BlogLayout";
import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DholeraFujifilmCHC() {
  return (
    <BlogLayout
      title="FUJIFILM India Launches DR X-Ray Facility at Dholera CHC"
      date="30 September 2025"
      description="FUJIFILM India has launched a cutting-edge DR X-Ray facility at Dholera Community Health Centre, strengthening healthcare infrastructure and improving medical access for residents of Dholera Smart City."
      image="/images/blog/dholera-fujifilm-chc.jpg"
      tags={[
        "DholeraSmartCity",
        "HealthcareInDholera",
        "FUJIFILMIndia",
        "PublicHealth",
        "SmartCityGrowth",
      ]}
    >
      {/* Introduction Card */}
      <section className="bg-green-50/50 border border-green-100 rounded-xl p-6 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In a major boost to public healthcare services, <strong>FUJIFILM India</strong> has inaugurated a <strong>Digital Radiography (DR) X-Ray facility</strong> at the <strong>Dholera Community Health Centre (CHC)</strong>. 
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This new diagnostic facility is designed to provide faster, safer, and more accurate medical imaging, ensuring timely treatment and improved healthcare access for the people of Dholera Smart City and surrounding areas.
        </p>
      </section>

      {/* Content Sections */}
      <div className="space-y-16 mb-16">
        {[
          {
            title: "Strengthening Public Health Access",
            icon: "🏥",
            content: (
              <>
                <p className="mb-4">
                  The DR X-Ray system brings advanced diagnostic technology closer to residents, eliminating the need for long-distance travel for basic radiology tests. 
                </p>
                <p>
                  This facility enhances healthcare capacity in Dholera by supporting early detection and faster decision-making for doctors, especially in cases of chest, bone, and lung-related illnesses.
                </p>
              </>
            ),
          },
          {
            title: "Smart Healthcare for a Smart City",
            icon: "🌍",
            content: (
              <>
                <p className="mb-4">
                  Dholera, India’s first planned greenfield smart city, is rapidly scaling up infrastructure across sectors. With FUJIFILM’s initiative, healthcare now joins the list of world-class facilities being developed here.
                </p>
                <p>
                  The DR X-Ray launch complements Dholera’s vision of holistic growth—beyond real estate and industry—by ensuring residents also benefit from modern, accessible healthcare.
                </p>
              </>
            ),
          },
          {
            title: "Collaboration & Community Impact",
            icon: "🤝",
            content: (
              <>
                <p className="mb-4">
                  The inauguration witnessed participation from local leaders, healthcare professionals, and FUJIFILM representatives. Their collective effort highlights how private-public partnerships can uplift healthcare standards in emerging smart cities.
                </p>
                <p>
                  The facility is expected to serve thousands of residents each year, helping reduce diagnostic delays and building trust in Dholera’s growing healthcare system.
                </p>
              </>
            ),
          },
          {
            title: "Boosting Dholera’s Growth Story",
            icon: "🚀",
            content: (
              <p>
                Healthcare development plays a vital role in attracting residents, investors, and industries. With this modern facility in place, Dholera strengthens its position not only as an industrial hub but also as a livable, sustainable city for families and professionals.
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
          Dholera – Building a Healthier Future
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          FUJIFILM India’s DR X-Ray facility marks a new milestone in Dholera’s growth story. 
          Explore opportunities to invest in this rapidly developing smart city, where infrastructure, healthcare, and innovation come together.
        </p>
      </section>
    </BlogLayout>
  );
}
