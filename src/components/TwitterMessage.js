import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.textLength = 280;
  }

  countChars = (event) => {
    let charRemaining = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      textLength: charRemaining
    }, ()=> console.log(this.state))
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        onChange={event => this.countChars(event)}
        value={this.state.message}
        name="message" id="message" />
        {this.state.textLength}
      </div>
    );
  }
}

export default TwitterMessage;
