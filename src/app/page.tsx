import { products, Services } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anvika Industries | Industrial Supplier in Nashik",
  description:
    "Anvika Industries is a trusted industrial supplier in Nashik, providing Housekeeping Materials, Industrial Adhesives, Safety Products, Lubricants, Office Stationery, and more.",
  keywords: [
    "industrial supplier Nashik",
    "housekeeping material",
    "industrial adhesive",
    "safety products",
    "specialty lubricant",
    "aerosol",
    "packing material",
    "office stationery",
    "PVC strip curtain",
    "Anvika Industries",
  ],
  authors: [{ name: "Anvika Industries", url: "https://yourdomain.com" }],
  openGraph: {
    title: "Anvika Industries | Industrial Supplier in Nashik",
    description:
      "Your trusted source in Nashik for all types of industrial supplies including adhesives, lubricants, and safety products.",
    url: "https://yourdomain.com",
    siteName: "Anvika Industries",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvika Industries | Industrial Supplier in Nashik",
    description:
      "Reliable supplier of industrial materials in Nashik – Housekeeping, Safety, Packing, Stationery & more.",
  },
  category: "Industrial Supplier",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function Home() {
  const groupedProducts = products?.reduce((acc, product) => {
    if (!acc[product.userFriendlyTypeName]) {
      acc[product.userFriendlyTypeName] = [];
    }
    acc[product.userFriendlyTypeName].push(product);
    return acc;
  }, {} as Record<string, typeof products>);
  return (
    <>
      <div className="w-full bg-white shadow-md p-4">
        <div className="container mx-auto">
          {/* Scrollable Categories */}
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide p-4">
            {Services.map((service, index) => (
              <Link
                key={index}
                href={service.route}
                className="flex flex-col items-center min-w-[120px] md:min-w-[150px] hover:scale-105 transition duration-300"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex justify-center items-center">
                  <Image
                    src={service.imgSrc || "/images/dummy-image.png"}
                    alt={service.name}
                    width={300} // Increased width
                    height={300} // Increased height
                    className="object-contain"
                  />
                </div>
                <p className="text-sm md:text-base text-center mt-2 font-medium text-gray-800">
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        {Object.keys(groupedProducts).map((userFriendlyTypeName) => (
          <ProductCard
            key={userFriendlyTypeName}
            type={userFriendlyTypeName}
            products={groupedProducts[userFriendlyTypeName]}
          />
        ))}
      </div>
    </>
  );
}
