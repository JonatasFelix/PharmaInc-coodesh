import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { changeSearch } from "../../store/actions/Filter";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const [search, setSearch] = useState(props.search || "");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(changeSearch({ search }));
  }, [search]);

  return (
      <Paper
        component="form"
        sx={{ p: "2px 5px", display: "flex", alignItems: "center", margin: "20px auto 0", width: "100%", height: "56px" }}
        onChange={handleChange}
      >
          <SearchIcon aria-label="search" />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search User By Name"
        />
      
      </Paper>
  );
};

export default SearchBar;
