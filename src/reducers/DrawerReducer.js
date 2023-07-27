import { DRAWERTYPES } from "@/actions/DrawerAction";
import { TYPES } from "@/actions/UserActions";

export const drawerReducer = (state = {}, { payload, type }) => {
    switch (type) {
        case DRAWERTYPES.TIMESHEET_SUCCESS:
            return { ...state, timeSheetDetails: payload.user };
        case TYPES.CLEAR_STORE:
            return {};
        default:
            return state;
    }
};