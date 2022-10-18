import lc from '@/Utitls/cache';
import CRequset from './request';
import { BASE_URL, TIME_OUT } from './request/config';

const cRequset = new CRequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      const token = lc.getCache('token');
      if (token) {
        if (config.headers) config.headers.Authorization = token;
      }
      return config;
    }
  }
});

export default cRequset;
