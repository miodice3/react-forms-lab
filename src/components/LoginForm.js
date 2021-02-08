import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  username = (event) => {
    this.setState({
      username: event.target.value
    }, ()=> console.log(this.state))
  }

  password = (event) => {
    this.setState({
      password: event.target.value
    }, ()=> console.log(this.state))
  }

  respondSubmit = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    } 
  }


  render() {
    return (
      <form onSubmit={event => this.respondSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" type="text" 
            onChange={this.username}
            value={this.state.username}
            />
            
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" type="password" 
            onChange={this.password}
            value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
