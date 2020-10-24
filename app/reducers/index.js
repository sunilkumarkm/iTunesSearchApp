import {combineReducers} from 'redux';
import {dashboard} from '../components/Dashboard/dashboardReducer';

const rootReducer = combineReducers({
  dashboard,
});

export default rootReducer;
