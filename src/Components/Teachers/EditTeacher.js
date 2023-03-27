import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

const EditTeacher = () => {
  const { id } = useParams();

  const [editTeacherData, setEditTeacherData] = useState([]);

  console.log(editTeacherData);

  const getEditDAta = async () => {
    const response = await axios.get(
      `https://63dfe208a76cfd41058aaca3.mockapi.io/students/${id}`
    );

    console.log(response);
    if (response.data) {
      setEditTeacherData(response.data);
    }
  };

  useEffect(() => {
    getEditDAta();
  }, []);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: editTeacherData.age,
      age: editTeacherData.age,
      email: editTeacherData.email,
      department: editTeacherData.department,
    },
    onSubmit: async () => {
      const addData = await axios.post(
        "https://63dfe208a76cfd41058aaca3.mockapi.io/students",
        formik.values
      );
      console.log(addData);
      // console.log(editData);
    },
  });
  console.log(formik.values);

  return editTeacherData ? (
    <div className="add-container">
      <b>Add Teacher Details</b>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          name="name"
          label="Name"
          variant="filled"
          type="text"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={editTeacherData.name}
        />
        <br />
        <TextField
          name="age"
          label="Age"
          variant="filled"
          type="number"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={editTeacherData.age}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          type="email"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={editTeacherData.email}
        />
        <br />
        <TextField
          name="department"
          id="department"
          label="Department"
          variant="filled"
          type="text"
          className="text-field"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={editTeacherData.department}
        />
        <br />
        <Button
          variant="outlined"
          type="submit"
          color="success"
          onClick={() => navigate("/student")}
        >
          Edit Details
        </Button>
      </Box>
    </div>
  ) : (
    ""
  );
};

export default EditTeacher;
