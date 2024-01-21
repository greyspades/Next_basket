import axios from 'axios';

export const api = axios.create({
  baseURL: "/api", // base URL
});

// request interceptor to include the token in the headers
api.interceptors.request.use(
  (config) => {
    const authToken = sessionStorage.getItem('token');

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
