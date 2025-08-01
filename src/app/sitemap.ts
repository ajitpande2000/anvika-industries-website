import { baseUrl, products, Services } from "@/constants/constants";

export const Sitemap = () => {
  const listServices = Services.map((service) => {
    const routePath = service.route;
    return {
      url: `${baseUrl}${routePath}`,
      lastModified: new Date().toISOString(),
    };
  });

  const listProduct = products.map((product) => {
    return {
      url: `${baseUrl}/${product?.type}/${product?.pid}`,
      lastModified: new Date().toISOString(),
    };
  });

  const defaultSiteMap = [
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...listServices, ...listProduct, ...defaultSiteMap];
};
