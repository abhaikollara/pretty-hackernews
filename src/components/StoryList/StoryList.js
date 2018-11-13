import React, { Component } from "react";
import Story from "./Story/Story";

class StoryList extends Component {
  state = {
    items: [],
    loaded: false
  };
  i = 0;
  loadStories() {
    fetch(
      "https://hacker-news.firebaseio.com/v0/" +
        this.props.type +
        "stories.json"
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          loaded: true,
          items: json.slice(
            this.props.page * this.props.storiesPerPage,
            (this.props.page + 1) * this.props.storiesPerPage
          )
        })
      );
  }

  componentDidMount = () => {
    this.loadStories();
  };

  componentDidUpdate = () => {
    this.loadStories();
  };
  render() {
    // console.log(this.state.items);
    // this.i += 1;
    // console.log(this.i);
    return (
      <div className="list-group">
        {this.state.items.map((item, index) => (
          <Story
            itemID={item}
            index={index}
            key={item}
            page={this.props.page}
            storiesPerPage={this.props.storiesPerPage}
          />
        ))}
        {/* {this.state.loaded
          ? this.state.items.map((item, index) => (
              <Story
                itemID={item}
                index={index}
                key={item}
                page={this.props.page}
                storiesPerPage={this.props.storiesPerPage}
              />
            ))
          : null} */}
      </div>
    );
  }
}

export default StoryList;
