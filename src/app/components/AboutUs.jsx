import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 px-4 py-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        About Us
      </h2>
      <p className="mb-4">
        Welcome to <strong>Password Generator</strong>, your reliable companion
        for creating strong, secure, and customizable passwords. Our mission is
        to help users stay safe online by making password creation effortless
        and effective.
      </p>
      <p className="mb-4">
        In today's digital world, weak passwords are a major security risk.
        That’s why we built this tool — to give everyone a simple, free, and
        ad-free way to generate strong passwords instantly. Whether you're
        managing personal accounts, professional data, or just want extra online
        security, our password generator gives you full control over length,
        character types, and complexity.
      </p>
      <p className="mb-4">
        We are a small team of passionate developers based in Pune, India. This
        website was created using modern technologies like{" "}
        <strong>Next.js, React.js, and Tailwind CSS</strong> to ensure a fast,
        responsive, and SEO-optimized experience across all devices.
      </p>
      <p className="mb-4">
        At Password Generator, we respect your privacy. We don’t collect or
        store any personal data — all password generation happens locally in
        your browser, ensuring maximum safety.
      </p>
      <p className="mb-4">
        Our goal is not just to provide a tool, but to build trust. That’s why
        we keep improving our platform, add new features based on feedback, and
        maintain transparency about how things work.
      </p>
      <p className="mb-4">
        Thank you for visiting and trusting us. If you have any suggestions,
        feel free to reach out via our{" "}
        <a href="/contact-us" className="text-blue-600 hover:underline">
          Contact Us
        </a>{" "}
        page. Together, let’s build a safer digital world!
      </p>
    </section>
  );
};

export default AboutUs;
