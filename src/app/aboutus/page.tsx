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
  CheckCircle,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  const products = [
    {
      title: "House Keeping Material",
      description: "Complete range of cleaning supplies and maintenance equipment",
      icon: Home,
      route: "/house-keeping",
    },
    {
      title: "Industrial Adhesive", 
      description: "High-performance bonding solutions for manufacturing",
      icon: Wrench,
      route: "/industrial-adhesive",
    },
    {
      title: "Industrial Safety Products",
      description: "Comprehensive safety equipment for worker protection",
      icon: Shield,
      route: "/industrial-safety",
    },
    {
      title: "Specialty Lubricants",
      description: "Premium lubricants for machinery maintenance", 
      icon: Droplets,
      route: "/lubricants",
    },
    {
      title: "Packing Material",
      description: "Reliable packaging for secure transportation",
      icon: Package,
      route: "/packing-material",
    },
    {
      title: "Office Stationery",
      description: "Essential supplies for administrative operations",
      icon: FileText,
      route: "/office-stationery",
    },
  ];

  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Package, value: "1000+", label: "Products" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/80 to-blue-50/50">
      {/* Hero - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Anvika Industries
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-xl mx-auto opacity-95 leading-relaxed px-2">
              {`Nashik's #1 Industrial Supplies Partner`}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto px-2">
              <Link href="/categories" className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all border border-white/30">
                Explore Products
              </Link>
              <Link 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`} 
                target="_blank" 
                className="w-full sm:w-auto bg-emerald-500/90 hover:bg-emerald-600/90 backdrop-blur-sm text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all flex items-center gap-2 justify-center border border-white/30"
              >
                <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
                WhatsApp Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Perfect Mobile Grid */}
      <section className="py-12 sm:py-16 md:py-20 -mt-8 sm:-mt-12 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center border border-white/50 hover:border-blue-200"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-all flex items-center justify-center">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Mobile Stacked */}
      <section className="py-16 sm:py-24 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6 sm:space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-50/80 rounded-2xl w-fit mx-auto md:mx-0 backdrop-blur-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="font-bold text-blue-900 text-sm sm:text-base">Nashik, Maharashtra</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Industrial<br className="md:hidden"/> Partner Since 2010
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                Premium quality industrial supplies across 6 core categories. Reliable delivery across Nashik & PAN India.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 p-4 bg-emerald-50/80 rounded-xl backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">100% Authentic</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-emerald-50/80 rounded-xl backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">PAN India Delivery</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-blue-100/50">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {products.slice(0, 4).map((product, i) => (
                    <Link 
                      key={i} 
                      href={product.route} 
                      className="group block p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100/50 hover:border-blue-200 hover:bg-white"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 p-3 sm:p-3.5 bg-blue-100/80 rounded-xl group-hover:bg-blue-200/80 transition-all flex items-center justify-center">
                        <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg text-center mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {product.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Mobile Optimized Grid */}
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Product Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Complete industrial solutions across all essential categories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl lg:max-w-7xl mx-auto">
            {products.map((product, i) => (
              <Link
                key={i}
                href={product.route}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 border border-gray-100/50 hover:border-blue-200 hover:bg-white hover:bg-opacity-100"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 p-4 sm:p-5 bg-blue-100/80 rounded-2xl shadow-lg group-hover:scale-110 group-hover:bg-blue-200/90 transition-all duration-500 flex items-center justify-center">
                  <product.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700" />
                </div>
                <div className="text-center">
                  <span className="inline-block bg-blue-100/80 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 group-hover:bg-blue-200/90 transition-all">
                    0{String(i + 1).padStart(1, "0")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-blue-700 transition-colors leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed px-2">{product.description}</p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 group-hover:translate-x-2 transition-all">
                    View Products →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Mobile Stacked */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600/95 to-indigo-700/95 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Ready For Premium Supplies?
            </h2>
            <p className="text-lg sm:text-xl mb-10 sm:mb-12 opacity-95 max-w-xl mx-auto px-2">
              {`Nashik's trusted partner for industrial excellence`}
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center max-w-xl mx-auto">
              <Link 
                href="/contactus" 
                className="w-full lg:w-auto bg-white/90 backdrop-blur-sm text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all border border-white/30"
              >
                Request Quote
              </Link>
              <Link 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`} 
                target="_blank" 
                className="w-full lg:w-auto bg-emerald-500/90 hover:bg-emerald-600/90 backdrop-blur-sm text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all flex items-center gap-3 justify-center border border-white/30"
              >
                <FaWhatsapp size={20} className="sm:w-5 sm:h-5" />
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
