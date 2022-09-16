import type { AxiosRequestConfig } from 'axios';

export interface CRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptors?: (config: any) => any;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface CRequsetConfig extends AxiosRequestConfig {
  interceptors?: CRequestInterceptors;
}
