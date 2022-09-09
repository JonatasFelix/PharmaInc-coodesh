import { useState, useEffect } from "react";
import * as s from "./styles";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from "@mui/material/Button";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Skeleton from '@mui/material/Skeleton'
import { useDispatch } from "react-redux";
import { setListLength } from "../../store/actions/Filter";
import Zoom from '@mui/material/Zoom';

const PatientsTable = ({patients, loading, page, search, gender, country}) => {

  const navigate = useNavigate();
  const loadingArray = Array(10).fill(0);

  const [orderItem, setOrderItem] = useState("name");
  const [order, setOrder] = useState("asc");
  const dispatch = useDispatch();

  const patientsFiltered = patients
  .filter((p) => !search || p.name.first.toLowerCase().includes(search.toLowerCase()) || p.name.last.toLowerCase().includes(search.toLowerCase()))
  .filter((p) => !country || p.location.country.toLowerCase().includes(country.toLowerCase()))
  .filter((p) => !gender || p.gender === gender)
  .sort((a, b) => orderItem !== "name" || order === "asc" ? a[orderItem].first> b[orderItem].first ? 1 : -1 : a[orderItem].first< b[orderItem].first ? 1 : -1)
  .sort((a, b) => orderItem !== "gender" || order === "asc" ? a[orderItem] > b[orderItem] ? 1 : -1 : a[orderItem] < b[orderItem] ? 1 : -1)
  .sort((a, b) => orderItem !== "dob" || order === "asc" ? a[orderItem].age > b[orderItem].age ? 1 : -1 : a[orderItem].age < b[orderItem].age ? 1 : -1)


  useEffect(() => {
    dispatch(setListLength(patientsFiltered.length));
  }, [patientsFiltered]);

  const handleOrder = (item) => {
    setOrderItem(item);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const TabelaLoading = () => {
    return loadingArray.map((_, index) => {
      return (
        <s.TableBody key={index}>
          <td><Skeleton animation="wave" sx={{width: "70%"}} /></td>
          <td><Skeleton animation="wave" sx={{width: "70%"}} /></td>
          <td><Skeleton animation="wave" sx={{width: "70%"}}/></td>
          <s.TableDataActions>
          <Skeleton animation="wave" sx={{width: "50%"}}/>
          </s.TableDataActions>
        </s.TableBody>
      );
    });
  };

  const Tabela = () => {
    return patientsFiltered
    .slice(0, page).map((patient) => {
      return (
        <s.TableBody key={patient.login.uuid}>
          <td>{patient.name.first} {patient.name.last}</td>
          <td>{patient.gender}</td>
          <td className="BirthMobile">{moment(patient.dob.date).format("DD/MM/YYYY")}</td>

          <s.TableDataActions>
            <Button
            onClick={() => navigate(`/?id=${patient.login.uuid}`)}
            variant="contained" 
            startIcon={<VisibilityIcon className="icon"/>}
            size="small"
            >
              View
            </Button>

          </s.TableDataActions>
        </s.TableBody>
      );
    })
  };

  return (
    <>
    <Zoom in={true} style={{ transitionDelay: '500ms' }}>
      <s.Table sx={{ marginBottom: "25px" }}>
        <tbody>
          <s.TableHeader>
            <s.TableTitle onClick={() => handleOrder("name")}order={order}>Name {orderItem === "name" &&  <s.OrderIcon order={order}><ArrowUpwardIcon fontSize="small"/></s.OrderIcon>}</s.TableTitle>
            <s.TableTitle  onClick={() => handleOrder("gender")} order={order}>Gender {orderItem === "gender" &&  <s.OrderIcon order={order}><ArrowUpwardIcon fontSize="small"/></s.OrderIcon>}</s.TableTitle>
            <s.TableTitle className="BirthMobile" onClick={() => handleOrder("dob")} order={order}>Birth {orderItem === "dob" &&  <s.OrderIcon order={order}><ArrowUpwardIcon fontSize="small"/></s.OrderIcon>}</s.TableTitle>
            <s.TableTitleActions>Actions</s.TableTitleActions>
          </s.TableHeader>
          {loading ? (<TabelaLoading />) : (<Tabela />)}
        </tbody>
        {patientsFiltered.length === 0 && !loading && (<s.NotFoundMessage>No patients found</s.NotFoundMessage>)}
      </s.Table>
      </Zoom>
    </>
  );
};

export default PatientsTable;
