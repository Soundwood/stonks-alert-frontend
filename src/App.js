import React, { Component } from 'react'
import RedditContainer from './RedditContainer'
import Header from './Header'
import Footer from './Footer'
import StocktwitContainer from './StocktwitContainer'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            reddit_data: [],
            stocktwits_data: []
        }
    }
    render() {
        return (
            <>
                <Header />
                <main role="main" className="container">
                    <RedditContainer reddit_data={this.reddit_data}/>
                    <StocktwitContainer stocktwit_data={this.reddit_data}/>
                </main>
                <Footer />
            </>
        )
    }
}
