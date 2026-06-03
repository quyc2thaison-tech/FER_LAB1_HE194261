import "./App.css";
import { Component } from "react";
import avatar from "./assets/471954194_1547032819292501_6390247624185970325_n.jpg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
      darkMode: false,
      likes: 0,
    };

    this.Student = {
      name: "Nguyen Van Quy",
      studentID: "HE194261",
      class: "SE2004",
      major: "Software Engineering - NodeJS",
      ListOfHobbies: ["Football", "Music", "Traveling"],
    };
  }

  componentDidMount() {
    document.body.classList.toggle("dark-mode", this.state.darkMode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.darkMode !== this.state.darkMode) {
      document.body.classList.toggle("dark-mode", this.state.darkMode);
    }
  }

  toggleOnlineStatus = () => {
    this.setState((state) => ({ isOnline: !state.isOnline }));
  };

  toggleDarkMode = () => {
    this.setState((state) => ({ darkMode: !state.darkMode }));
  };

  addLike = () => {
    this.setState((state) => ({ likes: state.likes + 1 }));
  };

  render() {
    const { isOnline, darkMode, likes } = this.state;
    const { Student } = this;

    return (
      <div className="App">
        <h1>
          <b>Student Profile</b>
        </h1>
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

        <button className="primary-button" onClick={this.toggleOnlineStatus}>
          {isOnline ? "Offline" : "Online"}
        </button>

        <button className="primary-button" onClick={this.toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <button className="primary-button" onClick={this.addLike}>
          Like ({likes})
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;

