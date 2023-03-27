import React, { useEffect, useState } from "react";
import axios from "axios";
// import Button from "@mui/material/Button";
// import "./students.css";
// import { textAlign } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const navigate = useNavigate();

  const [teachersData, setTeachersData] = useState("");
  const [Loading, setLoading] = useState(false);
  console.log("data:", teachersData);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://63dfe208a76cfd41058aaca3.mockapi.io/teachers"
      );
      console.log("rrr:", res.data);
      setTeachersData(res.data);
      setLoading(false);
    } catch (err) {
      console.log("err:", err);
    }
  };

  console.log(teachersData);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Teachers Name</h1>
      <h3 id="h3">Click the button and see Teachers details</h3>
      {teachersData
        ? teachersData.map((teacher, i) => (
            <button
              key={i}
              className="button"
              onClick={() => navigate(`/teacher/${teacher.id}`)}
            >
              {teacher.name}
            </button>
          ))
        : ""}
    </div>
  );
}

export default Teachers;
