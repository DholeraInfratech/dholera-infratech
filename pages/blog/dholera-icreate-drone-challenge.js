// pages/blog/icreate-drone-challenge-2025.js
import BlogLayout from "@/components/BlogLayout";
import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ICreateDroneChallenge2025() {
  return (
    <BlogLayout
      title="iCreate Drone Challenge 2025 Launched to Set New Global Benchmarks in Drone Innovation"
      date="7 October 2025"
      description="iCreate has officially launched the Drone Challenge 2025 at Dholera, inviting innovators from across the globe to shape the future of unmanned aerial technology and position India as a global drone hub."
      image="/images/blog/icreate-drone-challenge-2025.jpg"
      tags={[
        "iCreate",
        "DholeraSmartCity",
        "DroneChallenge2025",
        "Innovation",
        "AviationTechnology",
      ]}
    >
      {/* Introduction Card */}
      <section className="bg-green-50/50 border border-green-100 rounded-xl p-6 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In a visionary move to accelerate drone innovation,{" "}
          <strong>iCreate (International Centre for Entrepreneurship and Technology)</strong>{" "}
          has announced the launch of the <strong>Drone Challenge 2025</strong> in{" "}
          <strong>Dholera Special Investment Region (DSIR)</strong>. The challenge aims to
          foster next-generation aerial solutions that redefine the possibilities of
          drone technology across industries.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Positioned at the heart of India’s first greenfield smart city, Dholera’s
          world-class infrastructure and innovation ecosystem make it the perfect launchpad
          for a global competition of this scale.
        </p>
      </section>

      {/* Content Sections */}
      <div className="space-y-16 mb-16">
        {[
          {
            title: "A Global Stage for Drone Innovators",
            icon: "🌍",
            content: (
              <>
                <p className="mb-4">
                  The <strong>iCreate Drone Challenge 2025</strong> brings together top
                  innovators, researchers, startups, and drone enthusiasts from India and
                  abroad. Participants will compete to develop breakthrough solutions for
                  <strong> logistics, agriculture, disaster management, and smart city applications</strong>.
                </p>
                <p>
                  With participation from international experts, the challenge is set to
                  position India as a frontrunner in unmanned aerial systems (UAS)
                  innovation and sustainable drone ecosystems.
                </p>
              </>
            ),
          },
          {
            title: "Why Dholera is the Perfect Launchpad",
            icon: "📍",
            content: (
              <>
                <p className="mb-4">
                  Dholera Smart City offers expansive open zones, advanced connectivity,
                  and dedicated testing corridors—making it a natural fit for drone
                  research and experimentation.
                </p>
                <p>
                  The presence of <strong>iCreate’s innovation campus</strong> and
                  proximity to Ahmedabad’s technology hubs create an ideal environment for
                  startups and R&D teams to prototype and scale drone solutions that meet
                  both domestic and global standards.
                </p>
              </>
            ),
          },
          {
            title: "Paving the Way for India’s Drone Economy",
            icon: "🚁",
            content: (
              <>
                <p className="mb-4">
                  With government policies promoting <strong>“Make in India”</strong> and
                  the <strong>Drone Shakti Mission</strong>, the iCreate challenge is
                  expected to act as a catalyst for industrial and commercial drone
                  applications nationwide.
                </p>
                <p>
                  The event will help build a strong ecosystem around drone manufacturing,
                  component design, software innovation, and regulatory frameworks—creating
                  opportunities for entrepreneurs and skilled professionals alike.
                </p>
              </>
            ),
          },
          {
            title: "Boosting Employment & Entrepreneurship",
            icon: "💼",
            content: (
              <>
                <p className="mb-4">
                  Beyond technology, the challenge is designed to nurture talent and create
                  pathways for job creation in design, hardware development, and field
                  operations.
                </p>
                <p>
                  Startups emerging from this program will receive incubation support from
                  iCreate, mentoring from industry leaders, and potential funding to scale
                  globally—furthering Dholera’s vision as a hub for future technologies.
                </p>
              </>
            ),
          },
          {
            title: "Strengthening Dholera’s Vision as an Innovation Capital",
            icon: "🚀",
            content: (
              <p>
                The <strong>Drone Challenge 2025</strong> reinforces Dholera’s identity as
                India’s innovation capital—where technology, entrepreneurship, and smart
                infrastructure converge. From renewable energy to autonomous systems,
                Dholera continues to attract national and international attention as a city
                built for the future.
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
          Dholera – A New Era of Innovation Begins
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          The launch of iCreate’s Drone Challenge 2025 is a testament to India’s growing
          leadership in cutting-edge technology. As Dholera continues to rise as the
          nation’s innovation hub, <strong>Dholera Infratech</strong> invites investors,
          businesses, and visionaries to be part of this incredible journey.
        </p>
      </section>
    </BlogLayout>
  );
}
