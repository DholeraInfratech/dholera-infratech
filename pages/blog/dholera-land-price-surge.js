import BlogLayout from "@/components/BlogLayout";

export default function DholeraLandPriceSurge() {
  return (
    <BlogLayout
      title="Dholera Land Prices Jump 10x in a Decade"
      date="June 24, 2025 • Admin"
      description="Land rates in Dholera have surged over 10x in 10 years. Explore the key infrastructure projects behind this explosive growth in India’s first smart city."
      image="/images/blog/blog4.jpeg"
      tags={["DholeraSmartCity", "DholeraInvestment", "LandPriceSurge"]}
    >
      <p>
        <strong className="text-green-600">Dholera Smart City</strong> has seen a jaw-dropping 10x surge in land prices over the last decade.
        Once available for ₹400 per square yard, plots in Dholera SIR’s prime zones now sell for ₹7,000–₹10,000.
        This growth is not speculation—it’s infrastructure-backed.
      </p>

      <p>
        Central to this boom is the{" "}
        <strong className="text-green-800">Ahmedabad–Dholera Expressway</strong>, set to launch in 2025.
      </p>

      <p>
        Adding fuel to the fire is the{" "}
        <strong className="text-blue-700">Tata Group’s ₹91,000 crore semiconductor facility</strong>—a first-of-its-kind in India.
      </p>

      <blockquote className="border-l-4 border-emerald-600 bg-gray-50 p-4 rounded-md italic">
        “The investor sentiment is at an all-time high. Prices will continue climbing.”
        <br />
        <span className="not-italic font-medium text-sm text-gray-500 mt-2 block">
          — Lalit Parihar, MD, Realty Rise Group
        </span>
      </blockquote>

      <p>
        As India's first planned greenfield smart city, Dholera offers industrial zones, residential hubs,
        metro corridors, and a robust solar energy grid.
      </p>

      <p className="text-sm text-gray-500 italic">
        Source: Times of India and industry reports.
      </p>
    </BlogLayout>
  );
}
