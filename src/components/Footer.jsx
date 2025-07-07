import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-12 pb-6 text-cadee7">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
          <ul className="space-y-2">
            <li><a href="https://linkedin.com" className="hover:text-persian_green">LinkedIn</a></li>
            <li><a href="https://github.com" className="hover:text-persian_green">GitHub</a></li>
            <li><a href="https://twitter.com" className="hover:text-persian_green">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Site Map</h3>
          <ul className="space-y-2">
            {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map(link => (
              <li key={link}>
                <a href={`#${link}`} className="hover:text-persian_green">
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Senthil Babu K S. All rights reserved.
      </div>
    </footer>
  );
}
