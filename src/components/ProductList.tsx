"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
interface Product {
  pid: string;
  type: string;
  name: string;
  img: string;
  price: string;
  userFriendlyTypeName: string;
  metadata?: {
    title: string;
    description: string;
  };
}
interface ProductProps {
  product: Product;
}

const ProductList: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link
      href={`/${product?.type}/${product?.pid}`}
      className="group relative block bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden border border-gray-100 hover:border-blue-200 h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-slate-50/50 to-gray-50/50 p-4 lg:p-6 overflow-hidden flex-shrink-0">
        <Image
          src={product.img || "/images/dummy-image.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain group-hover:scale-105 transition-transform duration-500 p-2 lg:p-4"
        />
        
        {/* Actions */}
        <button className="absolute top-4 right-4 p-2.5 bg-white/95 hover:bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border hover:scale-110 z-10">
          <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
        </button>
        
      
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Title & Rating */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 text-base lg:text-lg leading-tight line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl lg:text-3xl font-black text-blue-600">
              ₹{product.price}
            </span>

          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-3.5 h-3.5 text-gray-300 fill-current" />
            </div>
            <span className="text-sm text-gray-600 ml-1">(4.8)</span>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
          View Details
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

export default ProductList;
