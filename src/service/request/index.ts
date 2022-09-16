import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { CRequestInterceptors, CRequsetConfig } from './type';

class CRequset {
  instance: AxiosInstance;
  interceptors?: CRequestInterceptors;
  constructor(config: CRequsetConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    //每个实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );

    //全局拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data;
    });
  }

  request<T = any>(config: CRequsetConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      //可进行单独请求拦截
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单独响应拦截
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: CRequsetConfig) {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T = any>(config: CRequsetConfig) {
    return this.request<T>({ ...config, method: 'POST' });
  }
  detele<T = any>(config: CRequsetConfig) {
    return this.request<T>({ ...config, method: 'DETELE' });
  }
  patch<T = any>(config: CRequsetConfig) {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default CRequset;
