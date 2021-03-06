import React, { Component } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

// console.log(sortByOptions);
export default class SearchBar extends Component {
    
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}> {sortByOption} </li>;
    });

    
  }

  render() {
      return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
          {/* <li>Vlad</li> */}
          {this.renderSortByOptions()}
            {/* <!-- Use .renderSortByOptions() to sort the businesses by their options --> */}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
      )
  }
}
