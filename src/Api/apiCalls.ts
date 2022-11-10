import api from "Api";

export const getProducts = () => api.get(`/products`);
export const searchProducts = (params: {
  gtin?: string;
  linkType?: string;
  language?: string;
  uri?: string;
}) =>
  api.get(`/searchProducts`, {
    params,
  });
