import React, { Component } from "react";
import RedditStockCard from "./RedditStockCard";
import BarChart from "./BarChart";
import * as Constants from "./Constants";
import { v4 as uuidv4 } from "uuid";

export default class RedditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reddit_data: [],
    };
  }
  componentDidMount() {
    this.getRedditData();
  }
  getRedditData = () => {
    fetch(Constants.REDDIT_DATA_URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ reddit_data: json });
      });
  };
  render() {
    let RedditRows = (
      <tr>
        <th>No Reddit Data</th>
      </tr>
    );
    if (this.state.reddit_data.data) {
      RedditRows = this.state.reddit_data.data.map((stock, index) => (
        <RedditStockCard index={index} stock={stock} key={uuidv4()} />
      ));
    }
    return (
      <>
        <h2>Reddit Trends</h2>
        <BarChart stocks={this.state.reddit_data} />
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Trend</th>
                <th scope="col">Rank</th>
                <th scope="col">Ticker</th>
                <th scope="col">Listing Name</th>
                <th scope="col">Sentiment</th>
              </tr>
            </thead>
            <tbody>{RedditRows}</tbody>
          </table>
        </div>
      </>
    );
  }
}
