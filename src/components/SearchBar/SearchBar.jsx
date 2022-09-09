import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({search, label, change}) => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({type: change, payload: e.target.value});
  };

  return (
      <Paper
        component="form"
        sx={{ p: "2px 5px", display: "flex", alignItems: "center", margin: "20px auto 0", width: "100%", height: "56px" }}
        onChange={handleChange}
      >
          <SearchIcon aria-label="search" />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={label}
          value={search}
        />
      
      </Paper>
  );
};

export default SearchBar;
