import { Product } from "@/app/types";
import ProductList from "@/components/ProductList";
import SendEnquiryButton from "@/components/send-enquiry-btn";
import { products, Services } from "@/constants/constants";
import Image from "next/image";
import { Metadata } from "next";

export const dynamic = "force-static";

// ✅ Metadata generator
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
    title:
      selectedProduct.metadata?.title ||
      `${selectedProduct.name} | ${selectedProduct.userFriendlyTypeName} | Anvika Industries`,
    description:
      selectedProduct.metadata?.description ||
      `Buy ${selectedProduct.name}, a top-quality ${selectedProduct.userFriendlyTypeName} from Anvika Industries, Nashik.`,
    openGraph: {
      title:
        selectedProduct.metadata?.title ||
        `${selectedProduct.name} | Anvika Industries`,
      description:
        selectedProduct.metadata?.description ||
        `Explore ${selectedProduct.name} at Anvika Industries, Nashik.`,
      images: [
        {
          url: selectedProduct.img || "/images/dummy-image.png",
          width: 800,
          height: 600,
          alt: selectedProduct.name,
        },
      ],
    },
  };
}

// ✅ Page Component - must NOT be async if no await is used
export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const selectedProduct = products.find((pd) => pd.pid === product);
  const service = Services.find((s) => s.type === selectedProduct?.type);
  const filterProducts = products?.filter(
    (item) => item?.type == selectedProduct?.type
  );

  if (!selectedProduct) {
    return <h1 className="text-2xl font-bold mt-6">Page Not Found</h1>;
  }

  return (
    <div className="mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Product Image */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="relative w-full lg:h-96 h-56">
                <Image
                  src={selectedProduct.img || "/images/dummy-image.png"}
                  alt={selectedProduct.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-700">
              Type: {service?.name || selectedProduct?.type}
            </p>
            <p className="text-base text-gray-600">
              Experience immersive sound quality with our latest wireless
              Bluetooth headphones. Designed for comfort and built for
              long-lasting battery life, these headphones are perfect for music
              lovers and on-the-go professionals alike.
            </p>

            <SendEnquiryButton
              className="w-[50%]"
              label="Send Enquiry On WhatsApp"
              message={`Hiii,I have enquiry for below product. Product Name : ${
                selectedProduct?.name
              } Type: ${service?.name || selectedProduct?.type}`}
            />
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold ml-8">Similar Category Products</h1>
        <p className="ml-8 text-gray-600 mb-4">{service?.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {filterProducts?.map((item: Product, index: number) => (
            <ProductList key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const generateStaticParams = async () => {
  return products?.map((pd) => ({
    product: pd.pid,
  }));
};
