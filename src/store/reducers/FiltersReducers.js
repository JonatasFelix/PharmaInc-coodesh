import { CHANGE_SEARCH_PATIENTS, CHANGE_SEARCH_COUNTRY, CHANGE_GENDER } from '../actions/ActionsType';

const initialState = {
    search: '',
    gender: '',
    country: '',
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
                country: action.payload
            }
        case CHANGE_GENDER:
            return {
                ...state,
                gender: action.payload
            }
        default:
            return state;
    }
}

export default FiltersReducers;