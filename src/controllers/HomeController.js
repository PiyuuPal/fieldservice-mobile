import { routes } from '@/controllers/routes';
import { strings } from '@/localization';
import { baseURL, headers } from '@/networking/config';

export class HomeController {
  constructor(networkService) {
    
    this.networkService = networkService;
    this.networkService.setBaseUrlForApis(baseURL);
  }
  upcomingList() {
    
    return this.networkService.request({
      method: 'GET',
      url:routes.home.upcomingList,
      data:null
    });
  }
  getColorList() {
    
    return this.networkService.request({
      method: 'GET',
      url:routes.home.getColor,
      data:null
    });
  }
  dashBoardMenuList(){
    
    return this.networkService.request({
      method: 'GET',
      url:routes.home.dashboardMenu,
      data:null
    });
  }

  todaysDataList(reqObj){
    
    return this.networkService.request({
      method: 'GET',
      // url:routes.home.today,
      url: `${routes.home.today}/${reqObj?.name}`,
      data:reqObj
    });
  }
  // salesDataList(){
  //   
  //   return this.networkService.request({
  //     method: 'GET',
  //     url:routes.home.sales,
  //     data:null
  //   });
  // }
  
  topTechniciansDataList(){
    
    return this.networkService.request({
      method: 'GET',
      url:routes.home.toptechnicians,
      data:null
    });
  }
}

