import React from "react";

class ExpirienceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      tasks: '',
      dateForm: '',
      dateUntil: ''
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={this.state.position}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Tasks:
          <input
            type="text"
            name="tasks"
            value={this.state.tasks}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Date From:
          <input
            type="date"
            name="dateFrom"
            value={this.state.dateFrom}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Date Until:
          <input
            type="date"
            name="dateUntil"
            value={this.state.dateUntil}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <br />
        <p>Company: {this.state.company}</p>
        <p>Position: {this.state.position}</p>
        <p>Tasks: {this.state.tasks}</p>
        <p>Date From: {this.state.dateFrom}</p>
        <p>Date Until: {this.state.dateUntil}</p>
      </form>
    );
  }
}

export default ExpirienceInfo;
