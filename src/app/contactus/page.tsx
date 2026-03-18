import { ConversationForm } from "@/components/contact-us-form";
import { whatsappNumber } from "@/constants/constants";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Anvika Industries Nashik",
  description: `Get in touch with Anvika Industries – Nashik&apos;s trusted industrial supplier.`,
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      {/* Mobile-First Hero */}
      <section className="text-center mb-16 lg:mb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to discuss your industrial supply needs? We&apos;re here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl lg:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Contact Info - Mobile Stacked */}
          <div className="lg:sticky lg:top-24 space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
                Get In Touch
              </h2>
              
              {/* Address Card */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=17B%2C%20Shivganaga%20Avenue%2C%20Pathardi%20Phata%2C%20Nashik-10"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Nashik Office</h3>
                    <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
                      17B, Shivganaga Avenue<br className="sm:hidden"/>
                      Pathardi Phata, Nashik-10
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-blue-100">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-base sm:text-lg font-semibold text-gray-900">9552 750 577</span>
                </div>
              </a>

              {/* WhatsApp Card - Prominent */}
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20Anvika%20Industries!`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border border-emerald-200 hover:border-emerald-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">WhatsApp Business</h3>
                    <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
                      {whatsappNumber}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-emerald-100 items-center sm:justify-center">
                  <span className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto group-hover:-translate-x-1 text-center sm:translate-x-0">
                    Start Chat →
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:anvikaindustries@gmail.com`}
                className="group block p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 border border-orange-200 hover:border-orange-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Email</h3>
                    <p className="text-gray-700 font-medium text-base sm:text-lg break-all">
                      anvikaindustries@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 overflow-hidden">
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Send Message
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto">
                  We&apos;ll respond within 2 hours
                </p>
              </div>
              <ConversationForm />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section - Mobile Optimized */}
      <section className="mt-16 lg:mt-24 py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Trusted By 500+ Businesses</h2>
            <p className="text-lg sm:text-xl opacity-95 mb-10 lg:mb-12 max-w-2xl mx-auto px-4">
              Nashik&apos;s leading industrial supplier since 2010
            </p>
            <Link 
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20Anvika%20Industries!`}
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
            >
              <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
