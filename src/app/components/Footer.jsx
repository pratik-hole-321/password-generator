import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md w-full z-10 mt-8">
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} Password Generator. All rights
            reserved.
          </p>

          <p className="text-xs mt-1">
            Built with <span className="text-blue-400">Next.js</span> &{" "}
            <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </div>
        <div className="flex space-x-4 text-center md:text-right">
          <Link
            href="/policy-privacy"
            className="hover:text-blue-500 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="hover:text-blue-500 transition"
          >
            Terms
          </Link>
          <Link href="/contact-us" className="hover:text-blue-500 transition">
            Contact
          </Link>
          <Link href="/about-us" className="hover:text-blue-500 transition">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
