import React, { Component } from 'react'
import RedditContainer from './RedditContainer'
import Header from './Header'
import Footer from './Footer'
import LeftNav from './LeftNav'
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
            <div className="container">
                <Header />
                <main role="main" className="container-fluid">
                    <div className="row">
                        <LeftNav />
                        <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <RedditContainer reddit_data={this.reddit_data}/>
                            <StocktwitContainer stocktwit_data={this.reddit_data}/>
                        </main>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
