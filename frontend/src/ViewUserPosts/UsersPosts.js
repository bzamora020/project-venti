import React from "react";
import UserPost from "./UserPost";

class UserPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeData: null
    };
  }
  componentDidMount() {
    fetch("/api/user/getHome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          homeData: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <section>
        {
          this.state.homeData.posts &&
          this.state.homeData.posts.map((data) => (
            <UserPost title={data.title} content={data.content} />
          ))}
      </section>
    );
  }
}

export default UserPosts;
