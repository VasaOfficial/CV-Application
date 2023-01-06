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
          </div>
        </form>
      </>
    );
  }
}

export default ContactInfo;
