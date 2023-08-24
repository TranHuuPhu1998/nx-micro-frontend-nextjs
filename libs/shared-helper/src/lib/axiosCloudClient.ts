import axios from 'axios';

export const axiosCloudClient = axios.create({
  headers: {
    'Content-Type': 'multipart/formdata'
  },
  baseURL: process.env['NX_API_CLOUD_UPLOAD'],
  responseType: 'json',
});

axiosCloudClient.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers['Authorization'] = `Basic NTM1Njc3Mjc2MjkzNzk0Ok1nZDhBbnEySG4zOWh2RUFKYkVjQWt0b212VQ==`;
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error.response.data.errors[0].message);
  }
);
axiosCloudClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
