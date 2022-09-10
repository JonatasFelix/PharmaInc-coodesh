import { ADD_PATIENTS } from '../actions/ActionsType';

const initialState = {
    patients: [],
    loading: true,
    error: false
};

const PatientsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PATIENTS:
            return {
                ...state,
                patients: action.payload.list,
                loading: action.payload.loading,
                error: action.payload.error

            };
        default:
            return state;
    }
}

export default PatientsReducers;