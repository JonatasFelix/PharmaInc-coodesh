import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import AddPatients from "../store/actions/AddPatients";

const getAllPatients = async (dispatch) => {

    let list = [];
    let loading = true;

    await axios.get(`${BASE_URL}/?results=200`)
        .then((res) => {
            list = res.data.results;
            loading = false;
        })
        .catch((err) => {
           loading = false;
        });

    dispatch(AddPatients({ list, loading }));

}

export default getAllPatients;