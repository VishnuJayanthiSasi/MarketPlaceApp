import {
  Avatar,
  Grid,
  Typography,
  Paper,
  Toolbar,
  Button,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import { Box } from "@mui/system";

import { useNavigate } from "react-router";
import { userContext } from "../App";

function UserProfile() {
  const { currentUser } = React.useContext(userContext);

  const navigate = useNavigate();
  const handlePurchaseHistoryButton = () => {
    navigate("/history");
  };

  return (
    <div>
      <Header />

      <Box textAlign="center">
        <Grid
          container
          sx={{ mt: 1, display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            component={Paper}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              m: 1,
              p: 1,
              borderRadius: "10px",
            }}
            xs={8}
          >
            <Avatar />
            <Grid sx={{ p: 1 }}>
              <Typography>{currentUser.firstname}</Typography>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ mt: 1, display: "flex", justifyContent: "center" }}
          >
            <Grid
              component={Paper}
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                m: 1,
                p: 1,
                borderRadius: "10px",
              }}
            >
              <Grid item sx={{ borderBottom: "1px solid #999" }}>
                <Toolbar>
                  <Typography sx={{ ml: 1 }}> DETAILS</Typography>
                </Toolbar>
              </Grid>
              <br></br>

              <Grid item>
                <Grid container flexDirection="center" ml={8}>
                  <Typography>Email:{currentUser.email}</Typography>
                </Grid>
                <br></br>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handlePurchaseHistoryButton}
                  >
                    PURCHASE HISTORY
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default UserProfile;
