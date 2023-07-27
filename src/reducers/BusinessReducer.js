import { TYPES } from '@/actions/UserActions';

export const businessReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.BUSINESS_LISTSUCCESS:
      return { ...state, businessList: payload.user };
    case TYPES.NUMBER_LISTSUCCESS:
      return { ...state, numberList: payload.user };
    case TYPES.REGISTER_SUCCESS:
      return { ...state, userData: payload.user.data };
    case TYPES.COUNTRY_LISTDATA:
      return { ...state, countryListReducer: payload.user };
    case TYPES.STATE_LISTDATA:
      return { ...state, stateListReducer: payload.user };
    case TYPES.STORECOUNTRY_LISTDATA:
      return { ...state, storeCountryListReducer: payload.user };
    case TYPES.STORESTATE_LISTDATA:
      return { ...state, storeStateListReducer: payload.user };
    case TYPES.STOREGOOGLE_ADDRESSDATA:
      return { ...state, storeGoogleAddreesListReducer: payload.user };
    case TYPES.CLEARSTORE_ADDRESS:
      return { ...state, storeGoogleAddreesListReducer:""};
    case TYPES.CREATECLIENT:
      return { ...state, newClientData: payload.user };

    case TYPES.HITGOOGLESIGNUP_SUCCESS:
      return { ...state, googleSignUpReducer: payload.user };
    default:
      return state;
  }
};
