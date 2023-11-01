import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { navData } from "./navData";

export const Nav = () => {
  return (
    <Grid container spacing={2}>
      {navData.map((item) => (
        <Grid item xs={item.xs}>
          <Link to={item.path}>
            <Button variant="contained" color="error" fullWidth>
              {item.title}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
