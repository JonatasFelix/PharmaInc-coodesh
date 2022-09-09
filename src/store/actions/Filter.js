import { CHANGE_SEARCH_PATIENTS, CHANGE_SEARCH_COUNTRY, CHANGE_GENDER, SET_LIST_LENGTH } from '../actions/ActionsType';

const changeSearch = (payload) => {
    return {
        type: CHANGE_SEARCH_PATIENTS,
        payload
    }
}

const changeCountry = (payload) => {
    return {
        type: CHANGE_SEARCH_COUNTRY,
        payload
    }
}

const changeGender = (payload) => {
    return {
        type: CHANGE_GENDER,
        payload
    }
}

const setListLength = (payload) => {
    return {
        type: SET_LIST_LENGTH,
        payload
    }
}

export { changeSearch, changeCountry, changeGender, setListLength };