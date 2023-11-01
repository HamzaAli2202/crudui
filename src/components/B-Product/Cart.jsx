import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useSelector } from "react-redux";

export const Cart = () => {
  const selectdata = useSelector((state) => state.cartReducer.cart);
  //   console.log("selectdata=========", selectdata);
  return (
    <Grid sx={{ marginTop: 2 }} container spacing={2}>
      {selectdata.map((item) => (
        <Grid align="center" item xs={6}>
          <Card>
            <CardContent>
              <img
                style={{ height: 200, width: 200 }}
                src={item.image}
                alt=""
              />
              <h4>{item.category}</h4>
              <h5>{item.title.substr(0, 20)}</h5>
              <p>{item.description.substr(0, 50)}</p>
              <h4>{item.price}</h4>
              <Button variant="contained" color="warning">
                buy
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
