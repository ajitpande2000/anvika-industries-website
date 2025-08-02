"use client";

import { whatsappNumber } from "@/constants/constants";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col ">
      {/* Main Content Wrapper */}
      <main className="flex-grow">
        {/* Your main page content will go here */}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(
                    /\D/g,
                    ""
                  )}?text=Hi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start"
                >
                  <MessageCircle className="mr-2 text-green-400" />
                  <span>{whatsappNumber}</span>
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 text-green-400" />
                <span>+91 87881 58825</span>
              </li>
              <li>
                <a
                  className="flex items-start"
                  href={`mailto:anvikaindustries@gmail.com`}
                >
                  <Mail className="mr-2 text-green-400" />
                  <span>anvikaindustries@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-start"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "17B Shivganga Avenue, Pathardi Phata, Nashik-10"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 text-green-400" />
                  <span>17B Shivganga Avenue, Pathardi Phata, Nashik-10</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold text-white mb-4">Our Services</h2>
            <ul className="space-y-2">
              <Link href={"/house-keeping-material"}>
                <li>House Keeping Material</li>
              </Link>

              <Link href={"/industrial-adhesive"}>
                <li>Industrial Adhesive</li>
              </Link>

              <Link href={"/industrial-safety-products"}>
                <li>Industrial Safety Products</li>
              </Link>

              <Link href={"/specialty-lubricant-aerosol"}>
                <li>Specialty Lubricant & Aerosol</li>
              </Link>

              <Link href={"/packing-material"}>
                <li>Packing Material</li>
              </Link>

              <Link href={"/Office-stationary"}>
                <li>Office Stationary</li>
              </Link>
            </ul>
          </div>

          {/* Address */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold text-white mb-4">Address</h2>
            <p>17B Shivganga Avenue, Pathardi Phata, Nashik-10</p>
            <p>Email: anvikaindustries@gmail.com</p>
            <p>Phone: +91 87881 58825</p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="bg-gray-900 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Anvika Industries. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
