import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "jeethesh018  ",
      apidata: {
        login: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      `https://api.github.com/users/${this.state.username}`
    );
    const res = await data.json();
    console.log(res);

    this.setState({ apidata: res });
  }

  render() {
    return (
      <div className="user-card">
        <input
          type="text"
          placeholder="search username"
          value={this.state.username}
          onChange={(e) =>
            this.setState({
              username: e.target.value,
            })
          }
        />
        <h2>Name : {this.state.apidata.login}</h2>
        <h3>created_at : {this.state.apidata.created_at}</h3>
        <img src={this.state.apidata.avatar_url} />
      </div>
    );
  }
}

export default UserClass;
