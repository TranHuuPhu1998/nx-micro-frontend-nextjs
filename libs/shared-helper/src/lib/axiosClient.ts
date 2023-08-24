import axios from 'axios';

export const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env['NX_API_LAYER_URL'],
  responseType: 'json',
});

axiosClient.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers['apikey'] = process.env['NX_API_KEY'];
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error.response.data.errors[0].message);
  }
);
axiosClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
