import type { AxiosRequestConfig } from 'axios';

export interface CRequestInterceptors<T = AxiosRequestConfig> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface CRequsetConfig<T = AxiosRequestConfig> extends AxiosRequestConfig {
  interceptors?: CRequestInterceptors<T>;
}
