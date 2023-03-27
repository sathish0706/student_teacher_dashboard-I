import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./students.css";
import Button from "@mui/material/Button";

const StudentDetails = () => {
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getDetail = async () => {
    const res = await axios.get(
      `https://63dfe208a76cfd41058aaca3.mockapi.io/students/${id}`
    );

    setDetail(res.data);
  };
  useEffect(() => {
    getDetail();
  }, []);
  // console.log(id);

  const handleDelete = async () => {
    console.log(id);
    const deleteData = await axios.delete(
      `https://63dfe208a76cfd41058aaca3.mockapi.io/students/${id}`
    );

    if (deleteData.data) {
      setDetail(deleteData.data);
      getDetail();
      navigate("/student");
      console.log(deleteData);
    }
  };

  return (
    <>
      <h1 id="headline">Students Details</h1>
      <div className="student-detail-container">
        <h1>Name: {detail.name}</h1>
        <h1>Age: {detail.age}</h1>
        <h1>Email: {detail.email}</h1>
        <h1>Department: {detail.department}</h1>
        <div id="action">
          <Button
            variant="contained"
            onClick={() => navigate(`/edit/student/${detail.id}`)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
