import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Inquire from './Inquire'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <>
                <Header />
                    <Switch>
                        <Route exact path='/' render={ () => <Home />} />
                        <Route exact path='about' component={About} />
                        <Route exact path='inquire' component={Inquire} />
                    </Switch>
                <Footer />
            </>
        )
    }
}
