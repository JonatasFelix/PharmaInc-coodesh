import { combineReducers } from 'redux';
import PatientsReducers from './PatientsReducers';

const rootReducer = combineReducers({ PatientsReducers });
export default rootReducer;