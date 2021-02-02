import React, { Component } from 'react'
import StocktwitStockCard from './StocktwitStockCard'

export default class StocktwitContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const StocktwitRows = (this.props.stocktwit_data) ? this.props.stocktwit_data.map(stock => <StocktwitStockCard stock={stock}/>) : "No Stocktwit Data"
        return (
            <>
            <canvas className="my-4 chartjs-render-monitor" id="myChart" width="1972" height="832" style={{display: "block", height: "416px", width: "986px"}}></canvas>
            <h2>Stocktwit Trends</h2>
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
                    {StocktwitRows}
                </tbody>
            </table>
            </>
        )
    }
}