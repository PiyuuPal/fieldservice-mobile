import { combineReducers } from 'redux';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { homeReducer } from './HomeReducer';
import { businessReducer } from './BusinessReducer';
import { jobReducer } from './JobReducer';
import { drawerReducer } from './DrawerReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  home:homeReducer,
  business:businessReducer,
  job:jobReducer,
  drawer:drawerReducer
});
