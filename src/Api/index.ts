import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const headers = {
  // Accept: 'application/json',
};

const api = axios.create({
  baseURL,
  headers,
});

// Uncomment if is needed
// This is executed on every request that was made using the api.
// api.interceptors.request.use((req) => {
//   const {
//     auth: { accessToken },
//   } = store.getState();

//   if (accessToken) {
//     req.headers = {
//       ...req.headers,
//       'access-token': accessToken,
//     };
//   }
//   return req;
// });

// Uncomment if is needed
// This is executed in all the responses, we can do things with the status here.
// api.interceptors.response.use((res) => {
//   return res;
// });

export default api;
