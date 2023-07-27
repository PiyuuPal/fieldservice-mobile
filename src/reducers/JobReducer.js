import { JOBTYPES } from "@/actions/JobActions";
import { TYPES } from "@/actions/UserActions";
import { useSelector } from "react-redux";
const initialState = { notifyData: [] };
// const notifyData={}
export const jobReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case JOBTYPES.JOBTYPES_JOBID:
            return { ...state, getJobId: payload.user };
        case JOBTYPES.NOTIFICATION_PUSHER:
            console.log("notifyreducers1-->", payload.user)
            return {
                ...state,
                notifyData: [
                    ...(state.notifyData || []), // ensure state.notifyData is an array before spreading
                    payload.user
                ]
            }

        case JOBTYPES.JOBTYPES_TAGLIST:
            return { ...state, tagList: payload.user };
        case JOBTYPES.JOBTYPES_TEAMLISTSUCCESS:
            return { ...state, teamList: payload.user };
        case JOBTYPES.JOB_TAB_COUNT_SUCCESS:
            return { ...state, tabCount: payload.user };
        case JOBTYPES.GLOBAL_SEARCHLIST:
            return { ...state, globalSearch: payload.user };
        case JOBTYPES.PROPERTY_LISTING_SUCCESS:
            return { ...state, propertyListing: payload.user };
            case JOBTYPES.TIMELINESUCCESS:
            return { ...state, timeLineAllList: payload.user };
        case JOBTYPES.CLEARNOTIFYDATA_STORE:
            return { ...state, notifyData: "" };

        case TYPES.CLEAR_STORE:
            return {};
        default:
            return state;
    }
};