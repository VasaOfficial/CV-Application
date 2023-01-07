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
          <h2>General Info</h2>
          <p>
            Full Name: {this.state.name}
            <br />
            Email: {this.state.email}
            <br />
            Phone: {this.state.phone}
          </p>
        </>
      );
    } else {
      return (
        <>
          <form className="generalInfo" onSubmit={this.handleSubmit}>
            <div className="basicInput">
              <h2>Genaral Info</h2>
              <label>
                <input
                  class="common-input"
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
                  class="common-input"
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
                  class="common-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={this.state.phone}
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
        </>
      );
    }
  }
}

export default ContactInfo;
