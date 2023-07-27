import { ShowToastMessage } from "@/helpers";
import { NAVIGATION } from "@/constants";
import { StackActions } from "@react-navigation/native";
import { DrawerController } from "@/controllers";
export const DRAWERTYPES = {
TIMESHEET_SUCCESS:"TIMESHEET_SUCCESS",
TIMESHEET_REQUEST:"TIMESHEET_REQUEST",
TIMESHEET_ERROR:"TIMESHEET_REQUEST",
CHECKOUTIN_SUCCESS:"CHECKOUTIN_SUCCESS",
CHECKOUTIN_REQUEST:"CHECKOUTIN_REQUEST",
CHECKOUTIN_ERROR:"CHECKOUTIN_ERROR"
}

const timesheetRequest = (user) => ({
    type: DRAWERTYPES.TIMESHEET_REQUEST,
    payload: null,
  });
  const timesheetError = (error) => ({
    type: DRAWERTYPES.TIMESHEET_ERROR,
    payload: { error },
  });
  const timesheetSuccess = (user) => ({
    type: DRAWERTYPES.TIMESHEET_SUCCESS,
    payload: { user },
  });
  const checkOutInRequest=()=>({
    type:DRAWERTYPES.CHECKOUTIN_REQUEST,
    payload:null
  })
  const checkInOutSuccess=()=>({
    type:DRAWERTYPES.CHECKOUTIN_SUCCESS,
    payload:{user}
  })
  const checkInOutError=()=>({
    type:DRAWERTYPES.CHECKOUTIN_ERROR,
    payload:{error}
  })
export const timesheetFun =
  (reqObj, setOpenModal) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(checkOutInRequest());
        const drawerController = new DrawerController(networkService);
        const { data } = await drawerController.timesheet(reqObj);
        console.log("timesheetDetailresponse===>", data);
        console.log("timesheetDetailresponse===>", data?.success);
        if (data?.success) {
          dispatch(timesheetSuccess(data?.data));
          ShowToastMessage(data?.message);
          if (setOpenModal) {
            setOpenModal(false)
          }
        //   else {
        //     // console.log("else-------------->")
        //     navigation.goBack();
        //     setIsFocus(true)
        //   }
        }
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          timesheetError(data?.error ?? ShowToastMessage(data?.message))
        );
      }
    }
    export const checkInOutFun =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
       
        // console.log("editjobdetailaction----------------------->>", reqObj)
        dispatch(checkOutInRequest());
        // console.log | ("editstatusFunActoion==>>", reqObj);
        const drawerController = new DrawerController(networkService);
        const { data } = await drawerController.checkOutIn(reqObj);
        console.log("checkoutresponse===>", data);
        if (data?.success) {
        //   dispatch(editJobDetailSuccess());
        //   ShowToastMessage(data?.message);
        //   if (setOpenModal) {
        //     // console.log("If-------------->")
        //     setOpenModal(false)
        //     setIsFocus(true)
        //   }
        //   else {
        //     // console.log("else-------------->")
        //     navigation.goBack();
        //     setIsFocus(true)
        //   }
        }
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          checkInOutError(data?.error ?? ShowToastMessage(data?.message))
        );
      }
    }