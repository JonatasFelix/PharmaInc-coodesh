import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import Header from "../../components/Header/Header";
import PatientsTable from "../../components/PatientsTable/PatientsTable";
import { Container } from "@mui/material";
import ButtonLoaderMore from "../../components/ButtonLoaderMore/ButtonLoaderMore";
import ModalProfile from "../../components/ModalProfile/ModalProfile";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectBar from "../../components/SelectBar/SelectBar";
import countries from "../../utils/countries";
import * as s from "./styles";
import { CHANGE_SEARCH_PATIENTS, CHANGE_SEARCH_COUNTRY, CHANGE_GENDER } from "../../store/actions/ActionsType";

const HomePage = ({ patients, loading, search, country, gender, listLength, error }) => {

  const location = useLocation();
  const parsed = qs.parse(location.search);
  const { id } = parsed;

  const [page, setPage] = useState(10);
  const [openModal, setOpenModal] = useState(id ? true : false);
  const genderOptions = [{ label: "male" }, { label: "female" }];

  useEffect(() => {
    id && setOpenModal(true);
  }, [id]);

  return (
    <>
      <Header />

      <Container sx={{ margim: "0 auto" }}>
        <s.BoxText>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
            quas natus! Eum ex non esse itaque ut magnam deserunt placeat,
            quidem temporibus fuga soluta hic eveniet dolore, dolorum impedit
            sapiente. Voluptas saepe a cupiditate exercitationem veritatis
            ipsam.
          </h3>
        </s.BoxText>

        <s.BoxSearch>
          <SearchBar
            search={search}
            label="Search patient by name"
            change={CHANGE_SEARCH_PATIENTS}
          />
          <SelectBar
            value={country}
            label="Select Country"
            change={CHANGE_SEARCH_COUNTRY}
            options={countries}
          />
          <SelectBar
            value={gender}
            label="Select Gender"
            change={CHANGE_GENDER}
            options={genderOptions}
          />
        </s.BoxSearch>

        <PatientsTable
          patients={patients}
          loading={loading}
          page={page}
          search={search}
          country={country}
          gender={gender}
          error={error}
        />

        <ButtonLoaderMore setPage={setPage} page={page} lenght={listLength} />

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
    gender: state.FiltersReducers.gender,
    listLength: state.FiltersReducers.listLength,
    error: state.PatientsReducers.error,
  };
};

export default connect(mapStateToProps)(HomePage);
