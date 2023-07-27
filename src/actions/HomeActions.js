import { ShowToastMessage } from '@/helpers';
import { NAVIGATION } from '@/constants';
import { StackActions } from '@react-navigation/native';
import { HomeController } from '@/controllers';
export const HOMETYPES = {
  UPCOMING_LISTSUCCESS: 'UPCOMING_LISTSUCCESS',
  DASHBOARD_MENULISTSUCCESS: 'DASHBOARD_MENULISTSUCCESS',
  GETCOLOR_LISTSUCCESS: 'GETCOLOR_LISTSUCCESS',
  TODAYS_LISTSUCCESS: 'TODAYS_LISTSUCCESS',
  // SALES_LISTSUCCESS: 'SALES_LISTSUCCESS',
  // LEADS_LISTSUCCESS: 'LEADS_LISTSUCCESS',
  // JOBS_LISTSUCCESS: 'JOBS_LISTSUCCESS',
  // ESTIMATES_LISTSUCCESS: 'ESTIMATES_LISTSUCCESS',
  // INVOICES_LISTSUCCESS: 'INVOICES_LISTSUCCESS',
  TOPTECH_LISTSUCCESS: "TOPTECH_LISTSUCCESS",
  CLEARHOME_STORE: "CLEARHOME_STORE"
};

const upcomingListSuccess = (user) => ({
  type: HOMETYPES.UPCOMING_LISTSUCCESS,
  payload: { user },
});

const dashboardMenuListSuccess = (user) => ({
  type: HOMETYPES.DASHBOARD_MENULISTSUCCESS,
  payload: { user },
});

const getColorListSuccess = (user) => ({
  type: HOMETYPES.GETCOLOR_LISTSUCCESS,
  payload: { user },
});

const todaysListSuccess = (user) => ({
  type: HOMETYPES.TODAYS_LISTSUCCESS,
  payload: { user },
});

const topTechniciansListSuccess = (user) => ({
  type: HOMETYPES.TOPTECH_LISTSUCCESS,
  payload: { user },
});


export const upcomingListing =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const homeController = new HomeController(networkService);
        const { data } = await homeController.upcomingList();
        // console.log("dataupcoming------>",data)
        if (data?.success) {
          // ShowToastMessage(data?.message);
          dispatch(upcomingListSuccess(data?.data));
        }
      } catch (data) {
        
      }
    };
export const getColorlisting =
  () =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const homeController = new HomeController(networkService);
        const { data } = await homeController.getColorList();
        
        if (data?.success) {
          // ShowToastMessage(data?.message);
          dispatch(getColorListSuccess(data?.data));
        }
      } catch (data) {
        
      }
    };

export const dashboardMenu =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const homeController = new HomeController(networkService);
        const { data } = await homeController.dashBoardMenuList();
        // console.log("dashboard-->",data)
        if (data?.success) {
          // ShowToastMessage(data?.message);
          dispatch(dashboardMenuListSuccess(data?.data));
        }
      } catch (data) {
        
      }
    };


export const todaysData =
  (navigation, reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const homeController = new HomeController(networkService);
        const { data } = await homeController.todaysDataList(reqObj);
        
        if (data?.success) {
          // ShowToastMessage(data?.message);
          dispatch(todaysListSuccess(data?.data));
        }
      } catch (data) {
        
      }
    };

export const topTechnicians =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const homeController = new HomeController(networkService);
        const { data } = await homeController.topTechniciansDataList();
        // console.log("toptechnicians-->",data)
        if (data?.success) {
          // ShowToastMessage(data?.message);
          dispatch(topTechniciansListSuccess(data?.data));
        }
      } catch (data) {
        
      }
    };   
