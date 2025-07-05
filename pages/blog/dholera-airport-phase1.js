// pages/blog/airport-phase1.js
import BlogLayout from "@/components/BlogLayout";

export default function DholeraAirportPhase1() {
  return (
    <BlogLayout
      title="Airport Phase 1 Nears Completion"
      date="June 24, 2025"
      description="Dholera International Airport Phase 1 is nearing completion, promising to enhance regional connectivity and attract major investments."
      image="/images/blog/airport-phase1.webp"
      tags={[
        "DholeraInternationalAirport",
        "DholeraSmartCity",
        "AirportConnectivity",
        "GujaratInfrastructure",
        "NICDC",
        "GreenfieldAirport",
      ]}
    >
      <section className="space-y-10 text-[1.15rem] leading-9 tracking-wide text-gray-800">
        <p>
          The much-anticipated{" "}
          <strong className="text-blue-600">
            Dholera International Airport
          </strong>{" "}
          is nearing the completion of its Phase 1 — a landmark moment for
          Gujarat’s smart city vision. This milestone will vastly improve
          regional connectivity and attract global investors to the{" "}
          <strong>Dholera Special Investment Region (SIR)</strong>.
        </p>

        <p>
          Phase 1 features a <strong>3,200-meter runway</strong>, advanced ATC
          tower, cargo and passenger terminals, and modern airport facilities.
          As of mid-2025, over 80% of civil work is complete, with operations
          expected to begin by late 2025 or early 2026.
        </p>

        <p>
          Strategically located just 20 km from the SIR, the airport will be
          pivotal for cargo logistics, manufacturing industries, and business
          travel—boosting Dholera’s global appeal.
        </p>

        <p>
          This phase will accommodate{" "}
          <span className="text-green-700 font-medium">
            2 million passengers annually
          </span>
          . Future phases aim to include dual runways and scale up to 20 million
          passengers per year, transforming it into a major aviation hub in
          western India.
        </p>

        <p>
          Backed by the <strong>Airports Authority of India (AAI)</strong>,{" "}
          <strong>Gujarat Government</strong>, and <strong>NICDC</strong>, the
          ₹1,300 crore project reflects a strong public-private synergy and
          long-term infrastructure vision.
        </p>

        <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-md text-gray-700 italic shadow">
          “The airport is a game-changer. It enhances global accessibility and
          builds lasting investor confidence in Dholera’s future.”
          <div className="text-sm not-italic text-gray-500 mt-3">
            — Dholera Industrial City Spokesperson
          </div>
        </div>

        <p>
          The project aligns with India's ambition to build{" "}
          <strong className="text-purple-700">
            Asia’s most advanced greenfield smart city
          </strong>{" "}
          — integrating air, road, rail, and port logistics for seamless trade
          and tech ecosystems.
        </p>

        <p className="text-sm text-gray-500 italic">
          Source: Based on updates from Infrastructure Ministry, AAI, and DICDL
          press releases.
        </p>
      </section>

      <div className="mt-20 text-center">
        {/* <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Contact Us to Invest in Dholera →
        </a> */}
      </div>
    </BlogLayout>
  );
}
