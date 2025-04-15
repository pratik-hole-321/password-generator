import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Password Generator Support</title>
        <meta
          name="description"
          content="Have questions? Contact the Password Generator team for support, suggestions, or feedback."
        />
        <meta
          name="keywords"
          content="contact password generator, support, help, feedback"
        />
      </Head>

      <section className="w-full max-w-3xl mx-auto mt-12 px-4 py-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <p className="text-gray-700 mb-6 text-center">
          Have questions, feedback, or issues? We'd love to hear from you! Fill
          out the form below or reach us directly at{" "}
          <a href="mailto:your@email.com" className="text-blue-600 underline">
            your@email.com
          </a>
          .
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-sm md:text-base"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-sm md:text-base"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-sm md:text-base"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default page;
