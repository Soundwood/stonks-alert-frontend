import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Inquire from './Inquire'
import * as Constants from './Constants'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            reddit_data: [],
            stocktwits_data: []
        }
    }
    componentDidMount() {
        this.getRedditData()
        // this.getStocktwitsData()
    }
    getRedditData = () => {
        fetch(Constants.REDDIT_DATA_URL)
        .then(res => res.json())
        .then(json => {
            this.setState({reddit_data: json})
        })
    }
    getStocktwitsData = () => {
        fetch(Constants.STOCKTWITS_DATA_URL)
        .then(res => res.json())
        .then(json => {
            this.setState({stocktwits_data: json.map(stocktwits_data_point => stocktwits_data_point)})
        })
    }
    render() {
        return (
            <>
                <Header />
                    <Switch>
                        <Route exact path='/' render={ () => <Home reddit_data={this.reddit_data} stocktwit_data={this.reddit_data}/>} />
                        <Route exact path='about' component={About} />
                        <Route exact path='inquire' component={Inquire} />
                    </Switch>
                <Footer />
            </>
        )
    }
}
