import { whatsappNumber } from "@/constants/constants";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const services = [
    { name: "House Keeping Material", href: "/house-keeping-material" },
    { name: "Industrial Adhesive", href: "/industrial-adhesive" },
    { name: "Industrial Safety Products", href: "/industrial-safety-products" },
    { name: "Specialty Lubricant & Aerosol", href: "/specialty-lubricant-aerosol" },
    { name: "Packing Material", href: "/packing-material" },
    { name: "Office Stationary", href: "/Office-stationary" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contactus" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 shadow-sm">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 p-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-md group-hover:shadow-lg transition-all">
              
                   <Image
                                  src="/favicon.ico"
                                  alt="Anvika Logo"
                                  fill
                                  sizes="2.75rem"
                                  className="object-contain"
                                  priority
                                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Anvika Industries</h3>
                <p className="text-sm text-gray-600">Industrial Excellence Since 2020</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-sm">
              Your trusted partner for industrial supplies and safety solutions in Nashik.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="text-sm text-gray-700 hover:text-blue-600 hover:underline font-medium transition-colors duration-200 group"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-blue-600 hover:underline font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">+91 87881 58825</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:anvikaindustries@gmail.com" 
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  anvikaindustries@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 max-w-xs leading-relaxed">
                  17B Shivganga Avenue, Pathardi Phata<br/>Nashik-10, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-100 pt-10 pb-8 mb-8">
          <div className="max-w-md mx-auto lg:mx-0 lg:max-w-lg">
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Get latest offers & product updates
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <span>© {new Date().getFullYear()} Anvika Industries. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-md transition-all">
                <Facebook className="w-4 h-4 text-gray-700" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-md transition-all">
                <Instagram className="w-4 h-4 text-gray-700" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-md transition-all">
                <Linkedin className="w-4 h-4 text-gray-700" />
              </Link>
              <Link href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}>
                <div className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
