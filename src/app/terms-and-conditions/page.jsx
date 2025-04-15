import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Password Generator</title>
        <meta
          name="description"
          content="Review our terms and conditions to understand usage rules and legal terms for using our password generator."
        />
        <meta
          name="keywords"
          content="terms and conditions, usage policy, password tool legal"
        />
      </Head>
      <section className="w-full max-w-4xl mx-auto mt-12 px-4 py-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Terms and Conditions
        </h2>
        <p className="mb-4">
          Welcome to Password Generator! These Terms and Conditions outline the
          rules and regulations for the use of our website, located at
          [yourdomain.com]. By accessing this website, we assume you accept
          these terms and conditions in full. Do not continue to use Password
          Generator if you do not agree to all of the terms stated on this page.
        </p>

        <p className="mb-4">
          The following terminology applies to these Terms and Conditions,
          Privacy Policy, and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person using this website and
          compliant to the Company’s terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our website. "Party",
          "Parties", or "Us", refers to both the Client and ourselves.
        </p>

        <h3 className="font-bold text-lg mt-4 mb-2">Use of the Website</h3>
        <p className="mb-4">
          Our password generator tool is designed to provide users with secure
          and customizable passwords. It is for personal and non-commercial use
          only. You may not use this site in any way that could damage or
          interfere with its performance, accessibility, or security.
        </p>

        <h3 className="font-bold text-lg mt-4 mb-2">Intellectual Property</h3>
        <p className="mb-4">
          Unless otherwise stated, Password Generator and/or its licensors own
          the intellectual property rights for all material on this website. All
          intellectual property rights are reserved. You may access this from
          Password Generator for your own personal use, subject to restrictions
          set in these terms and conditions.
        </p>

        <h3 className="font-bold text-lg mt-4 mb-2">Disclaimer</h3>
        <p className="mb-4">
          The information provided by our tool is for general information
          purposes only. While we aim to ensure the generated passwords are
          secure, we do not guarantee their absolute safety or that they meet
          specific security standards. You are solely responsible for how you
          use them.
        </p>

        <h3 className="font-bold text-lg mt-4 mb-2">Limitation of Liability</h3>
        <p className="mb-4">
          In no event shall Password Generator or its owners be liable for any
          damages arising out of or in connection with the use of this website.
          This includes, without limitation, direct or indirect loss or damage.
        </p>

        <h3 className="font-bold text-lg mt-4 mb-2">Changes to These Terms</h3>
        <p className="mb-4">
          We reserve the right to modify or replace these Terms at any time. It
          is your responsibility to check this page periodically for changes.
          Your continued use of the site after any changes indicates acceptance
          of those changes.
        </p>

        <p className="mt-6">
          If you have any questions regarding these Terms, please contact us at
          [your email/contact page].
        </p>
      </section>
    </>
  );
};

export default page;
