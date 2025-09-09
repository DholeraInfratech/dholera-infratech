import BlogLayout from "@/components/BlogLayout";

export default function TopRealEstateProjects() {
  const image = "/images/blog/blog1.jpeg";
  const title = "Top Real Estate Projects in Dholera Smart City";
  const date = "June 25, 2025";
  const author = "Admin";
  const description =
    "Explore the best real estate projects in Dholera Smart City. Discover investment opportunities in residential, commercial and plotted development projects in India's first smart city.";
  const canonical = "https://dholerainfratech.com/blog/top-real-estate-projects";

  return (
    <BlogLayout
      title={title}
      description={description}
      date={date}
      author={author}
      image={image}
      canonical={canonical}
      tags={["DholeraSmartCity", "RealEstateInvestment", "DholeraProjects"]}
    >
      <div className="space-y-10 text-lg leading-relaxed text-gray-800">
        <p>
          Dholera Smart City, a visionary smart city development in Gujarat, is fast becoming the top destination
          for real estate investors across India. Backed by government initiatives and part of the ambitious
          Delhi-Mumbai Industrial Corridor (DMIC), Dholera is creating unprecedented opportunities in real estate.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-5 italic text-blue-800 bg-blue-50 p-5 rounded-xl shadow-sm">
          “Dholera’s integrated planning, fast-track approvals, and unbeatable pricing make it the most futuristic
          investment zone in India.”
        </blockquote>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Invest in Dholera Smart City?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Part of the $100 Billion Delhi-Mumbai Industrial Corridor (DMIC)</li>
            <li>Metro, Airport & 6-Lane Expressway Connectivity Underway</li>
            <li>Zones for Residential, Commercial, and Industrial Use</li>
            <li>Low Entry Cost and High Return on Investment Potential</li>
            <li>World-Class Urban Infrastructure and Smart Facilities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Real Estate Projects in Dholera</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'WestWyn County',
                status: 'Available',
                description:
                  'Premium township located in TP2 Residential Zone, offering ready-to-invest plots with top-notch infrastructure.',
                image: '/images/westwyn-banner.webp',
              },
              {
                name: 'Orchid Township',
                status: 'Sold Out',
                description:
                  'Located in the heart of Dholera’s development zone, Orchid Township offered high ROI for early investors.',
                image: '/images/dholera-projects-image.webp',
              },
              {
                name: 'Paradise 2',
                status: 'Sold Out',
                description:
                  'Phase 2 of the Paradise project, this development focused on sustainable and affordable living for modern families.',
                image: '/images/dholera-projects-image.webp',
              },
              {
                name: 'Marina Bay',
                status: 'Sold Out',
                description:
                  'Inspired by global waterfronts, Marina Bay was a themed township with a unique layout and green corridors.',
                image: '/images/dholera-projects-image.webp',
              },
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className={`text-sm font-medium mt-1 ${project.status === 'Available' ? 'text-green-700' : 'text-red-500'}`}>
                    {project.status}
                  </p>
                  <p className="mt-2 text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose the Right Project?</h2>
          <p className="text-gray-700">When investing in Dholera, look for projects with:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
            <li>Location in TP2 or near Activation Area</li>
            <li>Government Approval and RERA Registration</li>
            <li>Proximity to Airport or Expressway</li>
            <li>Transparent pricing and strong track record</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Potential and Future Returns</h2>
          <p className="text-gray-700">
            Dholera land prices have seen 3–5x growth for early investors. With the 6-lane expressway, airport, and
            metro corridor under development, land appreciation is expected to rise sharply by 2026. Dholera is now
            being considered the next Gurgaon or Navi Mumbai for real estate investors.
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Ready to Invest in Dholera?</h3>
          <p className="mt-2 text-gray-600">
            Get the latest pricing, brochures, and expert consultation from our Dholera specialists.
          </p>
          {/* <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us Now
          </a> */}
        </div>
      </div>
    </BlogLayout>
  );
}
