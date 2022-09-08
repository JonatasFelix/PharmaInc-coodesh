import { combineReducers } from 'redux';
import PatientsReducers from './PatientsReducers';
import FiltersReducers from './FiltersReducers';

const rootReducer = combineReducers({ PatientsReducers, FiltersReducers });
export default rootReducer;