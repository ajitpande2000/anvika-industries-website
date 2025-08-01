import { ConversationForm } from "@/components/contact-us-form";
import { whatsappNumber } from "@/constants/constants";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Contact Us | Anvika Industries Nashik",
  description:
    "Get in touch with Anvika Industries – your trusted industrial supplier in Nashik. Reach us for housekeeping material, safety products, adhesives, packing materials, and more.",
  keywords: [
    "contact Anvika Industries",
    "industrial supplier Nashik contact",
    "housekeeping material supplier Nashik",
    "office stationery supplier",
    "industrial adhesive supplier",
    "Anvika Industries address",
    "Anvika Industries phone number",
    "Anvika Industries email",
  ],
  openGraph: {
    title: "Contact Anvika Industries | Industrial Supplier in Nashik",
    description:
      "Have questions? Contact Anvika Industries today for all your industrial supply needs in Nashik.",
    url: "https://yourdomain.com/contact",
    siteName: "Anvika Industries",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Anvika Industries",
    description:
      "Reach out to Anvika Industries for reliable industrial supplies in Nashik. Call, email or visit us.",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function ContactUs() {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <div className="rounded-lg border text-card-foreground   shadow-xl bg-white  backdrop-blur-sm">
              <div className="p-6 space-y-8">
                <AddressSection />
                <WhatsAppSection />
                <EmailSection />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg border text-card-foreground   shadow-xl bg-white  backdrop-blur-sm">
              <div className="p-8">
                <ConversationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressSection() {
  const addressData = [
    {
      label: "Nashik",
      address: "17B, Shivganaga Avenue, Pathardi Phata, Nashik-10",
      phone: "9552750577",
    },
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 text-gradient">Address</h2>
      {addressData.map((c) => (
        <a
          key={c.address}
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            c.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-5 rounded-xl bg-gradient-to-r   transition-all duration-300 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-900 hover:to-gray-800 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-red-500" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold  dark:text-white">
              {c.label}
            </h3>
            <p className=" font-medium text-sm sm:text-base break-words">
              {c.address}
            </p>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">{c.phone}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function EmailSection() {
  const emailContacts = [
    { label: "Email", email: "anvikaindustries@gmail.com" },
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 text-gradient">Email Us</h2>
      {emailContacts.map((c) => (
        <a
          key={c.email}
          href={`mailto:${c.email}`}
          className="group relative p-5 rounded-xl bg-gradient-to-r   transition-all duration-300 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-900 hover:to-gray-800 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-red-500" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold  dark:text-white">
              {c.label}
            </h3>
            <p className=" font-medium text-sm sm:text-base break-words">
              {c.email}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

function WhatsAppSection() {
  const whatsappContacts = [{ label: "Whatsapp", number: whatsappNumber }];

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 text-gradient">WhatsApp</h2>
      {whatsappContacts.map((c) => (
        <a
          key={c.number}
          href={`https://wa.me/${c.number.replace(/\D/g, "")}?text=Hi`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-5 rounded-xl bg-gradient-to-r transition-all duration-300 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-900 hover:to-gray-800 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-green-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold dark:text-white">
              {c.label}
            </h3>
            <p className="font-medium text-sm sm:text-base break-words">
              {c.number}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
