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

  // updating stored value
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //  prevents defoult action
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          School:
          <input
            type="text"
            name="school"
            value={this.state.school}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Title of Study:
          <input
            type="text"
            name="study"
            value={this.state.study}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Date of Study:
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <br />
        <p>School: {this.state.school}</p>
        <p>Title of Study: {this.state.study}</p>
        <p>Date of Study: {this.state.date}</p>
      </form>
    );
  }
}

export default EducationalInfo;
