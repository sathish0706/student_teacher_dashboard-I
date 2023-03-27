import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();

  const [addStudent, setAddStudent] = useState({
    name: "",
    age: "",
    email: "",
    department: "",
  });

  console.log(addStudent);
  const handleChange = (value) => {
    // value.preventDefault();
    return setAddStudent((newData) => {
      return { ...newData, ...value };
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const addData = await axios.post(
      "https://63dfe208a76cfd41058aaca3.mockapi.io/students",
      addStudent
    );
    console.log(addData);
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="add-container">
      <b>Add Students Details</b>
      <Box component="form" onSubmit={handleSubmit}>
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
          onClick={() => navigate("/student")}
        >
          Add Details
        </Button>
      </Box>
    </div>
  );
};

export default AddStudent;
