import React from 'react';

const RedditStockCard = (props) => {
    return (
        <tr>
            <th scope="row">Trend</th>
            <th>{props.index + 1}</th>
            <th>{props.stock.attributes.symbol}</th>
            <th>{props.stock.attributes.name}</th>
            <th>Sentiment</th>
        </tr>
    );
};

export default RedditStockCard;