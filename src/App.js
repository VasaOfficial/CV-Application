import React from "react";
import ContactInfo from "./components/ContactInfo";
import EducationalInfo from "./components/Education";

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactInfo />
        <EducationalInfo />
      </div>
    );
  }
}

export default App;
