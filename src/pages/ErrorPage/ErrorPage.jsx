import Header from "../../components/Header/Header";
import { Container } from "@mui/material";
import { goToHome } from "../../routes/Coordinates";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>Error 404</h1>
        <Button onClick={goToHome(navigate)} variant="contained" size="medium">
            Back to home page
        </Button>
      </Container>
    </>
  );
};

export default ErrorPage;
