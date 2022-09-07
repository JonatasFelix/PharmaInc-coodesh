import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import MedicationIcon from '@mui/icons-material/Medication';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <MedicationIcon sx={{ flexGrow: 0, display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 700,
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
export default ResponsiveAppBar;
