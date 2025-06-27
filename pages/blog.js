// pages/blog.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    title: "Dholera Land Prices Jump 10x Over a Decade: Market Insights",
    slug: "dholera-land-price-surge",
    excerpt:
      "Times of India reports 10-fold surge in land prices in Dholera SIR—here’s what’s fueling this growth.",
    image: "/images/blog/blog4.jpeg",
    date: "June 24, 2025",
    author: "Admin",
  },
  {
    title: "Why Dholera is India’s Smart City of the Future",
    slug: "dholera-smart-city",
    excerpt:
      "Explore why Dholera is emerging as India's top smart city destination and why investors are rushing in.",
    image: "/images/blog/blog1.jpeg",
    date: "June 10, 2025",
    author: "Admin",
  },
  {
    title: "Top 5 Real Estate Projects in Dholera You Should Know",
    slug: "top-real-estate-projects",
    excerpt:
      "From Paradise 2 to WestWyn County — here are the must-know investment opportunities in Dholera.",
    image: "/images/blog/blog2.jpeg",
    date: "June 5, 2025",
    author: "Admin",
  },
  {
    title: "How the Dholera SIR is Transforming Gujarat’s Economy",
    slug: "dholera-sir-economy",
    excerpt:
      "Learn how Dholera’s Special Investment Region is becoming a major industrial and tech hub in India.",
    image: "/images/blog/blog3.jpg",
    date: "June 1, 2025",
    author: "Admin",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>
          Dholera Smart City Blog | Real Estate Insights & Investment News
        </title>
        <meta
          name="description"
          content="Read expert articles, market trends, and smart infrastructure updates on Dholera SIR – India’s top investment-ready smart city. Stay informed with the latest news and real estate insights."
        />
        <meta
          property="og:title"
          content="Dholera Smart City Blog | Real Estate Insights & News"
        />
        <meta
          property="og:description"
          content="Stay ahead with the latest updates on Dholera Smart City real estate. Discover investment opportunities, infrastructure plans, and development news."
        />
        <meta property="og:image" content="/images/dholera-blog-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dholera Smart City Blog" />
        <meta
          name="twitter:description"
          content="Latest real estate news, trends, and investment tips in Dholera SIR."
        />
        <meta name="twitter:image" content="/images/dholera-blog-banner.jpg" />
        <link rel="canonical" href="https://www.dholeragujarat.in/blog" />
      </Head>
      <Navbar/>

      {/* Hero Header */}
      <section
        className="bg-gradient-to-br from-[#e1e3dbcc] via-[#d0d8c5] to-[#8e8f88] py-20 text-black text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4 uppercase drop-shadow-md">
          Dholera Smart City Blog
        </h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Explore in-depth articles, market trends, infrastructure updates, and
          real estate investment insights about <strong>Dholera SIR</strong> —
          India’s premier greenfield smart city transforming the future of urban
          development.
        </p>
      </section>

      {/* Blog Grid */}
      <main className="bg-[#f9fafb] py-20 px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-fit transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.date}
                  </span>
                  <span className="text-gray-600 italic">{post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-block text-blue-600 font-medium text-sm hover:underline transition">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
