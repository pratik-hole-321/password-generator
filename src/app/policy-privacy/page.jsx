import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Password Generator</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how your data is handled on our password generator website."
        />
        <meta
          name="keywords"
          content="privacy policy, data policy, user privacy, password generator site policy"
        />
      </Head>

      <section className="w-full max-w-4xl mx-2 md:mx-auto mt-12 px-4 py-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Privacy Policy
        </h2>
        <p>
          At Password Generator, accessible from [yourdomain.com], your privacy
          is important to us. This Privacy Policy document outlines the types of
          information collected and how we use it.
        </p>
        <p className="mt-3 text-gray-800 font-bold">Information We Collect:</p>
        <ul className="list-disc pl-4 py-4">
          <li>We do not collect personally identifiable information.</li>
          <li>
            Non-personal information such as browser type, IP address, and usage
            data may be collected automatically for analytics purposes.
          </li>
        </ul>
        <p className="mt-3 text-gray-800 font-bold">Cookies and Web Beacons:</p>
        <ul className="list-disc pl-4 py-4">
          <li>We use cookies to enhance your experience.</li>
          <li>
            Google, as a third-party vendor, may use cookies to serve ads on our
            site.
          </li>
        </ul>
        <p className="mt-3 text-gray-800 font-bold">Google AdSense:</p>
        <ul className="list-disc pl-4 py-4">
          <li>
            Google may use the DART cookie to serve ads based on your previous
            visits to our site and other sites.
          </li>
          <li>
            You may opt out of the use of the DART cookie by visiting the Google
            ad and content network privacy policy.
          </li>
        </ul>
        <p className="mt-3 text-gray-800 font-bold">
          Third-Party Privacy Policies:
        </p>
        <ul className="list-disc pl-4 py-4">
          <li>
            Our Privacy Policy does not apply to other advertisers or websites.
          </li>
          <li>
            Your Consent: By using our website, you consent to our Privacy
            Policy.
          </li>
          <li>
            Updates: We may update our policy from time to time. Please review
            periodically.
          </li>
        </ul>
      </section>
    </>
  );
};

export default page;
