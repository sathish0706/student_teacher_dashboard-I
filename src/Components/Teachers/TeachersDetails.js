import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

const TeachersDetails = () => {
  const [teacherdetail, setTeacherDetail] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id);

  const getDetail = async () => {
    const res = await axios.get(
      `https://63dfe208a76cfd41058aaca3.mockapi.io/teachers/${id}`
    );

    console.log(res.data);

    setTeacherDetail(res.data);
  };
  useEffect(() => {
    getDetail();
  }, []);

  const handleDelete = async () => {
    console.log(id);
    const deleteData = await axios.delete(
      `https://63dfe208a76cfd41058aaca3.mockapi.io/teachers/${id}`
    );

    if (deleteData.data) {
      setTeacherDetail(deleteData.data);
      getDetail();
      navigate("/teacher");
      console.log(deleteData);
    }
  };

  return (
    <>
      <h1 id="headline">Teachers Details</h1>
      <div className="student-detail-container">
        <h1>Name: {teacherdetail.name}</h1>
        <h1>Age: {teacherdetail.age}</h1>
        <h1>Email: {teacherdetail.email}</h1>
        <h1>Department: {teacherdetail.department}</h1>
        <div id="action">
          <Button
            variant="contained"
            onClick={() => navigate(`/edit/teacher/${teacherdetail.id}`)}
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

export default TeachersDetails;
