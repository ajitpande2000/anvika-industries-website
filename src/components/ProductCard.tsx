import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
interface Product {
  type: string;
  name: string;
  img: string;
  price: string;
  pid: string;
}

interface ProductCardProps {
  products: Product[];
  type: string;
}

const ProductCard = ({ products, type }: ProductCardProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{type}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative w-full h-56">
              <Image
                src={product.img || "/images/dummy-image.png"}
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
        ))}
      </div>
      <Link href={`/products/${type}`} className="mt-2 text-blue-500 block">
        Show More
      </Link>
    </div>
  );
};

export default ProductCard;
