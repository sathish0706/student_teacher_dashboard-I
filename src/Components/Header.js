import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            <i class="fa-solid fa-house"></i>&nbsp;&nbsp; Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/student")}>
            <i class="fa-regular fa-graduation-cap"></i>&nbsp;&nbsp; Student
          </Button>
          <Button color="inherit" onClick={() => navigate("/teacher")}>
            <i class="fa-solid fa-person-chalkboard"></i>&nbsp;&nbsp; Teacher
          </Button>
          <Button color="inherit" onClick={() => navigate("/add/student")}>
            <i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp; Add Students
          </Button>
          <Button color="inherit" onClick={() => navigate("/add/teacher")}>
            <i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp; Add Teacher
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
