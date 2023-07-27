import { UserController } from "@/controllers";
import { strings } from "@/localization";
import { ShowToastMessage } from "@/helpers";
import { NAVIGATION } from "@/constants";
import { StackActions } from "@react-navigation/native";
import { HOMETYPES } from "./HomeActions";
export const TYPES = {
  CLEAR_STORE: "CLEAR_STORE",

  LOGIN: "LOGIN",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  REGISTER: "REGISTER",
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERROR: "REGISTER_ERROR",

  FORGOTPASS: "FORGOTPASS",
  FORGOTPASS_REQUEST: "FORGOTPASS_REQUEST",
  FORGOTPASS_SUCCESS: "FORGOTPASS_SUCCESS",
  FORGOTPASS_ERROR: "FORGOTPASS_ERROR",

  JOBLIST_REQUEST: "JOBLIST_REQUEST",
  JOBLIST_SUCCESS: "JOBLIST_SUCCESS",
  JOBLIST_ERROR: "JOBLIST_ERROR",

  JOB_DETAILSUCCESS: "JOB_DETAILSUCCESS",

  JOB_STATUSSUCCESS: "JOB_STATUSSUCCESS",

  EXISTINGCLIENT_LISTSUCCESS: "EXISTINGCLIENT_LISTSUCCESS",

  STOREEXISTING_CLIENTDATA: "STOREEXISTING_CLIENTDATA",

  JOBTYPE_LISTSUCCESS: "JOBTYPE_LISTSUCCESS",

  STOREJOBTYPE_CLIENTDATA: "STOREJOBTYPE_CLIENTDATA",

  JOBADSOURCE_LISTSUCCESS: "JOBADSOURCE_LISTSUCCESS",

  CREATENEW_JOBSUCCESS: "CREATENEW_JOBSUCCESS",

  STOREADSOURCE_CLIENTDATA: "STOREADSOURCE_CLIENTDATA",

  COUNTRY_LISTDATA: "COUNTRY_LISTDATA",

  STORECOUNTRY_LISTDATA: "STORECOUNTRY_LISTDATA",

  STATE_LISTDATA: "STATE_LISTDATA",

  STORESTATE_LISTDATA: "STORESTATE_LISTDATA",

  CREATECLIENT: "CREATECLIENT",

  STOREGOOGLE_ADDRESSDATA: "STOREGOOGLE_ADDRESSDATA",

  SETSHOWN_IMAGE: "SETSHOWN_IMAGE",

  CLEARVARIABLE_STORE: "CLEARVARIABLE_STORE",

  BUSINESS_LISTSUCCESS: "BUSINESS_LISTSUCCESS",

  JOBSCHEDULE_LISTSUCCESS: "JOBSCHEDULE_LISTSUCCESS",

  JOBSCHEDULEFILTERITEMSUCCESS: "JOBSCHEDULEFILTERITEMSUCCESS",

  NUMBER_LISTSUCCESS: "NUMBER_LISTSUCCESS",

  BUSINESS_DETAILSSUCCESS: "BUSINESS_DETAILSSUCCESS",

  SCHEDULE_SUCCESS: "SCHEDULE_SUCCESS",

  CLEARHOME_STORE: "CLEARHOME_STORE",
  CLEARSTORE_ADDRESS: "CLEARSTORE_ADDRESS",

  INVOICES_STATUS_SUCCESS: "INVOICES_STATUS_SUCCESS",

  INVOICE_LISTDATASUCCESS: "INVOICE_LISTDATASUCCESS",

  ESTIMATE_STATUS_SUCCESS: "ESTIMATE_STATUS_SUCCESS",

  ESTIMATE_LISTDATASUCCESS: "ESTIMATE_LISTDATASUCCESS",

  HITGOOGLELOGIN: "HITGOOGLELOGIN",
  HITGOOGLELOGIN_REQUEST: "HITGOOGLELOGIN_REQUEST",
  HITGOOGLELOGIN_SUCCESS: "HITGOOGLELOGIN_SUCCESS",
  HITGOOGLELOGIN_ERROR: "HITGOOGLELOGIN_ERROR",

  HITGOOGLESIGNUP: "HITGOOGLESIGNUP",
  HITGOOGLESIGNUP_REQUEST: "HITGOOGLESIGNUP_REQUEST",
  HITGOOGLESIGNUP_SUCCESS: "HITGOOGLESIGNUP_SUCCESS",
  HITGOOGLESIGNUP_ERROR: "HITGOOGLESIGNUP_ERROR",

  CLIENTEDITDETAIL: "CLIENTEDITDETAIL",
  CLIENTEDITDETAIL_REQUEST: "CLIENTEDITDETAIL_REQUEST",
  CLIENTEDITDETAIL_SUCCESS: "CLIENTEDITDETAIL_SUCCESS",
  CLIENTEDITDETAIL_ERROR: "CLIENTEDITDETAIL_ERROR",

  //priya

  CLIENTEESTIMATECOUNT: "CLIENTEESTIMATECOUNT",
  CLIENTEESTIMATECOUNT_REQUEST: "CLIENTEESTIMATECOUNT_REQUEST",
  CLIENTEESTIMATECOUNT_SUCCESS: "CLIENTEESTIMATECOUNT_SUCCESS",
  CLIENTEESTIMATECOUNT_ERROR: "CLIENTEESTIMATECOUNT_ERROR",

  BUSSINESS_JOBLIST: "BUSSINESS_JOBLIST",
  BUSSINESS_JOBLIST_REQUEST: "BUSSINESS_JOBLIST_REQUEST",
  BUSSINESS_JOBLIST_SUCCESS: "BUSSINESS_JOBLIST_SUCCESS",
  BUSSINESS_JOBLIST_ERROR: "BUSSINESS_JOBLIST_ERROR",

  CLIENTINVOICECOUNT: "CLIENTINVOICECOUNT",
  CLIENTINVOICECOUNT_REQUEST: "CLIENTINVOICECOUNT_REQUEST",
  CLIENTINVOICECOUNT_SUCCESS: "CLIENTINVOICECOUNT_SUCCESS",
  CLIENTINVOICECOUNT_ERROR: "CLIENTEESTIMATECOUNT_ERROR",

  CLIENTJOBCOUNT: "CLIENTJOBCOUNT",
  CLIENTJOBCOUNT_REQUEST: "CLIENTJOBCOUNT_REQUEST",
  CLIENTJOBCOUNT_SUCCESS: "CLIENTJOBCOUNT_SUCCESS",
  CLIENTJOBCOUNT_ERROR: "CLIENTJOBCOUNT_ERROR",

  CLIENTUPDATEADDRESS: "CLIENTUPDATEADDRESS",
  CLIENTUPDATEADDRESS_REQUEST: "CLIENTUPDATEADDRESS_REQUEST",
  CLIENTUPDATEADDRESS_SUCCESS: "CLIENTUPDATEADDRESS_SUCCESS",
  CLIENTUPDATEADDRESS_ERROR: "CLIENTUPDATEADDRESS_ERROR",

  ESTIMATEDETAIL: "ESTIMATEDETAIL",
  ESTIMATEDETAIL_REQUEST: "ESTIMATEDETAIL_REQUEST",
  ESTIMATEDETAIL_SUCCESS: "ESTIMATEDETAIL_SUCCESS",
  ESTIMATEDETAIL_ERROR: "ESTIMATEDETAIL_ERROR",

  // startEst--

  ESTIMATEDELETEPAYMENT: "ESTIMATEDELETEPAYMENT",
  ESTIMATEDELETEPAYMENT_REQUEST: "ESTIMATEDELETEPAYMENT_REQUEST",
  ESTIMATEDELETEPAYMENT_SUCCESS: "ESTIMATEDELETEPAYMENT_SUCCESS",
  ESTIMATEDELETEPAYMENT_ERROR: "ESTIMATEDELETEPAYMENT_ERROR",

  DELETEESTIMATESIGNS: "DELETEESTIMATESIGNS",
  DELETEESTIMATESIGNS_REQUEST: "DELETEESTIMATESIGNS_REQUEST",
  DELETEESTIMATESIGNS_SUCCESS: "DELETEESTIMATESIGNS_SUCCESS",
  DELETEESTIMATESIGNS_ERROR: "DELETEESTIMATESIGNS_ERROR",

  DELETEESTIMATEATTACHMENTS: "DELETEESTIMATEATTACHMENTS",
  DELETEESTIMATEATTACHMENTS_REQUEST: "DELETEESTIMATEATTACHMENTS_REQUEST",
  DELETEESTIMATEATTACHMENTS_SUCCESS: "DELETEESTIMATEATTACHMENTS_SUCCESS",
  DELETEESTIMATEATTACHMENTS_ERROR: "DELETEESTIMATEATTACHMENTS_ERROR",

  // end--
  PAYMENTMODE: "PAYMENTMODE",
  PAYMENTMODE_REQUEST: "PAYMENTMODE_REQUEST",
  PAYMENTMODE_SUCCESS: "PAYMENTMODE_SUCCESS",
  PAYMENTMODE_ERROR: "PAYMENTMODE_ERROR",

  DELETEPAYMENT: "DELETEPAYMENT",
  DELETEPAYMENT_REQUEST: "DELETEPAYMENT_REQUEST",
  DELETEPAYMENT_SUCCESS: "DELETEPAYMENT_SUCCESS",
  DELETEPAYMENT_ERROR: "DELETEPAYMENT_ERROR",

  DELETEINVOICEITEM: "DELETEINVOICEITEM",
  DELETEINVOICEITEM_REQUEST: "DELETEINVOICEITEM_REQUEST",
  DELETEINVOICEITEM_SUCCESS: "DELETEINVOICEITEM_SUCCESS",
  DELETEINVOICEITEM_ERROR: "DELETEINVOICEITEM_ERROR",

  DELETEESTIMATEITEM: "DELETEESTIMATEITEM",
  DELETEESTIMATEITEM_REQUEST: "DELETEESTIMATEITEM_REQUEST",
  DELETEESTIMATEITEM_SUCCESS: "DELETEESTIMATEITEM_SUCCESS",
  DELETEESTIMATEITEM_ERROR: "DELETEESTIMATEITEM_ERROR",


  DELETEINVOICEATTACHMENTS: "DELETEINVOICEATTACHMENTS",
  DELETEINVOICEATTACHMENTS_REQUEST: "DELETEINVOICEATTACHMENTS_REQUEST",
  DELETEINVOICEATTACHMENTS_SUCCESS: "DELETEINVOICEATTACHMENTS_SUCCESS",
  DELETEINVOICEATTACHMENTS_ERROR: "DELETEINVOICEATTACHMENTS_ERROR",


  DELETEINVOICESIGNS: "DELETEINVOICESIGNS",
  DELETEINVOICESIGNS_REQUEST: "DELETEINVOICESIGNS_REQUEST",
  DELETEINVOICESIGNS_SUCCESS: "DELETEINVOICESIGNS_SUCCESS",
  DELETEINVOICESIGNS_ERROR: "DELETEINVOICESIGNS_ERROR",


  INVOICEUPDATE_ITEM: "INVOICEUPDATE_ITEM",
  INVOICEUPDATE_ITEM_REQUEST: "INVOICEUPDATE_ITEM_REQUEST",
  INVOICEUPDATE_ITEM_SUCCESS: "INVOICEUPDATE_ITEM_SUCCESS",
  INVOICEUPDATE_ITEM_ERROR: "INVOICEUPDATE_ITEM_ERROR",

  INVOICEPAYMENT: "INVOICEPAYMENT",
  INVOICEPAYMENT_REQUEST: "INVOICEPAYMENT_REQUEST",
  INVOICEPAYMENT_SUCCESS: "INVOICEPAYMENT_SUCCESS",
  INVOICEPAYMENT_ERROR: "INVOICEPAYMENT_ERROR",


  INVOICENOTEADDUP: "INVOICENOTEADDUP",
  INVOICENOTEADDUP_REQUEST: "INVOICENOTEADDUP_REQUEST",
  INVOICENOTEADDUP_SUCCESS: "INVOICENOTEADDUP_SUCCESS",
  INVOICENOTEADDUP_ERROR: "INVOICENOTEADDUP_ERROR",



  INVOICEITEMDETAIL: "INVOICEITEMDETAIL",
  INVOICEITEMDETAIL_REQUEST: "INVOICEITEMDETAIL_REQUEST",
  INVOICEITEMDETAIL_SUCCESS: "INVOICEITEMDETAIL_SUCCESS",
  INVOICEITEMDETAIL_ERROR: "INVOICEITEMDETAIL_ERROR",
  //End

  CALLING_REQUEST: "CALLING_REQUEST",
  CALLING_SUCCESS: "CALLING_SUCCESS",
  CALLING_ERROR: "CALLING_ERROR",

  JOB_SOURCE_LIST_REQUEST: "JOB_SOURCE_LIST_REQUEST",
  JOB_SOURCE_LIST_SUCCESS: "JOB_SOURCE_LIST_SUCCESS",
  JOB_SOURCE_LIST_ERROR: "JOB_SOURCE_LIST_ERROR",

  CUSTOMER_CREATE_REQUEST: "CUSTOMER_CREATE_REQUEST",
  CUSTOMER_CREATE_SUCCESS: "CUSTOMER_CREATE_SUCCESS",
  CUSTOMER_CREATE_ERROR: "CUSTOMER_CREATE_ERROR",

  INVOICECREATESUCCESS: "INVOICECREATESUCCESS",
  INVOICEITEMSUCCESS: "INVOICEITEMSUCCESS",
  INVOICEPAYMENTSUCCESS: "INVOICEPAYMENTSUCCESS",

  LISTINVOICEITEMS: "LISTINVOICEITEMS",
  LISTINVOICEITEMS_REQUEST: "LISTINVOICEITEMS_REQUEST",
  LISTINVOICEITEMS_SUCCESS: "LISTINVOICEITEMS_SUCCESS",
  LISTINVOICEITEMS_ERROR: "LISTINVOICEITEMS_ERROR",

  CHATTINGS_LISTS_REQUEST: "CHATTINGS_LISTS_REQUEST",
  CHATTINGS_LISTS_SUCCESS: "CHATTINGS_LISTS_SUCCESS",
  CHATTINGS_LISTS_ERROR: "CHATTINGS_LISTS_ERROR",

  GET_MESSAGE_MEMBER_REQUEST: "GET_MESSAGE_MEMBER_REQUEST",
  GET_MESSAGE_MEMBER_SUCCESS: "GET_MESSAGE_MEMBER_SUCCESS",
  GET_MESSAGE_MEMBER_ERROR: "GET_MESSAGE_MEMBER_ERROR",

  SEND_MESSAGE_REQUEST: "SEND_MESSAGE_REQUEST",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_ERROR: "SEND_MESSAGE_ERROR",
};
const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginSuccess = (user) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});
const jobScheduleListSuccess = (user) => ({
  type: TYPES.JOBSCHEDULE_LISTSUCCESS,
  payload: { user },
});

const registerRequest = () => ({
  type: TYPES.REGISTER_REQUEST,
  payload: null,
});

const registerSuccess = (user) => ({
  type: TYPES.REGISTER_SUCCESS,
  payload: { user },
});
const scheduleSuccess = (user) => ({
  type: TYPES.SCHEDULE_SUCCESS,
  payload: { user },
});
const forgotPassRequest = () => ({
  type: TYPES.FORGOTPASS_REQUEST,
  payload: null,
});

const forgotPassSuccess = (user) => ({
  type: TYPES.FORGOTPASS_SUCCESS,
  payload: { user },
});

const jobDetailsSuccess = (user) => ({
  type: TYPES.JOB_DETAILSUCCESS,
  payload: { user },
});

const jobStatusSuccess = (user) => ({
  type: TYPES.JOB_STATUSSUCCESS,
  payload: { user },
});

const existingClientListSuccess = (user) => ({
  type: TYPES.EXISTINGCLIENT_LISTSUCCESS,
  payload: { user },
});
const jobTypeListSuccess = (user) => ({
  type: TYPES.JOBTYPE_LISTSUCCESS,
  payload: { user },
});
const businessListSuccess = (user) => ({
  type: TYPES.BUSINESS_LISTSUCCESS,
  payload: { user },
});
const numberListSuccess = (user) => ({
  type: TYPES.NUMBER_LISTSUCCESS,
  payload: { user },
});
const createNewJobSuccess = (user) => ({
  type: TYPES.CREATENEW_JOBSUCCESS,
  payload: { user },
});
const AdSourceListSuccess = (user) => ({
  type: TYPES.JOBADSOURCE_LISTSUCCESS,
  payload: { user },
});
const loginError = (error) => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const jobListRequest = () => ({
  type: TYPES.JOBLIST_REQUEST,
  payload: null,
});
const jobListSuccess = (user) => ({
  type: TYPES.JOBLIST_SUCCESS,
  payload: { user },
});

const hitgoogleLoginRequest = () => ({
  type: TYPES.HITGOOGLELOGIN_REQUEST,
  payload: null,
});
const hitgoogleLoginSuccess = (user) => ({
  type: TYPES.HITGOOGLELOGIN_SUCCESS,
  payload: { user },
});
const hitgoogleLoginError = (error) => ({
  type: TYPES.HITGOOGLELOGIN_ERROR,
  payload: { error },
});

const hitgoogleSignUpRequest = () => ({
  type: TYPES.HITGOOGLESIGNUP_REQUEST,
  payload: null,
});
const hitgoogleSignUpSuccess = (user) => ({
  type: TYPES.HITGOOGLESIGNUP_SUCCESS,
  payload: { user },
});
const hitgoogleSignUpError = (error) => ({
  type: TYPES.HITGOOGLESIGNUP_ERROR,
  payload: { error },
});

const editClientDetailRequest = () => ({
  type: TYPES.CLIENTEDITDETAIL_REQUEST,
  payload: null,
});
const editClientDetailSuccess = (user) => ({
  type: TYPES.CLIENTEDITDETAIL_SUCCESS,
  payload: { user },
});
const editClientDetailError = (error) => ({
  type: TYPES.CLIENTEDITDETAIL_ERROR,
  payload: { error },
});

const paymentModeRequest = () => ({
  type: TYPES.PAYMENTMODE_REQUEST,
  payload: null,
});
const paymentModeSuccess = (user) => ({
  type: TYPES.PAYMENTMODE_SUCCESS,
  payload: { user },
});
const paymentModeError = (error) => ({
  type: TYPES.PAYMENTMODE_ERROR,
  payload: { error },
});

const deletePaymentRequest = () => ({
  type: TYPES.DELETEPAYMENT_REQUEST,
  payload: null,
});
const deletePaymentSuccess = (user) => ({
  type: TYPES.DELETEPAYMENT_SUCCESS,
  payload: { user },
});
const deletePaymentError = (error) => ({
  type: TYPES.DELETEPAYMENT_ERROR,
  payload: { error },
});

const deleteInvoiceItemsRequest = () => ({
  type: TYPES.DELETEINVOICEITEM_REQUEST,
  payload: null,
});
const deleteInvoiceItemsSuccess = (user) => ({
  type: TYPES.DELETEINVOICEITEM_SUCCESS,
  payload: { user },
});
const deleteInvoiceItemsError = (error) => ({
  type: TYPES.DELETEINVOICEITEM_ERROR,
  payload: { error },
});


const deleteestimateItemsRequest = () => ({
  type: TYPES.DELETEESTIMATEITEM_REQUEST,
  payload: null,
});
const deleteestimateItemsSuccess = (user) => ({
  type: TYPES.DELETEESTIMATEITEM_SUCCESS,
  payload: { user },
});
const deleteestimateItemsError = (error) => ({
  type: TYPES.DELETEESTIMATEITEM_ERROR,
  payload: { error },
});

//start--Est-2345
const deleteESTPaymentRequest = () => ({
  type: TYPES.ESTIMATEDELETEPAYMENT_REQUEST,
  payload: null,
});
const deleteESTPaymentSuccess = (user) => ({
  type: TYPES.ESTIMATEDELETEPAYMENT_SUCCESS,
  payload: { user },
});
const deleteESTPaymentError = (error) => ({
  type: TYPES.ESTIMATEDELETEPAYMENT_ERROR,
  payload: { error },
});


const deleteEstimateSignRequest = () => ({
  type: TYPES.DELETEESTIMATESIGNS_REQUEST,
  payload: null,
});
const deleteEstimateSignSuccess = (user) => ({
  type: TYPES.DELETEESTIMATESIGNS_SUCCESS,
  payload: { user },
});
const deleteEstimateSignError = (error) => ({
  type: TYPES.DELETEESTIMATESIGNS_ERROR,
  payload: { error },
});


const deleteEstimateAttachmentsRequest = () => ({
  type: TYPES.DELETEESTIMATEATTACHMENTS_REQUEST,
  payload: null,
});
const deleteEstimateAttachmentsSuccess = (user) => ({
  type: TYPES.DELETEESTIMATEATTACHMENTS_SUCCESS,
  payload: { user },
});
const deleteEstimateAttachmentsError = (error) => ({
  type: TYPES.DELETEESTIMATEATTACHMENTS_ERROR,
  payload: { error },
});


//end


const deleteInvoiceAttachmentsRequest = () => ({
  type: TYPES.DELETEINVOICEATTACHMENTS_REQUEST,
  payload: null,
});
const deleteInvoiceAttachmentsSuccess = (user) => ({
  type: TYPES.DELETEINVOICEATTACHMENTS_SUCCESS,
  payload: { user },
});
const deleteInvoiceAttachmentsError = (error) => ({
  type: TYPES.DELETEINVOICEATTACHMENTS_ERROR,
  payload: { error },
});


const deleteInvoiceSignRequest = () => ({
  type: TYPES.DELETEINVOICESIGNS_REQUEST,
  payload: null,
});
const deleteInvoiceSignSuccess = (user) => ({
  type: TYPES.DELETEINVOICESIGNS_SUCCESS,
  payload: { user },
});
const deleteInvoiceSignError = (error) => ({
  type: TYPES.DELETEINVOICESIGNS,
  payload: { error },
});

const invoiceUpdateItemRequest = () => ({
  type: TYPES.INVOICEUPDATE_ITEM_REQUEST,
  payload: null,
});
const invoiceUpdateItemSuccess = (user) => ({
  type: TYPES.INVOICEUPDATE_ITEM_SUCCESS,
  payload: { user },
});
const invoiceUpdateItemError = (error) => ({
  type: TYPES.INVOICEUPDATE_ITEM_ERROR,
  payload: { error },
});
//priya

const clientEstimateCountRequest = () => ({
  type: TYPES.CLIENTEESTIMATECOUNT_REQUEST,
  payload: null,
});
const clientEstimateCountSuccess = (user) => ({
  type: TYPES.CLIENTEESTIMATECOUNT_SUCCESS,
  payload: { user },
});
const clientEstimateCountError = (error) => ({
  type: TYPES.CLIENTEESTIMATECOUNT_ERROR,
  payload: { error },
});

const businessJobListRequest = () => ({
  type: TYPES.BUSSINESS_JOBLIST_REQUEST,
  payload: null,
});
const businessJobListSuccess = (user) => ({
  type: TYPES.BUSSINESS_JOBLIST_SUCCESS,
  payload: { user },
});
const businessJobListError = (error) => ({
  type: TYPES.BUSSINESS_JOBLIST_ERROR,
  payload: { error },
});

const clientInvoiceCountRequest = () => ({
  type: TYPES.CLIENTINVOICECOUNT_REQUEST,
  payload: null,
});
const clientInvoiceCountSuccess = (user) => ({
  type: TYPES.CLIENTINVOICECOUNT_SUCCESS,
  payload: { user },
});
const clientInvoiceCountError = (error) => ({
  type: TYPES.CLIENTINVOICECOUNT_ERROR,
  payload: { error },
});

const clientJobCountRequest = () => ({
  type: TYPES.CLIENTJOBCOUNT_REQUEST,
  payload: null,
});
const clientJobCountSuccess = (user) => ({
  type: TYPES.CLIENTJOBCOUNT_SUCCESS,
  payload: { user },
});
const clientJobCountError = (error) => ({
  type: TYPES.CLIENTJOBCOUNT_ERROR,
  payload: { error },
});

const clientUpdateAddressRequest = () => ({
  type: TYPES.CLIENTUPDATEADDRESS_REQUEST,
  payload: null,
});
const clientUpdateAddressSuccess = (user) => ({
  type: TYPES.CLIENTUPDATEADDRESS_SUCCESS,
  payload: { user },
});
const clientUpdateAddressError = (error) => ({
  type: TYPES.CLIENTUPDATEADDRESS_ERROR,
  payload: { error },
});

const estimateDetailRequest = () => ({
  type: TYPES.ESTIMATEDETAIL_REQUEST,
  payload: null,
});
const estimateDetailSuccess = (user) => ({
  type: TYPES.ESTIMATEDETAIL_SUCCESS,
  payload: { user },
});
const estimateDetailError = (error) => ({
  type: TYPES.ESTIMATEDETAIL_ERROR,
  payload: { error },
});

const chattingsListsRequest = () => ({
  type: TYPES.CHATTINGS_LISTS_REQUEST,
  payload: null,
});
const chattingsListsSuccess = (user) => ({
  type: TYPES.CHATTINGS_LISTS_SUCCESS,
  payload: { user },
});
const chattingsListsError = (error) => ({
  type: TYPES.CHATTINGS_LISTS_ERROR,
  payload: { error },
});
const sendMessageRequest = () => ({
  type: TYPES.SEND_MESSAGE_REQUEST,
  payload: null,
});
const sendMessageSuccess = (user) => ({
  type: TYPES.SEND_MESSAGE_SUCCESS,
  payload: { user },
});
const sendMessageError = (error) => ({
  type: TYPES.SEND_MESSAGE_ERROR,
  payload: { error },
});



const invoiceNotesAddUPRequest = () => ({
  type: TYPES.INVOICENOTEADDUP_REQUEST,
  payload: null,
});
const invoiceNotesAddUPSuccess = (user) => ({
  type: TYPES.INVOICENOTEADDUP_SUCCESS,
  payload: { user },
});
const invoiceNotesAddUPError = (error) => ({
  type: TYPES.INVOICENOTEADDUP_ERROR,
  payload: { error },
});


const invoiceItemDetailRequest = () => ({
  type: TYPES.INVOICEITEMDETAIL_REQUEST,
  payload: null,
});
const invoiceItemDetailSuccess = (user) => ({
  type: TYPES.INVOICEITEMDETAIL_SUCCESS,
  payload: { user },
});
const invoiceItemDetailError = (error) => ({
  type: TYPES.INVOICEITEMDETAIL_ERROR,
  payload: { error },
});
//End

const businessDetailsSuccess = (user) => ({
  type: TYPES.BUSINESS_DETAILSSUCCESS,
  payload: { user },
});
const storeExistingClientListSuccess = (user) => ({
  type: TYPES.STOREEXISTING_CLIENTDATA,
  payload: { user },
});
const storeGoogleAddressSuccess = (user) => ({
  type: TYPES.STOREGOOGLE_ADDRESSDATA,
  payload: { user },
});
const storejobtypeSuccess = (user) => ({
  type: TYPES.STOREJOBTYPE_CLIENTDATA,
  payload: { user },
});
const createClientSuccess = (user) => ({
  type: TYPES.CREATECLIENT,
  payload: { user },
});
const StoreAdSourceSuccess = (user) => ({
  type: TYPES.STOREADSOURCE_CLIENTDATA,
  payload: { user },
});
const storeCountryListSuccess = (user) => ({
  type: TYPES.STORECOUNTRY_LISTDATA,
  payload: { user },
});
const storeStateListSuccess = (user) => ({
  type: TYPES.STORESTATE_LISTDATA,
  payload: { user },
});
const setShownImageSuccess = (user) => ({
  type: TYPES.SETSHOWN_IMAGE,
  payload: { user },
});
const countryListSuccess = (user) => ({
  type: TYPES.COUNTRY_LISTDATA,
  payload: { user },
});
const stateListSuccess = (user) => ({
  type: TYPES.STATE_LISTDATA,
  payload: { user },
});
const jobListError = (error) => ({
  type: TYPES.JOBLIST_ERROR,
  payload: { error },
});
const clearStoreJobTypeAndAdSourceSuccesss = () => ({
  type: TYPES.CLEARVARIABLE_STORE,
  payload: null,
});

const invoiceStatusSuccess = (user) => ({
  type: TYPES.INVOICES_STATUS_SUCCESS,
  payload: { user },
});

const invoiceListdataSuccess = (user) => ({
  type: TYPES.INVOICE_LISTDATASUCCESS,
  payload: { user },
});

const estimateStatusSuccess = (user) => ({
  type: TYPES.ESTIMATE_STATUS_SUCCESS,
  payload: { user },
});

const estimateListdataSuccess = (user) => ({
  type: TYPES.ESTIMATE_LISTDATASUCCESS,
  payload: { user },
});

const callingRequest = () => ({
  type: TYPES.CALLING_REQUEST,
  payload: null,
});

const callingSuccess = (user) => ({
  type: TYPES.CALLING_SUCCESS,
  payload: { user },
});

const callingError = (error) => ({
  type: TYPES.CALLING_ERROR,
  payload: { error },
});

const jobSourceListRequest = () => ({
  type: TYPES.JOB_SOURCE_LIST_REQUEST,
  payload: null,
});

const jobSourceListSuccess = (user) => ({
  type: TYPES.JOB_SOURCE_LIST_SUCCESS,
  payload: { user },
});

const jobSourceListError = (error) => ({
  type: TYPES.JOB_SOURCE_LIST_ERROR,
  payload: { error },
});

const customerCreateRequest = () => ({
  type: TYPES.CUSTOMER_CREATE_REQUEST,
  payload: null,
});

const customerCreateSuccess = (user) => ({
  type: TYPES.CUSTOMER_CREATE_SUCCESS,
  payload: { user },
});

const customerCreateError = (error) => ({
  type: TYPES.CUSTOMER_CREATE_ERROR,
  payload: { error },
});

const getMessageMemberRequest = () => ({
  type: TYPES.GET_MESSAGE_MEMBER_REQUEST,
  payload: null,
});

const getMessageMemberSuccess = (user) => ({
  type: TYPES.GET_MESSAGE_MEMBER_SUCCESS,
  payload: { user },
});

const getMessageMemberError = (error) => ({
  type: TYPES.GET_MESSAGE_MEMBER_ERROR,
  payload: { error },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  // type:HOMETYPES.CLEARHOME_STORE,
  payload: null,
});
const jobScheduleFilterItemSuccess = (user) => ({
  type: TYPES.JOBSCHEDULEFILTERITEMSUCCESS,
  payload: { user },
});
const InvoicecreateSuccess = (user) => ({
  type: TYPES.INVOICECREATESUCCESS,
  payload: { user },
});
const InvoiceitemSuccess = (user) => ({
  type: TYPES.INVOICEITEMSUCCESS,
  payload: { user },
});

const InvoicePaymentRequest = () => ({
  type: TYPES.INVOICEPAYMENT_REQUEST,
  payload: null,
});
const InvoicePaymentSuccess = (user) => ({
  type: TYPES.INVOICEPAYMENT_SUCCESS,
  payload: { user },
});

const InvoicePaymentError = (error) => ({
  type: TYPES.INVOICEPAYMENT_ERROR,
  payload: { error },
});


const listInvoiceItemsRequest = () => ({
  type: TYPES.LISTINVOICEITEMS_REQUEST,
  payload: null,
});
const listInvoiceItemsSuccess = (user) => ({
  type: TYPES.LISTINVOICEITEMS_SUCCESS,
  payload: { user },
});

const listInvoiceItemsError = (error) => ({
  type: TYPES.LISTINVOICEITEMS_ERROR,
  payload: { error },
});

export const login =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        //
        dispatch(loginRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.login(reqObj);

        if (data?.success) {
          dispatch(loginSuccess(data));
          setIsFocus(false)
          networkService.setAccessToken(data?.token?.access_token);
          ShowToastMessage(data?.message);
        }
        //
      } catch (data) {
        ShowToastMessage("Please enter valid credentials.");
        // dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
      }
    };

export const register =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(registerRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.register(reqObj);

        //
        if (data?.success) {
          networkService.setAccessToken(data?.token?.access_token);

          dispatch(registerSuccess(data));
          // navigation.navigate(NAVIGATION.BusinessSelection);
          navigation.navigate(NAVIGATION.registeredAddress);
          ShowToastMessage(data?.message);
        } else {
          //
          if (data?.message?.email) ShowToastMessage(data?.message?.email);
          if (data?.message?.phone) ShowToastMessage(data?.message?.phone);
        }
        //
      } catch (data) { }
      //
    };
export const schedule =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.schedule(reqObj);
        console.log("dataSchedule-->", data?.data);
        //
        if (data?.success) {
          dispatch(scheduleSuccess(data?.data));
          //ShowToastMessage(data?.message);
        }
        //
        else {
          dispatch(scheduleSuccess([]));
        }
      } catch (data) { }
    };
export const scheduleFilterList =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.jobScheduleFilterList();

        if (data?.success) {
          ShowToastMessage(data?.message);
          dispatch(jobScheduleListSuccess(data?.data));
          //navigation.navigate(NAVIGATION.BusinessSelection) ;
        }
      } catch (data) { }
    };
export const scheduleFilteritemList =
  (path) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.jobScheduleFilteritemList(path);

        if (data?.success) {
          ShowToastMessage(data?.message);
          dispatch(jobScheduleFilterItemSuccess(data?.data));
          //navigation.navigate(NAVIGATION.BusinessSelection) ;
        }
      } catch (data) { }
    };
export const businessdetails =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        // dispatch(registerRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.businessDetails(reqObj);

        //
        if (data?.success) {
          dispatch(businessDetailsSuccess(data));
          ShowToastMessage(data?.message);
        }
        //
      } catch (data) { }
    };
export const JobSchedule =
  (reqObj, navigation, setOpenModal, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        //
        // dispatch(registerRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.jobSchedule(reqObj);
        //
        //
        if (data?.success) {
          //     dispatch(businessDetailsSuccess(data));
          ShowToastMessage(data?.message);
          // console.log(data?.message);
          if (setOpenModal) {
            setOpenModal(false);
            setIsFocus(true);
          }
        }
        //
      } catch (data) { }
    };
export const forgotPass =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        //
        dispatch(forgotPassRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.forgotPass(reqObj);
        //
        if (data?.success) {
          dispatch(forgotPassSuccess(data));

          navigation.navigate(NAVIGATION.signin);
          ShowToastMessage(data?.message);
        }
        //
      } catch (data) { }
    };

export const hitgoogleLogin =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        // console.log('googleData==>>', reqObj);
        dispatch(hitgoogleLoginRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.hitgoogleLogin(reqObj);
        // console.log('hitgoogleLoginRequest===>', data);
        if (data?.success) {
          dispatch(hitgoogleLoginSuccess(data));
          // console.log('hitgoogleLoginsuccessData===>', data)
          navigation.navigate(NAVIGATION.home);
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          hitgoogleLoginError(data?.error ?? strings.login.invalidCredentials)
        );
      }
    };

export const hitgoogleSignUp =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        // console.log('googleData==>>', reqObj);
        dispatch(hitgoogleSignUpRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.hitgoogleSignUp(reqObj);
        // console.log('hitgoogleSignUpRequest===>', data);
        if (data?.success) {
          dispatch(hitgoogleSignUpSuccess(data));
          networkService.setAccessToken(data?.token?.access_token);
          // console.log('hitgoogleSignUpsuccessData===>', hitgoogleSignUpSuccess(data))
          ShowToastMessage(data?.message);
          navigation.navigate(NAVIGATION.BusinessSelection);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          hitgoogleSignUpError(data?.error ?? strings.login.invalidCredentials)
        );
      }
    };

export const clientEditDetail =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(editClientDetailRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.clientEditDetail(reqObj);
        // console.log("editClientDetailAction---", data);
        if (data?.success) {
          dispatch(editClientDetailSuccess(data?.data));
          // navigation.navigate(NAVIGATION.clientDetailafterEdit);
          console.log(
            "editClientDetailSuccess---",
            editClientDetailSuccess(data?.data)
          );
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          editClientDetailError(data?.error ?? strings.login.invalidCredentials)
        );
      }
    };

//priya

export const clientEstimateCountList =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(clientEstimateCountRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.clientEstimateCountList(reqObj);
        // console.log("clientEstimateCountSuccess---", data);
        if (data?.success) {
          dispatch(clientEstimateCountSuccess(data?.data));
          // console.log(
          //   "clientEstimateCountSuccess---",
          //   clientEstimateCountSuccess(data?.data)
          // );
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          clientEstimateCountError(
            data?.error ?? strings.login.invalidCredentials
          )
        );
      }
    };

export const clientInvoiceCountList =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(clientInvoiceCountRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.clientInvoiceCountList(reqObj);
        // console.log("clientInvoiceCount---", data);
        if (data?.success) {
          dispatch(clientInvoiceCountSuccess(data?.data));
          // console.log(
          //   "clientInvoiceCountSuccess---",
          //   clientEstimateCountSuccess(data?.data)
          // );
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(
          clientInvoiceCountError(data?.error ?? strings.login.invalidCredentials)
        );
      }
    };

export const clientJobCountList =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(clientJobCountRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.clientJobCountList(reqObj);
        // console.log("clientJobCount---", data);
        if (data?.success) {
          dispatch(clientJobCountSuccess(data?.data));
          // console.log(
          //   "clientJobCountSuccess---",
          //   clientJobCountSuccess(data?.data)
          // );
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          clientJobCountError(data?.error ?? strings.login.invalidCredentials)
        );
      }
    };

export const clientUpdateAddress =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(clientUpdateAddressRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.clientUpdateAddress(reqObj);
        // console.log("clientUpdateAddress---", data);
        if (data?.success) {
          dispatch(clientUpdateAddressSuccess(data?.data));
          // console.log(
          //   "clientUpdateAddressSuccess---",
          //   clientUpdateAddressSuccess(data?.data)
          // );
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        // console.log("error===>", data);
        dispatch(
          clientUpdateAddressError(
            data?.error ?? strings.login.invalidCredentials
          )
        );
      }
    };
//End

export const invoicesStatus =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.invoicesStatus();
        if (data?.success) {
          dispatch(invoiceStatusSuccess(data?.data));
          ShowToastMessage(data?.message);
        }
      } catch (data) { }
    };

export const estimateStatus =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.estimateStatus();
        if (data?.success) {
          dispatch(estimateStatusSuccess(data?.data));
        }
      } catch (data) { }
    };

export const invoiceListdata =
  (navigation, reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.invoiceListdata(reqObj);
        if (data?.success) {
          dispatch(invoiceListdataSuccess(data?.data));
          ShowToastMessage(data?.message);
        }
      } catch (data) { }
    };

export const estimateListdata =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.estimateListdata(reqObj);

        if (data?.success) {
          dispatch(estimateListdataSuccess(data?.data));

          ShowToastMessage(data?.message);
        }
      } catch (data) { }
    };

export const jobDetailsFun =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(loginRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.jobDetails(reqObj);
        console.log("job details123----------", data)
        console.log("job detailssucess", data?.success)

        if (data?.success) {
          dispatch(jobDetailsSuccess(data?.data));
          setIsFocus(false);
          dispatch(clearJobTypeAndAdSource());
        }
        // ShowToastMessage("Please enter valid credentials.")
        //
      } catch (data) {
        console.log("errorjobdetails-->", data)
        // ShowToastMessage(data?.message)
        // navigation.navigate(NAVIGATION.login)
        dispatch(loginError(data?.error));
      }
    };
export const jobStatusFun =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(loginRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.jobStatus();

        if (data?.success) {
          ShowToastMessage(data?.message);
          dispatch(jobStatusSuccess(data?.data));
          // navigation.replace(NAVIGATION.jobDetails)
        }
        // ShowToastMessage("Please enter valid credentials.")
        //
      } catch (data) {
        // ShowToastMessage(data?.message)
        // navigation.navigate(NAVIGATION.login)
        // dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
      }
    };
export const addNotesFun =
  (reqObj, navigation, setOpenModal, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(loginRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.addNotes(reqObj);
        //  console.log("dataaddnotes--->",data)
        if (data?.success) {
          ShowToastMessage(data?.message);
          if (setOpenModal) {
            // console.log("If-------------->")
            setOpenModal(false);
            setIsFocus(true);
          }
          // navigation.replace(NAVIGATION.jobDetails);
        }
        // ShowToastMessage("Please enter valid credentials.")
        //
      } catch (data) {
        // ShowToastMessage(data?.message)
        // navigation.navigate(NAVIGATION.login)
        // dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
      }
    };

export const exisitngClientListFun =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.existingList(reqObj);
        // console.log('===>>>action',data)
        if (data?.success) {
          //
          ShowToastMessage(data?.message);
          dispatch(existingClientListSuccess(data?.data));
          // console.log('===>>>page',existingClientListSuccess(data?.data))
          // navigation.replace(NAVIGATION.jobDetails)
        }
      } catch (data) {
        // console.log('error-->>',data)
      }
    };

export const business_JobListing =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(businessJobListRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.business_JobListing(reqObj);
        // console.log('business_JobListing>>action',data)
        if (data?.success) {
          dispatch(businessJobListSuccess(data?.data));
          ShowToastMessage(data?.message);
          // console.log('===>>>businessJobListSuccesspage===',businessJobListSuccess(data?.data))
        }
      } catch (data) {
        console.log("error-->>", data);
        dispatch(businessJobListError("error from jobSourceList"));
      }
    };

export const jobTypeList =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.jobTypeList();

        if (data?.success) {
          ShowToastMessage(data?.message);
          dispatch(jobTypeListSuccess(data?.data));
        }
      } catch (data) { }
    };
export const jobSourceList =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(jobSourceListRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.jobSourceListController(reqObj);

        if (data?.success) {
          dispatch(jobSourceListSuccess(data));
        } else {
          dispatch(jobSourceListError("error from jobSourceList"));
        }

        // ShowToastMessage(data?.message);
      } catch (data) {
        dispatch(jobSourceListError("error from jobSourceList"));
      }
    };

export const businessList =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.businessList();

        if (data?.success) {
          ShowToastMessage(data?.message);
          dispatch(businessListSuccess(data?.data));
          //navigation.navigate(NAVIGATION.BusinessSelection) ;
        }
      } catch (data) { }
    };
export const numberList =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.numberList();

        if (data?.success) {
          ShowToastMessage(data?.message);
          dispatch(numberListSuccess(data?.data));
          //navigation.navigate(NAVIGATION.BusinessSelection) ;
        }
      } catch (data) { }
    };
export const countryListFun =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.countryList();

        if (data?.success) {
          dispatch(countryListSuccess(data?.data));
          networkService.setAccessToken(data?.token?.refresh_token);
          navigation.navigate(NAVIGATION.registeredAddress);
          ShowToastMessage(data?.message);
          // navigation.replace(NAVIGATION.jobDetails)
        }
        // ShowToastMessage("Please enter valid credentials.")
        //
        //
      } catch (data) {
        // ShowToastMessage(data?.message)
        // navigation.dispatch(StackActions.replace(NAVIGATION.login));
        // navigation.replace(NAVIGATION.login)
        // dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
      }
    };
export const adSourceList =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.adSourceList();

        if (data?.success) {
          dispatch(AdSourceListSuccess(data?.data));
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        // ShowToastMessage(data?.message)
        // navigation.dispatch(StackActions.replace(NAVIGATION.login));
        // navigation.replace(NAVIGATION.login)
        // dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
      }
    };

export const stateListFun =
  (navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.stateList();

        if (data?.success) {
          dispatch(stateListSuccess(data?.data));
          networkService.setAccessToken(data?.token?.refresh_token);
          // navigation.navigate(NAVIGATION.registeredAddress);
          navigation.goBack();
          ShowToastMessage(data?.message);
        }
      } catch (data) { }
    };

export const storeClientData =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        if (reqObj) {
          //
          dispatch(storeExistingClientListSuccess(reqObj));
          // console.log("navigation==>",navigation)
        }
      } catch (data) { }
    };

export const storeCountryData =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        if (reqObj) {
          dispatch(storeCountryListSuccess(reqObj));
          navigation.goBack(NAVIGATION.address);
          //
        }
      } catch (data) { }
    };
export const storeGoogleAddress =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        if (reqObj) {
          const userController = new UserController(networkService);
          const data = await userController.registeraddress(reqObj);
          // console.log(data);
          ShowToastMessage("Address added successfully.");
          dispatch(storeGoogleAddressSuccess(reqObj));
          navigation.navigate(NAVIGATION.BusinessSelection);
        }
      } catch (data) { }
    };
export const clearStoreAddress =
  () =>
    async (dispatch, _, { demoMode, networkService }) => {
      dispatch(clearStoreAddressSuccesss());
    };
export const storeStateListData =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        if (reqObj) {
          dispatch(storeStateListSuccess(reqObj));
          navigation.goBack();
          //
        }
      } catch (data) { }
    };

//jaspreet
export const storeClientJobType =
  (reqObj, navigation, setJobTypeModal) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        // console.log("jobTypeActiondata==>>", reqObj?.type_name);
        if (reqObj?.type_name) {
          dispatch(storejobtypeSuccess(reqObj));
          if (setJobTypeModal) setJobTypeModal(false);
        }
      } catch (data) { }
    };
export const createaClient =
  (reqObj, navigation, obj) =>
    async (dispatch, _, { networkService }) => {
      try {
        dispatch(customerCreateRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.createaClient(reqObj);
        // console.log("get client data", data);
        if (data?.success) {
          if (obj) navigation.navigate(NAVIGATION.SelectClient);
          else navigation.navigate(NAVIGATION.jobcreate);
          dispatch(customerCreateSuccess(data));
        } else {
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        console.log("client data error", data);
      }
    };

export const storeClientAdSourceType =
  (reqObj, navigation, setAdModal) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        //
        if (reqObj) {
          // console.log("storeclientdata==>", reqObj);
          dispatch(StoreAdSourceSuccess(reqObj));
          if (setAdModal) setAdModal(false);
        }
      } catch (data) { }
    };

export const setShownImage =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        // if (reqObj) {

        //
        dispatch(setShownImageSuccess(reqObj));
        navigation.navigate(NAVIGATION.imageShown);
        //
        // navigation.goBack(NAVIGATION.createJob);
        // }
      } catch (e) { }
    };

export const list =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.list(reqObj);

        //      if(data?.success)
        dispatch(jobListSuccess(data));
      } catch (data) { }
    };

export const add_newJob =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        const { data } = await userController.add_newJob(reqObj);
        dispatch(createNewJobSuccess(data));
        //
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log("error from add job")
      }
    };

export const Calling =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(callingRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.callingController(reqObj);
        console.log("data calling", data)

        if (data?.success) {
          dispatch(callingSuccess(data));
        } else {
          dispatch(callingError("error from calling"));
        }

        // ShowToastMessage(data?.message);
      } catch (data) {
        dispatch(callingError("error from calling"));
      }
    };

export const logout =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        const userController = new UserController(networkService);
        await userController.logout({ demoMode });
      } finally {
        networkService.clearAccessToken();
        dispatch(clearStore());
        // dispatch(clearHomeStore());
      }
    };
export const clearJobTypeAndAdSource =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      dispatch(clearStoreJobTypeAndAdSourceSuccesss());
      //   try {
      //     const userController = new UserController(networkService);
      //     // await userController.logout({ demoMode });
      //   } finally {
      //     networkService.clearAccessToken();
      //     dispatch(clearStore());
      //   }
    };
export const createNewInvoice =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        console.log(reqObj);
        const userController = new UserController(networkService);
        const { data } = await userController.createNewInvoice(reqObj);
        console.log(data);
        if (data?.success) {
          console.log(data);

          ShowToastMessage(data?.message);
          dispatch(InvoicecreateSuccess(data?.data));
          //navigation.navigate(NAVIGATION.BusinessSelection) ;
        }
      } catch (data) {
        console.log("error===>", data);
      }
    };
export const Invoicedetails =
  (reqObj, navigation, setCloseModal) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        console.log(reqObj);
        const userController = new UserController(networkService);
        const { data } = await userController.Invoicedetails(reqObj);
        console.log(data);
        if (data?.success) {
          if (setCloseModal) {
            setCloseModal(false);
          }
          console.log(data);

          ShowToastMessage(data?.message);
          dispatch(InvoicecreateSuccess(data?.data));
          // navigation.navigate(NAVIGATION.CreateInvoice) ;
        }
      } catch (data) {
        console.log("error===>", data);
      }
    };
export const invoiceItems =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        console.log("url is", reqObj);
        const userController = new UserController(networkService);
        const { data } = await userController.invoiceItems(reqObj);
        console.log(data);
        if (data?.success) {
          console.log(data);

          ShowToastMessage(data?.message);
          dispatch(InvoiceitemSuccess(data?.data));
          //navigation.navigate(NAVIGATION.BusinessSelection) ;
        }
      } catch (data) {
        console.log("error===>", data);
      }
    };
export const invoicepayment =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(InvoicePaymentRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.invoicepayment();
        console.log(data);
        if (data?.success) {
          ShowToastMessage(data?.message);
          dispatch(InvoicePaymentSuccess(data?.data));
          //navigation.navigate(NAVIGATION.BusinessSelection) ;
        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(InvoicePaymentError());
      }
    };


export const invoicesItemsList =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(listInvoiceItemsRequest())
        const userController = new UserController(networkService);
        const { data } = await userController.invoicesItemsList();
        if (data?.success) {
          // ShowToastMessage(data?.message);
          dispatch(listInvoiceItemsSuccess(data?.data));
        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(listInvoiceItemsError());
      }
    }

export const sendPaymentMode =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(paymentModeRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.sendPaymentMode(reqObj);
        if (data?.success) {
          dispatch(paymentModeSuccess(data));
          navigation.navigate(NAVIGATION.paymentSuccess);
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log("erroe===>>", data);
        dispatch(paymentModeError("error"));
      }
      //
    };

export const invoicePaymentDelete =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deletePaymentRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.invoicePaymentDelete(reqObj);
        if (data?.success) {
          setIsFocus(false);
          dispatch(deletePaymentSuccess(data));
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log("erroe===>>", data);
        dispatch(deletePaymentError("error"));
      }
      //
    };


export const invoiceDeleteItem =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deleteInvoiceItemsRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.invoiceDeleteItem(reqObj);
        if (data?.success) {
          setIsFocus(false)
          dispatch(deleteInvoiceItemsSuccess(data));
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log('error===>>', data);
        dispatch(deleteInvoiceItemsError('error'))
      }
      //
    };

export const estimateDeleteItem =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deleteestimateItemsRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.estimateDeleteItem(reqObj);
        console.log('deleteestisaction===>>', data);
        if (data?.success) {
          dispatch(deleteestimateItemsSuccess(data));
          setIsFocus(false)
          console.log('deleteestisactionSuccess===>>', data);
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log('error===>>', data);
        dispatch(deleteestimateItemsError('error'))
      }
      //
    };


// satrt Est2345

export const estimatePaymentDelete =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deleteESTPaymentRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.estimatePaymentDelete(reqObj);
        if (data?.success) {
          dispatch(deleteESTPaymentSuccess(data));
          setIsFocus(false);
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log("erroe===>>", data);
        dispatch(deleteESTPaymentError("error"));
      }
    };

export const estimateDelSigns =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deleteEstimateSignRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.estimateDelSigns(reqObj);
        console.log('deleteEstimateSigns===>>', data);
        if (data?.success) {
          setIsFocus(false)
          dispatch(deleteEstimateSignSuccess(data));
          console.log('ddeleteEstimateSigns===>>', deleteEstimateSignSuccess(data));
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log('error===>>', data);
        dispatch(deleteEstimateSignError('error'))
      }
      //
    };

    export const estimateDelAttach =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deleteEstimateAttachmentsRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.estimateDelAttach(reqObj);
        console.log('deleteestimateDelAttach===>>', data);
        if (data?.success) {
          setIsFocus(false)
          dispatch(deleteEstimateAttachmentsSuccess(data));
          console.log('stimateDelAttach===>>', deleteInvoiceAttachmentsSuccess(data));
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log('error===>>', data);
        dispatch(deleteEstimateAttachmentsError('error'))
      }
      //
    };


// End


export const deleteInvoiceAttach =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deleteInvoiceAttachmentsRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.deleteInvoiceAttach(reqObj);
        // console.log('deleteInvoiceAttachments===>>', data);
        if (data?.success) {
          setIsFocus(false)
          dispatch(deleteInvoiceAttachmentsSuccess(data));
          // console.log('deleteInvoiceAttachments===>>', deleteInvoiceAttachmentsSuccess(data));
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log('error===>>', data);
        dispatch(deleteInvoiceAttachmentsError('error'))
      }
      //
    };


export const deleteInvoiceSigns =
  (reqObj, navigation, setIsFocus) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(deleteInvoiceSignRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.deleteInvoiceSigns(reqObj);
        // console.log('deleteInvoiceSigns===>>', data);
        if (data?.success) {
          setIsFocus(false)
          dispatch(deleteInvoiceSignSuccess(data));
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log('error===>>', data);
        dispatch(deleteInvoiceSignError('error'))
      }
      //
    };

export const invoiceUpdateItem =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(invoiceUpdateItemRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.invoiceUpdateItem(reqObj);
        console.log('updateItemaction---', data)
        if (data?.success) {
          dispatch(invoiceUpdateItemSuccess(data));
          console.log('updateItemasuccess-----', invoiceUpdateItemSuccess(data))
          navigation.navigate(NAVIGATION.CreateInvoice)
          ShowToastMessage(data?.message);
        }
        ShowToastMessage(data?.message);
      } catch (data) {
        console.log('error===>>', data);
        dispatch(invoiceUpdateItemError('error'))
      }
      ShowToastMessage(data?.message);
    }

export const invoicenotes =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(invoiceNotesAddUPRequest())
        const userController = new UserController(networkService);
        const { data } = await userController.invoicenotes(reqObj);
        if (data?.success) {
          // console.log('invpoiceNotesuccess----', data);
          dispatch(invoiceNotesAddUPSuccess(data));
          ShowToastMessage(data?.message);

        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(invoiceNotesAddUPError("error"))
      }
    };


export const invoiceItemDetail =
  (reqObj, navigation) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(invoiceItemDetailRequest())
        const userController = new UserController(networkService);
        const { data } = await userController.invoiceItemDetail(reqObj);
        console.log('invoiceItemDs----', data);
        if (data?.success) {
          console.log('invoiceItemDetailSuccess----', invoiceItemDetailSuccess(data));
          dispatch(invoiceItemDetailSuccess(data));
          navigation.navigate(NAVIGATION.CreateInvoice)
          ShowToastMessage(data?.message);

        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(invoiceItemDetailError("error"))
      }
    };


export const uploadimage =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        // console.log("url is",reqObj);
        const userController = new UserController(networkService);
        const { data } = await userController.invoiceattachment(reqObj);
        console.log(data);
        if (data?.success) {
          console.log(data);
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        console.log("error===>", data);
      }
    };

export const ChhattingLists =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        console.log("chatting----", reqObj);
        dispatch(chattingsListsRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.ChattingsListscontroller(reqObj);
        console.log("chatting", data);
        if (data?.success) {
          dispatch(chattingsListsSuccess(data?.data));
          console.log("chattingsListsSuccess", data);
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(chattingsListsError(""));
      }
    };
export const SendMessage =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {

        dispatch(sendMessageRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.SendMessagecontroller(reqObj);
        console.log("SendMessage", data);
        if (data?.success) {
          dispatch(sendMessageSuccess(data?.data));
          console.log("sendMessageSuccess", data);
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(sendMessageError(""));
      }
    };

export const Estimatedetails =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        console.log("estimate----", reqObj);
        dispatch(estimateDetailRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.Estimatedetails(reqObj);
        console.log(data);
        if (data?.success) {
          dispatch(estimateDetailSuccess(data?.data));
          console.log("estimar=te---", estimateDetailSuccess(data?.data));
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(estimateDetailError(""));
      }
    };
export const GetMessageMember =
  (reqObj) =>
    async (dispatch, _, { demoMode, networkService }) => {
      try {
        dispatch(getMessageMemberRequest());
        const userController = new UserController(networkService);
        const { data } = await userController.GetMessageMember(reqObj);
        console.log("GetMessageMember", data);
        if (data?.success) {
          dispatch(getMessageMemberSuccess(data?.data));
          ShowToastMessage(data?.message);
        }
      } catch (data) {
        console.log("error===>", data);
        dispatch(getMessageMemberError(""));
      }
    };
