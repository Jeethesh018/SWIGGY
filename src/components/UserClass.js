import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      name: "girish",
    };
  }

  componentDidMount() {
    console.log("hello");
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name : {this.state.name}</h2>
        <h3>Location : {this.props.location}</h3>
        <h3>count : {this.state.count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              name: "jeethesh",
            })
          }
        >
          Counter
        </button>
      </div>
    );
  }
}

export default UserClass;
