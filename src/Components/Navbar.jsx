import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "orange" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              letterSpacing: "0.05em",
              fontFamily: "Poppins",
              paddingRight: "2rem",
            }}
          >
            Movie Mania
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/home"
              >
                Home
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/favourites"
              >
                Favourites
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
