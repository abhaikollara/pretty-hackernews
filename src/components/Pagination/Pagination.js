import React, { Component } from "react";

class Paginator extends Component {
  state = {};
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item" onClick={this.props.clickHandler}>
            <a className="page-link" href="#" id="prev">
              Previous
            </a>
          </li>
          <li className="page-item-disabled" onClick={this.props.clickHandler}>
            <div className="page-link">{this.props.page + 1}</div>
          </li>
          <li className="page-item" onClick={this.props.clickHandler}>
            <a className="page-link" href="#" id="next">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Paginator;
