import { HOMETYPES } from "@/actions/HomeActions";
import { TYPES } from "@/actions/UserActions";

export const homeReducer = (state = {}, { payload, type }) => {
    switch (type) {
        case HOMETYPES.UPCOMING_LISTSUCCESS:
            return { ...state, upcomingList: payload.user };
        case HOMETYPES.DASHBOARD_MENULISTSUCCESS:
            return { ...state, dashboardMenuList: payload.user };
        case HOMETYPES.GETCOLOR_LISTSUCCESS:
            return { ...state, getColorList: payload.user };
        case HOMETYPES.TODAYS_LISTSUCCESS:
            return { ...state, todaysList: payload.user };
        // case HOMETYPES.SALES_LISTSUCCESS:
        //     return { ...state, salesList: payload.user };
        // case HOMETYPES.LEADS_LISTSUCCESS:
        //     return { ...state, leadsList: payload.user };
        // case HOMETYPES.JOBS_LISTSUCCESS:
        //     return { ...state, jobsList: payload.user };
        // case HOMETYPES.ESTIMATES_LISTSUCCESS:
        //     return { ...state, estimatesList: payload.user };
        // case HOMETYPES.INVOICES_LISTSUCCESS:
        //     return { ...state, invoicesList: payload.user };
        case HOMETYPES.TOPTECH_LISTSUCCESS:
            return { ...state, topTechList: payload.user };
        case TYPES.CLEAR_STORE:
            return {};
        default:
            return state;
    }
};