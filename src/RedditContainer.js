import React, { Component } from 'react'
import RedditStockCard from './RedditStockCard'
import * as Constants from './Constants'
import { v4 as uuidv4 } from 'uuid'

export default class RedditContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reddit_data: [],
        }
    }
    componentDidMount() {
        this.getRedditData()
    }
    getRedditData = () => {
        fetch(Constants.REDDIT_DATA_URL)
        .then(res => res.json())
        .then(json => {
            this.setState({reddit_data: json})
        })
    }
    render() {
        const RedditRows = (this.state.reddit_data.data) ? this.state.reddit_data.data.map(stock => <RedditStockCard stock={stock} key={uuidv4()}/>) : 
            <tr><th>No Reddit Data</th></tr>
        return (
            <div className="row">
                <canvas className="my-4 chartjs-render-monitor" id="myChart" width="1972" height="832" style={{display: "block", height: "416px", width: "986px"}}></canvas>
                <h2>Reddit Trends</h2>
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
                    <tbody>
                        {RedditRows}
                    </tbody>
                </table>
            </div>

        )
    }
}