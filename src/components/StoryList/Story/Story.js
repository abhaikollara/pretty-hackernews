import React, { Component } from "react";

class StoryInfo extends Component {
  render() {
    return (
      <div>
        <small>
          <span className="badge badge-primary">{this.props.story.score}</span>
          {" points "}
          <span className="badge badge-primary">
            {this.props.story.descendants}
          </span>{" "}
          <a
            href={"https://news.ycombinator.com/item?id=" + this.props.story.id}
            target="_blank"
          >
            {"comments"}
          </a>{" "}
          {this.props.story.url ? (
            <span className="badge badge-light">
              {this.props.story.url.split("//")[1].split("/")[0]}
            </span>
          ) : null}
        </small>
      </div>
    );
  }
}

class Story extends Component {
  state = {
    story: {
      id: 0,
      title: "",
      url: "",
      score: 0,
      descendants: 0
    },
    loaded: false
  };

  componentDidMount() {
    // console.log(this.props.itemID);
    fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        this.props.itemID +
        ".json"
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          story: json,
          loaded: true
        })
      );
  }
  render() {
    return (
      <a
        className="list-group-item list-group-item-action"
        href={this.state.story.url ? this.state.story.url : null}
      >
        <div>
          {this.props.index +
            this.props.page * this.props.storiesPerPage +
            1 +
            ". "}
          {this.state.story.title}
        </div>
        <StoryInfo story={this.state.story} />
      </a>
    );
  }
}

export default Story;
