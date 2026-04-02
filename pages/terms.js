"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-16">
        <div className="max-w-7xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 text-gray-200">

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">

            <section>
              <p>
                Dholera Infratech or one of its affiliates (collectively, “Dholera Infratech”) hosts this website. The terms and conditions of any other agreement you might have with Dholera Infratech are unaffected by this Agreement in any way. This Agreement and the Site are subject to modification at any moment. If we decide to alter the Agreement, we will update the date and publish a new version on the Site. You renounce any right you may have to obtain particular notice of such changes or modifications, and any changes or modifications will take effect straight away upon publication on the Site.
              </p>

              <p className="mt-2">
                Your usage of the Site will evidence your agreement to the updated Agreement. In order to understand the terms and conditions that apply to your use of the Site, you should routinely review the Agreement and the applicable policies. You must discontinue using the Site right away if you do not accept the modified terms. You acknowledge that stopping usage of the Site is your sole and exclusive recourse with regard to any modifications to this agreement. You represent and affirm that you have the authority to (a) accept these terms on behalf of any business, organization, or other entity of any type and (b) bind that business, organization, or entity to this Agreement if you are accessing or using the Site on its behalf.
              </p>
            </section>

            <section>
              <p>
                Copyright, intellectual property laws, and other jurisdictions protect the Site’s content, structure, “look and feel,” and all other features. Without our expressive written authorization, you are not permitted to sell, license, distribute, copy, publish, publicly perform display, alter, adapt, translate, or create derivative works from the Site or any portion of the Site. All rights that aren’t given explicitly in this Agreement are reserved by us. Furthermore, you agree that we will vigorously and legally protect our intellectual property rights with regard to the Site.
              </p>
            </section>

            <section>
              <p>
                Persons under the age of eighteen (18) are not permitted or intended to use the Site. You guarantee that you are at least eighteen (18) years old and that you agree to and will comply with all of this Agreement’s terms and conditions by using the Site. We may, at any time, in our sole discretion, and with or without prior notice: (i) terminate your access to or use of the Site (or any portion, aspect, or feature thereof); or (ii) delete any content or information that you have posted on the Site if we have reason to believe that you are under the age of eighteen (18) or are not old enough to consent to and be legally bound by this Agreement.
              </p>
            </section>

            <section>
              <p>
                The Site’s specific features and functionality are dynamic and subject to change at any time. Regarding how the Site is run, we reserve absolute and total discretion. Without prior warning, we retain the right to modify the terms and conditions. Additionally, we have the right to revoke, suspend, or end any service or operation of the Site at any time. You agree not to use the website or its materials for any improper, illegal, or potentially harmful purposes that could defame or otherwise belittle another person.
              </p>
            </section>

            <section>
              <p>
                In regards to our Terms and Conditions, the use of the site and its materials, as well as access to them, is expressly acknowledged as being at your own risk. The site (including all site materials, third-party content, and all products and services offered on or through the site) is given based on “as is” and “as available”, unless otherwise clearly stated in this agreement.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}