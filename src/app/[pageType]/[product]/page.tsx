import ProductList from "@/components/ProductList";
import SendEnquiryButton from "@/components/send-enquiry-btn";
import { products, Services } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Star, Truck, Shield, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;
  const selectedProduct = products.find((pd) => pd.pid === product);

  if (!selectedProduct) {
    return {
      title: "Product Not Found | Anvika Industries",
      description: "The product you're looking for does not exist.",
    };
  }

  return {
    title: `${selectedProduct.name} | Anvika Industries`,
    description: `Premium quality ${selectedProduct.name} for industrial use.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const selectedProduct = products.find((pd) => pd.pid === product);
  const service = Services.find((s) => s.type === selectedProduct?.type);
  const filterProducts = products
    ?.filter((item) => item?.type == selectedProduct?.type && item.pid !== product)
    .slice(0, 8);

  if (!selectedProduct) {
    return (
      <div className="min-h-screen py-20 bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">📦</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Product Not Found</h1>
            <p className="text-lg text-gray-600">Check back later!</p>
          </div>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6">
        <nav className="flex items-center text-sm text-gray-600 mb-2">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${service?.type}`} className="hover:text-blue-600">{service?.name}</Link>
        </nav>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Product Image */}
          <div className="xl:col-span-7 order-2 xl:order-1">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-80 lg:h-96 xl:h-[500px] p-6 lg:p-10">
                <Image
                  src={selectedProduct.img || "/images/dummy-image.png"}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="xl:col-span-5 order-1 xl:order-2 space-y-6 lg:sticky lg:top-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 space-y-6">
              
              {/* Name & Rating */}
              <div>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {selectedProduct.name}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700 ml-1">4.8 (127+)</span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl lg:text-4xl font-black text-blue-600">
                    ₹{selectedProduct.price}
                  </span>            
               
                </div>
              </div>

              {/* Category & Stock */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-medium">Category:</span>
                  <Link href={`/${service?.type}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {service?.name}
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">In Stock • Free Delivery</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <SendEnquiryButton
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  label="💬 Send Enquiry on WhatsApp"
                  message={`Hi! Interested in "${selectedProduct.name}" - ₹${selectedProduct.price}. Please share price, stock & delivery details. Category: ${service?.name}`}
                />
           
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                  <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Premium Quality</h4>
                    <p className="text-sm text-gray-600">Industrial Grade Materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <Truck className="w-8 h-8 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Nashik & PAN India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {filterProducts?.length > 0 && (
          <section className="mt-24">
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                You Might Also Like
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                More {service?.name.toLowerCase()} products
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 pb-20">
              {filterProducts.map((item) => (
                <ProductList key={item.pid} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export const generateStaticParams = async () => {
  return products?.map((pd) => ({
    product: pd.pid,
  }));
};
