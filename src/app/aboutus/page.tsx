import { whatsappNumber } from "@/constants/constants";
import {
  Home,
  Shield,
  Wrench,
  Droplets,
  Package,
  FileText,
  Award,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  const products = [
    {
      title: "House Keeping Material",
      description:
        "Complete range of cleaning supplies and maintenance equipment for industrial facilities",
      icon: Home,
      features: [
        "Cleaning chemicals",
        "Floor care products",
        "Waste management",
        "Sanitization supplies",
      ],
    },
    {
      title: "Industrial Adhesive",
      description:
        "High-performance bonding solutions for manufacturing and construction applications",
      icon: Wrench,
      features: [
        "Structural adhesives",
        "Thread lockers",
        "Gasket makers",
        "Specialty sealants",
      ],
    },
    {
      title: "Industrial Safety Products",
      description:
        "Comprehensive safety equipment to protect workers in industrial environments",
      icon: Shield,
      features: [
        "Personal protective equipment",
        "Safety signage",
        "Emergency equipment",
        "Fall protection",
      ],
    },
    {
      title: "Specialty Lubricant & Aerosol",
      description:
        "Premium lubricants and aerosol solutions for machinery and equipment maintenance",
      icon: Droplets,
      features: [
        "Penetrating oils",
        "Rust preventatives",
        "Chain lubricants",
        "Maintenance sprays",
      ],
    },
    {
      title: "Packing Material",
      description:
        "Reliable packaging solutions for secure transportation and storage of goods",
      icon: Package,
      features: [
        "Protective packaging",
        "Shipping supplies",
        "Industrial wrapping",
        "Storage solutions",
      ],
    },
    {
      title: "Office Stationary",
      description:
        "Essential office supplies and stationery for administrative operations",
      icon: FileText,
      features: [
        "Writing instruments",
        "Paper products",
        "Filing supplies",
        "Desk accessories",
      ],
    },
  ];

  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Package, value: "1000+", label: "Products" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center text-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600 opacity-90"></div>
        <div className="relative z-10 text-white w-full max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Your Trusted Industrial Solutions Partner
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 opacity-90">
            Delivering quality products, expert support, and reliable service to
            enhance your operations.
          </p>
          <div className="flex justify-center">
            <Link
              href={`https://wa.me/${whatsappNumber.replace(
                /\D/g,
                ""
              )}?text=Hi`}
              target="_blank"
            >
              <button className="flex items-center justify-center gap-2 text-white px-5 py-3 rounded-md transition bg-[#25D366] hover:bg-[#1DA851] shadow-md text-sm sm:text-base">
                <FaWhatsapp size={18} /> Chat on WhatsApp
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
          >
            <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm sm:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Our Product Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive solutions across six key categories to meet the
            highest industry standards.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 sm:p-3 rounded-lg bg-gray-100">
                  <product.icon className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700" />
                </div>
                <span className="px-2 py-1 text-xs sm:text-sm rounded-md border text-gray-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {product.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="mb-6 opacity-90 text-sm sm:text-lg">
            Get in touch and discover how our industrial solutions can
            streamline your operations.
          </p>
          <Link
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi`}
          >
            <button className="flex items-center justify-center gap-2 text-white w-full py-3 mt-3 rounded-md transition bg-[#25D366] hover:bg-[#1DA851] shadow-md">
              <FaWhatsapp size={18} /> Contact On WhatsApp
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
