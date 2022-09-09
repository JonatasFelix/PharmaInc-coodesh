import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinates";
import MedicationIcon from "@mui/icons-material/Medication";

const Header = () => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    goToHome(navigate);
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <MedicationIcon onClick={handleHomeClick} sx={{ flexGrow: 0, display: "flex", mr: 1, cursor: "pointer" }}/>

          <Typography
            onClick={handleHomeClick}
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Pharma Inc
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
