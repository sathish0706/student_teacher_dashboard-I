import React, { useEffect, useState } from "react";
import axios from "axios";
// import Button from "@mui/material/Button";
import "./students.css";
// import { textAlign } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Student() {
  const navigate = useNavigate();

  const [studentsData, setStudentsData] = useState("");
  const [Loading, setLoading] = useState(false);
  console.log("data:", studentsData);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://63dfe208a76cfd41058aaca3.mockapi.io/students"
      );
      console.log("rrr:", res.data);
      setStudentsData(res.data);
      setLoading(false);
    } catch (err) {
      console.log("err:", err);
    }
  };

  console.log(studentsData);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Students Name</h1>
      <h3 id="h3">Click the button and see student details</h3>
      {studentsData
        ? studentsData.map((student, i) => (
            <button
              key={i}
              className="button"
              onClick={() => navigate(`/student/${student.id}`)}
            >
              {student.name}
            </button>
          ))
        : "Loading"}
    </div>
  );
}

export default Student;
