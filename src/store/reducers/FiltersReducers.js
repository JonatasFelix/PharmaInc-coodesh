import { CHANGE_SEARCH_PATIENTS, CHANGE_SEARCH_COUNTRY, CHANGE_ORDER_BY, CHANGE_ORDER, CHANGE_GENDER } from '../actions/ActionsType';

const initialState = {
    search: '',
    gender: '',
    order: 'asc',
    orderBy: 'name'
};

const FiltersReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_PATIENTS:
            return {
                ...state,
                search: action.payload.search
            }
        case CHANGE_SEARCH_COUNTRY:
            return {
                ...state,
                country: action.payload.country
            }
        case CHANGE_ORDER_BY:
            return {
                ...state,
                orderBy: action.payload.orderBy
            }
        case CHANGE_ORDER:
            return {
                ...state,
                order: order === 'desc' ? 'asc' : 'desc'
            }
        case CHANGE_GENDER:
            return {
                ...state,
                gender: action.payload.gender
            }
        default:
            return state;
    }
}

export default FiltersReducers;