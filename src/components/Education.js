import React from "react";
import "../styles/Education.css";

class EducationalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      study: "",
      date: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="generalInfo" onSubmit={this.handleSubmit}>
        <div className="basicInfo">
          <h2>Education Info</h2>
          <label>
            <input
              className="common-input"
              type="text"
              name="school"
              placeholder="School"
              value={this.state.school}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              className="common-input"
              type="text"
              name="study"
              placeholder="Title of Study"
              value={this.state.study}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
        </div>
      </form>
    );
  }
}

export default EducationalInfo;
