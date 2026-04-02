"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 text-gray-200">

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Privacy Policy
          </h1>


          <div className="space-y-6 text-sm md:text-base leading-relaxed">

            <section>
              <h2 className="font-semibold text-lg mb-2">
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information when you fill out forms,
                register, or contact us through the website.
              </p>
              <p className="mt-2">
                This may include your name, phone number, email address, and
                other relevant details. You may choose not to provide certain
                information, but it may limit access to some features.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                2. Use of Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to inquiries</li>
                <li>Provide project or service details</li>
                <li>Improve website performance and user experience</li>
                <li>Contact you via phone, SMS, email, or other channels</li>
              </ul>
              <p className="mt-2">
                By submitting your details, you consent to being contacted by us.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                3. Cookies and Tracking
              </h2>
              <p>
                We may use cookies and similar technologies to enhance your
                browsing experience and analyze usage patterns.
              </p>
              <p className="mt-2">
                You can disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                4. Data Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share limited
                data with trusted service providers or when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                5. Data Security
              </h2>
              <p>
                We take reasonable measures to protect your information.
                However, no online system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                6. Account Responsibility
              </h2>
              <p>
                If you create an account, you are responsible for maintaining
                the confidentiality of your login details and ensuring all
                information provided is accurate and up to date.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                7. Third-Party Content
              </h2>
              <p>
                Our website may include third-party links or content. We are not
                responsible for their content or privacy practices.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                8. External Links
              </h2>
              <p>
                This Privacy Policy applies only to our website. External
                websites are governed by their own policies.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                9. Updates to Policy
              </h2>
              <p>
                We may update this Privacy Policy at any time. Changes will be
                effective immediately upon posting on this page.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                10. Contact
              </h2>
              <p>
                For any questions regarding this Privacy Policy, please contact
                Dholera Infratech through the official website.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}