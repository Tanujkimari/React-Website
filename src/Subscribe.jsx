import React from "react";

class Subscribe extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Click here to subscribe",
    };
  }
  subscribe() {
    this.setState({
      msg: "Thanks for subscribing",
    });
  }

  render() {
    return (
      <>
        <h1 className="Funk">{this.state.msg}</h1>
        <button className="Funkbg"
          onClick={() => {
            this.subscribe();
          }}
        >
          Subscribe
        </button>
      </>
    );
  }
}
export default Subscribe;
