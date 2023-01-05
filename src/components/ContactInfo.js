import React from "react";
import "../styles/ContactInfo.css";

// form and form input storage
class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
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
      <>
        <h1 className="header">CV Generator</h1>
        <form className="generalInfo" onSubmit={this.handleSubmit}>
          <div className="basicInput">
            <label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
            <br />
          </div>
          <div className="basicInfo">
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Phone: {this.state.phone}</p>
          </div>
        </form>
      </>
    );
  }
}

export default ContactInfo;
