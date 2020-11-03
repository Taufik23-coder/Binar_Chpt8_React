import React from 'react';

import './HomeCard.css';

const Cards = (props) => {
    return (
        <div className="card card-default home-card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">{props.qty}</div>
        </div>
    )
}

export default Cards;