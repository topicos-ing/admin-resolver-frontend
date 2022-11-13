import api from "Api";

export const getProducts = () => api.get(`/products`);

interface BackendBody {
  gtin?: string;
  linkType?: string;
  language?: string;
  uri?: string;
}
export const searchProducts = (params: BackendBody) =>
  api.get(`/searchProducts`, {
    params,
  });

export const createProduct = (data: BackendBody) =>
  api.post(`/products`, { ...data });
export const updateProduct = (id: string, data: BackendBody) =>
  api.put(`/products/${id}`, { ...data });
export const deleteProduct = (id: string) => api.delete(`/products/${id}`);
