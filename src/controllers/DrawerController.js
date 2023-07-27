import { routes } from '@/controllers/routes';
import { strings } from '@/localization';
import { baseURL, headers } from '@/networking/config';

export class DrawerController {
  constructor(networkService) {
    
    this.networkService = networkService;
    this.networkService.setBaseUrlForApis(baseURL);
  }
  timesheet(reqObj) {
    return this.networkService.request({
      method: 'POST',
      url:routes.drawer.timesheet,
      data:reqObj
    });
  }
  checkOutIn(){
    return this.networkService.request({
      method: 'GET',
      url:routes.drawer.checkOutIn,
      data:null
    });
  }
}