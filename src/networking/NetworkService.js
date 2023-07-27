import axios from 'axios';
import { baseURL, headers } from '@/networking/config';
import { resInterceptor } from '@/networking/interceptors';

export class NetworkService {
  constructor() {
    
    this.client = axios.create({ baseURL, headers });
    this.client.interceptors.response.use(resInterceptor.onFulfill, resInterceptor.onReject);
  }
  setBaseUrlForApis = (baseURL) => {
    console.log('urllll--',baseURL)
    
    this.client.defaults.baseURL = baseURL;
  };
  
  setAccessToken(token) {
    
    this.client.defaults.headers.common.authorization = `Bearer ${token}`;
  }
  
  clearAccessToken() {
    delete this.client.defaults.headers.common.authorization;
  }

  request({ method, url, data, ...config }) {
    console.log('API url---',url)
    return this.client.request({method,url,data, ...config });
  }
}

export const networkService = new NetworkService();
