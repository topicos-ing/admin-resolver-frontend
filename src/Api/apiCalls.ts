import api from "Api";

export const getProducts = () => api.get(`/links`);

interface BackendBody {
  gtin?: string;
  linkType?: string;
  acceptLanguage?: string;
  uri?: string;
}
export const searchProducts = (params: BackendBody) =>
  api.get(`/linksSearch`, {
    params,
  });

export const createProduct = (data: BackendBody) =>
  api.post(`/links`, { ...data });
export const updateProduct = (id: string, data: BackendBody) =>
  api.put(`/links/${id}`, { ...data });

export const deleteProduct = (id: string) => api.delete(`/links/${id}`);
