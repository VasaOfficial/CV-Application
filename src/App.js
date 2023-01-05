import React from "react";
import ContactInfo from "./components/ContactInfo";
import EducationalInfo from "./components/Education";
import ExpirienceInfo from "./components/WorkExperience";

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactInfo />
        <EducationalInfo />
        <ExpirienceInfo />
      </div>
    );
  }
}

export default App;
