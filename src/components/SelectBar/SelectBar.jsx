import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";
import { useDispatch } from "react-redux";


const SelectBar = ({value, label, change, options}) => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
       dispatch({type: change, payload: e})
    }

        return (
            <Paper sx={{ width: {xs: "100%", sm: "100%", md: "100%", lg: "45%"} }}>
                <Autocomplete
                    value={value}
                    inputValue={value}
                    onInputChange={(event, newInputValue) => {
                        handleChange(newInputValue);
                    }}
                    isOptionEqualToValue={(option, value) => option.label === value.label}
                    id="controllable-states-demo"
                    options={options}
                    renderInput={(params) => <TextField {...params} label={label} />}
                />
            </Paper>
        );
    };

    export default SelectBar;
