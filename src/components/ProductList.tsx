import { Product } from "@/app/types";
import Image from "next/image";
import React from "react";
import Button from "./ui/button";
import Link from "next/link";
interface ProductProps {
  product: Product;
}

const ProductList: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="relative w-full h-56">
          <Image
            src={product.imgSrc || product.img || "/images/dummy-image.png"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
        <Link href={`/${product?.type}/${product?.pid}`}>
          <Button label="View Details" />
        </Link>
      </div>
    </>
  );
};

export default ProductList;
