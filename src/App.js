import React from "react";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ContactInfo />
        <Education />
        <WorkExperience />
      </div>
    );
  }
}

export default App;
