import "./App.css";
import { useEffect, useState } from "react";
import avatar from "./assets/471954194_1547032819292501_6390247624185970325_n.jpg";


function Header() {
  const Student = {
    name: "Nguyen Van Quy",
    studentID: "HE194261",
    class: "SE2004",
    major: "Software Engineering - NodeJS",
    ListOfHobbies: ["Football", "Music", "Traveling"],
  };
  const [isOnline, setIsOnline] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleOnlineStatus = () => {
    setIsOnline((current) => !current);
  };

  const addLike = () => {
    setLikes((current) => current + 1);
  };

  return (
    <div className="App">
      <h1><b>Student Profile</b></h1>
      <img src={avatar} alt="Avatar" className="avatar" />
            <p>Full name: {Student.name}</p>
            <p>Student ID: {Student.studentID}</p>
            <p>Class name: {Student.class}</p>
            <p>Major: {Student.major}</p>
            <p>List of Hobbies:</p>
            <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}>
              {Student.ListOfHobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
            <p>Status: {isOnline ? "Online" : "Offline"}</p>
      

      <button className="primary-button" onClick={toggleOnlineStatus}>
        {isOnline ? "Offline" : "Online"}
      </button>
      
      <button className="primary-button" onClick={() => setDarkMode((current) => !current)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <button className="primary-button" onClick={addLike}>
        Like ({likes})
      </button>

    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}
export default App;