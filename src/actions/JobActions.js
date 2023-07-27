import { ShowToastMessage } from "@/helpers";
import { NAVIGATION } from "@/constants";
import { StackActions } from "@react-navigation/native";
import { JobController } from "@/controllers";
export const JOBTYPES = {
  JOBTYPES_JOBID: "JOBTYPES_JOBID",
  EDIT_JOBDETAILS: "EDIT_JOBDETAILS",
  EDIT_JOBDETAILSERROR: "EDIT_JOBDETAILSERROR",
  JOBTYPES_EDITJOBDETAILSUCCESS: "JOBTYPES_EDITJOBDETAILSUCCESS",
  JOBTYPES_TAGLIST: "JOBTYPES_TAGLIST",
  JOBTYPES_TEAMLISTSUCCESS: "JOBTYPES_TEAMLISTSUCCESS",

  JOB_CREATE_REQUEST: "JOB_CREATE_REQUEST",
  JOB_CREATE_SUCCESS: "JOB_CREATE_SUCCESS",
  JOB_CREATE_ERROR: "JOB_CREATE_ERROR",

  JOB_TAB_COUNT_REQUEST: "JOB_TAB_COUNT_REQUEST",
  JOB_TAB_COUNT_SUCCESS: "JOB_TAB_COUNT_SUCCESS",
  JOB_TAB_COUNT_ERROR: "JOB_TAB_COUNT_ERROR",
  NOTIFICATION_PUSHER: "NOTIFICATION_PUSHER",
  GLOBAL_SEARCHLIST: "GLOBAL_SEARCHLIST",
  NOTIFY_REQUEST: "NOTIFY_REQUEST",
  NOTIFY_SUCCESS: "NOTIFY_SUCCESS",
  NOTIFY_ERROR: "NOTIFY_ERROR",
  CLEARNOTIFYDATA_STORE: "CLEARNOTIFYDATA_STORE",

  IMAGE_UPLOAD_REQUEST: "IMAGE_UPLOAD_REQUEST",
  IMAGE_UPLOAD_SUCCESS: "IMAGE_UPLOAD_SUCCESS",
  IMAGE_UPLOAD_ERROR: "IMAGE_UPLOAD_ERROR",

  PROPERTY_LISTING_REQUEST: "PROPERTY_LISTING_REQUEST",
  PROPERTY_LISTING_SUCCESS: "PROPERTY_LISTING_SUCCESS",
  PROPERTY_LISTING_ERROR: "PROPERTY_LISTING_ERROR",

  TIMELINEREQUEST:'TIMELINEREQUEST',
  TIMELINESUCCESS:'TIMELINESUCCESS',
  TIMELINEERROR:"TIMELINEERROR"
};

const jobIdSuccess = (user) => ({
  type: JOBTYPES.JOBTYPES_JOBID,
  payload: { user },
});
const notifySuccess = (user) => ({
  type: JOBTYPES.NOTIFICATION_PUSHER,
  payload: { user },
});

const editJobDetailSuccess = (user) => ({
  type: JOBTYPES.JOBTYPES_EDITJOBDETAILSUCCESS,
  payload: { user },
});
const jobTagListSuccess = (user) => ({
  type: JOBTYPES.JOBTYPES_TAGLIST,
  payload: { user },
});
const globalSearchListSuccess = (user) => ({
  type: JOBTYPES.GLOBAL_SEARCHLIST,
  payload: { user },
});

const jobTeamListSuccess = (user) => ({
  type: JOBTYPES.JOBTYPES_TEAMLISTSUCCESS,
  payload: { user },
});

const editJobRequest = (user) => ({
  type: JOBTYPES.EDIT_JOBDETAILS,
  payload: null,
});
const editJobDetailError = (error) => ({
  type: JOBTYPES.EDIT_JOBDETAILSERROR,
  payload: { error },
});

const jobCreateRequest = () => ({
  type: JOBTYPES.JOB_CREATE_REQUEST,
  payload: null,
});
const notifyRequest = () => ({
  type: JOBTYPES.NOTIFY_REQUEST,
  payload: null,
});

const jobCreateSuccess = (user) => ({
  type: JOBTYPES.JOB_CREATE_SUCCESS,
  payload: { user },
});

const jobCreateError = (error) => ({
  type: JOBTYPES.JOB_CREATE_ERROR,
  payload: { error },
});

const imageUploadRequest = () => ({
  type: JOBTYPES.IMAGE_UPLOAD_REQUEST,
  payload: null,
});

const imageUploadSuccess = (user) => ({
  type: JOBTYPES.IMAGE_UPLOAD_SUCCESS,
  payload: { user },
});

const imageUploadError = (error) => ({
  type: JOBTYPES.IMAGE_UPLOAD_ERROR,
  payload: { error },
});

const jobTabCountRequest = () => ({
  type: JOBTYPES.JOB_TAB_COUNT_REQUEST,
  payload: null,
});

const jobTabCountSuccess = (user) => ({
  type: JOBTYPES.JOB_TAB_COUNT_SUCCESS,
  payload: { user },
});

const jobTabCountError = (error) => ({
  type: JOBTYPES.JOB_TAB_COUNT_ERROR,
  payload: { error },
});

const propertyListingRequest = () => ({
  type: JOBTYPES.PROPERTY_LISTING_REQUEST,
  payload: null,
});

const propertyListingSuccess = (user) => ({
  type: JOBTYPES.PROPERTY_LISTING_SUCCESS,
  payload: { user },
});

const propertyListingError = (error) => ({
  type: JOBTYPES.PROPERTY_LISTING_ERROR,
  payload: { error },
});

const clearStoreNotificationSuccesss = () => ({
  type: JOBTYPES.CLEARNOTIFYDATA_STORE,
  payload: null,
});

const notifyError = (error) => ({
  type: JOBTYPES.NOTIFY_ERROR,
  payload: { error },
});
const timeLineAllRequest=()=>({
  type:JOBTYPES.TIMELINEREQUEST,
  payload:null
})
const timeLineAllSuccess=(user)=>({
  type:JOBTYPES.TIMELINESUCCESS,
  payload:{user}
})
const timeLineAllError=(error)=>({
  type:JOBTYPES.TIMELINEERROR,
  payload:{error}
})

export const sentJobId = (reqObj, navigation) => (dispatch) => {
  // console.log("jobid-444-->", reqObj);
  dispatch(jobIdSuccess(reqObj));
  navigation.navigate(NAVIGATION.jobDetails);
};
export const storeNotification = (reqObj) => (dispatch) => {
  // console.log("notifyAction----->", reqObj);
  if (reqObj) {
    dispatch(notifyRequest());
    dispatch(notifySuccess(reqObj));
  } else {
    dispatch(notifyError());
  }
  // navigation.navigate(NAVIGATION.jobDetails);
};
export const clearNotificationData =
  () =>
    async (dispatch, _, { demoMode, networkService }) => {
      dispatch(clearStoreNotificationSuccesss());
    };
export const jobTagList =
  (navigation) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      dispatch(editJobRequest());
      const jobController = new JobController(networkService);
      const { data } = await jobController.jobTagList();
      if (data?.success) {
        dispatch(jobTagListSuccess(data?.data));
        // ShowToastMessage(data?.message);
        // console.log("dataTag-->", data?.data);
      }
    } catch (data) {
      // console.log("error===>", data);
      dispatch(
        editJobDetailError(data?.error ?? ShowToastMessage(data?.message))
      );
    }
  };
export const getTeamList =
  (navigation) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      dispatch(editJobRequest());
      const jobController = new JobController(networkService);
      const { data } = await jobController.jobTeamList();
      if (data?.success) {
        dispatch(jobTeamListSuccess(data?.data));
        // ShowToastMessage(data?.message);
        // console.log("dataTeam-->", data?.data);
      }
    } catch (data) {
      // console.log("error===>", data);
      dispatch(
        editJobDetailError(data?.error ?? ShowToastMessage(data?.message))
      );
    }
  };

export const editjobDetails =
  (reqObj, navigation, setOpenModal, setIsFocus,addressUpdate) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      console.log("1223234---->",reqObj)
      console.log("1223234---->",navigation)
      console.log("1223234---->",setOpenModal)
      console.log("1223234---->",setIsFocus)
      // console.log("editjobdetailaction----------------------->>", reqObj)
      dispatch(editJobRequest());
      // console.log | ("editstatusFunActoion==>>", reqObj);
      const jobController = new JobController(networkService);
      const { data } = await jobController.editJobStatus(reqObj);
      console.log("editJobstatsreponse===>", data);
      if (data?.success) {
        dispatch(editJobDetailSuccess());
        ShowToastMessage(data?.message);

        if (setOpenModal) {
          // console.log("If-------------->")
          setOpenModal(false);
          setIsFocus(true);
        }
        if(addressUpdate!='' && addressUpdate !=undefined)
        {
          setIsFocus(true)
        } 
        if(navigation)
        {
          navigation.goBack();
          setIsFocus(true);
        }
        else{
          // console.log("else-------------->")
          // navigation.goBack();
          setIsFocus(true);
        }
      }
    } catch (data) {
      // console.log("error===>", data);
      dispatch(
        editJobDetailError(data?.error ?? ShowToastMessage(data?.message))
      );
    }
  };

export const deleteAttachNotes =
  (reqObj, navigation, setOpenModal, setIsFocus) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      // console.log("openmodal---->",setOpenModal)
      // console.log("deltejobdetailaction----------------------->>", reqObj)
      dispatch(editJobRequest());
      // console.log | ("deletestatusFunActoion==>>", reqObj);
      const jobController = new JobController(networkService);
      const { data } = await jobController.deleteJobAttachNotes(reqObj);
      // console.log("deleteJobstatsreponse===>", data);
      if (data?.success) {
        dispatch(editJobDetailSuccess());
        ShowToastMessage(data?.message);
        if (setOpenModal) {
          // console.log("If-------------->")
          setOpenModal(false);
          setIsFocus(true);
        } else {
          // console.log("else-------------->")
          navigation.goBack();
          setIsFocus(true);
        }
      }
    } catch (data) {
      // console.log("error===>", data);
      dispatch(
        editJobDetailError(data?.error ?? ShowToastMessage(data?.message))
      );
    }
  };
export const CreateAJob =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        console.log("reqObj job create",reqObj)
        dispatch(jobCreateRequest());
        const jobController = new JobController(networkService);
        const { data } = await jobController.CreateJobController(reqObj);

      console.log("create a job", data);

      if (data?.success) {
        dispatch(jobCreateSuccess(data));
        dispatch(sentJobId(data?.data?.job_id, navigation));
        // navigation.navigate(NAVIGATION.jobDetails, {
        //   JobId: data?.data?.job_id,
        // });
      } else {
        dispatch(jobCreateError("error from jobCreateerror"));
      }

      // ShowToastMessage(data?.message);
    } catch (data) {
      // console.log("erroe", data);
      dispatch(jobCreateError("error from job create"));
    }

    // ShowToastMessage(data?.message);
  };

export const addAttachments =
  (reqObj, navigation, setOpenModal, setIsFocus) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      // console.log("openmodal---->",setOpenModal)
      // console.log("addAttachmentsaction----------------------->>", reqObj)
      dispatch(editJobRequest());
      // console.log("addAttachmentsFunActoion==>>", reqObj);
      const jobController = new JobController(networkService);
      const { data } = await jobController.jobAddAttachments(reqObj);
      // console.log("addattachmentsreponse===>", data);
      if (data?.success) {
        dispatch(editJobDetailSuccess());
        ShowToastMessage(data?.message);
        if (setOpenModal) {
          // console.log("If-------------->")
          setOpenModal(false);
          setIsFocus(true);
        } else {
          // console.log("else-------------->")
          navigation.goBack();
          setIsFocus(true);
        }
      }
    } catch (data) {
      // console.log("error===>", data);
      dispatch(
        editJobDetailError(data?.error ?? ShowToastMessage(data?.message))
      );
    }
  };
export const jobTabCounts =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(jobTabCountRequest());
        const jobController = new JobController(networkService);
        const { data } = await jobController.JobTabCountsController(reqObj);

      // console.log("get jobTabCounts", data?.success);

        if (data?.success) {
          dispatch(jobTabCountSuccess(data));
        } else {
          dispatch(jobTabCountError("error from jobTabCounts"));
        }

        // ShowToastMessage(data?.message);
      } catch (data) {
        // console.log("erroe", data);
        dispatch(jobTabCountError("error from jobTabCounts"));
      }
    };
// export const notify =
//   (reqObj) =>
//     async (dispatch, _, { demoMode, networkService }) => {
//       console.log('=>>>>>>', reqObj)
//       try {
//         // dispatch(notifyRequest());
//         console.log("get notifiy---->", reqObj);
//         if (reqObj) {
//           console.log("jobactionnofify-->", reqObj)
//           dispatch(notifySuccess(reqObj));
//         } else {
//           dispatch(notifyError("error from jobTabCounts"));
//         }

//         // ShowToastMessage(data?.message);
//       } catch (data) {
//         // console.log("erroe", data);
//         dispatch(jobTabCountError("error from jobTabCounts"));
//       }
//     };
export const globalSearch =
  (reqObj) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      dispatch(editJobRequest());
      const jobController = new JobController(networkService);
      const { data } = await jobController.globalSearch(reqObj);
      // console.log("dataglobalSearch----->", data)
      if (data?.success) {
        dispatch(globalSearchListSuccess(data?.data));
        // // ShowToastMessage(data?.message);
        // console.log("datasucess-->", data?.data);
      }
    } catch (data) {
      // console.log("error===>", data);
      dispatch(
        editJobDetailError(data?.error ?? ShowToastMessage(data?.message))
      );
    }
  };
export const UploadImages =
  (reqObj) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      console.log("reqObj", reqObj);
      dispatch(editJobRequest());
      const jobController = new JobController(networkService);
      const { data } = await jobController.uploadImagesController(reqObj);
      console.log("upload data image----->", data);
      if (data?.success) {
        dispatch(imageUploadSuccess(data));
        // // ShowToastMessage(data?.message);
        console.log("datasucess-->", data?.data);
      }
    } catch (data) {
      console.log("error===>", data);
      dispatch(
        editJobDetailError(data?.error ?? ShowToastMessage(data?.message))
      );
    }
  };
export const PropertyListing =
  (reqObj) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      console.log("property list", reqObj);
      dispatch(propertyListingRequest());
      const jobController = new JobController(networkService);
      const { data } = await jobController.propertyListingController(reqObj);
      console.log("property list----->", data);
      if (data?.success) {
        dispatch(propertyListingSuccess(data?.data));
        // // ShowToastMessage(data?.message);
        console.log("datasucess-->", data?.data);
      }
    } catch (data) {
      console.log("error===>", data);
      dispatch(propertyListingError("error from property listing"));
    }
  };
  export const timeLineAll=
  (reqObj) =>
  async (dispatch, _, { demoMode, networkService }) => {
    try {
      console.log("timeline", reqObj);
      dispatch(timeLineAllRequest());
      const jobController = new JobController(networkService);
      const { data } = await jobController.timeLineAllList(reqObj);
      console.log("timeLineAll----->", data);
      if (data?.success) {
        dispatch(timeLineAllSuccess(data?.data));
        // // ShowToastMessage(data?.message);
        console.log("datasucess-->", data?.data);
      }
    } catch (data) {
      console.log("error===>", data);
      dispatch(timeLineAllError("error from timelineall listing"));
    }
  };