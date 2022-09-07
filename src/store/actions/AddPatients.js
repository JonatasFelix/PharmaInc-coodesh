import { ADD_PATIENTS } from './ActionsType';

const AddPatients = (payload) => ({
    type: ADD_PATIENTS,
    payload,
})

export default AddPatients;