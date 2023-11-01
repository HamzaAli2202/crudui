import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";
import React from "react";

export const ShowEmp = ({ item, handleDelete }) => {
  return (
    <Card sx={{ bgcolor: "khaki" }}>
      <CardContent>
        <img src="" alt="" />
        <h3>EmpName : {item.empname}</h3>
        <h6>EmpID : {item.empid}</h6>
        <h6>Department : {item.dept}</h6>
        <h6>City : {item.city}</h6>
        <h6>Mobile : {item.phone}</h6>
        <Button
          onClick={() => handleDelete(item._id)}
          variant="contained"
          color="error"
        >
          delete
        </Button>
      </CardContent>
    </Card>
  );
};
