import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Product = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selectdata = useSelector((state) => state.produtReducer.prod);
  //   console.log("select", selectdata);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    const type = "ADD_PROD";
    const payload = result.data;
    const action = { type, payload };
    dispatch(action);
  };
  const handleAddCart = (item) => {
    const type = "ADD_TO_CART";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
    navigate("/cart");
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid sx={{ marginTop: 2 }} container spacing={2}>
      {data.map((item) => (
        <Grid align="center" item xs={3}>
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
              <Button
                onClick={() => handleAddCart(item)}
                variant="contained"
                color="warning"
              >
                add to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
