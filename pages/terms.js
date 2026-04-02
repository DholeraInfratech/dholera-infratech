"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 text-gray-200">

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Terms & Conditions
          </h1>


          <div className="space-y-6 text-sm md:text-base leading-relaxed">

            <section>
              <h2 className="font-semibold text-lg mb-2">1. Acceptance</h2>
              <p>
                Dholera Infratech (“we”, “our”, or “us”) operates this website.
                By accessing or using this site, you agree to comply with these
                Terms & Conditions.
              </p>
              <p className="mt-2">
                We reserve the right to update or modify these terms at any time
                without prior notice. Changes will be effective immediately upon
                posting. Continued use of the website constitutes your acceptance
                of the revised terms. If you do not agree, please stop using the site.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">2. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>No fraudulent or illegal activity</li>
                <li>No unauthorized access to systems or data</li>
                <li>No misuse that harms the company or other users</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">3. Eligibility</h2>
              <p>
                This website is intended for individuals who are at least 18
                years old. By using the site, you confirm that you meet this
                requirement and are legally capable of entering into a binding agreement.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                4. Intellectual Property
              </h2>
              <p>
                All content on this website—including text, images, design,
                layout, and branding—is the property of Dholera Infratech and
                protected by applicable laws.
              </p>
              <p className="mt-2">
                You may not copy, reproduce, distribute, modify, or use any
                content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                5. Changes to Services
              </h2>
              <p>
                We reserve full discretion to modify, update, suspend, or
                discontinue any part of the website or its services at any time
                without notice.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">6. Termination</h2>
              <p>
                We may suspend or terminate your access to the website at any
                time, with or without notice, if you violate these terms or
                applicable laws.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                7. User Responsibility
              </h2>
              <p>
                Your use of the website is at your own risk. You are responsible
                for ensuring that your use complies with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">8. Disclaimer</h2>
              <p>
                All content and services on this website are provided on an
                <span className="italic"> “as is” </span> and
                <span className="italic"> “as available” </span> basis.
              </p>
              <p className="mt-2">
                We do not guarantee accuracy, completeness, uninterrupted access,
                or suitability for any specific purpose.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                9. Limitation of Liability
              </h2>
              <p>
                Dholera Infratech shall not be liable for any direct, indirect,
                or incidental damages arising from the use or inability to use
                the website, errors in content, or unauthorized access to data.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                10. Third-Party Content
              </h2>
              <p>
                This website may include links to third-party websites. We are
                not responsible for their content, services, or policies.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">11. Governing Law</h2>
              <p>
                These Terms & Conditions are governed by the laws of India. Any
                disputes shall be subject to the jurisdiction of Indian courts.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">12. Contact</h2>
              <p>
                For any questions regarding these Terms & Conditions, please
                contact Dholera Infratech through the official website.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}