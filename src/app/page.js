"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import StrengthTips from "./components/StrengthTips";
import generatePasswordUtil from "./utils/generatePassword";
import FaqSection from "./components/FaqSection";

export default function Home() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeChars, setIncludeChars] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newPass = generatePasswordUtil(
      length,
      includeNumbers,
      includeChars,
      includeSpecial
    );
    setPassword(newPass);
  }, []);

  const handleGeneratePassword = () => {
    const newPass = generatePasswordUtil(
      length,
      includeNumbers,
      includeChars,
      includeSpecial
    );
    setPassword(newPass);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        <title>Free SEO-Friendly Password Generator | Secure & Simple</title>
        <meta
          name="description"
          content="Generate strong, customizable passwords instantly. Built with Next.js & Tailwind. Free, SEO-friendly and responsive!"
        />
        <meta
          name="keywords"
          content="password generator, strong passwords, secure password tool, online password"
        />
      </Head>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-6 text-center">
        Random Password Generator
      </h1>

      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {mounted && (
          <div className="flex flex-col mb-4 sm:flex-row sm:items-center justify-between border p-2 rounded-2xl bg-gray-50 gap-2">
            <span className="truncate w-full sm:w-4/5 text-sm md:text-base">
              {password}
            </span>
            <button
              onClick={copyToClipboard}
              className="bg-gray-800 hover:bg-gray-900 text-white text-xs md:text-sm px-3 py-1 rounded-2xl cursor-pointer"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-sm md:text-base">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-sm md:text-base">
            Options:
          </label>
          <div className="space-y-2">
            <label className="flex items-center text-sm md:text-base">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="mr-2"
              />
              Include Numbers
            </label>
            <label className="flex items-center text-sm md:text-base">
              <input
                type="checkbox"
                checked={includeChars}
                onChange={() => setIncludeChars(!includeChars)}
                className="mr-2"
              />
              Include Characters
            </label>
            <label className="flex items-center text-sm md:text-base">
              <input
                type="checkbox"
                checked={includeSpecial}
                onChange={() => setIncludeSpecial(!includeSpecial)}
                className="mr-2"
              />
              Include Special Characters
            </label>
          </div>
        </div>

        <button
          onClick={handleGeneratePassword}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mb-4 text-sm md:text-base"
        >
          Generate Password
        </button>
      </div>

      {/* Password Strength Tips Section */}
      <StrengthTips />

      {/*  */}
      <FaqSection />
    </>
  );
}
