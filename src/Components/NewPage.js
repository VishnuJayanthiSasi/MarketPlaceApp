import { Grid, Paper } from "@mui/material";
import React from "react";

function NewPage() {
  return (
    <div>
      <Grid container>
        <Grid item md={2}>
          <Paper>One</Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>One</Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>One</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewPage;
