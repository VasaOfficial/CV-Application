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
      <form className="generalInfo" onSubmit={this.handleSubmit}>
        <div className="basicInfo">
          <label>
            <input
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
              type="text"
              name="study"
              placeholder="Title of Study"
              value={this.state.study}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              type="date"
              name="date"
              placeholder="Date of Study"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          <br />
        </div>
        <div className="basicInfo">
          <p>School: {this.state.school}</p>
          <p>Title of Study: {this.state.study}</p>
          <p>Date of Study: {this.state.date}</p>
        </div>
      </form>
    );
  }
}

export default EducationalInfo;
