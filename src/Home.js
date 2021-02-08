import React from 'react';
import RedditContainer from './RedditContainer'
import StocktwitContainer from './StocktwitContainer'

const Home = (props) => {
    return (
        <main role="main" className="container">
            <RedditContainer reddit_data={props.reddit_data}/>
            <StocktwitContainer stocktwit_data={props.reddit_data}/>
        </main>
    );
};

export default Home;