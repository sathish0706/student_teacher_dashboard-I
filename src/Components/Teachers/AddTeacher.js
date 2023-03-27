import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const navigate = useNavigate();

  const [addTeacher, setAddTeacher] = useState({
    name: "",
    age: "",
    email: "",
    department: "",
  });

  console.log(addTeacher);
  const handleChange = (value) => {
    return setAddTeacher((newData) => {
      return { ...newData, ...value };
    });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    await axios.post(
      "https://63dfe208a76cfd41058aaca3.mockapi.io/teachers",
      addTeacher
    );
    // console.log(addData);
    console.log("addData");
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="add-container">
      <b>Add Teacher Details</b>
      <Box component="form" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          name="name"
          label="Name"
          variant="filled"
          type="text"
          className="text-field"
          onChange={(e) => handleChange({ name: e.target.value })}
        />
        <br />
        <TextField
          name="age"
          label="Age"
          variant="filled"
          type="number"
          className="text-field"
          onChange={(e) => handleChange({ age: e.target.value })}
        />
        <br />
        <TextField
          name="email"
          label="Email"
          variant="filled"
          type="email"
          className="text-field"
          onChange={(e) => handleChange({ email: e.target.value })}
        />
        <br />
        <TextField
          name="department"
          label="Department"
          variant="filled"
          type="text"
          className="text-field"
          onChange={(e) => handleChange({ department: e.target.value })}
        />
        <br />
        <Button
          variant="outlined"
          type="submit"
          color="secondary"
          onClick={() => navigate("/teacher")}
        >
          Add Details
        </Button>
      </Box>
    </div>
  );
};

export default AddTeacher;
