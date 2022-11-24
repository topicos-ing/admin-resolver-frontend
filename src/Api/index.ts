import axios from "axios";
import { setToken } from "Redux/slices/authSlice";
import store from "Redux/store";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const headers = {
  Accept: "application/json",
};

const api = axios.create({
  baseURL,
  headers,
});

// Uncomment if is needed
// This is executed on every request that was made using the api.
api.interceptors.request.use((req) => {
  const token = store.getState().auth.token;

  if (token) {
    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return req;
});

// Uncomment if is needed
// This is executed in all the responses, we can do things with the status here.
api.interceptors.response.use(
  (res) => res,
  (res) => {
    if (res?.request?.status === 401) {
      store.dispatch(setToken(""));
    }
    throw res?.response;
  }
);

export default api;
