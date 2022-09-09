import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import ResponsiveAppBar from "../../components/Header/Header";
import PatientsTable from "../../components/PatientsTable/PatientsTable";
import { Container } from "@mui/material";
import ButtonLoaderMore from "../../components/ButtonLoaderMore/ButtonLoaderMore";
import ModalProfile from "../../components/ModalProfile/ModalProfile";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectBar from "../../components/SelectBar/SelectBar";
import countries from "../../utils/countries";
import { BoxSearch } from "./styles";

const HomePage = (props) => {
  const { patients, loading, search, country, gender } = props;
  const location = useLocation();
  const parsed = qs.parse(location.search);
  const { id } = parsed;

  const [page, setPage] = useState(10);
  const [openModal, setOpenModal] = useState(id ? true : false);
  const genderOptions = [{label: "male"}, {label: "female"}]

  useEffect(() => {
    id && setOpenModal(true);
  }, [id]);

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ margim: "0 auto" }}>

        <BoxSearch >
          <SearchBar search={search} country={country} />
          <SelectBar value={country} label="Search Country" change="CHANGE_SEARCH_COUNTRY" options={countries} />
          <SelectBar value={gender} label="Select Gender" change="CHANGE_GENDER" options={genderOptions}/>
        </BoxSearch>

        <PatientsTable 
          patients={patients} 
          loading={loading} 
          page={page} 
          search={search}
          country={country}
          gender={gender}
        />

        <ButtonLoaderMore
          setPage={setPage}
          page={page}
          lenght={patients.length}
        />

        <ModalProfile
          profile={id ? patients.filter((patient) => patient.login.uuid === id) : []}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />

      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    patients: state.PatientsReducers.patients,
    loading: state.PatientsReducers.loading,
    search: state.FiltersReducers.search,
    country: state.FiltersReducers.country,
    gender: state.FiltersReducers.gender
  };
};

export default connect(mapStateToProps)(HomePage);
