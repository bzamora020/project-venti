import React from "react";
import UserPost from "./UserPost";

class UserPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeData: {
        name: "0e7e8d",
        posts: [
          {
            id: 2,
            title: "This is a good post right",
            content: "Damn thats kinda messed up ngl",
            comments: [],
          },
          {
            id: 3,
            title: "TYO WHERt",
            content: "Okay it's not that bad man sheesh",
            comments: [],
          },
          {
            id: 4,
            title: ">:)",
            content: ":O",
            comments: [],
          },
          {
            id: 5,
            title: "duisfuidsaf",
            content: "sdafsdafsdfsfd",
            comments: [],
          },
          {
            id: 1,
            title: "Why I hate snails",
            content: "They are so slow man!",
            comments: [
              {
                id: 2,
                user_id: 12,
                content: "They are so slow man!",
                likes: 0,
                name: "0e7e8d",
              },
              {
                id: 3,
                user_id: 12,
                content: "Bruh ikirrrrr!!!",
                likes: 0,
                name: "0e7e8d",
              },
              {
                id: 4,
                user_id: 12,
                content: "skr skr skr skr",
                likes: 0,
                name: "0e7e8d",
              },
              {
                id: 5,
                user_id: 12,
                content: "SHOOOT",
                likes: 0,
                name: "0e7e8d",
              },
            ],
          },
        ],
      },
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
        {this.state.homeData &&
          this.state.homeData.posts.map((data) => (
            <UserPost title={data.title} content={data.content} />
          ))}
      </section>
    );
  }
}

export default UserPosts;
