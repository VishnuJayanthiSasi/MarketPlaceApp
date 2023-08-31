import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Header() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  const handleUserProfile = () => {
    navigate("/userprofile");
  };

  const handlerToHome = () => {
    navigate("/home");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={handlerToHome}>
              <HomeIcon fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              ExpressMart
            </Typography>
            <IconButton onClick={handleCart}>
              <Icon>
                <ShoppingCartIcon fontSize="medium" />
              </Icon>
            </IconButton>

            <br></br>

            <IconButton onClick={handleUserProfile}>
              <AccountBoxRoundedIcon fontSize="large" />
            </IconButton>

            <IconButton onClick={handleLogOut}>
              <ExitToAppIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
