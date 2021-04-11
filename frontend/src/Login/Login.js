import React from "react";
import './Login.css'
class Login extends React.Component {
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
    alert('A name was submitted: ' + this.state.email + ' ' + this.state.password);
    event.preventDefault();
    fetch('/api/auth/login', {
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
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" className = "input" value={this.state.value} onChange={this.handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="text" className = "input" value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <input className = "button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
