import React, { Component } from 'react'
import RedditStockCard from './RedditStockCard'

export default class RedditContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const RedditRows = (this.props.reddit_data) ? this.props.reddit_data.map(stock => <RedditStockCard stock={stock}/>) : "No Reddit Data"
        return (
            <>
            <canvas className="my-4 chartjs-render-monitor" id="myChart" width="1972" height="832" style={{display: "block", height: "416px", width: "986px"}}></canvas>
            <h2>Reddit Trends</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Ticker</th>
                        <th scope="col">Listing Name</th>
                        <th scope="col">skjdhgkkgldk</th>
                    </tr>
                </thead>
                <tbody>
                    {RedditRows}
                </tbody>
            </table>
            </>
        )
    }
}