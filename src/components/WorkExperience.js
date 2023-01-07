import React from "react";
import "../styles/WorkExperience.css";

class ExpirienceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      tasks: "",
      formSubmitted: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ formSubmitted: true });
  };

  render() {
    if (this.state.formSubmitted) {
      return (
        <>
          <h2>Work Experience</h2>
          <p>
            Company: {this.state.company}
            <br />
            Position: {this.state.position}
            <br />
            Tasks: {this.state.tasks}
          </p>
        </>
      );
    } else {
      return (
        <form className="generalInfo" onSubmit={this.handleSubmit}>
          <div className="basicInfo">
            <h2>Work Experience</h2>
            <label>
              <input
                className="common-input"
                placeholder="Company"
                type="text"
                name="company"
                value={this.state.company}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              <input
                className="common-input"
                placeholder="Position"
                type="text"
                name="position"
                value={this.state.position}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              <input
                className="common-input"
                type="text"
                placeholder="Tasks"
                name="tasks"
                value={this.state.tasks}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <button className="submitBtn" type="submit">
              Submit
            </button>
            <br />
          </div>
        </form>
      );
    }
  }
}

export default ExpirienceInfo;
