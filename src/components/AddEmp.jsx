import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import { ShowEmp } from "./ShowEmp";
const AddEmp = () => {
  const [emp, setEmp] = useState([]);
  //   console.log("emp========", emp);
  const [empname, setEmpname] = useState("");
  const [dept, setDept] = useState("");
  const [empid, setEmpid] = useState(0);
  const [city, setCity] = useState("");
  const [pin, setPin] = useState(0);
  const [phone, setPhone] = useState(0);

  const getEmp = async () => {
    const result = await axios.get("http://localhost:1021/");
    setEmp(result.data);
  };

  const handleAddEmp = async () => {
    const payload = { empname, dept, empid, empid, city, pin, phone };
    await axios.post("http://localhost:1021/addemp", payload);
    getEmp();
  };
  const handleDelete = async (_id) => {
    const payload = { _id };
    await axios.post("http://localhost:1021/delete", payload);
    getEmp();
  };

  useEffect(() => {
    getEmp();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmpname(e.target.value)}
          variant="outlined"
          label="Enter Name"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setDept(e.target.value)}
          variant="outlined"
          label="Enter Dept"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmpid(e.target.value)}
          variant="outlined"
          label="Enter Emp ID"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          label="Enter City"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setPin(e.target.value)}
          variant="outlined"
          label="Enter Pin"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          variant="outlined"
          label="Enter Phone"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleAddEmp} variant="contained" fullWidth>
          add emp
        </Button>
      </Grid>
      {emp.map((item) => (
        <Grid item xs={3}>
          <ShowEmp item={item} handleDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AddEmp;
