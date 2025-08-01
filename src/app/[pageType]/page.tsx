import ProductList from "@/components/ProductList";
import { products, Services } from "@/constants/constants";
import { Product } from "../types";
import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: {
  params: { pageType: string };
}): Promise<Metadata> => {
  const service = Services.find((s) => s.route === `/${params.pageType}`);

  if (!service) {
    return {
      title: "Page Not Found | Anvika Industries",
      description: "This page could not be found.",
    };
  }

  return {
    title: service.metadata?.title || `${service.name} | Anvika Industries`,
    description:
      service.metadata?.description ||
      `Explore high-quality ${service.name} at Anvika Industries, Nashik.`,
  };
};

const Page = ({ params }: { params: { pageType: string } }) => {
  const service = Services.find((s) => s.route === `/${params.pageType}`);
  const filterProducts = products?.filter(
    (item) => item?.type == service?.type
  );

  if (!service) {
    return <h1 className="text-2xl font-bold mt-6">Page Not Found</h1>;
  }

  console.log("pageType", params, params.pageType, service.name);

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold ml-8">{service?.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {filterProducts?.map((item: Product, index: number) => (
          <ProductList key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;

export const generateStaticParams = async () => {
  return Services?.map((service) => {
    return {
      pageType: service.type,
    };
  });
};
