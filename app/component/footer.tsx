"use client";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  theme: string;
}

export default function Footer({ theme }: FooterProps) {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 px-4 py-7">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Image
              src={theme === "dark" ? "/image.svg" : "/Strada Logo.svg"}
              alt="Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            One Kattameya, 215,
            <br />
            Maadi Kattameya
            <br />
            Ringroad - Cairo, Egypt
          </p>
          <a
            href="tel:+201203425566"
            className="text-slate-600 dark:text-slate-300 hover:underline"
          >
            +201203425566
          </a>
          <br />
          <a
            href="mailto:Contact@Strada-Properties.com"
            className="text-slate-600 dark:text-slate-300 hover:underline"
          >
            Contact@strada-properties.com
          </a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Services"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex flex-col m:items-end sm:items-start justify-center">
          <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white ">
            Follow Us
          </h3>
          <div className="flex space-x-3">
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
        <p>© 2024 Strada Properties - All rights reserved</p>
      </div>
    </footer>
  );
}
