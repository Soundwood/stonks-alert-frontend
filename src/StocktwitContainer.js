import React, { Component } from 'react'
import StocktwitStockCard from './StocktwitStockCard'
import * as Constants from './Constants'

export default class StocktwitContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stocktwits_data: [],
        }
    }
    componentDidMount() {
        // this.getStocktwitsData()
    }
    getStocktwitsData = () => {
        fetch(Constants.STOCKTWITS_DATA_URL)
        .then(res => res.json())
        .then(json => {
            this.setState({stocktwits_data: json.map(stocktwits_data_point => stocktwits_data_point)})
        })
    }
    render() {
        const StocktwitRows = (this.props.stocktwit_data) ? this.props.stocktwit_data.map(stock => <StocktwitStockCard stock={stock}/>) : 
        <tr><th>No Stocktwit Data</th></tr>
        return (
            <div className="row">
                <canvas className="my-4 chartjs-render-monitor" id="myChart" width="1972" height="832" style={{display: "block", height: "416px", width: "986px"}}></canvas>
                <h2>Stocktwit Trends</h2>
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
                        {StocktwitRows}
                    </tbody>
                </table>
            </div>
        )
    }
}