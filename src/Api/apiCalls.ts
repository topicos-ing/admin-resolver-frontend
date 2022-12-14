import api from "Api";

export const getProducts = () => api.get(`/links`);

interface BackendBody {
  gtin?: string;
  linkType?: string;
  acceptLanguage?: string;
  uri?: string;
}

interface UserLoginBody {
  emial?: string;
  password?: string;
}

export const searchProducts = (gtin?: string) =>
  api.get(`/links/`, { params: { gtin } });

export const getLanguagesApi = () => api.get(`/languages`);
export const getLinkTypesApi = (gtin?: string) =>
  api.get(`/linkTypes`, { params: { gtin } });

export const createProduct = (data: BackendBody) =>
  api.post(`/links`, { ...data });
export const updateProduct = (id: string, data: BackendBody) =>
  api.put(`/links/${id}`, { ...data });

export const deleteProduct = (id: string) => api.delete(`/links/${id}`);

export const loginReq = (data: UserLoginBody) =>
  api.post(`/signin`, { ...data });
