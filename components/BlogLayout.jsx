// components/BlogLayout.jsx
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function generateUserId() {
  return 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

export default function BlogLayout({
  title,
  date,
  description,
  image,
  tags,
  children,
}) {
  const router = useRouter();
  const slug = router.asPath.replace("/blog/", "").replace("/", ""); // e.g. "airport-phase1"

  const siteUrl = `https://dholerainfratech.com${router.asPath}`;
  const siteName = "dholerainfratech.com";
  const author = "dholerainfratech.com";

  return (
    <>
      <Head>
        {/* <title>{title}</title> */}
        <meta name="description" content={description} />
        <meta name="keywords" content="Dholera Smart City, Dholera Projects, Investment in Dholera, Dholera Plots, Dholera SIR, Gujarat Real Estate" />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "image": image,
            "description": description,
            "url": siteUrl,
            "datePublished": date,
            "author": { "@type": "Organization", "name": author },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": "https://dholerainfratech.com/images/dholera_gujarat_logo.ico"
              }
            },
            "mainEntityOfPage": siteUrl
          })}
        </script>
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-100 via-yellow-100 to-emerald-100 py-12 text-center">
        <h1 className=" max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-black">
          Blog - {title}
        </h1>
        <p className="mt-2 text-lg text-black font-medium">
          India’s Smart City Growth Story
        </p>
      </section>

      {/* Image */}
      <section className="bg-amber-50 py-10 flex justify-center">
        <div className="relative w-full max-w-5xl h-[60vh] sm:h-[100vh] rounded-2xl shadow overflow-hidden border">
          <Image
            src={image}
            alt="Blog Banner"
            fill
            className="object-fit"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-4 md:px-20 xl:px-64 text-gray-800">
        <h2 className="text-2xl text-center font-bold mb-2">{title}</h2>
        <p className="text-center text-sm text-gray-500 mb-10">{date}</p>
        <div className="prose prose-lg max-w-none">{children}</div>

        {/* Tags */}
        {/* <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm shadow"
            >
              #{tag}
            </span>
          ))}
        </div> */}

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition transform hover:scale-105 inline-block shadow-lg"
          >
            Contact Us For Investment →
          </a>
        </div>
      </section>

      

      <Footer />
    </>
  );
}
