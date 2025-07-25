import React from "react";
import { Github, Mail } from "lucide-react";

const publications = [
  {
    title: "Domain Adaptation and Identity Stylization of 3D GANs",
    authors: "Furkan Güzelant, John Doe",
    venue: "ICCV 2025",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
            Furkan Güzelant
          </h1>
          <p className="text-gray-700 max-w-lg mx-auto text-lg sm:text-xl">
            Computer Vision researcher specializing in 3D GANs, diffusion
            models, and stylization.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="mailto:furkan@example.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <Mail className="w-5 h-5 text-gray-600" />
              Email
            </a>
            <a
              href="https://github.com/furkanguzelant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <Github className="w-5 h-5 text-gray-600" />
              GitHub
            </a>
          </div>
        </header>

        {/* Publications */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">
            Publications
          </h2>
          <ul className="space-y-6">
            {publications.map((pub, idx) => (
              <li
                key={idx}
                className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-md shadow-sm hover:shadow-md transition"
              >
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-blue-700 hover:underline"
                >
                  {pub.title}
                </a>
                <p className="text-gray-700 mt-1">{pub.authors}</p>
                <p className="italic text-gray-500 mt-0.5">{pub.venue}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
