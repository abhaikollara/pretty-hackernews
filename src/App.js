import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import StoryList from "./components/StoryList/StoryList";
import "./App.css";
import Paginator from "./components/Pagination/Pagination";

class App extends Component {
  state = {
    itemsPerPage: 10,
    currentPage: 0,
    storyType: "top"
  };

  storyTypeHandler = e => {
    console.log(e.target["id"]);
    this.setState({
      currentPage: 0,
      storyType: e.target["id"]
    });
  };

  pageChangeHandler = e => {
    console.log(e.target["id"]);
    if (e.target["id"] == "next" && this.state.currentPage < 10) {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    } else if (e.target["id"] == "prev" && this.state.currentPage > 0) {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  };

  render() {
    return (
      <div className="container" style={{ width: "50rem" }}>
        <Navbar clickHandler={this.storyTypeHandler} />
        <StoryList
          page={this.state.currentPage}
          storiesPerPage={this.state.itemsPerPage}
          type={this.state.storyType}
        />
        <Paginator
          page={this.state.currentPage}
          clickHandler={this.pageChangeHandler}
        />
      </div>
    );
  }
}

export default App;
