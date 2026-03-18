import { products, Services } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anvika Industries | Industrial Supplier Nashik - Safety, Adhesives, Lubricants",
  description:
    "✅ Trusted Industrial Supplier in Nashik. Housekeeping Materials, Industrial Adhesives, Safety Products, Specialty Lubricants, Packing Material & Office Stationery. Free Delivery ✓",
  keywords: [
    "industrial supplier Nashik",
    "housekeeping material Nashik",
    "industrial adhesive Nashik",
    "safety products Nashik",
    "lubricants Nashik",
    "packing material supplier",
    "office stationery Nashik",
    "Anvika Industries",
    "industrial safety equipment",
  ],
  openGraph: {
    title: "Anvika Industries - #1 Industrial Supplier Nashik",
    description: "Housekeeping • Safety • Adhesives • Lubricants • Stationery",
    url: "https://anvikaindustries.com",
    siteName: "Anvika Industries",
    images: [
      {
        url: "https://anvikaindustries.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvika Industries - Industrial Supplies Nashik",
    description: "Safety Products • Industrial Adhesives • Lubricants • More",
    images: ["https://anvikaindustries.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const groupedProducts = products?.reduce((acc, product) => {
    if (!acc[product.userFriendlyTypeName]) {
      acc[product.userFriendlyTypeName] = [];
    }
    acc[product.userFriendlyTypeName].push(product);
    return acc;
  }, {} as Record<string, typeof products>);
console.log("groupedProducts",groupedProducts)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
   <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
  <div className="absolute inset-0 bg-black/20" />
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="py-8 sm:py-12 md:py-16 lg:py-20"> {/* Much smaller padding */}
      <div className="text-center text-white max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
  Industrial Supplies
  <span className="block text-blue-100 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 font-light">
    {`Nashik's #1 Choice`}
  </span>
</h1>
        
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 max-w-xl mx-auto leading-relaxed">
          Housekeeping • Safety • Adhesives • Lubricants • Stationery
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-sm mx-auto">
          <Link
            href="/contactus"
            className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Quote Now
          </Link>
          <Link
            href="#categories"
            className="w-full sm:w-auto border border-white/80 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Categories Section */}
 <section id="categories" className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-20">
      <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-6">
        🏭 6+ Categories
      </span>
      <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent mb-6">
        Shop by Category
      </h2>
      <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Everything your business needs under one roof
      </p>
    </div>

    {/* Categories Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
      {Services.map((service, index) => (
        <Link
          key={index}
          href={service.route}
          className="group relative overflow-hidden rounded-3xl bg-white p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 aspect-square lg:aspect-auto"
        >
          {/* Category Image */}
        <div className="relative z-10 mb-6 mx-auto w-20 h-20 lg:w-24 lg:h-24">
  <div className="w-full h-full  bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-4 lg:p-5 shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center overflow-hidden">
    <Image
      src={service.imgSrc || "/images/dummy-image.png"}
      alt={service.name}
      fill
      className="object-cover w-full  h-full group-hover:scale-110 transition-transform duration-300"
    />
  </div>
</div>


          {/* Category Name */}
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 px-2">
            {service.name}
          </h3>

          {/* Category Badge */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
          
          {/* Hover Arrow */}
          <div className="absolute top-1/2 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 shadow-lg">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      ))}
    </div>

    {/* Stats Row */}
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
      {[
        { num: "500+", label: "Products" },
        { num: "50+", label: "Happy Clients" },
        { num: "Nashik", label: "Wide Delivery" },
        { num: "24/7", label: "Support" },
      ].map((stat, index) => (
        <div key={index} className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="text-2xl lg:text-3xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {stat.num}
          </div>
          <div className="text-sm font-semibold text-gray-700">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality industrial supplies at competitive prices
            </p>
          </div>

          {/* Product Grid */}
          <div className="space-y-12">
            {Object.keys(groupedProducts || {}).map((userFriendlyTypeName) => (
              <ProductCard
                key={userFriendlyTypeName}
                type={userFriendlyTypeName}
                products={groupedProducts![userFriendlyTypeName]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl p-5 mb-6 group-hover:bg-blue-200 transition-colors">
                <svg className="w-10 h-10 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">100% Genuine</h3>
              <p className="text-gray-600 text-lg">Quality assured products</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-2xl p-5 mb-6 group-hover:bg-green-200 transition-colors">
                <svg className="w-10 h-10 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-lg">Nashik wide delivery</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 mx-auto bg-orange-100 rounded-2xl p-5 mb-6 group-hover:bg-orange-200 transition-colors">
                <svg className="w-10 h-10 text-orange-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600 text-lg">Competitive pricing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
