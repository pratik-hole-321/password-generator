import React, { useState } from "react";

const faqs = [
  {
    question: "What is a password generator?",
    answer:
      "A password generator is a tool that creates strong, random passwords to help keep your online accounts safe.",
  },
  {
    question: "Why should I use a password generator?",
    answer:
      "Using a password generator ensures your passwords are hard to guess, helping protect your accounts from hackers.",
  },
  {
    question: "Can I customize the password length and characters?",
    answer:
      "Yes! Most password generators allow you to choose the length and include options like uppercase, lowercase, numbers, and special characters.",
  },
  {
    question: "Is the password generated stored or saved anywhere?",
    answer:
      "No. For your privacy and security, the generated password is not stored or saved by us.",
  },
  {
    question: "Are these passwords safe to use for important accounts?",
    answer:
      "Yes. Generated passwords are designed to be secure, but make sure to store them safely using a password manager.",
  },
  {
    question: "Can I use this password more than once?",
    answer:
      "It’s best to use a different password for every account to stay secure.",
  },
  {
    question: "What is the ideal password length?",
    answer: "A strong password is typically at least 12 characters long.",
  },
  {
    question: "Should I change my password regularly?",
    answer:
      "Yes. Updating your passwords every few months or after a security breach is a good practice.",
  },
  {
    question: "What if I forget my generated password?",
    answer:
      "If you're not using a password manager, consider writing it down in a safe place — once it's gone, it can't be retrieved.",
  },
  {
    question: "Can I generate passwords offline?",
    answer:
      "Some apps offer offline password generation. This tool works online and doesn’t store any data.",
  },
];
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-12 w-full max-w-4xl text-center">
      <div className="">
        <div className="w-full">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-8 text-center">
              Password generator FAQs
            </h2>
            <h6 className="text-indigo-600 text-lg font-medium mb-2 text-center">
              Questions about this random password generator? Answers below!
            </h6>
          </div>

          <div className="space-y-6 border m-4 border-gray-200 p-4 rounded-2xl bg-white">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left flex justify-between items-center text-lg font-medium ${
                    openIndex === index ? "text-indigo-600" : "text-gray-700"
                  } hover:text-indigo-600 focus:outline-none`}
                >
                  {faq.question} {openIndex === index ? <p>-</p> : <p>+</p>}
                </button>

                {openIndex === index && (
                  <p
                    className={`mt-4 ${
                      openIndex === index ? "text-gray-500" : "text-gray-600"
                    } text-base text-left`}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
