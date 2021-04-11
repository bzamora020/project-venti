import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();


    console.log(this.props);
    fetch('/api/auth/register', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    })
    .then((resp)=>{
      return resp.json();
    })
    .then((data)=>{
      console.log(data);
      this.props.history.push('/home');
    })
    .catch((error)=>{
      console.error(error);
    })
      
  }

  render() {
    return (
      <div className="container">
        <form className="inputForm" onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Register;
