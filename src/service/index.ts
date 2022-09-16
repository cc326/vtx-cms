import CRequset from './request';
import { BASE_URL, TIME_OUT } from './request/config';

const cRequset = new CRequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      return config;
    }
  }
});

export default cRequset;
