import { CHANGE_SEARCH_PATIENTS, CHANGE_SEARCH_COUNTRY, CHANGE_GENDER, SET_LIST_LENGTH } from '../actions/ActionsType';

const initialState = {
    search: '',
    gender: '',
    country: '',
    listLength: 0,
};

const FiltersReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_PATIENTS:
            return {
                ...state,
                search: action.payload
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
        case SET_LIST_LENGTH:
            return {
                ...state,
                listLength: action.payload
            }
        default:
            return state;
    }
}

export default FiltersReducers;