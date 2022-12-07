import axios from 'axios';

export const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.apilayer.com/exchangerates_data',
  responseType: 'json',
});

axiosClient.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers['apikey'] = 'VbcAV4fyheWwKrIHVA3QHuh4i12RE910';
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
