import { CHANGE_SEARCH_PATIENTS, CHANGE_SEARCH_COUNTRY, CHANGE_ORDER_BY, CHANGE_ORDER, CHANGE_GENDER } from '../actions/ActionsType';

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

const changeOrderBy = (payload) => {
    return {
        type: CHANGE_ORDER_BY,
        payload
    }
}

const changeOrder = (payload) => {
    return {
        type: CHANGE_ORDER,
        payload
    }
}

const changeGender = (payload) => {
    return {
        type: CHANGE_GENDER,
        payload
    }
}

export { changeSearch, changeCountry, changeOrderBy, changeOrder, changeGender };