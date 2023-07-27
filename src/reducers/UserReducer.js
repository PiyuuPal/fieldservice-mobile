import { TYPES } from "@/actions/UserActions";

export const userReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, ...payload.user };
    // case TYPES.REGISTER_SUCCESS:
    // return { ...state, ...payload.user };
    case TYPES.JOB_DETAILSUCCESS:
      return { ...state, jobDetailsDataReducer: payload.user };
    case TYPES.JOB_STATUSSUCCESS:
      return { ...state, jobStatusReducer: payload.user };
    case TYPES.EXISTINGCLIENT_LISTSUCCESS:
      return { ...state, existClientListReducer: payload.user };
    case TYPES.HITGOOGLELOGIN_SUCCESS:
      return { ...state, googleLogInReducer: payload.user };

    //priya
    case TYPES.CLIENTEESTIMATECOUNT_SUCCESS:
      return { ...state, clientEstimateCount: payload.user };
    case TYPES.CLIENTINVOICECOUNT_SUCCESS:
      return { ...state, clientInvoiceCount: payload.user };
    case TYPES.CLIENTJOBCOUNT_SUCCESS:
      return { ...state, clientJobCount: payload.user };
    case TYPES.BUSSINESS_JOBLIST_SUCCESS:
      return { ...state, businessAllJobs: payload.user };

    case TYPES.ESTIMATEDETAIL_SUCCESS:
      // console.log('reducerdatatttt--',payload.user)
      return { ...state, estimateDetails: payload.user };
    //End

    // case TYPES.COUNTRY_LISTDATA:
    // return { ...state,countryListReducer:payload.user };
    // case TYPES.STATE_LISTDATA:
    // return { ...state,stateListReducer:payload.user };
    // case TYPES.STORECOUNTRY_LISTDATA:
    //   return { ...state,storeCountryListReducer:payload.user };
    // case TYPES.STORESTATE_LISTDATA:
    // return { ...state,storeStateListReducer:payload.user };
    case TYPES.JOB_DETAILSUCCESS:
      return { ...state, jobDetailsDataReducer: payload.user };

    case TYPES.CLIENTEDITDETAIL_SUCCESS:
      return { ...state, clientEditDetailsReducer: payload.user };

    case TYPES.JOB_STATUSSUCCESS:
      return { ...state, jobStatusReducer: payload.user };
    case TYPES.EXISTINGCLIENT_LISTSUCCESS:
      return { ...state, existClientListReducer: payload.user };
    case TYPES.STOREEXISTING_CLIENTDATA:
      return { ...state, storeExistClientListReducer: payload.user };
    case TYPES.CALLING_SUCCESS:
      return { ...state, callingDetails: payload.user };
    case TYPES.JOBLIST_SUCCESS:
      return { ...state, jobList: payload.user };
    case TYPES.INVOICES_STATUS_SUCCESS:
      return { ...state, statusOfinvices: payload.user };
    case TYPES.INVOICE_LISTDATASUCCESS:
      return { ...state, invoiceList: payload.user };
    case TYPES.ESTIMATE_STATUS_SUCCESS:
      return { ...state, statusOfestimate: payload.user };
    case TYPES.ESTIMATE_LISTDATASUCCESS:
      return { ...state, estimateList: payload.user };
    case TYPES.JOBTYPE_LISTSUCCESS:
      return { ...state, jobTypeList: payload.user };
    case TYPES.STOREJOBTYPE_CLIENTDATA:
      return { ...state, storeJobType: payload.user };
    case TYPES.JOBADSOURCE_LISTSUCCESS:
      return { ...state, jobAdSourceList: payload.user };
    case TYPES.STOREADSOURCE_CLIENTDATA:
      return { ...state, storeAdSource: payload.user };
    case TYPES.BUSINESS_DETAILSSUCCESS:
      return { ...state, businessDetails: payload.user };
    case TYPES.SCHEDULE_SUCCESS:
      return { ...state, schedule: payload.user };
    case TYPES.JOBSCHEDULE_LISTSUCCESS:
      return { ...state, scheduleFilter: payload.user };
    case TYPES.JOBSCHEDULEFILTERITEMSUCCESS:
      return { ...state, scheduleFilterItem: payload.user };
    case TYPES.JOB_SOURCE_LIST_SUCCESS:
      return { ...state, jobAdSourceList: payload.user };
    case TYPES.CUSTOMER_CREATE_SUCCESS:
      return { ...state, createJobDetails: payload.user };
    case TYPES.GET_MESSAGE_MEMBER_SUCCESS:
      return { ...state, GetMessageMember: payload.user };
    case TYPES.CHATTINGS_LISTS_SUCCESS:
      return { ...state, MessageList: payload.user };


      
      case TYPES.LISTINVOICEITEMS_SUCCESS:
        return { ...state, listofInvoiceItems: payload.user };

    case TYPES.CLEAR_STORE:
      return {};
    case TYPES.CLEARVARIABLE_STORE:
      return { ...state, storeAdSource: "", storeJobType: "" };
    case TYPES.INVOICECREATESUCCESS:
      return { ...state, invoiceDetails: payload.user };
    case TYPES.INVOICEITEMSUCCESS:
      return { ...state, invoiceitem: payload.user };
    case TYPES.INVOICEPAYMENT_SUCCESS:
      return { ...state, invoicepayment: payload.user };
    default:
      return state;
  }
};
