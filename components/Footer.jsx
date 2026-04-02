import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#73dab7] text-white py-15 relative font-[Montserrat] overflow-hidden">
    {/* SVG top wave */}
    <div className="absolute top-0 left-0 w-full h-[100px] z-[1] pointer-events-none">
      <svg viewBox="0 0 1440 100" width="100%" height="100%">
        <path
          fill="#ffffff"
          fillOpacity="0.15"
          d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,117.3C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>

    {/* Footer content */}
    <div className="relative z-[2] max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between gap-8">
      {/* Brand */}
      <div className="flex-1 min-w-[220px]">
        <h2 className="text-3xl font-bold text-[#ffd200] mb-4 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.4)]">
          Dholera Infratech
        </h2>
        <p className="leading-relaxed opacity-90">
          Discover future-ready investment opportunities in{" "}
          <span className="text-[#ffd200] font-semibold">
            Dholera Smart City
          </span>
          . At{" "}
          <span className="text-[#ffd200] font-semibold">
            Dholera Infratech
          </span>
          , we bring verified projects, expert guidance, and smart real estate
          solutions for tomorrow’s growth hub. <br />
          <span className="text-[#ffd200] font-semibold">
            Build your future with us.
          </span>
        </p>
      </div>

      {/* Links */}
      <div className="flex-1 min-w-[200px]">
        <h4 className="font-semibold text-xl mb-3 border-b border-white/30 pb-1">
          Quick Links
        </h4>
        {["Home", "About", "Projects", "Contact", "Blog", "Gallery", "Terms", "Privacy"].map(
          (text) => (
            <a
              key={text}
              href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="block text-white opacity-90 hover:text-[#ffd200] transition-colors duration-200 mb-2"
            >
              {text}
            </a>
          )
        )}
      </div>

      {/* Contact */}
<div className="flex-1 min-w-[220px] text-[1rem]">
  <h4 className="font-semibold text-xl mb-3 border-b border-[#ffd200] pb-1 text-[#ffd200]">
    Contact
  </h4>

  <p className="mb-2">
    <span className="text-[#ffd200] font-medium">Email:</span>{" "}
    <a
      href="mailto:dholerainfratech.in@gmail.com"
      className="hover:text-[#fff] transition duration-200 font-medium"
    >
      dholerainfratech.in@gmail.com
    </a>
  </p>

  <p className="mb-2">
    <span className="text-[#ffd200] font-medium">Phone:</span>{" "}
    <a
      href="tel:+917440055055"
      className="hover:text-[#fff] transition duration-200 font-extrabold"
    >
      +91 7440 055 055
    </a>
  </p>

  <p className="leading-relaxed text-[0.95rem]">
    <span className="text-[#ffd200] font-medium">Head Office:</span> <br />
    Unit-620, 6th Floor, JMD Megapolis, Sector-48, Sohna Road,{" "}
    <span className="text-white/90">Gurugram, Haryana - 122018</span>
    <br />
    <br />
    <span className="text-[#ffd200] font-medium">Branch Office:</span> <br />
   303, 3rd Floor, H-110, First Floor, Noida Sector 63,{" "}
    <span className="text-white/90">U.P - 201301</span>
  </p>
</div>


      {/* Socials - Vertical Icons */}
<div className="flex-1 min-w-[220px]">
  <h4 className="font-semibold text-xl mb-4 border-b border-white/30 pb-1">
    Follow Us
  </h4>
  <div className="flex flex-col items-start gap-3 mt-4">
    {[
      {
        icon: "fa-facebook-f",
        label: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61580534821548",
        color: "#1877F2",
      },
      {
        icon: "fa-instagram",
        label: "Instagram",
        link: "https://www.instagram.com/dholerainfratechofficial/",
        gradient:
          "linear-gradient(45deg, #feda75,  #fa7e1e,  #d62976,  #962fbf,  #4f5bd5)",
      },
      {
        icon: "fa-youtube",
        label: "YouTube",
        link: "https://www.youtube.com/@dholerainfratech",
        color: "#FF0000",
      },
      // {
      //   icon: "fa-linkedin-in",
      //   label: "LinkedIn",
      //   link: "https://linkedin.com/",
      //   color: "#0A66C2",
      // },
    ].map(({ icon, label, link, color, gradient }) => (
      <a
        key={label}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-white hover:text-[#ffd200] transition duration-200"
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
          style={{
            background: gradient || color,
            boxShadow: gradient
              ? "0 0 10px rgba(221,42,123,0.5)"
              : `0 0 10px ${color}55`,
          }}
        >
          <i className={`fab ${icon} text-white text-2xl`}></i>
        </div>
        <span className="text-[1.1rem]">{label}</span>
      </a>
    ))}
  </div>
</div>

    </div>

    {/* Divider and Copyright */}
    <div className="relative z-[2] mt-12 border-t border-white/20 pt-6 text-center text-white text-md ">
      Dholera Infratech &copy; {new Date().getFullYear()} . All rights reserved.
    </div>

    {/* Font Awesome CDN */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </footer>
);

export default Footer;
