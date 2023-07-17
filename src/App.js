import "./App.css";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Sdashboard from "./components/Sdashboard";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Tdashboard from "./components/Tdashboard";
import Adashboard from "./components/Adashboard";

export const store = createContext();

function App() {
  const [students, setStudents] = useState([
    { name: "Vini", rollno: "S01", studyclass: "8th", password: "S123#" },
    { name: "Vandu", rollno: "S02", studyclass: "6th", password: "V123#" },
    { name: "Ramya", rollno: "S03", studyclass: "9th", password: "R123#" },
    { name: "Sony", rollno: "S04", studyclass: "7th", password: "O123#" },
    { name: "pooja", rollno: "S05", studyclass: "8th", password: "P123#" },
    { name: "Ravi", rollno: "S06", studyclass: "7th", password: "I123#" },
    { name: "Sonal", rollno: "S07", studyclass: "9th", password: "L123#" },
  ]);
  const [teachers, setTeachers] = useState([
    {
      name: "TeacherV",
      teachID: "T01",
      teachSubj: "English",
      password: "V123#",
    },
    {
      name: "TeacherM",
      teachID: "T02",
      teachSubj: "Mathematics",
      password: "M123#",
    },
    {
      name: "TeacherR",
      teachID: "T03",
      teachSubj: "Economics",
      password: "R123#",
    },
    {
      name: "TeacherK",
      teachID: "T04",
      teachSubj: "Biology",
      password: "K123#",
    },
    {
      name: "TeacherC",
      teachID: "T05",
      teachSubj: "Physical Science",
      password: "C123#",
    },
    {
      name: "TeacherB",
      teachID: "T06",
      teachSubj: "Programming",
      password: "B123#",
    },
    {
      name: "TeacherA",
      teachID: "T07",
      teachSubj: "Social Studies",
      password: "A123#",
    },
  ]);
  return (
    <div>
      <Router>
        <store.Provider
          value={{ students, setStudents, teachers, setTeachers }}
        >
          {/* <Login /> */}

          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route
              path="/studentdashboard/:stuid"
              element={<Sdashboard />}
            ></Route>
            <Route
              path="/teacherdashboard/:teachid"
              element={<Tdashboard />}
            ></Route>
            <Route
              path="/admindashboard/"
              element={<Adashboard />}
            ></Route>
          </Routes>
        </store.Provider>
      </Router>
    </div>
  );
}

export default App;
