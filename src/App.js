import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Student from "./Components/Students/Student";
import StudentDetails from "./Components/Students/StudentDetails";
import Teachers from "./Components/Teachers/Teacher";
import TeachersDetails from "./Components/Teachers/TeachersDetails";
import AddStudent from "./Components/Students/AddStudent";
import EditStudent from "./Components/Students/EditStudent";
import AddTeacher from "./Components/Teachers/AddTeacher";
import EditTeacher from "./Components/Teachers/EditTeacher";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/add/student" element={<AddStudent />} />
        <Route path="/add/teacher" element={<AddTeacher />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/teacher/:id" element={<TeachersDetails />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/edit/student/:id" element={<EditStudent />} />
        <Route path="/edit/teacher/:id" element={<EditTeacher />} />

        {/* <Route path="/add/student" element={<AddStudent />} /> */}
      </Routes>
    </div>
  );
}

export default App;
