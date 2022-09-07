import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import ResponsiveAppBar from "../../components/Header/Header";
import PatientsTable from "../../components/PatientsTable/PatientsTable";
import { Container } from "@mui/material";
import ButtonLoaderMore from "../../components/ButtonLoaderMore/ButtonLoaderMore";
import ModalProfile from "../../components/ModalProfile/ModalProfile";

const HomePage = (props) => {
  const { patients, loading } = props;
  const location = useLocation();
  const parsed = qs.parse(location.search);
  const { id } = parsed;

  const [page, setPage] = useState(10);
  const [openModal, setOpenModal] = useState(id ? true : false);

  useEffect(() => {
    id && setOpenModal(true);
  }, [id]);

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ margim: "0 auto" }}>
        <PatientsTable patients={patients} loading={loading} page={page} />
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
  };
};

export default connect(mapStateToProps)(HomePage);